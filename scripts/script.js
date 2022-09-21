// JavaScript Document
console.log("hi");

var hamburgerMenuButton = document.querySelector("header button");


hamburgerMenuButton.addEventListener("click", hamburgerMenuButtonKlik);


function hamburgerMenuButtonKlik() {
  
    var hamburgerMenu = document.querySelector("header");
    hamburgerMenu.classList.toggle("menuOpen");

  
}