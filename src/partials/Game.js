import { SVG_NS } from '../settings';
import Board from './Board';
import Paddles from './paddles';
import { KEYS } from '../settings';
import Ball from './Ball';
import { Variables } from '../settings';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById ('game');

    this.board = new Board (this.width, this.height);

    // this.x = this.width / 51.2
    // this.y = this.height / 2.56
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    this.up = KEYS.up;
    this.down = KEYS.down;
    this.a = KEYS.a;
    this.z = KEYS.z;

    this.player1 = new Paddles (
      this.height, 
      this.paddleWidth, 
      this.paddleHeight, 
      this.boardGap, 
      ((this.height - this.paddleHeight) / 2),
      this.up,
      this.down);

    this.player2 = new Paddles (
      this.height, 
      this.paddleWidth, 
      this.paddleHeight, 
      ((this.width - this.boardGap) - this.paddleWidth), 
      ((this.height - this.paddleHeight) / 2),
      this.a,
      this.z);

    this.radius = Variables.ballSize; 
    this.ball = new Ball (this.radius, this.width, this.height);


  }

  render(dt) {
    this.gameElement.innerHTML = '';
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg);

  };


};

