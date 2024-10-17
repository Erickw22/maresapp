import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import React, { useState } from "react";
import styles from "../src/styles";
import { auth } from "../src/firebase.config";
import { signOut } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';
import Chat from "./Chat";

export default function Principal({ navigation }) {
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

  function perfil(){
    navigation.reset({
      index: 0,
      routes: [{ name: "Perfil" }],
    });
  }
  function Ecopoints(){
    navigation.reset({
      index: 0,
      routes: [{ name: "Ecopoints" }],
    });
  }
  function chat(){
    navigation.reset({
      index: 0,
      routes: [{ name: "Chat" }],
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
        onPress={perfil}
        >
          <Ionicons name="person" size={32} color={"#fff"}/>
        </Pressable>
      </View>
      <Pressable
        onPress={chat}
        >
          <Ionicons name="chatbubbles" size={32} color={"#30687A"}/>
        </Pressable><Pressable
        onPress={Ecopoints}
        >
          <Ionicons name="map" size={32} color={"#30687A"}/>
        </Pressable><Pressable
        onPress={chat}
        >
          <Ionicons name="cash" size={32} color={"#30687A"}/>
        </Pressable>
      
      
      
    </View>
  );
}
