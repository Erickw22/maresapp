import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "../src/styles";
import { auth } from "../src/firebase.config";
import { signOut } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Perfil({ navigation }) {
  const currentUser = auth.currentUser;

  if (currentUser !== null) {
    //alert("Logado!");
  } else {
    alert("É necessário efetuar o login para ir a tela principal ");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  function principal(){
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }],
    });
  }

  function sair(){
    signOut(auth)
    .then(()=>{
      alert("Você saiu do Aplicativo!")
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    })
    .catch(()=>{
      const errorMessage = error.errorMessage;
      alert(errorMessage)
    })
  }

  return (
    <View style={styles.internalContainer}>
      <View style={styles.topBar}>
        <Pressable 
        onPress={sair}
        >
          <Ionicons name="log-out" size={32} color={"#fff"}/>
        </Pressable>
        <Pressable
        onPress={principal}
        >
          <Ionicons name="home" size={32} color={"#fff"}/>
        </Pressable>
      </View>
      <Text style={styles.formTitle}>Perfil</Text>
    </View>
  );
}
