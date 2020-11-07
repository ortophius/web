import './Main.scss';
import template from './Main.pug';
import Game from '../Game/Game';

function init(): any {
  document.body.innerHTML = template;
}

window.onload = init();

const game: Game = new Game('#app');

game.start();
