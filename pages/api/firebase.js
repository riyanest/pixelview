// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBawmh_pmDu0LC4DCPXNPiwKD4WEqBb1qY",
  authDomain: "pixel-view.firebaseapp.com",
  projectId: "pixel-view",
  storageBucket: "pixel-view.appspot.com",
  messagingSenderId: "587112172761",
  appId: "1:587112172761:web:20044a288421298a4a82c8",
  measurementId: "G-N17ZE97BX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});