import { SVG_NS } from "../settings"
import { Variables } from '../settings';
import PauseMenu from './Menus';
import { gameState } from './Game'

export default class Score {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.winScore = Variables.scoreToWin;
    
        this.youWon = () => {
                gameState.winState = 1;
                if (this.p1Score > this.p2Score) {
                    this.winner = 'Player 2';
                }
                else {this.winner = 'Player 1'}
            
        };

    };
    
    // youWon() {
    //     console.log(`accessing youWon ${this.win}`)
    //     console.log(this.p1Score, this.p2Score)
    //         this.paused = PauseMenu.paused;
    //         this.win = 1;
    //         if (this.p1Score > this.p2Score) {
    //             this.winner = 'Player 2';
    //         }
    //         else {this.winner = 'Player 1'}

            
    //         console.log(`${this.win} doneskies`);
        
    // };

    get winUpdator() {
        return this.win;
    };

    render(svg, scoreP1, scoreP2, paused) {
        // let game = document.getElementById('game')
        // let scoreText = document.createElement('p')
        // scoreText.innerHTML = 'this is a test';
        // scoreText.setAttribute('id', 'scoreText');
        // game.appendChild(scoreText)
        
        this.p1Score = scoreP1;
        this.p2Score = scoreP2;

        if (((this.p1Score >= this.winScore) || (this.p2Score >= this.winScore)) && gameState.winState == 0) {
            this.youWon()
            console.log(`if is working`)
        }
        
        
        // <rect x="10" y="100" width="8" height="56" fill="black" />
        let score = document.createElementNS(SVG_NS, "rect");
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y);
        score.setAttributeNS(null, 'width', this.width);
        score.setAttributeNS(null, 'height', this.height);
        score.setAttributeNS(null, 'fill', 'black');
        score.setAttributeNS(null, "id", 'scoreBox');
        score.setAttributeNS(null, 'border', '1px solid black');
        svg.appendChild(score);

        let text = document.createElementNS(SVG_NS, "text");
        text.setAttributeNS(null, "x", this.x + 10);
        text.setAttributeNS(null, "y", this.y + 15);
        text.setAttributeNS(null, "fill", '#11cd2f');
        text.innerHTML = `${this.p1Score}  Score  ${this.p2Score}`
        svg.appendChild(text);

    };
    renderWin(svg) {

            let winShade = document.createElementNS(SVG_NS, "rect");
            winShade.setAttributeNS(null, 'width', 512);
            winShade.setAttributeNS(null, 'height', 256);
            winShade.setAttributeNS(null, "rx", 10)
            winShade.setAttributeNS(null, "ry", 10)
            winShade.setAttributeNS(null, 'fill', 'black');
            winShade.setAttributeNS(null, 'opacity', 0.3);
            svg.appendChild(winShade);

            let youWin = document.createElementNS(SVG_NS, "text");
            youWin.setAttributeNS(null, "x", this.x * .50);
            youWin.setAttributeNS(null, "y", this.y + 120);
            youWin.setAttributeNS(null, "fill", 'red');
            youWin.setAttributeNS(null, "id", 'youWin');
            youWin.innerHTML = `${this.winner}  Wins!`
            svg.appendChild(youWin);

            let pressAnyKey = document.createElementNS(SVG_NS, "text");
            pressAnyKey.setAttributeNS(null, "x", this.x * .55);
            pressAnyKey.setAttributeNS(null, "y", this.y + 140);
            pressAnyKey.setAttributeNS(null, "fill", 'red');
            pressAnyKey.innerHTML = `press enter key to continue`
            svg.appendChild(pressAnyKey);

    }
  }