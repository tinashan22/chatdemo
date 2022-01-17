// import firebase from "@firebase";
// import firebase from "firebase";
// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPdLcLxCmuIoaPS4xkovB4zEm9gpAmcb8",
  authDomain: "chatdemo-f4d33.firebaseapp.com",
  projectId: "chatdemo-f4d33",
  storageBucket: "chatdemo-f4d33.appspot.com",
  messagingSenderId: "644281509406",
  appId: "1:644281509406:web:75df81dea3439db663700f",
  measurementId: "G-T9MM22SVPY",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
