// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBawmh_pmDu0LC4DCPXNPiwKD4WEqBb1qY",

    authDomain: "pixel-view.firebaseapp.com",
  
    projectId: "pixel-view",
  
    storageBucket: "pixel-view.appspot.com",
  
    messagingSenderId: "587112172761",
  
    appId: "1:587112172761:web:20044a288421298a4a82c8",
  
    measurementId: "G-N17ZE97BX8"
  
};
const  app = initializeApp(firebaseConfig);
// Initialize Firebase]
const db = getFirestore(app);
export default db