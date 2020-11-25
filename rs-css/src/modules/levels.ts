const levels: Level[] = [
  {
    goal: 'Выберите все вещи на столе',
    dom: '<plate for="test"><pickle></pickle></plate><pickle></pickle>',
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
