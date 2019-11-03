// import './styles/game.css';
import Game from './partials/Game';


// create a game instance
const game = new Game('game', 512, 256);

let lastTime = 0;

(function gameLoop(timeStamp) {
  let dt = timeStamp - lastTime;
  lastTime = timeStamp;
  game.render();
  requestAnimationFrame(gameLoop);
})();
