const ham = document.querySelector('.ham');
const navItems = document.querySelector('.nav-items');
const closeX = document.querySelector('.closex')
const brand = document.querySelector('.brand-logo');
const nav = document.querySelector('.nav')

ham.addEventListener('click', () => {
  navItems.classList.toggle('m-menu');
  brand.style.display = "none";
  ham.style.display= "none";
  closeX.style.display = "block";
  nav.style.justifyContent = "center";
})

closeX.addEventListener('click', () =>{
  navItems.classList.toggle('m-menu');
  brand.style.display = "block";
  ham.style.display= "block";
  closeX.style.display = "none";
  nav.style.justifyContent="space-between";
})