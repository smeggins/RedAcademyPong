import { SVG_NS } from "../settings"
import { Variables } from "../settings"

export default class Ball {
    constructor (radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;


        this.reset()
    }

    reset() {
        this.x = (this.boardWidth / 2) - (this.radius / 2);
        this.y = this.boardHeight / 2;
        this.ballSpeedHigh = Variables.ballSpeedHigh
        this.ballSpeedLow = Variables.ballSpeedLow


        this.vy = Math.floor(Math.random() * (this.ballSpeedHigh - this.ballSpeedLow) + this.ballSpeedLow);
        this.vx = this.direction * (this.ballSpeedHigh - Math.abs(this.vy));

        console.log('reset pressed')
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
            this.reset()
        }
        else if (this.rightDetect >= this.boardWidth) {
            this.vx *= -1
            this.scorePlayer2 += 1
            this.reset()
        }
    }

    paddleCollision(player1, player2) {
        this.p2BottomY = player2.y + player2.height;
        this.p1BottomY = player1.y + player1.height;
        this.p1PaddleX = player1.x + player1.width;

        if (this.rightDetect >= player2.x && (this.y || this.topDetect || this.bottomDetect) >= player2.y && (this.y || this.bottomDetect || this.topDetect) <= this.p2BottomY ){
            this.vx *= -1;
        }

        else if (this.leftDetect <= player1.x && (this.y || this.topDetect || this.bottomDetect) >= player1.y && (this.y || this.bottomDetect || this.topDetect) <= this.p1BottomY ){
            this.vx *= -1;
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
        this.troubleshoot(player1, player2)

        // <circle cx="252" cy="124" r="8"/>
     let circle = document.createElementNS(SVG_NS, "circle");
     circle.setAttributeNS(null, "cx", this.x);
     circle.setAttributeNS(null, "cy", this.y);
     circle.setAttributeNS(null, "r", this.radius);
     circle.setAttributeNS(null, "fill", "black");
     svg.appendChild(circle);
    }


};
