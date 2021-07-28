// function myFunction() {
//   document.querySelector('#myDropdown').classList.toggle('show');
// }
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     let dropdowns = document.querySelector('.dropdown-content');
//     for (let i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };


//burger + menu

let menu = document.querySelector('.header__options--burger');
let body = document.querySelector('body');
let sidebar = document.querySelector('.sidebar');
let footerContainer = document.querySelector('.footer .container');

let greenOpenBurger = document.querySelector('.greenOpenBurger');
let closeBurger = document.querySelector('.closeBurger');
let whiteOpenBurger = document.querySelector('.whiteOpenBurger');
let displayBlock =  document.querySelector('.displayBlock');
let displayNone =  document.querySelector('.displayNone');

menu.addEventListener('click', function (event) {
  if (body.classList.contains('js-open-menu')) {
    body.classList.remove('js-open-menu');
    footerContainer.style.cssText = 'z-index: 20';
    sidebar.style.cssText = 'z-index: 21';
    whiteOpenBurger.classList.remove('displayNone');
    whiteOpenBurger.classList.add('displayBlock');
    closeBurger.style.cssText = 'display: none';
    greenOpenBurger.style.cssText = 'margin-top: 3px';
  } else {
    body.classList.add('js-open-menu');
    footerContainer.style.cssText = 'z-index: 0';
    sidebar.style.cssText = 'z-index: 0';
    whiteOpenBurger.classList.remove('displayBlock');
    whiteOpenBurger.classList.add('displayNone');
    closeBurger.style.cssText = 'display: block';
  }
});

let menuItem = document.querySelectorAll('.menu-item a');

for (let i = 0; i < menuItem.length; i++) {
menuItem[i].addEventListener('click', function (event) {
    if (body.classList.contains('js-open-menu')) {
      body.classList.remove('js-open-menu');
      footerContainer.style.cssText = 'z-index: 20';
      sidebar.style.cssText = 'z-index: 21';
      whiteOpenBurger.classList.remove('displayNone');
      whiteOpenBurger.classList.add('displayBlock');
      closeBurger.style.cssText = 'display: none';
    }
  }
)};


//language button
// let langButtons = document.querySelectorAll('.dropdown-content a');
// let dropdown = document.querySelector('.dropdown-content');

// for (let i = 0; i < langButtons.length; i++) {
// langButtons[i].addEventListener('click', function (event) {
//     if (dropdown.classList.contains('show')) {
//       dropdown.classList.remove('show');
//     }
//   }
// )};



//hide logo on scroll
let logo = document.querySelector('.header__logo')
window.addEventListener('scroll', function(){
  if(scrollY >75) {
    logo.style.cssText = 'transform: translateY(-350px); animation: come-in 0.3s ease forwards;';
  } else {
    logo.style.cssText = 'transform: translateY(0px); animation: come-in 0.8s ease forwards;';
  }
});




AOS.init();