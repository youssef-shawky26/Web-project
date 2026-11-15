// ==========================================================
// auth.js  -  Login / Registration page (index.html)
// 1. Switch between the Login and Register forms
// 2. Open the Customer or Manager portal after login
// 3. Check that the two passwords match when registering
// ==========================================================

// ----- Get the elements we need from the page -----
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const goRegister = document.getElementById("go-register");
const goLogin = document.getElementById("go-login");
const registerError = document.getElementById("register-error");

// ----- 1. Switching between the two forms -----
function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
}

function showRegister() {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
}

loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);
goRegister.addEventListener("click", showRegister);
goLogin.addEventListener("click", showLogin);

// ----- 2. Login: open the portal that matches the chosen role -----
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the normal form submit

  const role = document.querySelector('input[name="role"]:checked').value;

  if (role === "manager") {
    window.location.href = "manager/manager-dashboard.html";
  } else {
    window.location.href = "customer/customer-dashboard.html";
  }
});

// ----- 3. Register: passwords must match, then open customer portal -----
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("reg-password").value;
  const confirm = document.getElementById("reg-confirm").value;

  if (password !== confirm) {
    registerError.textContent = "Passwords do not match. Please try again.";
    return; // stop here
  }

  registerError.textContent = "";
  window.location.href = "customer/customer-dashboard.html";
});
