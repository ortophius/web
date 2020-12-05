import * as levelTemplateString from './level.pug';

const parser = new DOMParser();
const levelTemplate = parser
  .parseFromString(levelTemplateString, 'text/html')
  .querySelector('body *');

export function getTemplate() {
  return levelTemplate.cloneNode(true);
}

const levels: Level[] = [
  {
    goal: 'Выберите все вещи на столе',
    dom: '<plate><pickle/></plate><plate><sushi/></plate></pickle><bento/>',
    selector: '*',
    description: {
      title: 'Универсальный селектор',
      subtitle: 'Выбирает все элементы',
      selector: '*',
      info: 'Вы можете выбрать все элементы с помощью универсального селектора.',
      examples: [
        '<pre>*</pre> выбирает все элементы на странице',
      ],
    },
  },
  {
    goal: 'Выберите все тарелки на столе',
    dom: '<plate><sushimi/></plate><plate></plate><bento><sushi/></bento>',
    selector: 'plate',
    description: {
      title: 'Селектор тэга',
      subtitle: 'Выбирает элементы с заданным тэгом',
      selector: 'A',
      info: 'Вы можете выбрать элементы с заданным тегом, указав его имя в селекторе.',
      examples: [
        '<pre>div</pre> выбирает все элементы с тэгом div',
      ],
    },
  },
  {
    goal: 'Выберите синюю тарелку',
    dom: '<plate><sushimi/></plate><plate class="blue"></plate><plate/>',
    selector: 'plate.blue',
    description: {
      title: 'Селектор класса',
      subtitle: 'Выбирает элементы с заданным классом',
      selector: 'div.A',
      info: 'Для нескольких элементов с одинаковым тэгом могут быть указаны разные классы. Для их выбора вы можете использовать селектор класса.',
      examples: [
        '<pre>div</pre> выбирает все элементы с тэгом div',
      ],
    },
  },
];

export default levels;
