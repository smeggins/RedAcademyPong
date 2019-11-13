import { SVG_NS } from "../settings"
import { Variables } from "../settings"
import { constants } from "../settings"
import { gameState } from './Game';

export default class Ball {
    constructor (radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
        this.serve = 0;

        Ball.prototype.reset = () => {
            this.x = (this.boardWidth / 2) + (this.radius/2);
            this.y = this.boardHeight / 2;
            this.ballSpeedHigh = Variables.ballSpeedHigh;
            this.ballSpeedLow = Variables.ballSpeedLow;
    
            // this.vy = Math.floor(Math.random() * (this.ballSpeedHigh - this.ballSpeedLow) + this.ballSpeedLow);
            this.vy = Math.floor(Math.random() * (this.ballSpeedHigh - this.ballSpeedLow) + this.ballSpeedLow);
            this.vx = this.direction * (((this.ballSpeedHigh - Math.abs(this.vy)) + 2) * constants.ballSpeed[3]);

            gameState.ballDirection = 1
            this.ballDirectionStateR = ''
            this.ballDirectionStateL = ''
    
            console.log('reset pressed')
        }
        Ball.prototype.reset()
    }

    get serveCheck() {
        return this.serve;
    }

    wallCollision() {
        this.topDetect = this.y - (this.radius);
        this.bottomDetect = this.y + (this.radius);
        this.leftDetect = this.x - (this.radius);
        this.rightDetect = this.x + (this.radius);

        if (this.topDetect <= 0) {
            this.vy *= -1;
        }
        else if (this.bottomDetect >= this.boardHeight) {
            this.vy *= -1
        }
        else if (this.leftDetect <= 0) {
            this.vx *= -1,
            this.scorePlayer1 += 1
            Ball.prototype.reset()
        }
        else if (this.rightDetect >= this.boardWidth) {
            this.vx *= -1
            this.scorePlayer2 += 1
            Ball.prototype.reset()
        }
    }

    paddleCollision(player1, player2) {
        this.p2BottomY = player2.y + player2.height;
        this.p1BottomY = player1.y + player1.height;
        this.p1PaddleX = player1.x + player1.width;
        this.p2PaddleX = player2.x + player2.width;
        this.ballDirectionStateR;
        this.ballDirectionStateL;

        if (this.rightDetect >= player2.x && this.y >= player2.y && this.y <= this.p2BottomY ){
            if (gameState.ballDirection != this.ballDirectionStateR){
                this.vx *= -1;
                gameState.ballDirection *= -1;
                this.ballDirectionStateR = gameState.ballDirection
            }
        }

        else if (this.leftDetect <= this.p1PaddleX && this.y >= player1.y && this.y <= this.p1BottomY ){
            if (gameState.ballDirection != this.ballDirectionStateL){
                this.vx *= -1;
                gameState.ballDirection *= -1;
                this.ballDirectionStateL = gameState.ballDirection
            }
        }
        else if (this.bottomDetect >= (player1.y || player2.y) && this.bottomDetect <= (this.p1BottomY || this.p2BottomY) && this.x >= (player1.x || this.p2PaddleX) && this.x <= (this.p1PaddleX || player2.x)) {
            this.vx *= -1;
            this.vy *= -1;
        }
        else if (this.topDetect >= (player1.y || player2.y) && this.topDetect <= (this.p1BottomY || this.p2BottomY) && this.x >= (player1.x || this.p2PaddleX) && this.x <= (this.p1PaddleX || player2.x)) {
            this.vx *= -1;
            this.vy *= -1;
        }
    }

    troubleshoot(player1, player2) {
        console.log(`ball topy: ${this.topDetect}, bottomy: ${this.bottomDetect}, leftx: ${this.leftDetect} rightx ${this.rightDetect}. Player 2 paddle topy: ${player1.y}, bottom y: ${this.p1BottomY} x: ${player1.x, this.p1PaddleX}
        vy = ${this.vy} vx = ${this.vx}`);
    }
        
    

    render(svg, player1, player2) {
        
        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision(player1, player2);
        this.paddleCollision(player1, player2);
        // this.troubleshoot(player1, player2)

        // <circle cx="252" cy="124" r="8"/>
     let circle = document.createElementNS(SVG_NS, "circle");
     circle.setAttributeNS(null, "cx", this.x);
     circle.setAttributeNS(null, "cy", this.y);
     circle.setAttributeNS(null, "r", this.radius);
     circle.setAttributeNS(null, "fill", "black");
     svg.appendChild(circle);
    }


};
