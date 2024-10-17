import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements'
import styles from '../src/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/firebase.config';
import { doc } from 'firebase/firestore';

export default function Cadastro({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [Resenha, setResenha] = useState('');

    function Cadastro() {
     if(email ===''|| senha===''|| Resenha===''){
      alert("Todos os campos devem ser preenchidos!")
      return;
     }
     if(senha!==Resenha){
      alert("As senhas devem ser iguais!")
      return;
     }else{
      createUserWithEmailAndPassword(auth, email, senha)
      .then((UserCredential)=>{
        const user = UserCredential.user;
        alert("O usuario " + email + " foi criado com sucesso!")
        navigation.reset({
          index: 0,
          routes: [{name: "Login"}]
        })
      })
      .catch((error)=>{
        const errorMessage =error.message;
        alert(errorMessage);
        navigation.reset({
          index: 0,
          routes: [{name: "Login"}]
        })
      })
     }

    }
  return (
    <View style={styles.container}>
        <Image style={{ width: 150, height: 150, padding: 10 }}
          source={require('../assets//logos/circle4.png')}/>
        <TextInput 
        style={styles.formInput}
        placeholder='Digite seu E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        value={email}
        onChangeText={setEmail}
        />  
        <TextInput 
        style={styles.formInput}
        placeholder='Digite sua senha'
        autoCapitalize='none'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        />  
        <TextInput
        style={styles.formInput}
        placeholder='Repita sua senha'
        autoCapitalize='none'
        secureTextEntry
        value={Resenha}
        onChangeText={setResenha}
        />
        <Pressable
          style={styles.formButton}
          onPress={Cadastro}
        >
          <Text style={styles.textButton}>
            Cadastrar
          </Text>
        </Pressable>  
    </View>
  )
}

