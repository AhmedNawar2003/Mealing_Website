// Link Variables
var redBeetrootSoupImg = document.getElementById("redBeetrootSoupImg");
var redBeetrootSoupClick = document.getElementById("redBeetrootSoupClick");
var eggBaconImg = document.getElementById("eggBaconImg");
var eggBaconClick = document.getElementById("eggBaconClick");
var mozarellaImg = document.getElementById("mozarellaImg");
var mozarellaClick = document.getElementById("mozarellaClick");
var salmonVegetableImg = document.getElementById("salmonVegetableImg");
var salmonVegetableClick = document.getElementById("salmonVegetableClick");
var eggSaladImg = document.getElementById("eggSaladImg");
var eggSaladClick = document.getElementById("eggSaladClick");
// Add event listener to each drink, checking if each element exists
if (redBeetrootSoupImg) {
  redBeetrootSoupImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/redSoup.html");
  });
}
if (redBeetrootSoupClick) {
  redBeetrootSoupClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/redSoup.html");
  });
}

if (eggBaconImg) {
  eggBaconImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/eggBacon.html");
  });
}
if (eggBaconClick) {
  eggBaconClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/eggBacon.html");
  });
}

if (mozarellaImg) {
  mozarellaImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/motzrella.html");
  });
}
if (mozarellaClick) {
  mozarellaClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/motzrella.html");
  });
}

if (salmonVegetableImg) {
  salmonVegetableImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/salmonVege.html");
  });
}
if (salmonVegetableClick) {
  salmonVegetableClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/salmonVege.html");
  });
}
if (eggSaladImg) {
  eggSaladImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/strawberry.html");
  });
}
if (eggSaladClick) {
  eggSaladClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/strawberry.html");
  });
}
