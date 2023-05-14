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

form.addEventListener("submit", (e) => {
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
