// app.js
import { loginUser } from "./auth.js"; // Import the loginUser function

// Toggle Login Form Display
function toggleLoginForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = loginForm.style.display === "flex" ? "none" : "flex";
}

// Close Login Form
function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}

// Login Function to Handle Login Form Submission
function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    loginUser(email, password); // Call Firebase login function
  } else {
    alert("Please enter both email and password.");
  }
}

// Attach the login function to the login button
document.getElementById("loginButton").addEventListener("click", login);
