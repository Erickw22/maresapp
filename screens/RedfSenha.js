import {Pressable, Text, TextInput, View} from "react-native";
import React, { useState } from "react";
import styles from "../src/styles";
import Login from "./Login";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../src/firebase.config";

export default function RedfSenha({ navigation }) {

  const [email, setEmail] = useState('');

  function voltar(){
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
  }

  function RedfSenha(){
    if(email !=='') {
      sendPasswordResetEmail(auth, email)
      .then(()=> {
        alert("Foi enviado um linka para: "+ email + ". Verfique a sua caixa de email.");
        navigation.reset({
          index: 0,
          routes: [{name: "Login"}]
        })
      })
      .catch((error)=>{
        const errorMessage = error.message;
        alert("Algo deu errado! " + errorMessage + ". Tente novamente ou pressione voltar ");
        return;
      })
    } else{
      alert("É necessário informar um e-mail válido para efetuar a troca de senha.");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Redefinir Senha</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Digite seu E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />
      <Pressable style={styles.formButton}
      onPress={RedfSenha}
      >
        <Text style={styles.textButton}>Enviar</Text>
      </Pressable>
      <View style={styles.subContainer}>
          <Pressable onPress={voltar}>
              <Text>Voltar</Text>
          </Pressable>
      </View>
    </View>
  );
}
