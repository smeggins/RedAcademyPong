import { SVG_NS } from "../settings"

export default class Score {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    render(svg) {
        
        // <rect x="10" y="100" width="8" height="56" fill="black" />
        let score = document.createElementNS(SVG_NS, "rect");
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y);
        score.setAttributeNS(null, 'width', this.width);
        score.setAttributeNS(null, 'height', this.height);
        score.setAttributeNS(null, 'fill', 'white');
        score.setAttributeNS(null, 'border', '1px solid black');
        svg.appendChild(score);
    };
  }