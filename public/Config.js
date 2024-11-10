import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAb6kiQQJO1shqGITyOUPwaQm_-g8jDr4",
  authDomain: "ranked-8abea.firebaseapp.com",
  projectId: "ranked-8abea",
  storageBucket: "ranked-8abea.firebasestorage.app",
  messagingSenderId: "866778467854",
  appId: "1:866778467854:web:52b36b7996e8f564b3365f",
  measurementId: "G-G24Y6N1BE0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

