/* show hide button, clicking on show shows password and changes to hide, again clicking hides the password and changes to show */
function showHide() {
    // for password
    var pwd_id = document.getElementById("pwd");

    // password
    if (pwd_id.type === "password") {
        pwd_id.type = "text";
        document.querySelector("#showhide1").innerHTML = "Hide";
    } else {
        pwd_id.type = "password";
        document.querySelector("#showhide1").innerHTML = "Show";
    }
}

function showHide2() {
    var cpwd_id = document.getElementById("cpwd");

    // confirm password
    if (cpwd_id.type === "password") {
        cpwd_id.type = "text";
        document.querySelector("#showhide2").innerHTML = "Hide";
    } else {
        cpwd_id.type = "password";
        document.querySelector("#showhide2").innerHTML = "Show";
    }
}

// clicking on register button will show a confirm window and checks if both password and confirm passwords are same
function registerJS() {
    if (confirm("Confirm registraion")) {
        txt = "You confirmed registration";
    } else {
        txt = "You cancelled registration";
    }
    var pwd_val = document.getElementById("pwd").value;;
    var cpwd_val = document.getElementById("cpwd").value;;

    // If password not entered 
    if (pwd_val == '')
        alert("Please enter Password");

    // If confirm password not entered 
    else if (cpwd_val == '')
        alert("Please enter confirm password");

    // If not same
    else if (pwd_val != cpwd_val) {
        alert("\nPassword did not match: Please try again...");
    } else {
        alert("Registration Successful.");
    }

}


// on hovering on password shows the message box
function pass - message() {
    alert("Password must be more than 6 characters, must have atleast one digit, one special character");
}
