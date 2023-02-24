//Hamburger menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navLinks');

burgerIcon.addEventListener('click', function(e){
    e.preventDefault();
    navbarMenu.classList.toggle('is-active');
});