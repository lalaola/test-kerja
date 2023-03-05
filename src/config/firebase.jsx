// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDMpFznO-Z9uHoEsQhFx3L1DDID3hecAwA",
  authDomain: "nutech-8ccae.firebaseapp.com",
  projectId: "nutech-8ccae",
  storageBucket: "nutech-8ccae.appspot.com",
  messagingSenderId: "657820956340",
  appId: "1:657820956340:web:6321a151ded3b4a6fd89e1",
  measurementId: "G-KZ58LE4LS6",
  databaseURL: "https://nutech-8ccae-default-rtdb.firebaseio.com",
};

const firebase = initializeApp(firebaseConfig);
export const db = getDatabase(firebase);
export const firestore = getFirestore()
export const storage = getStorage(firebase)

// Initialize Cloud Firestore and get a reference to the service

// Initialize Firebase Authentication and get a reference to the service



export default firebase