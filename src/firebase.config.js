import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPu_rIWMa8AHWQI4lfVUEvDCFDWufyyqc",
  authDomain: "mares-app.firebaseapp.com",
  projectId: "mares-app",
  storageBucket: "mares-app.appspot.com",
  messagingSenderId: "1058485339422",
  appId: "1:1058485339422:web:d4c82f8bfe1c13501bf50f",
  measurementId: "G-S8H65R3VN4"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase)