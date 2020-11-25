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

const parser = new DOMParser();

function insertElemIntoViewer(elem: Element, parent: Element) {
  const elems: Element[] = Array.from(elem.children);

  elems.forEach((child) => {
    const div = document.createElement('div');
    div.dataset.uid = (child as HTMLElement).dataset.uid;
    parent.appendChild(div);

    div.innerHTML += `&lt;${child.tagName.toLowerCase()}&gt;`;

    if (child.children.length > 0) insertElemIntoViewer(child, div);

    div.innerHTML += `&lt;${child.tagName.toLowerCase()}/&gt;`;
  });
}

function setId(elem: HTMLElement) {
  let i = 0;

  function privSetId(el: HTMLElement) {
    el.dataset.uid = i.toString();
    i += 1;

    if (el.children.length === 0) return;

    const children = Array.from(el.children);

    children.forEach((child) => {
      privSetId(child as HTMLElement);
    });
  }

  privSetId(elem);
  return elem;
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

  console.log(setId(body));

  const htmlViewer: HTMLElement = document
    .querySelector('.html-view')
    .querySelector('.view__lines');

  insertElemIntoViewer(body, htmlViewer);

  table.innerHTML = '';
  table.innerHTML = body.innerHTML;
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
