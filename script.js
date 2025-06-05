// script.js
// Pentru funcționalități suplimentare (ex: scroll smooth, pop-up rezervare etc) 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 

window.addEventListener('scroll', function() {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 20) {
    header.classList.add('frosted');
  } else {
    header.classList.remove('frosted');
  }
}); 

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
  burgerBtn.addEventListener('click', function() {
    const isOpen = navMenu.classList.toggle('open');
    burgerBtn.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Închide meniul la click pe link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      burgerBtn.classList.remove('active');
      document.body.classList.remove('menu-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Închide meniul la click în afara meniului
  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !burgerBtn.contains(e.target)
    ) {
      navMenu.classList.remove('open');
      burgerBtn.classList.remove('active');
      document.body.classList.remove('menu-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
} 

// --- FILTRARE MENIU RESTAURANT ---
document.querySelectorAll('.menu-cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.menu-cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const cat = this.getAttribute('data-category');
    document.querySelectorAll('.menu-card').forEach(card => {
      if (cat === 'toate' || card.getAttribute('data-category') === cat) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
}); 

// --- SELECTOR CAMERE HOME ---
const roomTypes = document.querySelectorAll('.room-type');
const roomImg = document.getElementById('roomMainImg');
if(roomTypes && roomImg) {
  roomTypes.forEach(type => {
    type.addEventListener('click', function() {
      roomTypes.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      // Tranziție fade la schimbare imagine
      roomImg.classList.add('fading');
      setTimeout(() => {
        roomImg.src = this.getAttribute('data-img');
        roomImg.alt = this.getAttribute('data-title');
      }, 200);
    });
  });
  // Când imaginea s-a încărcat, elimin fading pentru fade-in
  roomImg.addEventListener('load', function() {
    roomImg.classList.remove('fading');
  });
} 

document.addEventListener('DOMContentLoaded', function() {
  const catBtns = document.querySelectorAll('.room-cat-btn');
  const cards = document.querySelectorAll('.room-list-card');
  catBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      catBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-cat');
      cards.forEach(card => {
        if (cat === 'toate' || card.getAttribute('data-cat') === cat) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}); 