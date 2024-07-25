document.getElementById('regForm').addEventListener('submit',
    function(event){
    event.preventDefault();

    let isValid = true;

    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.length < 3) {
        usernameError.textContent = "Username must be atleast 3 character long";
        usernameError.style.display = "block";
        username.style.border = "red"
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Please enter the valid email address";
        emailError.style.display = "block"
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 8) {
        passwordError.textContent = "password must have atleast 8 characters";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    const confirmPassword = document.getElementById("confirmpassword").value;
    const confirmpasswordError = document.getElementById("confirmpasswordError");
    if (confirmPassword !== password) {
        confirmpasswordError.textContent = "password does not match!";
        confirmpasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmpasswordError.style.display = "none";
    }

    if(isValid){
        alert("Registartion successfull");
    }
})
