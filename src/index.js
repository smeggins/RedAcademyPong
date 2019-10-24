import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 512, 256);
let svg = document.createElementNS (SVG_NS, "svg");
svg.setAttributeNS(null, "width", this.width);
svg.setAttributeNS(null, "height", this.height);
svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
this.SVGAnimateElement.appendChild(svg);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
