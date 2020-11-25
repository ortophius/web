/* eslint-disable no-param-reassign */

import '../styles.scss';
import './view';
import levels from './levels';

let goalElem: HTMLElement;
let sidebarTitle: HTMLElement;
let sidebarSubTitle: HTMLElement;
let sidebarSelector: HTMLElement;
let description: HTMLElement;
let table: HTMLElement;

let currentLevel: number;

let errAnimation: boolean = false;

const parser = new DOMParser();

function setErrAnimation(selector: string, state: boolean = true) {
  const views = document.querySelectorAll('.view');
  const elems = document.querySelectorAll(`.table ${selector}`);

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

function checkAnswer(e: KeyboardEvent) {
  if (e.code !== 'Enter') return;

  let win = true;

  e.preventDefault();

  const selector = (e.target as HTMLElement).innerText;

  if (selector === '') return;

  const rightCollection = document.querySelectorAll(`.table ${levels[currentLevel].selector}`);
  const collection = document.querySelectorAll(`.table ${selector}`);

  if (collection && collection.length) {
    collection.forEach((item, i) => { if (item !== rightCollection[i]) win = false; });
  } else win = false;

  if (!win) setErrAnimation(selector);
}

function insertElemIntoViewer(elem: Element, parent: Element) {
  const elems: Element[] = Array.from(elem.children);

  elems.forEach((child) => {
    const div = document.createElement('div');
    div.dataset.uid = (child as HTMLElement).dataset.uid;
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
    .filter((attr) => attr.name !== 'data-active')
    .filter((attr) => attr.value !== 'select')
    .map((attr) => `${attr.name}="${attr.value}"`)
    .join(' ');

  if (attrString.length) toolTipDiv.innerHTML += ` ${attrString}`;

  const endPart = (element.children.length)
    ? `&gt;&lt;${element.tagName.toLowerCase()}/&gt;`
    : '/&gt;';

  toolTipDiv.innerHTML += endPart;

  document.querySelector('.table').appendChild(toolTipDiv);
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

  elements.forEach((item) => {
    item.addEventListener('mouseover', highlight);
    item.addEventListener('mouseout', highlight);
  });

  const { selector } = level;

  setInterval(() => {
    document.querySelectorAll(`.table ${selector}`).forEach((item) => { item.classList.add('select'); });
  }, 200);
}

function start() {
  table = document.querySelector('.table');
  goalElem = document.querySelector('.cafe__goal');
  sidebarTitle = document.querySelector('.sidebar__title');
  sidebarSubTitle = document.querySelector('.sidebar__subtitle');
  description = document.querySelector('.sidebar__description');
  sidebarSelector = document.querySelector('.sidebar__selector');

  currentLevel = 0;
  loadLevel(levels[currentLevel]);

  document.querySelector('.view__editable').addEventListener('keydown', checkAnswer);
}

document.addEventListener('DOMContentLoaded', start);
