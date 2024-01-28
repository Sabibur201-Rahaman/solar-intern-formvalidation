function validate() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;
  checkusername(username);
  checkemail(email);
  checkpassword(password);
  checkpasswordsmatch(password, cpassword);
  // console.log(username)
}
function checkusername(username) {
  if (username.length > 7) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");

    // document.getElementById('username_error').innerHTML=''
  } else {
    document.getElementById("username").classList.add("error");
    // document.getElementById('username_error').innerHTML="username must be 8 long characters"
    alert("username must be 7 character");
  }
}

function checkemail(email) {
  if (email.length > 8 && email.includes("@gmail")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");

    // document.getElementById('username_error').innerHTML=''
  } else {
    document.getElementById("email").classList.add("error");
    // document.getElementById('username_error').innerHTML="username must be 8 long characters"
    alert("valid email is required");
  }
}
function checkpassword(password) {
  if (password.length > 8 && password.includes(".")) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");

    // document.getElementById('username_error').innerHTML=''
  } else {
    document.getElementById("password").classList.add("error");
    // document.getElementById('username_error').innerHTML="username must be 8 long characters"
    alert("valid password is required");
  }
}
function checkpasswordsmatch(password, cpassword) {
  if (password == cpassword && password != "") {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");

    // document.getElementById('username_error').innerHTML=''
  } else {
    document.getElementById("cpassword").classList.add("error");
    // document.getElementById('username_error').innerHTML="username must be 8 long characters"
    alert(" password is not matched");
  }
}

// function validate() {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const cpassword = document.getElementById('cpassword').value;

//     if (username && email && password && cpassword) {
//         checkusername(username);
//         // Add other checks here
//     } else {
//         alert("All fields must be filled in.");
//     }
// }
