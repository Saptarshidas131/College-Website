/* show hide button, clicking on show shows password and changes to hide, again clicking hides the password and changes to show */
function showHide() {
  var pwd_id = document.getElementById("pwd");
  if (pwd_id.type === "password") {
    pwd_id.type = "text";
    document.querySelector("#showhide").innerHTML = "Hide";
  } else {
    pwd_id.type = "password";
    document.querySelector("#showhide").innerHTML = "Show";
  }
}

// clicking on login button popup alerts
function loginJS() {
  window.alert("Login verification needed.");
}

// clicking on forgot password button popup alert
function forgotJS() {
  window.alert("Please contact Tech support for assistance.");
}

