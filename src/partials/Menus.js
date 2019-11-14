import { SVG_NS } from '../settings';
import Game from './Game';
import { gameState } from './Game';
import { menu } from './Game'
import { svgFunction } from '../settings'

export default class PauseMenu  {
    constructor() {

        this.pauseMenuDepth = 0;
        this.pauseMenuPosition = 4;
        this.optionMenuPosition = 3;
        this.paused = 1;

        PauseMenu.prototype.pause = () => {
            document.addEventListener("keydown", event => {
              if (event.key == 'p' && this.paused != -1 && gameState.menu == 0) {
                this.paused *= -1;
              };
            });
          };

    }

    pauseMenuPosReset() {
        if (this.pausedM == 1) {
            this.pauseMenuPosition = 3;
        };

    };

    get pausedM() {
        return this.paused;
    };


    pauseMenuNav(up, down, enter) {
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:

                    if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuPosition <= 3) {
                        this.pauseMenuPosition += 1;
                    }
                    else if(gameState.menu == 1 && menu.mainMenuPosition <= 1) {
                        menu.mainMenuPosition += 1;
                    };
                    break;

                case down:

                    if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuPosition >= 2) {
                        this.pauseMenuPosition -= 1;
                    }
                    else if(gameState.menu == 1 && menu.mainMenuPosition >= 2) {
                        menu.mainMenuPosition -= 1;
                    };
                    break;

                case enter:

                    if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 3) {
                        this.paused *= -1;
                    }
                    else if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 2) {
                        Game.prototype.reset();
                        this.paused *= -1;
                    }
                    else if (this.pausedM == -1 && gameState.winState == 0 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 1) {
                        gameState.menu = 1;
                        this.paused *= -1;
                        Game.prototype.reset();
                    }        
                    else if (gameState.menu == 1 && menu.mainMenuPosition == 2 && menu.mainMenuDepth == 0) {
                        gameState.menu = 0;
                    }
                    else if (gameState.menu == 1 && menu.mainMenuPosition == 1 && menu.mainMenuDepth == 0) {
                        menu.mainMenuDepth = 1;
                    }
                    else if (gameState.menu == 1 && menu.mainMenuDepth == 1) {
                        menu.mainMenuDepth = 0;
                    };
                    break;
            };
        });
        
    };

    render(svg, winpos) {

        if (this.pauseMenuDepth == 0) {
            let pauseShade = document.createElementNS(SVG_NS, "rect");
            pauseShade.setAttributeNS(null, 'width', 512);
            pauseShade.setAttributeNS(null, 'height', 256);
            pauseShade.setAttributeNS(null, "rx", 10);
            pauseShade.setAttributeNS(null, "ry", 10);
            pauseShade.setAttributeNS(null, 'fill', 'black');
            pauseShade.setAttributeNS(null, 'opacity', 0.3);
            svg.appendChild(pauseShade);

            let pausemenu2 = svgFunction.svgRect(svg, 187, 27, 139, 203, 'yellow');
            let pausemenu = svgFunction.svgRect(svg, 192, 32, 128, 192, 'black');
            
            if (this.pauseMenuPosition == 3) {
                let resumeSelect = svgFunction.svgRect(svg, 195, 32+50, 118, 10, 'grey');
            };

            let resume = svgFunction.svgText(svg, 195, 32+60, 'red', 'class', 'pauseMenuText', 'Resume');

            if (this.pauseMenuPosition == 2) {
                let restartSelect = svgFunction.svgRect(svg, 195, 32+70, 118, 10, 'grey');
            };

            let restart = svgFunction.svgText(svg, 195, 32 + 80, 'red', 'class', 'pauseMenuText', 'Restart');

            if (this.pauseMenuPosition == 1) {
                let exitSelect = svgFunction.svgRect(svg, 195, 32+90, 118, 10, 'grey');
            };

            let exit = svgFunction.svgText(svg, 195, 32 + 100, 'red', 'class', 'pauseMenuText', 'Exit');

        };
    };

    mainMenuRender(svg, width, height) {

        if(menu.mainMenuDepth == 0) {
            let pongMenuText = svgFunction.svgText(svg, width / 2 * .55, height * .4, '#11cd2f', 'id', 'pongMenuText', 'Pong');
            let vsMenuText = svgFunction.svgText(svg, width / 2 * .85, height *.6, '#11cd2f', 'class', 'vsMenuText', 'play');
            let vsMenuText2 = svgFunction.svgText(svg, width / 2 * .74, height *.75, '#11cd2f', 'class', 'vsMenuText', 'controls');

            if(menu.mainMenuPosition == 2) {
                let paddleSelectorL = svgFunction.svgRect(svg, width *.395, height *.535, 5, 20, 'black');
                let paddleSelectorR = svgFunction.svgRect(svg, width *.58, height *.535, 5, 20, 'black');
            }

            else if(menu.mainMenuPosition == 1) {
                let mmControlsSelectorL = svgFunction.svgRect(svg, width *.35, height *.68, 5, 20, 'black');
                let mmControlsSelectorR = svgFunction.svgRect(svg, width *.655, height *.68, 5, 20, 'black');
            };
        }

        else if(menu.mainMenuDepth == 1) {
            let ENTER = svgFunction.svgText(svg, 80, 31, '#11cd2f', 'class', 'vsMenuText2', '[ENTER] = Make a selection');
            let p = svgFunction.svgText(svg, 75, 53, '#11cd2f', 'class', 'vsMenuText2', '[p] = Opens the pause menu');
            let a = svgFunction.svgText(svg, 74, 75, '#11cd2f', 'class', 'vsMenuText2', '[a] = moves the L paddle UP');
            let z = svgFunction.svgText(svg, 58, 97, '#11cd2f', 'class', 'vsMenuText2', '[z] = moves the L paddle DOWN');
            let arrowup = svgFunction.svgText(svg, 25, 119, '#11cd2f', 'class', 'vsMenuText2', '[ARROW UP] = moves the R paddle UP');
            let arrowdown = svgFunction.svgText(svg, 0, 141, '#11cd2f', 'class', 'vsMenuText2', '[ARROW DOWN] = moves the R paddle DOWN');
            let f = svgFunction.svgText(svg, 52, 163, '#11cd2f', 'class', 'vsMenuText2', '[f] = makes game go fullscreen');
            let esc = svgFunction.svgText(svg, 90, 185, '#11cd2f', 'class', 'vsMenuText2', '[ESC] = exits fullscreen');
            let mmReturn = svgFunction.svgText(svg, 195, 220, '#11cd2f', 'class', 'vsMenuText', 'Return');
            let paddleSelectorL = svgFunction.svgRect(svg, 185, 205, 5, 20, 'black');
            let paddleSelectorR = svgFunction.svgRect(svg, 307, 205, 5, 20, 'black');


        };
    };
};