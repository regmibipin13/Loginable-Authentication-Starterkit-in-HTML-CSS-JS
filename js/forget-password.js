"use strict";

function validateLoginForm(input) {
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');

    const enteredUsername = usernameInput.value;
    if(input == 'username') {
        if (enteredUsername !== '') {
            usernameInput.classList.remove('is-invalid')
            usernameError.innerHTML = "";
    
        } else {
            usernameInput.classList.add('is-invalid');
            usernameError.innerHTML = "Invalid Username";
        }
    }


    // Enable/Disable login button based on validation
    if (enteredUsername !== '') {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }

}

// Functions for success message after login
function forgetPassword() {
    var usernameInput = document.getElementById('username');
    document.getElementById('messages').style.display = "block";
    usernameInput.value = "";
    
}


