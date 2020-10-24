const photos = document.querySelectorAll('.card__photo');
for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  photo.style.backgroundImage = `url(${photo.getAttribute('data-src')})`;
}

const burger = document.querySelector('.menu__burger'),
  menu = document.querySelector('.menu'),
  logo = document.querySelector('.logo');

let menuActive = false;

function toggleMenu() {
  menuActive = !menuActive;

  if(menuActive) {
    menu.classList.add('menu_active');
    burger.classList.add('menu__burger_active');
    logo.classList.add('logo_active');
  }
  else {
    menu.classList.remove('menu_active');
    burger.classList.remove('menu__burger_active');
    logo.classList.remove('logo_active');
  }
}

burger.addEventListener('click', toggleMenu);