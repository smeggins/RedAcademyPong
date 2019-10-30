import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256);

let lastTime = 0

(function gameLoop(timeStamp) {
  let dt = timeStamp - lastTime;
  lastTime = timeStamp;
  console.log(timeStamp, lastTime, dt);

  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  playerPaddle.update(dt);
  playerPaddle.draw(ctx);
  game.render();
  requestAnimationFrame(gameLoop);
})();
