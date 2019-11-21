//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
//const menuNavItem = document.querySelector('.nav-item');
const menuBranding = document.querySelector(".menu-branding");

const NavItems = document.querySelectorAll(".nav-item");

//Set Intial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    NavItems.forEach(item => item.classList.add("show"));

    //set menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    NavItems.forEach(item => item.classList.remove("show"));

    //set menu State
    showMenu = false;
  }
}
