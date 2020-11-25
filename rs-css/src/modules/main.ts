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

// function setId(elem: HTMLElement) {
//   let i = 0;

//   function privSetId(el: HTMLElement) {
//     el.dataset.uid = i.toString();
//     i += 1;

//     if (el.children.length === 0) return;

//     const children = Array.from(el.children);

//     children.forEach((child) => {
//       privSetId(child as HTMLElement);
//     });
//   }

//   privSetId(elem);
//   return elem;
// }

function highlight(e: MouseEvent) {
  e.stopPropagation();

  const tableItems = Array.from(document.querySelectorAll('.table *'));
  const HTMLLines = Array.from(document.querySelectorAll('.html-view .view__lines *'));
  const element = e.target;

  let elIndex = tableItems.indexOf(element);

  if (elIndex === -1) elIndex = HTMLLines.indexOf(element);

  const tableElement = tableItems[elIndex];
  const viewElememnt = HTMLLines[elIndex];

  if (e.type === 'mouseover') {
    tableElement.classList.add('active');
    viewElememnt.classList.add('active');
  }

  if (e.type === 'mouseout') {
    tableElement.classList.remove('active');
    viewElememnt.classList.remove('active');
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
