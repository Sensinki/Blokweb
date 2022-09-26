// JavaScript Document
console.log("hi");


// Hamburger menu
// Navbar gaat naar beneden

var hamburgerMenuButton = document.querySelector("header button");
var hamburgerMenu = document.querySelector("header");


hamburgerMenuButton.addEventListener("click", hamburgerMenuButtonKlik);


function hamburgerMenuButtonKlik() {
    hamburgerMenu.classList.toggle("menuOpen");
    hamburgerMenuButton.classList.toggle("kruisje");
}

