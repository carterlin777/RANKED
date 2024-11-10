import { loginUser, signUpUser, resetPassword, signInWithGoogle } from "./auth.js";

function toggleLoginForm() {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = loginForm.style.display === "flex" ? "none" : "flex";
}

function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

function login() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        loginUser(email, password);
    } else {
        alert("Please enter both email and password.");
    }
}

function signUp() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        signUpUser(email, password);
    } else {
        alert("Please enter both email and password.");
    }
}

function forgotPassword() {
    const email = document.getElementById("username").value;

    if (email) {
        resetPassword(email);
    } else {
        alert("Please enter your email to reset your password.");
    }
}

function googleSignIn() {
    signInWithGoogle();
}

// Ensure event listeners are attached after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginButton").addEventListener("click", login);
    document.getElementById("signupButton").addEventListener("click", signUp);
    document.getElementById("forgotPasswordButton").addEventListener("click", forgotPassword);
    document.getElementById("googleSignInButton").addEventListener("click", googleSignIn); // Google Sign-In button
    document.getElementById("login-signup-btn").addEventListener("click", toggleLoginForm);
    document.getElementById("get-started-btn").addEventListener("click", toggleLoginForm);
    document.getElementById("close-login-form-btn").addEventListener("click", closeLoginForm);
});
