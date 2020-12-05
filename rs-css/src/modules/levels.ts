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
    goal: 'Выберите все тарелки',
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
  {
    goal: 'Выберите суши внутри бенто',
    dom: `<plate><sushimi></sushimi></plate>
    <plate></plate>
    <sushi></sushi>
    <bento>
      <sushi></sushi>
    </bento>`,
    selector: 'bento sushi',
    description: {
      title: 'Селектор потомков',
      subtitle: 'Выбирает всех потомков с заданным селектором B',
      selector: 'A B',
      info: 'Для нескольких элементов с одинаковым тэгом могут быть указаны разные классы. Для их выбора вы можете использовать селектор класса.',
      examples: [
        '<pre>div p.message</pre> выбирает все элементы <pre>p</pre> с классом <pre>message</pre> внутри <pre>div</pre>',
      ],
    },
  },
  {
    goal: 'Выберите огурец, лежащий на тарелке',
    dom: `
      <plate>
        <bento>
          <pickle></pickle>
        </bento>
      </plate>
      <pickle></pickle>
      <plate>
        <pickle></pickle>
      </plate>`,
    selector: 'plate > pickle',
    description: {
      title: 'Селектор непосредственных потомков',
      subtitle: 'Выбирает непосредственного потомка внутри элемента А',
      selector: 'A > B',
      info: 'Непосредственными потомками являются элементы, расположенные на первом уровне вложнености внутри своего родителя',
      examples: [
        '<pre>ul > li</pre> выберет <pre>li</pre>, которые являются непосредственными потомками <pre>ul</pre>.',
      ],
    },
  },
  {
    goal: 'Выберите все суши, следующие после тарелки',
    dom: `<sushi>
    </sushi>
    <plate></plate>
    <sushi>
    </sushi>
    <sushi>
    </sushi>`,
    selector: 'plate ~ sushi',
    description: {
      title: 'Селектор соседей',
      subtitle: 'Выбирает элементы B, следующие после A',
      selector: 'A ~ B',
      info: 'Этот селектор используется для выбора элементов, следующих после указанного элемента',
      examples: [
        '<pre>div ~ a</pre> выбирает элемент <pre>a</pre> после <pre>div</pre>',
      ],
    },
  },
  {
    goal: 'Выберите огурец рядом с суши',
    dom: `<bento></bento>
    <sushi></sushi>
    <pickle></pickle>
    <plate>
      <pickle></pickle>
    </plate>`,
    selector: 'sushi + pickle',
    description: {
      title: 'Селектор непосредственных соседей',
      subtitle: 'Выбирает элемент B, если он следует после элемента A',
      selector: 'A + B',
      info: 'Вы можете выбрать элемент, который следует сразу за другим элементом',
      examples: [
        '<pre>p + a</pre> выбирает элемент <pre>a</pre>, если он следует сразу за <pre>p</pre>',
      ],
    },
  },
  {
    goal: 'Выберите нижний суши на бенто',
    dom: `
    <bento>
      <sushi>
      </sushi>
      <sushi>
      </sushi>
      <sushi>
      </sushi>
    </bento>
    <plate>
    </plate>
    <plate>
      <pickle>
        </pickle>
    </plate>`,
    selector: 'sushi:first-child',
    description: {
      title: 'Псевдо-селектор :first-child',
      subtitle: 'Выбирает выбирает все элементы А, которые являются первыми потомками своего родителя',
      selector: 'A:first-child',
      info: 'Вы можете выбрать первого потомка с помощью данного селектора',
      examples: [
        '<pre>p a:first-child</pre> выбирает первый элемент <pre>a</pre> внутри <pre>p</pre>',
      ],
    },
  },
  {
    goal: 'Выберите третий слева огурец',
    dom: `<pickle></pickle>
    <pickle></pickle>
    <pickle></pickle>
    <bento>
      <pickle></pickle>
    </bento>`,
    selector: 'pickle:nth-child(3)',
    description: {
      title: 'Селектор N-ного потомка',
      subtitle: 'Выбирает N-ный по счету элемент',
      selector: ':nth-child(N)',
      info: 'Позволяет выбрать элемент, который является N-ным по счету потомком на том же уровне вложенности',
      examples: [
        '<pre>div p:nth-child(2)</pre> выбирает второй элемент<pre>p</pre>, внутри <pre>div</pre>',
      ],
    },
  },
  {
    goal: 'Выберите белую тарелку',
    dom: `
    <plate class="blue"></plate>
    <plate class="blue"></plate>
    <plate></plate>
    <plate class="blue"></plate>`,
    selector: 'plate:not(.blue)',
    description: {
      title: 'Псевдо-селектор :not()',
      subtitle: 'Выбирает элементы, не соответствующие селектору A',
      selector: ':not(A)',
      info: '',
      examples: [
        '<pre>div:not(.wide)</pre> выбирает элементы <pre>div</pre>, у которых не указан класс <pre>big</pre>',
      ],
    },
  },
];

export default levels;
