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
        '<pre>div *</pre> выбирает все элементы внутри div',
      ],
    },
  },
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
        '<pre>div *</pre> выбирает все элементы внутри div',
      ],
    },
  },
];

export default levels;
