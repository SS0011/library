// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA08n1lw72NA_hwCJ6JpNE8btgLzFznP5M",
  authDomain: "e-library-d36ac.firebaseapp.com",
  databaseURL: "https://e-library-d36ac-default-rtdb.firebaseio.com",
  projectId: "e-library-d36ac",
  storageBucket: "e-library-d36ac.appspot.com",
  messagingSenderId: "102610002487",
  appId: "1:102610002487:web:1acd2e07119840535b95b2",
  measurementId: "G-CX1Z6SVBSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;