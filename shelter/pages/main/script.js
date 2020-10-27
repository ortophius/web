const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

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

function getSlotsCount() {
  const width = window.innerWidth;
  console.log(width);
  if (width <= 768) { return 1 }
  else if (width <= 1280) { return 2 }
  else { return 3 }
}

function createCard(petInfo) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div class="slider__card card" data-petid="${petInfo.id}">
    <div class="slider__photo" data-src="${petInfo.img}"></div>
    <h3 class="card__name">${petInfo.name}</h3>
    <button class="button button_transparent button_learn" data-petid="${petInfo.id}">Learn more</button>
  </div>`;
  return wrapper.firstElementChild;
}

function updateCards() {
  const cards = document.querySelector('.slider__cards');
    sloutsCount = getSlotsCount(),
    cardIds = getCurrentCardIds();

  let nextDataset = pets.map((item, i) => {
      item.id = i;
      return item;
    }).filter((item) => {
      let isDisplayed = false;
      cardIds.forEach((petId) => {
        if (item.id == petId) isDisplayed = true;
      });
      return !isDisplayed;
    })

  cards.classList.add('fade-out');

  setTimeout(function() {
    cards.innerHTML = '';
    for (let i = 0; i < sloutsCount; i++) {
      const card = createCard(getRandomArrayItem(nextDataset));
      cards.appendChild(card);
      nextDataset.forEach((item, i) => {
        if (Number(card.dataset.petid) === item.id) nextDataset.splice(i, 1);
      })
    }
    displayPhotos();
    setupListeners();
    cards.classList.remove('fade-out');
    cards.classList.add('fade-in');
    setInterval(() => {
      cards.classList.remove('fade-in');
    }, 400);
  }, 400)
}

function getRandomArrayItem(arr) {
  const index = Math.round(Math.random() * (arr.length - 1));
  return arr[index];
}

function getCurrentCardIds() {
  const sloutsCount = getSlotsCount(),
    cards = document.querySelectorAll('.slider__card'),
    res = [];

  
  for (let i = 0; i < cards.length; i++) {
    res.push(cards[i].dataset.petid)
  }

  return res;
}

function displayPhotos() {
  const photos = document.querySelectorAll('.slider__photo');
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    photo.style.backgroundImage = `url(${photo.getAttribute('data-src')})`;
  }
}

function setupListeners() {
  const buttons = document.querySelectorAll('.button_learn');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openModal);
  }
}

function openModal(e) {
  const petId = e.target.dataset.petid;
  
  const imageBlock = document.querySelector('.pet__image'),
    petName = document.querySelector('.pet__name'),
    petBreed = document.querySelector('.pet__breed'),
    petDescription = document.querySelector('.pet__description'),
    petList = document.querySelector('.pet__list'),
    wrapper = document.querySelector('.pet-wrapper');
    petInfo = pets[petId];

  imageBlock.style.backgroundImage = `url("${petInfo.img}")`;
  petName.textContent = petInfo.name;
  petBreed.textContent = `${petInfo.type} - ${petInfo.breed}`;
  petDescription.textContent = petInfo.description

  let list = '';
  list += `<li class="pet__addinfo"><b>Age:</b> ${petInfo.age}</li>`;
  list += `<li class="pet__addinfo"><b>Inoculations:</b> ${petInfo.inoculations.join(', ')}</li>`;
  list += `<li class="pet__addinfo"><b>Diseases:</b> ${petInfo.diseases.join(', ')}</li>`;
  list += `<li class="pet__addinfo"><b>Parasites:</b> ${petInfo.parasites.join(', ')}</li>`;

  petList.innerHTML = list;

  wrapper.classList.add('pet-wrapper_active');
}

function closeModal() {
  const wrapper = document.querySelector('.pet-wrapper');
  wrapper.classList.remove('pet-wrapper_active');
}

document.addEventListener('DOMContentLoaded', updateCards)
document.querySelector('.slider__button_next').addEventListener('click', updateCards);
document.querySelector('.slider__button_prev').addEventListener('click', updateCards);
burger.addEventListener('click', toggleMenu);
document.querySelector('.pet__close').addEventListener('click', closeModal);
document.querySelector('.pet-wrapper__background').addEventListener('click', closeModal);