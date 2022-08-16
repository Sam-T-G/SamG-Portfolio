// when user scrolls, executes sticky navbar
window.onscroll = function() {myFunction()};

var header = document.getElementById("Pacific Vacations Club");

// offetting navbar
var sticky = header.offsetTop;

// sticky element for the main navigation
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {a
    header.classList.remove("sticky");
  }
}