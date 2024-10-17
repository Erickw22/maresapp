import MapView, {Marker} from 'react-native-maps';
import styles from '../src/styles';
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { auth } from "../src/firebase.config";
import { signOut } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Ecopoints({ navigation }) {

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
    function Ecopoints(){
      navigation.reset({
        index: 0,
        routes: [{ name: "Ecopoints" }],
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
        <MapView 
          style={{width: "100%", height: "100%"}}
          initialRegion={{
            latitude:-7.939101,
            longitude:-34.879947,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
          }}
        >
          <Marker
            coordinate={{latitude:-7.939101,longitude:-34.879947}}
            title='Uninassau-Paulista'
            description='Unidade Uninassau de Paulista'
          />
        </MapView>
      </View>
    );
  }