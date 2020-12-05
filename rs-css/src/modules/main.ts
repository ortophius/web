/* eslint-disable no-param-reassign */

import '../styles.scss';
import './view';
import levels, { getTemplate } from './levels';

let goalElem: HTMLElement;
let sidebarTitle: HTMLElement;
let sidebarSubTitle: HTMLElement;
let sidebarSelector: HTMLElement;
let description: HTMLElement;
let table: HTMLElement;
let listDiv: HTMLElement;
let info: HTMLElement;
let enter: HTMLElement;

let errAnimation: boolean = false;

let showLevels = false;

const parser = new DOMParser();

/**
 * Time for kostily!
 */
const tmp = document.createElement('textarea');

function congrats() {
  goalElem.textContent = 'Поздравляем, теперь вы можете в CSS!';
}

function initStorage() {
  const solvedLevels = JSON.stringify(Array(levels.length).fill(false));
  localStorage.setItem('currentLevel', '0');
  localStorage.setItem('solvedLevels', solvedLevels);
  localStorage.setItem('menu', '0');
}

function getLevel(): number | null {
  const res = localStorage.getItem('currentLevel');

  return (!res) ? null : Number(res);
}

function getSolved(): boolean[] | null {
  const res = localStorage.getItem('solvedLevels');

  if (!res) return null;

  return JSON.parse(res);
}

function checkStorage() {
  const level = getLevel();

  if (level === null) initStorage();

  const solvedLevels = getSolved();

  if (solvedLevels.length !== levels.length) {
    const addLength = levels.length - solvedLevels.length;
    const addArray = Array(addLength).fill(false);

    localStorage.setItem('solvedLevels', JSON.stringify([...solvedLevels, ...addArray]));
  }
}

function toggleLevelsList() {
  showLevels = !showLevels;

  if (showLevels) {
    listDiv.classList.add('levels_active');
    info.classList.remove('info_active');
  } else {
    info.classList.add('info_active');
    listDiv.classList.remove('levels_active');
  }

  localStorage.setItem('menu', (showLevels) ? '1' : '0');
}

function setLevel(e) {
  if (!(this).classList.contains('level')) return;

  const num = Number(e.currentTarget.dataset.num);
  const currentLevel = getLevel();

  if (num === currentLevel) return;

  localStorage.setItem('currentLevel', num.toString());

  loadLevel();
}

function buildLevelList() {
  const solved = getSolved();

  const levelLines = document.querySelectorAll('.level');

  if (levelLines.length > 0) levelLines.forEach((line) => line.remove());

  levels.forEach((level, i) => {
    const levelDiv = getTemplate() as HTMLElement;

    levelDiv.dataset.num = i.toString();

    levelDiv.querySelector('.level__title').innerHTML = `${(i + 1).toString()}. `;
    levelDiv.querySelector('.level__title').innerHTML += level.description.title;

    if (solved[i]) levelDiv.querySelector('.level__icon').innerHTML = '<i class="fas fa-check"></i>';

    listDiv.appendChild(levelDiv);
  });

  document.querySelectorAll('.level').forEach((line) => {
    line.addEventListener('click', setLevel);
  });
}

function setErrAnimation(selector: string, state: boolean = true) {
  const views = document.querySelectorAll('.view');
  let elems: NodeListOf<Element> | any[];

  try {
    elems = document.querySelectorAll(`.table ${selector}`);
  } catch (err) {
    elems = [];
  }

  views.forEach((elem) => {
    if (state) elem.classList.add('wrong');
    else elem.classList.remove('wrong');
  });

  elems.forEach((elem) => {
    if (state) elem.classList.add('wrong');
    else elem.classList.remove('wrong');
  });

  if (!errAnimation) {
    setTimeout(() => {
      setErrAnimation(selector, false);
      errAnimation = false;
    }, 400);
  }

  errAnimation = true;
}

function removeItems() {
  return new Promise<void>((resolve) => {
    const { selector } = levels[getLevel()];
    const elems = document.querySelectorAll(`.table ${selector}`);
    const lines = Array.from(document.querySelector('.html-view .view__lines').children);

    elems.forEach((elem) => elem.classList.add('remove'));

    lines.forEach((line) => { line.remove(); });

    setTimeout(() => {
      elems.forEach((elem) => elem.remove());
      resolve();
    }, 200);
  });
}

function allDone() {
  const solved = getSolved();
  return solved.every((isSolved) => isSolved);
}

async function checkAnswer(e: KeyboardEvent | MouseEvent) {
  const keyboardEventObject = e as KeyboardEvent;
  if (keyboardEventObject.code && keyboardEventObject.code !== 'Enter') return;

  let win = true;

  e.preventDefault();

  tmp.innerHTML = document.querySelector('.view__editable').innerHTML;
  const selector = tmp.value;

  if (selector === '') return;

  const rightCollection = document.querySelectorAll(`.table ${levels[getLevel()].selector}`);
  let collection: NodeListOf<Element>;

  try {
    collection = document.querySelectorAll(`.table ${selector}`);
  } catch (err) {
    win = false;
  }

  if (collection && collection.length && (collection.length === rightCollection.length)) {
    collection.forEach((item, i) => { if (item !== rightCollection[i]) win = false; });
  } else win = false;

  if (!win) setErrAnimation(selector);

  if (win) {
    const solved = getSolved();
    solved[getLevel()] = true;
    localStorage.setItem('solvedLevels', JSON.stringify(solved));
    buildLevelList();

    await removeItems();

    if (allDone()) congrats();
    else if (getLevel() <= levels.length) {
      const nextLevel = getLevel() + 1;
      localStorage.setItem('currentLevel', nextLevel.toString());
      loadLevel();
    }
  }
}

function insertElemIntoViewer(elem: Element, parent: Element) {
  const elems: Element[] = Array.from(elem.children);

  elems.forEach((child) => {
    const div = document.createElement('div');
    parent.appendChild(div);

    div.innerHTML += `&lt;${child.tagName.toLowerCase()}`;

    const { attributes } = child;
    if (attributes && attributes.length > 0) {
      for (let i = 0; i < attributes.length; i += 1) {
        const attr = attributes[i];
        div.innerHTML += ` ${attr.name}="${attr.value}"`;
      }
    }

    if (child.children.length > 0) {
      div.innerHTML += '&gt;';
      insertElemIntoViewer(child, div);
      div.innerHTML += `&lt;/${child.tagName.toLowerCase()}&gt;`;
    } else div.innerHTML += '/&gt;';
  });
}

function toggletoolTip(element: Element, show: boolean = true) {
  if (!show) {
    Array
      .from(document.querySelectorAll('.tooltip'))
      .forEach((item) => { item.remove(); });
    return;
  }

  const toolTipDiv = document.createElement('div');
  toolTipDiv.classList.add('tooltip');

  toolTipDiv.innerHTML += `&lt;${element.tagName.toLowerCase()}`;

  const attrString = Array.from(element.attributes)
    .filter((attr) => attr.value !== '')
    .filter((attr) => attr.name !== 'data-active')
    .filter((attr) => attr.value !== 'select')
    .map((attr) => `${attr.name}="${attr.value}"`)
    .join(' ');

  if (attrString.length) toolTipDiv.innerHTML += ` ${attrString}`;

  const endPart = (element.children.length)
    ? `&gt;&lt;${element.tagName.toLowerCase()}/&gt;`
    : '/&gt;';

  toolTipDiv.innerHTML += endPart;

  const rect = element.getBoundingClientRect();

  toolTipDiv.style.top = `${rect.top - 50}px`;
  toolTipDiv.style.left = `${rect.left}px`;

  document.body.appendChild(toolTipDiv);
}

function highlight(e: MouseEvent) {
  e.stopPropagation();

  const tableItems = Array.from(document.querySelectorAll('.table *'));
  const HTMLLines = Array.from(document.querySelectorAll('.html-view .view__lines *'));
  const element = e.target as Element;

  let elIndex = tableItems.indexOf(element);

  if (elIndex === -1) elIndex = HTMLLines.indexOf(element);

  const tableElement = tableItems[elIndex] as HTMLElement;
  const viewElememnt = HTMLLines[elIndex] as HTMLElement;

  if (e.type === 'mouseover') {
    tableElement.dataset.active = 'true';
    viewElememnt.dataset.active = 'true';
    toggletoolTip(tableElement);
  }

  if (e.type === 'mouseout') {
    tableElement.dataset.active = 'false';
    viewElememnt.dataset.active = 'false';
    toggletoolTip((tableElement), false);
  }
}

function loadLevel() {
  document.querySelector('.view__editable').innerHTML = '';

  const level = levels[getLevel()];

  removeItems();
  goalElem.innerText = `${getLevel() + 1} ${level.goal}`;

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

  const { body } = parser.parseFromString(level.dom, 'text/html');

  const htmlViewer: HTMLElement = document
    .querySelector('.html-view')
    .querySelector('.view__lines');

  insertElemIntoViewer(body, htmlViewer);

  table.innerHTML = '';
  table.innerHTML = body.innerHTML;

  const tableItems = Array.from(document.querySelectorAll('.table *'));
  const HTMLLines = Array.from(document.querySelectorAll('.html-view .view__lines *'));

  const elements = [...tableItems, ...HTMLLines];

  tableItems.forEach((item) => { item.classList.add('appear'); });

  elements.forEach((item) => {
    item.addEventListener('mouseover', highlight);
    item.addEventListener('mouseout', highlight);
  });

  const { selector } = level;

  setTimeout(() => {
    tableItems.forEach((item) => { item.classList.remove('appear'); });
    document.querySelectorAll(`.table ${selector}`).forEach((item) => { item.classList.add('select'); });
  }, 200);

  const levelLines = document.querySelectorAll('.level');

  levelLines.forEach((line) => { line.classList.remove('level__current'); });

  levelLines[getLevel()].classList.add('level__current');
}

function changeLevel(e) {
  const prevLevel = getLevel();
  let currentLevel = prevLevel;
  const arrow = e.target;
  const lastLevel = levels.length - 1;

  if (arrow.classList.contains('prev')) currentLevel -= 1;
  else currentLevel += 1;

  if (currentLevel < 0) currentLevel = 0;
  if (currentLevel > lastLevel) currentLevel = lastLevel;

  localStorage.setItem('currentLevel', currentLevel.toString());

  if (prevLevel !== currentLevel) loadLevel();
}

function start() {
  listDiv = document.querySelector('.levels');
  table = document.querySelector('.table');
  goalElem = document.querySelector('.cafe__goal');
  sidebarTitle = document.querySelector('.sidebar__title');
  sidebarSubTitle = document.querySelector('.sidebar__subtitle');
  description = document.querySelector('.sidebar__description');
  sidebarSelector = document.querySelector('.sidebar__selector');
  info = document.querySelector('.info');
  enter = document.querySelector('.view__enter');

  checkStorage();
  buildLevelList();
  loadLevel();

  document.querySelector('.view__editable').addEventListener('keydown', checkAnswer);
  document.querySelector('.burger').addEventListener('click', toggleLevelsList);
  document.querySelector('.reset').addEventListener('click', () => { initStorage(); start(); });
  document.querySelectorAll('.arrow').forEach((arrow) => {
    arrow.addEventListener('click', changeLevel);
  });

  enter.addEventListener('click', checkAnswer);

  const tab = localStorage.getItem('menu');

  if (tab === '1') toggleLevelsList();
}

document.addEventListener('DOMContentLoaded', start);
