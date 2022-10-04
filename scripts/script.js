// JavaScript Document
console.log("hi");


// HAMBURGER MENU
// Navbar gaat naar beneden
// https://codepen.io/shooft/pen/dymRMBZ?editors=0110

// selectoren
var hamburgerMenuButton = document.querySelector("header button");
var hamburgerMenu = document.querySelector("header");

// als het geklikt wordt, gebeurt function hamburgerMenuButtonKlik
hamburgerMenuButton.addEventListener("click", hamburgerMenuButtonKlik);


function hamburgerMenuButtonKlik() {
    // class toevoegen aan elementen
    hamburgerMenu.classList.toggle("menuOpen");
    hamburgerMenuButton.classList.toggle("kruisje");
}

