// Load user data
const user = JSON.parse(localStorage.getItem("user")) || {
  name: "Guest User",
  email: "guest@example.com"
};

document.getElementById("username").innerText = "Hello, " + user.name;
document.getElementById("useremail").innerText = user.email;

// Navigation
function goTo(page) {
  window.location.href = page;
}

// Logout
function logoutUser() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "login.html";
  }
}
