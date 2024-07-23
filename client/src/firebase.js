// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "gruham-83c96.firebaseapp.com",
  projectId: "gruham-83c96",
  storageBucket: "gruham-83c96.appspot.com",
  messagingSenderId: "607106007769",
  appId: "1:607106007769:web:1482eea8bf3a2e671ab4c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);