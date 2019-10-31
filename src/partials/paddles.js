import { SVG_NS } from "../settings"
import { KEYS } from "../settings"

export default class Paddles {
    constructor (boardHeight, width, height, x, y, up, down, a, z) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.score = 0;
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:
                    this.y = Math.max(this.y - KEYS.speed, 0);
                    break;
                case down:
                    this.y = Math.min(this.y + KEYS.speed, this.boardHeight - this.height); 
                    break;
                case a:
                    console.log('a pressed');
                    this.y = Math.max(this.y - KEYS.speed, 0);
                    break;
                case z:
                    console.log('z pressed');
                    this.y = Math.min(this.y + KEYS.speed, this.boardHeight - this.height); 
                    break;
            }
        });
    }

    render(svg) {
        
        // <rect x="10" y="100" width="8" height="56" fill="black" />
        let rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'fill', 'black');
        svg.appendChild(rect);
    }

    
};

