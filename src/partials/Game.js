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
    this.paddleStartPos = (this.height - this.paddleHeight) / 2
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
      this.paddleStartPos,
      this.a,
      this.z);

    this.player2 = new Paddles (
      this.height, 
      this.paddleWidth, 
      this.paddleHeight, 
      ((this.width - this.boardGap) - this.paddleWidth), 
      this.paddleStartPos,
      this.up,
      this.down);

    this.radius = Variables.ballSize, 
    this.ball = new Ball (this.radius, this.width, this.height);

    this.scoreWidth = 113;
    this.scoreHeight = 20;
    this.scoreX = (this.width / 2) - (this.scoreWidth / 2);
    this.scoreY = this.boardGap;
    this.scoreBoard = new Score (this.scoreX, this.scoreY, this.scoreWidth, this.scoreHeight);


    this.pauseMenu = new PauseMenu ();
    PauseMenu.prototype.pause();
    this.pauseMenu.pauseMenuNav(this.up, this.down, this.enter, this.scoreBoard.winUpdator);

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
  this.isPaused = this.pauseMenu.pausedM;

  if (gameState.menu == 1) {
    this.gameElement.innerHTML = '';
    this.gameElementPause.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.pauseMenu.mainMenuRender(svg, this.width, this.height)
    this.pauseMenu.pauseMenuPosReset()
    this.player1.paddleReset(this.paddleStartPos)
    this.player2.paddleReset(this.paddleStartPos)

  }

  else if (this.isPaused == 1){
  console.log(`rendering game, new winvalue ${gameState.winState}`);
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
  this.scoreBoard.render(svg, this.ball.scorePlayer1, this.ball.scorePlayer2, this.pauseMenu.paused);
  this.ball.render(svg, this.player1, this.player2,);
  this.pauseMenu.pauseMenuPosReset()
  if (gameState.winState == 1) {
    this.pauseMenu.paused *= -1;
  };
  }  
  
  else if (this.isPaused == -1) {
    console.log(`not rendering game ${this.pauseMenu.paused}, new winvalue ${gameState.winState}`);
    this.gameElementPause.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElementPause.appendChild(svg);
    
    if (gameState.winState == 0) {
      this.pauseMenu.render(svg, this.scoreBoard.winUpdator);
    }

    else if (gameState.winState == 1) {

      this.scoreBoard.renderWin(svg);
      this.player1.paddleReset(this.paddleStartPos)
      this.player2.paddleReset(this.paddleStartPos)

      const winEvent = () => {
        if (event.key == "Enter"){
        gameState.winState = 0
        this.ball.scorePlayer1 = 0
        this.ball.scorePlayer2 = 0
      }

        document.removeEventListener("keydown", winEvent) 
      }

      document.addEventListener("keydown", winEvent)
    }
  }

};
};

export const gameState = {
  paused: 1,
  serve: 0,
  winState: 0,
  menu: 1,
};

export const menu = {
  pauseMenuPosition: 0,
  pauseMenuDepth: 0,
  mainMenuPosition: 2,
  mainMenuDepth: 0,
};