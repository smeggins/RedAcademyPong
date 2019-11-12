import { SVG_NS } from '../settings';
import Board from './Board';
import Paddles from './paddles';
import { KEYS } from '../settings';
import Ball from './Ball';
import { Variables } from '../settings';
import Score from './score';
import PauseMenu from './Menus'

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById('game');
    this.gameElementPause = document.getElementById('pause')
    this.fullscreen();


    this.board = new Board (this.width, this.height);

    this.paddleWidth = this.width * .016;
    this.paddleHeight = this.height * .22;
    this.boardGap = Variables.paddleGap;
    this.up = KEYS.up;
    this.down = KEYS.down;
    this.a = KEYS.a;
    this.z = KEYS.z;
    this.enter = KEYS.enter;

    this.player1 = new Paddles (
      this.height, 
      this.paddleWidth, 
      this.paddleHeight, 
      this.boardGap, 
      ((this.height - this.paddleHeight) / 2),
      this.a,
      this.z);

    this.player2 = new Paddles (
      this.height, 
      this.paddleWidth, 
      this.paddleHeight, 
      ((this.width - this.boardGap) - this.paddleWidth), 
      ((this.height - this.paddleHeight) / 2),
      this.up,
      this.down);

    this.radius = Variables.ballSize, 
    this.ball = new Ball (this.radius, this.width, this.height);


    this.scoreWidth = 128,
    this.scoreHeight = 20,
    this.scoreX = 192,
    this.scoreY = 5,
    this.scoreBoard = new Score (this.scoreX, this.scoreY, this.scoreWidth, this.scoreHeight);


    this.pauseMenu = new PauseMenu (this.up, this.down);
    PauseMenu.prototype.pause(this.up, this.down, this.enter);
    this.pauseMenu.pauseMenuNav(this.up, this.down, this.enter, this.paused);

    Game.prototype.reset = () => {
          console.log('reset function being accessed')
          Ball.prototype.reset()
          this.ball.scorePlayer2 = 0
          this.ball.scorePlayer1 = 0
    }
    Game.prototype.reset()
  }




  fullscreen() {
    document.addEventListener("keydown", event => {
      if (event.key == 'f') {
        document.documentElement.requestFullscreen()
      }
    })
  }



render(dt) {

  if (this.pauseMenu.pausedM == 1){
  console.log(`rendering game`)
  this.gameElement.innerHTML = '';
  this.gameElementPause.innerHTML = '';
  let svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttributeNS(null, "width", this.width);
  svg.setAttributeNS(null, "height", this.height);
  svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
  this.gameElement.appendChild(svg);
  this.board.render(svg);
  this.player1.render(svg, this.pauseMenu.pausedM);
  this.player2.render(svg, this.pauseMenu.pausedM);
  this.scoreBoard.render(svg, this.ball.scorePlayer1, this.ball.scorePlayer2);
  this.ball.render(svg, this.player1, this.player2,);
  }  
   else {
    console.log(`not rendering game ${this.pauseMenu.paused}`)
    this.gameElementPause.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElementPause.appendChild(svg);
    this.pauseMenu.render(svg, this.up, this.down, this.enter)
    };

};
};