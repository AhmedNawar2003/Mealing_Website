// Clear input fields for login and register on page load
function clearInputFields() {
  // Clear login fields
  document.getElementById("userNameLogin").value = "";
  document.getElementById("passwordLogin").value = "";

  // Clear register fields
  document.getElementById("userNameRegister").value = "";
  document.getElementById("passwordRegister").value = "";
}

// Register user and store data in localStorage
function registerUser() {
  const userName = document.getElementById("userNameRegister").value.trim().toLowerCase();
  const password = document.getElementById("passwordRegister").value.trim();

  if (userName && password) {
    const newUser = { userName, password };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.userName === userName);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    clearInputFields();
    alert("Registration successful!");
  } else {
    alert("Please fill in all fields for registration.");
  }
}

// Login user by checking localStorage for stored user data
function loginUser() {
  const userName = document.getElementById("userNameLogin").value.trim().toLowerCase();
  const password = document.getElementById("passwordLogin").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const storedUser = users.find(user => user.userName === userName && user.password === password);

  if (storedUser) {
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("currentUser", storedUser.userName);

    clearInputFields();
    displayUserName();
    alert("Login successful!");
  } else {
    alert("Incorrect username or password.");
  }
}

// Display the username in the navbar
function displayUserName() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const currentUser = localStorage.getItem("currentUser");
  const welcomeElement = document.querySelector(".form p");

  if (isLoggedIn && currentUser) {
    welcomeElement.textContent = `Welcome, ${currentUser}`;
  } else {
    welcomeElement.textContent = "Welcome";
  }
}

// Check for Enter key press
function checkEnterKey(event, action) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (action === "login") {
      loginUser();
    } else if (action === "register") {
      registerUser();
    }
  }
}

// Initialize event listeners
function initializeListeners() {
  clearInputFields(); // Clear input fields on page load

  // Add keydown event listeners for login fields
  const userNameLoginInput = document.getElementById("userNameLogin");
  const passwordLoginInput = document.getElementById("passwordLogin");
  userNameLoginInput.addEventListener("keydown", event => checkEnterKey(event, "login"));
  passwordLoginInput.addEventListener("keydown", event => checkEnterKey(event, "login"));

  // Add keydown event listeners for register fields
  const userNameRegisterInput = document.getElementById("userNameRegister");
  const passwordRegisterInput = document.getElementById("passwordRegister");
  userNameRegisterInput.addEventListener("keydown", event => checkEnterKey(event, "register"));
  passwordRegisterInput.addEventListener("keydown", event => checkEnterKey(event, "register"));

  // Add click event listeners to login and register buttons
  const loginButton = document.querySelector("#loginButton");
  const registerButton = document.querySelector("#registerButton");

  if (loginButton) {
    loginButton.addEventListener("click", event => {
      event.preventDefault();
      loginUser();
    });
  }

  if (registerButton) {
    registerButton.addEventListener("click", event => {
      event.preventDefault();
      registerUser();
    });
  }
}

// Ensure the username is displayed and inputs are cleared when the page loads
window.onload = function () {
  displayUserName();
  initializeListeners();
};