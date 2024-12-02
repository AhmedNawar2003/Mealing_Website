// Link Variables
var greenWaterfallImg = document.getElementById("greenWaterfallImg");
var greenWaterfallClick = document.getElementById("greenWaterfallClick");
var watermelonCoolerImg = document.getElementById("watermelonCoolerImg");
var watermelonCoolerClick = document.getElementById("watermelonCoolerClick");
var violetBananaImg = document.getElementById("violetBananaImg");
var violetBananaClick = document.getElementById("violetBananaClick");
var pineappleSplashImg = document.getElementById("pineappleSplashImg");
var pineappleSplashClick = document.getElementById("pineappleSplashClick");
// Add event listener to each drink, checking if each element exists
if (greenWaterfallImg) {
  greenWaterfallImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/waterfall.html");
  });
}
if (greenWaterfallClick) {
  greenWaterfallClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/waterfall.html");
  });
}

if (watermelonCoolerImg) {
  watermelonCoolerImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/watermelon.html");
  });
}
if (watermelonCoolerClick) {
  watermelonCoolerClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/watermelon.html");
  });
}

if (violetBananaImg) {
  violetBananaImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/violetBanana.html");
  });
}
if (violetBananaClick) {
  violetBananaClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/violetBanana.html");
  });
}

if (pineappleSplashImg) {
  pineappleSplashImg.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/pinable.html");
  });
}
if (pineappleSplashClick) {
  pineappleSplashClick.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/pinable.html");
  });
}
