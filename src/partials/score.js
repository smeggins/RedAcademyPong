import { SVG_NS } from "../settings"


export default class Score {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    render(svg, scoreP1, scoreP2) {
        // let game = document.getElementById('game')
        // let scoreText = document.createElement('p')
        // scoreText.innerHTML = 'this is a test';
        // scoreText.setAttribute('id', 'scoreText');
        // game.appendChild(scoreText)
        
        this.p1Score = scoreP1;
        this.p2Score = scoreP2;

        
        
        // <rect x="10" y="100" width="8" height="56" fill="black" />
        let score = document.createElementNS(SVG_NS, "rect");
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y);
        score.setAttributeNS(null, 'width', this.width);
        score.setAttributeNS(null, 'height', this.height);
        score.setAttributeNS(null, 'fill', 'white');
        score.setAttributeNS(null, 'border', '1px solid black');
        svg.appendChild(score);

        let text = document.createElementNS(SVG_NS, "text");
        text.setAttributeNS(null, "x", this.x);
        text.setAttributeNS(null, "y", this.y + 15);
        text.setAttributeNS(null, "fill", 'red');

        text.innerHTML = `${this.p1Score}  Score  ${this.p2Score}`
        svg.appendChild(text);
    };
  }