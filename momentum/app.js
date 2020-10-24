const storage = window.localStorage;

const wrapper = document.querySelector('.wrapper'),
  time = document.getElementsByTagName('time')[0],
  calendarDate = document.getElementById('date'),
  dayTime = document.getElementById('daytime'),
  name = document.getElementById('name'),
  goal = document.getElementById('goal'),
  quote = document.getElementById('quote'),
  city = document.getElementById('city'),
  img = document.createElement('img');
  quotesURL = 'http://134.0.116.189:3000/';

let currentBackground = '';


const WEEK_DAYS = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

const MONTHS = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
];

const DAYTIMES = [
  'Доброй ночи',
  'Доброе утро',
  'Добрый день',
  'Добрый вечер'
];

const IMAGE_FOLDERS = [
  'night',
  'morning',
  'day',
  'evening'
]

const imageList = [];

const INIT_NAME = '[имя]',
  INIT_GOAL = '[Полететь на Луну]';

const init = {
  NAME: '[имя]',
  GOAL: '[Полететь на Луну]',
  CITY: '[Введите город]',
  CURRENT_IMAGE_NAME_NUM: 1,
}

// Load
function load() {
  updateWeather();
  updateQuote();
  createImageList();
  updateBackgroundImage();
  update();
  setInterval(update, 1000);

  const nameText = storage.getItem('name'),
    goalText = storage.getItem('goal'),
    imageNum = storage.getItem('imageNum'),
    cityText = storage.getItem('city');

  if (nameText && goalText && imageNum && cityText) {
    city.textContent = cityText;
    name.textContent = nameText;
    goal.textContent = goalText;
    return;
  }
  else if (!cityText) storage.setItem('city', init.CITY);
  else if (!nameText) storage.setItem('name', init.NAME);
  else if (!goalText) storage.setItem('goal', init.GOAL);
  else if (!imageNum) storage.setItem('imageNum', init.CURRENT_IMAGE_NAME_NUM);
  load();
}

// https://api.openweathermap.org/data/2.5/weather?q=BA&lang=ru&appid=4fd57fb55adeae28d057069a1cf77765

function sendHTTPRequest(url, body = '', errcalback = () => {}) {
  return new Promise(function(resolve) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, 'async');
    xhr.send(body)
  
    xhr.onload = function() {
      if (xhr.status !== 200) {
        errcalback(xhr.status);
        return;
      };
      resolve(xhr.response);
    };
  
    xhr.onerror = function() {
     console.log(`XHR Error! ${xhr.status}: ${xhr.statusText}`);
    }
  });
}

function setCity(e) {
  if (e.key && e.key !== "Enter") return;
  if (city.textContent === storage.getItem('city')) return;

  e.preventDefault();
  
  if (city.textContent.trim() === '') { 
    city.textContent = storage.getItem('city');
    city.blur();

   }

  storage.setItem('city', city.textContent);

  city.blur();
  updateWeather(city.textContent);
}

async function updateWeather() {
  cityName = storage.getItem('city');
  console.log(cityName);
  if (cityName === init.CITY) return;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru&appid=4fd57fb55adeae28d057069a1cf77765`;
  
  let error = null;

  const response = JSON.parse(await(sendHTTPRequest(url, '', function(code) {
    console.log(code);
    document.querySelector('#weather-message').textContent = 'Информация о погоде для этого города не найдена :(';
    document.querySelector('#weather-info').classList.add('invisible');
  })));

  const temp = response.main.temp,
    icon = response.weather[0].id,
    humidity = response.main.humidity,
    windSpeed = response.wind.speed;

  document.querySelector('#weather-message').textContent = '';
  document.querySelector('#weather-icon').className = 'owf';
  document.querySelector('#weather-icon').classList.add(`owf-${icon}`);
  document.querySelector('#weather-temp').innerHTML = `Температура: ${temp}<sup>0<sup>`;
  document.querySelector('#weather-humidity').textContent = `Влажность воздуха: ${humidity}%`;
  document.querySelector('#weather-wind').textContent = `Скорость ветра: ${windSpeed} м/с`;
  document.querySelector('#weather-info').classList.remove('invisible');
}

async function updateQuote() {
  if (quote.classList.contains('animating')) return;
  quote.classList.add('animating');
  quote.style.opacity = 0;

  const apiResponse = JSON.parse(await sendHTTPRequest(quotesURL));

  setTimeout(function() {
    quote.textContent = apiResponse.quoteText;
    quote.style.opacity = 1;
  }, 500);

  setTimeout(function() { quote.classList.remove('animating') }, 1000)
}

function createImageList() {
  IMAGE_FOLDERS.forEach(function(daytime) {
    for (let i = 0; i < 6; i++) {
      imageList.push(getRandomImage(daytime));
    }
  });
  console.log(imageList);
}

function getRandomImage(daytime) {
  const imageNum = Math.floor(Math.random() * (19)) + 1;
  const imagePath = getImagePath(daytime, imageNum);

  if (imageList.indexOf(imagePath) !== -1) return getRandomImage(daytime);
  return imagePath;
}

function getImagePath(folder = IMAGE_FOLDERS[0], number = 1) {
  return `./images/${folder}/${format(number)}.jpg`;
}

function updateBackgroundImage(currentDate = new Date()) {
  const imageIndex = currentDate.getHours(),
    imagePath = imageList[imageIndex];

  setBackground(imagePath);
}

function setBackground(imagePath) {
  const classList = document.body.classList;

  if (classList.contains("animating")) return;

  currentBackground = imagePath;

  img.src = imagePath
  img.onload = () => { document.body.style.backgroundImage = `url(${imagePath})`; };

  const imageIndex = imageList.indexOf(imagePath),
  daytimeIndex = Math.floor(imageIndex / 6);

  wrapper.className = 'wrapper';
  if (daytimeIndex === 1 || daytimeIndex === 2) {
    wrapper.classList.add('dark');
  }
  else {
    wrapper.classList.add('light');
  }

  classList.add('animating');
  setTimeout(function() {
    classList.remove('animating');
  }, 1000);
}

function nextBackground() {
  const nextImageIndex = imageList.indexOf(currentBackground) + 1,
    nextImagePath = imageList[nextImageIndex % imageList.length];

  setBackground(nextImagePath);
}

// Update
function update() {
  const date = new Date();

  const day = WEEK_DAYS[date.getDay()],
    month = MONTHS[date.getMonth()],
    monthDay = date.getDate(),
    hours = date.getHours(),
    minutes = format(date.getMinutes()),
    seconds = format(date.getSeconds());

  const dateString = `${day}, ${monthDay} ${month}`;
  const timeString = `${format(hours)}:${minutes}:${seconds}`;

  // Update text nodes
  calendarDate.textContent = dateString;
  time.textContent = timeString;
  dayTime.textContent = DAYTIMES[getDayTime(date)];

  // Update background image
  if (seconds == 0 && minutes == 0) updateBackgroundImage();
}

// Format
function format(num) {
  return (String(num).length === 2) ? num : '0' + num;
}

// GetDayTime
function getDayTime(date) {
  const hours = date.getHours();

  if (hours < 6) return 0
  else if (hours < 12) return 1;
  else if (hours < 18) return 2;
  else if (hours < 23) return 3;
}

function clearInput(e) {
  e.target.innerHTML = '\u00a0';
  console.log(e.target);

  // A bugfix from stackoverflow
  // https://stackoverflow.com/questions/2388164/set-focus-on-div-contenteditable-element
  const p = e.target,
    s = window.getSelection(),
    r = document.createRange();
  
  p.innerHTML = '\u00a0';
  r.selectNodeContents(p);
  s.removeAllRanges();
  s.addRange(r);

  document.execCommand('delete', false, null);
}

function setName(e) {
  if (e.key && e.key !== "Enter") return;
  
  e.preventDefault();
  name.blur();

  if (name.textContent.trim() === '') { 
    name.textContent = storage.getItem('name');
   }

  storage.setItem('name', name.textContent);
}

function setGoal(e) {
  if (e.key && e.key !== "Enter") return;
  
  e.preventDefault();
  goal.blur();
  
  if (goal.textContent.trim() === '') { 
    goal.textContent = storage.getItem('goal');
   }

  storage.setItem('goal', goal.textContent);
}

load();

document.querySelector('#name').addEventListener('focus', clearInput);
document.querySelector('#goal').addEventListener('focus', clearInput);
document.querySelector('#city').addEventListener('focus', clearInput);

document.querySelector('#name').addEventListener('blur', setName);
document.querySelector('#name').addEventListener('keypress', setName);

document.querySelector('#goal').addEventListener('blur', setGoal);
document.querySelector('#goal').addEventListener('keypress', setGoal);

document.querySelector('#city').addEventListener('blur', setCity);
document.querySelector('#city').addEventListener('keypress', setCity);

document.querySelector('#bg-refresh').addEventListener('click', nextBackground);
document.querySelector('#quote-refresh').addEventListener('click', updateQuote);
