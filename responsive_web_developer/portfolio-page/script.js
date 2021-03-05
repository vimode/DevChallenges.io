const button = document.querySelector('.btn');
const navOpen = document.querySelector('#open-nav');
const navClose = document.querySelector('#close-nav');
const navItems = document.querySelector('.nav-items');

navOpen.addEventListener('click', openNav)
navClose.addEventListener('click', closeNav)

function openNav() {
  navItems.style.visibility = "visible";
  navClose.style.display = "block";
  navOpen.style.display = "none";
}

function closeNav() {
  navItems.style.visibility = "hidden";
  navClose.style.display = "none"; 
  navOpen.style.display = "block";
}

const navLink = document.querySelectorAll('.nav-item');
for (link of navLink) {
  link.addEventListener('click', closeNav)
}