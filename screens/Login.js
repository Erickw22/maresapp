import { Pressable, StatusBar, Text, View, Image } from 'react-native'
import React from 'react'
import styles from '../src/styles'
import { TextInput } from 'react-native'
import { useState } from 'react'
import { auth } from '../src/firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login({navigation}) {

  const [userEmail, setUserEmail] = useState('');
  const [userSenha, setUserSenha] = useState('');

  function RedfSenha() {
    navigation.reset({
      index: 0,
      routes: [{name: "RedfSenha"}]
    })
  }

  function Cadastro(){
    navigation.reset({
      index: 0,
      routes: [{name: "Cadastro"}]
    })
  }

  function userLogin() {
    signInWithEmailAndPassword(auth, userEmail, userSenha)
    .then((userCredential)=>{
      const user = userCredential.user;
      navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
      })
    })
    .catch((error)=>{
      const erroCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.formTitle}
          source={require('../assets//logos/circle4.png')}/>
      <TextInput style={styles.formInput}
      placeholder='Digite seu E-mail'
      keyboardType='email-address'
      autoCapitalize='none'
      autoComplete='email'
      value={userEmail}
      onChangeText={setUserEmail}
      />
      <TextInput style={styles.formInput}
      placeholder='Digite sua senha'
      autoCapitalize='none'
      value={userSenha}
      onChangeText={setUserSenha}
      secureTextEntry
      
      />
      <Pressable style={styles.formButton}
      onPress={userLogin}
      >
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
        onPress={RedfSenha}
        >
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}
        onPress={Cadastro}
        >
          <Text style={styles.subTextButton}
          >
          Cadastrar
          </Text>
        </Pressable>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

