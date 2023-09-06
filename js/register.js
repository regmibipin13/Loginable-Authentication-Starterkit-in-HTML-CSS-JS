"use strict";
// Loads When Document is loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("name");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const loginBtn = document.getElementById("loginBtn");

    // Function for validating the register form 
    const validateForm = () => {
        let isValid = true;
        if (nameInput.value.trim() === "") {
            isValid = false;
            nameInput.classList.add("is-invalid");
            nameInput.nextElementSibling.innerText = "Name cannot be empty";
        } else {
            nameInput.classList.remove("is-invalid");
            nameInput.nextElementSibling.innerText = "";
        }

        if (usernameInput.value.trim() === "") {
            isValid = false;
            usernameInput.classList.add("is-invalid");
            usernameInput.nextElementSibling.innerText = "Username cannot be empty";
        } else {
            usernameInput.classList.remove("is-invalid");
            usernameInput.nextElementSibling.innerText = "";
        }

        if (passwordInput.value === "") {
            isValid = false;
            passwordInput.classList.add("is-invalid");
            passwordInput.nextElementSibling.innerText = "Password cannot be empty";
        } else {
            passwordInput.classList.remove("is-invalid");
            passwordInput.nextElementSibling.innerText = "";
        }

        if (confirmPasswordInput.value !== passwordInput.value) {
            isValid = false;
            confirmPasswordInput.classList.add("is-invalid");
            confirmPasswordInput.nextElementSibling.innerText = "Confirm Password must be same as Password";
        } else {
            confirmPasswordInput.classList.remove("is-invalid");
            confirmPasswordInput.nextElementSibling.innerText = "";
        }

        loginBtn.disabled = !isValid;
    };

    form.addEventListener("input", validateForm);
});
