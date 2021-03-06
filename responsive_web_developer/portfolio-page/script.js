// NAVBAR
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
  linkClose()
}

function closeNav() {
  navItems.style.visibility = "hidden";
  navClose.style.display = "none"; 
  navOpen.style.display = "block";
}

const navLink = document.querySelectorAll('.nav-item');
function linkClose() {
  for (link of navLink) {
    link.addEventListener('click', closeNav)
  }
}

// PROJECT FILTER

const filters  = document.querySelectorAll('.project-tab-item');

const html = document.querySelector('.htmlproject');
const css = document.querySelector('.cssproject');
const responsive = document.querySelector('.responsiveproject');

filters.forEach((filter) => {
  filter.addEventListener('click', ()=> {
    let filterValue = filter.innerText;
    if(filterValue === "CSS") {
      html.classList.add('hidden');
      css.classList.remove('hidden');
      responsive.classList.add('hidden')
    } else if (filterValue === "HTML") {
      html.classList.remove('hidden')
      css.classList.add('hidden');
      responsive.classList.add('hidden')
    } else if (filterValue === "Responsive") {
      html.classList.add('hidden')
      css.classList.add('hidden');
      responsive.classList.remove('hidden')
    } else if (filterValue === "All") {
      html.classList.remove('hidden')
      css.classList.remove('hidden');
      responsive.classList.remove('hidden')
    }
  })
})


// filters.forEach((filter)=> {
//   filter.addEventListener('click', () => {
//     let filterValue = filter.innerText;
 
//     if (filterValue !== "CSS") {
//         css.forEach((item)=> {
//           item.classList.toggle('hidden')
//         })
//       } else if (filterValue !== "Responsive") {
//         responsive.forEach((item)=> {
//           item.classList.toggle('hidden')
//         })
//       } else if (filterValue !== "HTML") {
//         html.forEach((item)=> {
//           item.classList.toggle('hidden');
//         })
//       } else {
//         parentNode.classList.toggle('hidden');
//       }
//   })
// })
