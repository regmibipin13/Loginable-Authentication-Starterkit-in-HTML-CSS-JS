"use strict";

// Default Username and Password
const correctUsername = 'admin';
const correctPassword = 'password';
const loginBtn = document.getElementById('loginBtn');

// Runs when document is loaded 
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const passwordIcon = document.getElementById("passwordIcon");

  passwordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.remove("fa-eye");
      passwordIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove("fa-eye-slash");
      passwordIcon.classList.add("fa-eye");
    }
  });
});

// Functions for success message after login
function login() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    if (usernameInput == correctUsername && passwordInput == correctPassword) {
        document.getElementById('messages').style.display = "block";
        usernameInput = "";
        passwordInput = "";
    } else {
        document.getElementById('messages').style.display = "none";
    }
}

// Function for validating the Login Form 
function validateLoginForm(input) {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    if(input == 'username') {
        if (enteredUsername === correctUsername) {
            usernameInput.classList.remove('is-invalid')
            usernameError.innerHTML = "";
    
        } else {
            usernameInput.classList.add('is-invalid');
            usernameError.innerHTML = "Invalid Username";
        }
    } else if(input == 'password') {
        if (enteredPassword === correctPassword) {
            passwordInput.classList.remove('is-invalid')
            passwordError.innerHTML = "";
    
        } else {
            passwordInput.classList.add('is-invalid')
            passwordError.innerHTML = "Invalid Username";
        }
    }


    // Enable/Disable login button based on validation
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }

}


