import { auth } from "./Config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        alert(`Welcome back, ${userCredential.user.email}!`);
    } catch (error) {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
    }
}

export async function signUpUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
        alert(`Welcome, ${userCredential.user.email}! Your account has been created.`);
    } catch (error) {
        console.error("Sign-up failed:", error.message);
        alert("Sign-up failed: " + error.message);
    }
}

export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent. Check your inbox.");
    } catch (error) {
        console.error("Password reset failed:", error.message);
        alert("Password reset failed: " + error.message);
    }
}

export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log("User signed in with Google:", user);
        alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
        console.error("Google sign-in failed:", error.message);
        alert("Google sign-in failed: " + error.message);
    }
}
