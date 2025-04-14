document.addEventListener("DOMContentLoaded", () => {
  const correctEmail = "member@zenith-it.co.uk"; // Replace with your desired email
  const correctPassword = "zenith123"; // Replace with your desired password
  const authContainer = document.getElementById("auth-container");
  const membersContent = document.getElementById("members-content");
  const loginBtn = document.getElementById("login-btn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error-msg");

  loginBtn.addEventListener("click", () => {
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;
    if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
      errorMsg.classList.remove("d-none");
    }
  });
});
