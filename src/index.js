// import './styles/game.css';
import Game from './partials/Game';
import { screenSettings } from './settings'

const gameWidth = screenSettings.gameWidth;
const gameHeight = screenSettings.gameHeight;

const game = new Game('game', gameWidth, gameHeight);


(function gameLoop(timeStamp) {
  game.render();
  requestAnimationFrame(gameLoop);
})();
