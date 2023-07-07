let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
  
};
