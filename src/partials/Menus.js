import { SVG_NS } from '../settings';
import Game from './Game';
import { gameState } from './Game';
import { menu } from './Game'

export default class PauseMenu  {
    constructor() {

        this.pauseMenuDepth = 0;
        this.pauseMenuPosition = 4;
        this.optionMenuPosition = 4;
        this.paused = 1;

        PauseMenu.prototype.pause = () => {
            document.addEventListener("keydown", event => {
              if (event.key == 'p' && this.paused != -1) {
                this.paused *= -1;
              }
            })
          }

    }



    get pausedM() {
        return this.paused;
    }


    pauseMenuNav(up, down, enter) {


            document.addEventListener("keydown", event => {
                switch (event.key) {
                    case up:
                        if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuPosition <= 3) {
                        this.pauseMenuPosition += 1;
                        }
                        else if(gameState.menu == 0 && menu.mainMenuPositio <= 1) {
                            menu.mainMenuPosition += 1
                        }
                        break;
                    case down:
                        if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuPosition >= 2) {
                        this.pauseMenuPosition -= 1;
                        }
                        else if(gameState.menu == 0 && menu.mainMenuPositio >= 2) {
                            menu.mainMenuPosition -= 1
                        }
                        break;
                    case enter:
                        if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 4) {
                            this.paused *= -1;
                            }
                        else if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 3) {
                            console.log('entered options')
                            }
                        else if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 2) {
                            Game.prototype.reset();
                            this.paused *= -1;
                            }
                        else if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 1) {
                            console.log('exited to main')
                            }        
                            break;
                };
            });
        
    }

    render(svg, winpos) {
        if (this.pauseMenuDepth == 0) {

        let pauseShade = document.createElementNS(SVG_NS, "rect");
        pauseShade.setAttributeNS(null, 'width', 512);
        pauseShade.setAttributeNS(null, 'height', 256);
        pauseShade.setAttributeNS(null, "rx", 10)
        pauseShade.setAttributeNS(null, "ry", 10)
        pauseShade.setAttributeNS(null, 'fill', 'black');
        pauseShade.setAttributeNS(null, 'opacity', 0.3);
        svg.appendChild(pauseShade);

        let pausemenu2 = document.createElementNS(SVG_NS, "rect");
        pausemenu2.setAttributeNS(null, 'x', 187);
        pausemenu2.setAttributeNS(null, 'y', 27);
        pausemenu2.setAttributeNS(null, 'width', 139);
        pausemenu2.setAttributeNS(null, 'height', 203);
        pausemenu2.setAttributeNS(null, 'fill', 'yellow');
        svg.appendChild(pausemenu2);

        let pausemenu = document.createElementNS(SVG_NS, "rect");
        pausemenu.setAttributeNS(null, 'x', 192);
        pausemenu.setAttributeNS(null, 'y', 32);
        pausemenu.setAttributeNS(null, 'width', 128);
        pausemenu.setAttributeNS(null, 'height', 192);
        pausemenu.setAttributeNS(null, 'fill', 'black');
        svg.appendChild(pausemenu);
        
        if (this.pauseMenuPosition == 4) {
            let resumeSelect = document.createElementNS(SVG_NS, "rect");
            resumeSelect.setAttributeNS(null, 'x', 195);
            resumeSelect.setAttributeNS(null, 'y', 32 + 30);
            resumeSelect.setAttributeNS(null, 'width', 118);
            resumeSelect.setAttributeNS(null, 'height', 10);
            resumeSelect.setAttributeNS(null, 'fill', 'grey');
            svg.appendChild(resumeSelect);
        }

        let resume = document.createElementNS(SVG_NS, "text");
        resume.setAttributeNS(null, "x", 195);
        resume.setAttributeNS(null, "y", 32 + 40);
        resume.setAttributeNS(null, "fill", 'red');
        resume.innerHTML = `Resume`
        svg.appendChild(resume);

        if (this.pauseMenuPosition == 3) {
            let resumeSelect = document.createElementNS(SVG_NS, "rect");
            resumeSelect.setAttributeNS(null, 'x', 195);
            resumeSelect.setAttributeNS(null, 'y', 32 + 50);
            resumeSelect.setAttributeNS(null, 'width', 118);
            resumeSelect.setAttributeNS(null, 'height', 10);
            resumeSelect.setAttributeNS(null, 'fill', 'grey');
            svg.appendChild(resumeSelect);
            }

        let options = document.createElementNS(SVG_NS, "text");
        options.setAttributeNS(null, "x", 195);
        options.setAttributeNS(null, "y", 32 + 60);
        options.setAttributeNS(null, "fill", 'red');
        options.innerHTML = `Options`
        svg.appendChild(options);

        if (this.pauseMenuPosition == 2) {
            let resumeSelect = document.createElementNS(SVG_NS, "rect");
            resumeSelect.setAttributeNS(null, 'x', 195);
            resumeSelect.setAttributeNS(null, 'y', 32 + 70);
            resumeSelect.setAttributeNS(null, 'width', 118);
            resumeSelect.setAttributeNS(null, 'height', 10);
            resumeSelect.setAttributeNS(null, 'fill', 'grey');
            svg.appendChild(resumeSelect);
            }

        let restart = document.createElementNS(SVG_NS, "text");
        restart.setAttributeNS(null, "x", 195);
        restart.setAttributeNS(null, "y", 32 + 80);
        restart.setAttributeNS(null, "fill", 'red');
        restart.innerHTML = `Restart`
        svg.appendChild(restart);

        if (this.pauseMenuPosition == 1) {
            let resumeSelect = document.createElementNS(SVG_NS, "rect");
            resumeSelect.setAttributeNS(null, 'x', 195);
            resumeSelect.setAttributeNS(null, 'y', 32 + 90);
            resumeSelect.setAttributeNS(null, 'width', 118);
            resumeSelect.setAttributeNS(null, 'height', 10);
            resumeSelect.setAttributeNS(null, 'fill', 'grey');
            svg.appendChild(resumeSelect);
            }

        let exit = document.createElementNS(SVG_NS, "text");
        exit.setAttributeNS(null, "x", 195);
        exit.setAttributeNS(null, "y", 32 + 100);
        exit.setAttributeNS(null, "fill", 'red');
        exit.innerHTML = `Exit`
        svg.appendChild(exit);

        }
    }

    mainMenuRender(svg, width, height) {

        let pongMenuText = document.createElementNS(SVG_NS, "text");
        pongMenuText.setAttributeNS(null, "x", width / 2);
        pongMenuText.setAttributeNS(null, "y", height * .25);
        pongMenuText.setAttributeNS(null, "fill", 'red');
        pongMenuText.setAttributeNS(null, "id", 'pongMenuText');
        pongMenuText.innerHTML = `Pong`
        svg.appendChild(pongMenuText);

        let vsMenuText = document.createElementNS(SVG_NS, "text");
        vsMenuText.setAttributeNS(null, "x", width / 2);
        vsMenuText.setAttributeNS(null, "y", height /2);
        vsMenuText.setAttributeNS(null, "fill", 'red');
        vsMenuText.setAttributeNS(null, "id", 'vsMenuText');
        vsMenuText.innerHTML = `play`
        svg.appendChild(vsMenuText);

        let paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, 'x', width / 2 );
        paddle.setAttributeNS(null, 'y', height / 2);
        paddle.setAttributeNS(null, 'width', 5);
        paddle.setAttributeNS(null, 'height', 20);
        paddle.setAttributeNS(null, 'fill', 'black');
        svg.appendChild(paddle);

        
    }
};