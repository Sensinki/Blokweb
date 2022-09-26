// JavaScript Document
console.log("hi");


// Als ik deze aan doet, knop animatie lukt niet maar hamburger menu komt wel beneden

var hamburgerMenuButton = document.querySelector("header button");


hamburgerMenuButton.addEventListener("click", hamburgerMenuButtonKlik);


function hamburgerMenuButtonKlik() {
  
    var hamburgerMenu = document.querySelector("header");
    hamburgerMenu.classList.toggle("menuOpen");
}


// Als ik deze aan doet, dan de knop animatie doet wel maar hamburger menu werkt niet.

// var eersteStreepjesButton = document.querySelector("header button");

// eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);

// function eersteStreepjesButtonKlik() {
//     var hamburgerMenu = document.querySelector("header");
//     hamburgerMenu.classList.toggle("menuOpen");

// }