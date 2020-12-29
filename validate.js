// checking Name
function checkName() {
    var name = document.getElementById("name");

    var rname = /^[a-zA-Z]*$/;
    // checking name
    if (!(name.value.match(rname))) {
        alert("Name should be more than 2 and have letters and space.");
        return false;
    }
    return true;
}

// checking Email
function checkEmail() {
    var email = document.getElementById("email");
    var remail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

    // if empty
    if (!(email.value.match(remail))) {
        alert("Please enter a valid email.");
        return false;
    }
    return true;
}

// checking phone
function checkPhone() {
    var phone = document.getElementById("phone");
    var rphone = /^\(?\d{3}\)?-?\s*-?\d{4}$/;
    if (!(phone.value.match(rphone))) {
        alert("Phone number must be 10 to 12 digits.");
    }
    return true;
}

// check password and confirm password
function checkPassword() {
    var pass = document.getElementById("pwd");
    var cpass = document.getElementById("cpwd");
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!(pass.value.match(decimal) && pass.value.match(decimal))) {
        alert("Password Should be more than 6, contain a special character, a number, Upper and lowercase");
        return false;
    }
    return true;
}

function validate() {
    if (checkName() && checkEmail() && checkPhone() && checkPassword()) {
        alert("Confirm registration");
    } else {
        alert("Registration Form validation error.");
    }
}

function validate2() {
    if (checkEmail()) {
        alert("Login Confirm");
    } else {
        alert("Login Form validation error.");
    }
}

function validate3() {
    if (checkName() && checkEmail() && checkPhone()) {
        alert("confirm form submit");
    } else {
        alert("Form validatin error.");
    }
}
