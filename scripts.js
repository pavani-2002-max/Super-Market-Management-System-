function login(onclick) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    window.location.href = "dashbord.html";
  } else {
    alert("Invalid username or password");
  }
}

function register() {
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;

  if (password === cpassword) {
    fetch('register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Registration failed");
    });
  } else {
    alert("Password does not match");
  }
}


function logout() {
  window.location.href = "login.html";
}
