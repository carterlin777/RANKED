// auth.js
import { auth } from "./Config.js";

export async function loginUser(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Login failed: " + error.message); // Optional: alert for better feedback
  }
}
