import { auth, db } from "./Config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user info in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            firstName,
            lastName,
            email
        });

        alert(`Welcome, ${firstName}! Your account has been created.`);
        window.location.href = "index.html"; // Redirect after sign-up
    } catch (error) {
        console.error("Sign-up failed:", error.message);
        alert("Sign-up failed: " + error.message);
    }
}
