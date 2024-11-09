// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore if you plan to use it

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

// Initialize and export Firebase Authentication and Firestore
export const auth = getAuth(app); // Export auth for use in other files
export const db = getFirestore(app); // Optional: Export Firestore if needed
