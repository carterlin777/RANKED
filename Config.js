// config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAb6kiQQJO1shqGITyOUPwaQm_-g8jDr4",
  authDomain: "ranked-8abea.firebaseapp.com",
  projectId: "ranked-8abea",
  storageBucket: "ranked-8abea.firebasestorage.app",
  messagingSenderId: "866778467854",
  appId: "1:866778467854:web:b0b7066cefa5f8efb3365f",
  measurementId: "G-YHD38F23X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // Optional: Export if you’re using Firestore
