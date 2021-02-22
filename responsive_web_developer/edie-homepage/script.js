const navbar = document.querySelector('.nav-list');
const navOpen = document.querySelector('.ham-open');
const navClose = document.querySelector('.ham-close');
const hamNav = document.querySelector('.ham-nav')

// hamNav.addEventListener('click', openNav )

// function openNav() {
//   if (navOpen.style.display = "block") {
//     navbar.style.visibility = "visible";
//     navClose.style.display = "block";
//     navOpen.style.display = "none";
//   } else if (navClose.style.display="block"){
//     navbar.style.visibility = "hidden";
//     navClose.style.display = "none";
//     navOpen.style.display = "block";
//   }
// }

navOpen.addEventListener('click', openNav)
navClose.addEventListener('click', closeNav)

function openNav() {
  navbar.style.visibility = "visible";
  navClose.style.display = "block";
  navOpen.style.display = "none";
}

function closeNav() {
  navbar.style.visibility = "hidden";
  navClose.style.display = "none"; 
  navOpen.style.display = "block";
}