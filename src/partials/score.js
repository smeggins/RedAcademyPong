import { SVG_NS } from "../settings"


export default class Score {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.p1Score = 0;
        this.p2Score = 0;
    }
    
    render(svg) {
        let game = document.getElementById('game')
        let scoreText = document.createElement('p')
        scoreText.innerHTML = 'this is a test';
        scoreText.setAttribute('id', 'scoreText');
        game.appendChild(scoreText)
        
        
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