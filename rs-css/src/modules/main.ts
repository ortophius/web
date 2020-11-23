import '../styles.scss';
import './view';
import levels from './levels';

let goalElem: HTMLElement;
let sidebarTitle: HTMLElement;
let sidebarSubTitle: HTMLElement;
let sidebarSelector: HTMLElement;
let description: HTMLElement;
let table: HTMLElement;

const parser = new DOMParser();

function loadLevel(level: Level) {
  goalElem.innerText = level.goal;

  description.innerHTML = '';
  sidebarTitle.innerText = level.description.title;
  sidebarSubTitle.innerText = level.description.subtitle;
  sidebarSelector.innerText = level.description.selector;
  description.innerText += level.description.info;

  description.innerHTML += '<br><br>Примеры:<br>';

  level.description.examples.forEach((example) => {
    description.innerHTML += '<hr>';
    description.innerHTML += example;
  });

  const root = parser.parseFromString(level.dom, 'text/html').getElementsByTagName('root')[0];
  // const nodes: ChildNode[] = Array.from(root.childNodes);

  table.innerHTML = '';
  table.innerHTML = root.innerHTML;
}

function start() {
  table = document.querySelector('.table');
  goalElem = document.querySelector('.cafe__goal');
  sidebarTitle = document.querySelector('.sidebar__title');
  sidebarSubTitle = document.querySelector('.sidebar__subtitle');
  description = document.querySelector('.sidebar__description');
  sidebarSelector = document.querySelector('.sidebar__selector');

  loadLevel(levels[0]);
}

document.addEventListener('DOMContentLoaded', start);
