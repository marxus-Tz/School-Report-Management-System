
let menuBtn= document.querySelector('#menu-btn');
let nav= document.querySelector('.header .flex .navbar');

menuBtn.oncllck=()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

