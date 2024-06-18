// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUuRX1XsasBZa9_KP3yTqV-COyzinbEi0",
  authDomain: "react-auth-56a0a.firebaseapp.com",
  projectId: "react-auth-56a0a",
  storageBucket: "react-auth-56a0a.appspot.com",
  messagingSenderId: "151171209869",
  appId: "1:151171209869:web:117669359782d5a94ca0c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)