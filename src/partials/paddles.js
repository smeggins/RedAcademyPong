import { SVG_NS } from "../settings"
import { Variables } from "../settings"

export default class Paddles {
    constructor (boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.paddleX = this.x + this.width;
        this.bottomY = this.y + this.height;
        this.keyUP = false;
        this.keyDown = false;
        
        this.score = 0;

        let keyDownPressed = (event) => {
            if (event.key == up) {
                this.keyUP = true;
            }
            else if (event.key == down) {
                this.keyDown = true;
            }
        }

        
        let keyUpPressed = (event) => {
            if (event.key == up) {
                this.keyUP = false;
            }
            else if (event.key == down) {
                this.keyDown = false;
            }
        }



        document.addEventListener("keydown", keyDownPressed);
        document.addEventListener("keyup", keyUpPressed);
    }
    
    paddleReset(y) {
        this.y = y
    }

    render(svg, paused) {
        this.paused = paused

        if (this.paused == 1 && this.keyUP) {
            this.y = Math.max(this.y - Variables.paddleSpeed, 0);
        }
        else if (this.paused == 1 && this.keyDown) {
            this.y = Math.min(this.y + Variables.paddleSpeed, this.boardHeight - this.height); 
        }
        
        // <rect x="10" y="100" width="8" height="56" fill="black" />
        let paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, 'x', this.x);
        paddle.setAttributeNS(null, 'y', this.y);
        paddle.setAttributeNS(null, 'width', this.width);
        paddle.setAttributeNS(null, 'height', this.height);
        paddle.setAttributeNS(null, 'fill', 'black');
        svg.appendChild(paddle);
    }

    
};

