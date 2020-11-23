const levels: Level[] = [
  {
    goal: 'Выберите все вещи на столе',
    dom:
      `<root>
      <bento></bento>
      <pickle></pickle>
      <sushi></sushi>
      </root>`,
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
