const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const form = document.getElementById("FormR");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("registerBtn").addEventListener("click", (e) => {
  e.preventDefault();
  validateRegistrationForm();
});

function validateRegistrationForm() {
  // Get form inputs
  var name = document.getElementById("NameR").value;
  var email = document.getElementById("EmailR").value;
  var password = document.getElementById("PasswordR").value;
  console.log(name);
  // Regular expression patterns
  var namePattern = /^[a-zA-Z]+$/;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate name
  if (!name.match(namePattern)) {
    alert("Name must contain only letters.");
    return false;
  }

  // Validate email
  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    return false;
  }

  // Validate password
  if (password.length < 8 || !/[A-Z]/.test(password)) {
    alert(
      "Password must be at least 8 characters long and contain one uppercase letter."
    );
    return false;
  }

  // Form is valid
  return true;
}

// registration
document.getElementById("registerBtn").addEventListener("click", () => {
  const username = document.getElementById("NameR").value;
  const password = document.getElementById("PasswordR").value;
  const email = document.getElementById("EmailR").value;
  const req = new XMLHttpRequest();
  req.open("POST", "http://localhost:3050/users/register");
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify({ username, password, email }));
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 201) {
      let response = req.responseText;
      response = JSON.parse(response);
      alert("User Registered");
      window.location.href = "index_login.html";
      //window.location.href = "home.html";
    }
  };
});

// login

document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const useremail = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const req = new XMLHttpRequest();
  req.open("POST", "http://localhost:3050/users/login");
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify({ useremail, password }));
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 201) {
      let response = req.responseText;
      response = JSON.parse(response);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));
      window.location.href = "home.html";
    } else if (req.readyState === 4 && req.status === 401) {
      alert("Invalid Credentials");
      username.value = "";
      password.value = "";
    }
  };
});
