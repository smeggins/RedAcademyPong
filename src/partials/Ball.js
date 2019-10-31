import { SVG_NS } from "../settings"

export default class Ball {
    constructor (radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.reset()
    }

    reset() {
        this.x = (this.boardWidth / 2) - (this.radius / 2);
        this.y = this.boardHeight / 2;


        this.vy = Math.floor(Math.random() * 10 - 5);
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    collisionDetection() {
        this.topDetect = this.y - (this.radius / 2);
        this.bottomDetect = this.y + (this.radius / 2);
        this.leftDetect = this.x - (this.radius / 2);
        this.rightDetect = this.x + (this.radius / 2);
        console.log(this.boardWidth)

        if (this.topDetect <= 0) {
            this.vy = -this.vy;
        }
        else if (this.bottomDetect >= this.boardHeight) {
            this.vy = -this.vy
        }
        // else if (this.leftDetect <= 0) {
        //     this.direction = -1
        // }
        else if (this.rightDetect >= this.boardWidth) {
            this.direction = -1
        }
    }
        
    

    render(svg, player1, player2) {
        
        this.x += this.vx;
        this.y += this.vy;

        this.collisionDetection(player1, player2)

        // <circle cx="252" cy="124" r="8"/>
     let circle = document.createElementNS(SVG_NS, "circle");
     circle.setAttributeNS(null, "cx", this.x);
     circle.setAttributeNS(null, "cy", this.y);
     circle.setAttributeNS(null, "r", this.radius);
     circle.setAttributeNS(null, "fill", "black");
     svg.appendChild(circle);
    }


};
