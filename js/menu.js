// Link Variables
var balancedMenuImg = document.getElementById("balancedMenuImg");
var balancedMenuClick = document.getElementById("balancedMenuClick");
var muscleGainImg = document.getElementById("muscleGainImg");
var muscleGainClick = document.getElementById("muscleGainClick");
var officeMenuImg = document.getElementById("officeMenuImg");
var officeMenuClick = document.getElementById("officeMenuClick");
var slimmingMenuImg = document.getElementById("slimmingMenuImg");
var slimmingMenuClick = document.getElementById("slimmingMenuClick");
// link get menu button
var menu = document.getElementById("menu");
// Add event listener to each drink, checking if each element exists
if (balancedMenuImg) {
  balancedMenuImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/balancedMenu.html");
  });
}
if (balancedMenuClick) {
  balancedMenuClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/balancedMenu.html");
  });
}

if (muscleGainImg) {
  muscleGainImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/muscleGain.html");
  });
}
if (muscleGainClick) {
  muscleGainClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/muscleGain.html");
  });
}

if (officeMenuImg) {
  officeMenuImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/officeMenu.html?");
  });
}
if (officeMenuClick) {
  officeMenuClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/officeMenu.html?");
  });
}
if (slimmingMenuImg) {
  slimmingMenuImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/slimmingMenu.html");
  });
}
if (slimmingMenuClick) {
  slimmingMenuClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/slimmingMenu.html");
  });
}
//   Add event listener to menu button
if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/slimmingMenu.html");
  });
}
