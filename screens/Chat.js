import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../src/styles";
import { signOut } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';
import { db, auth } from "../src/firebase.config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function Chat({ navigation }) {
  const [users, setUsers] = useState([]);


  const currentUser = auth.currentUser;
  const getUsers = async() =>{
    const docsRef = collection(db, 'users');
    const q =query(docsRef, where('userUID', '!=', auth?.currentUser?.uid));
    const docsSnap = onSnapshot(q, (onSnap)=>{
      let data =[];
      onSnap.docs.forEach(user=>{
        data.push([...user.data()])
        setUsers(data)
        console.log(user.data())
      })
    })
  }
  useEffect(()=>{
    getUsers();
  }, [])

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
      <Text style={styles.formTitle}>chat</Text>
    </View>
  );
}
