import { SVG_NS } from "../settings"

export default class Ball {
    constructor (radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.x = (this.boardWidth / 2) - (this.radius / 2);
        this.y = this.boardHeight / 2;
    }

    render(svg) {
        
        // <circle cx="252" cy="124" r="8"/>
     let circle = document.createElementNS(SVG_NS, "circle");
     circle.setAttributeNS(null, "cx", this.x);
     circle.setAttributeNS(null, "cy", this.y);
     circle.setAttributeNS(null, "r", this.radius);
     circle.setAttributeNS(null, "fill", "black");
     svg.appendChild(circle);
    }

    reset() {
        this.x = (this.boardWidth / 2) - (this.radius / 2);
        this.y = this.boardHeight / 2;
    }
};
