// when user scrolls, executes sticky navbar
window.onscroll = function () {
  myFunction();
};

var nav = document.getElementById("nav");

// offetting navbar
var sticky = head.offsetTop;

// sticky element for the main navigation
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    a;
    navbar.classList.remove("sticky");
  }
}
