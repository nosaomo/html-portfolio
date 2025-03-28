const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal({
  distance: '40px',
  duration: 2600,
  reset: true,
}); 

sr.reveal('.home-text', {delay: 300, origin: 'left'});
sr.reveal('.featured, .cta-text, .new, .brand-content, .contact, .last-text, top', {delay: 100, origin: 'bottom'});