// app.js
import { loginUser } from "./auth.js"; // Import loginUser from auth.js

// Toggle Login Form Display
function toggleLoginForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = loginForm.style.display === "flex" ? "none" : "flex";
}

// Close Login Form
function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}

// Login Function to Handle Form Submission
function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    loginUser(email, password); // Call Firebase login function
  } else {
    alert("Please enter both email and password.");
  }
}

// Add event listeners after the DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginButton").addEventListener("click", login);
});
