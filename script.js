function toggleLoginForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = loginForm.style.display === "flex" ? "none" : "flex";
}

function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username && password) {
      alert(`Welcome, ${username}!`);
      closeLoginForm();
  } else {
      alert("Please enter both username and password.");
  }
}
