const photos = document.querySelectorAll('.slider__photo');
for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  photo.style.backgroundImage = `url(${photo.getAttribute('data-src')})`;
}

const burger = document.querySelector('.menu__burger'),
  menu = document.querySelector('.menu'),
  blackout = document.querySelector('.blackout'),
  logo = document.querySelector('.logo');
  
  let menuActive = false;
  
  function toggleMenu() {
    menuActive = !menuActive;
  
    if(menuActive) openMenu();
    else closeMenu()
  }
  
  function openMenu() {
    menuActive = true;
  
    menu.classList.add('menu_active');
    burger.classList.add('menu__burger_active');
    blackout.classList.add('blackout_active');
    logo.classList.add('logo_active');
    blackout.addEventListener('click', closeMenu);
  }
  
  function closeMenu() {
    menuActive = false;
  
    menu.classList.remove('menu_active');
    burger.classList.remove('menu__burger_active');
    blackout.classList.remove('blackout_active');
    logo.classList.remove('logo_active');
    blackout.removeEventListener('click', closeMenu);
  }
  
burger.addEventListener('click', toggleMenu);