import { SVG_NS } from '../settings';
import game from './Game';

export default class PauseMenu  {
    constructor(up, down) {

        this.pauseMenuDepth = 0;
        this.pauseMenuPosition = 4;
        this.optionMenuPosition = 4;
        this.paused = 1;

        // if (1 == 1) {
        //     document.addEventListener("keydown", event => {
        //         console.log(`pause menu pause status: ${this.paused}`)
        //         switch (event.key) {
        //             case up:
        //                 if (this.pauseMenuPosition <= 3) {
        //                 this.pauseMenuPosition += 1;
        //                 console.log(this.pauseMenuPosition)
        //                 }
        //                 break;
        //             case down:
        //                 if (this.pauseMenuPosition >= 1) {
        //                 this.pauseMenuPosition -= 1;
        //                 console.log(this.pauseMenuPosition)
        //                 }
        //                 break;
        //         };
        //     });
        // }


    }

    pause() {
        document.addEventListener("keydown", event => {
          if (event.key == 'p') {
            this.paused *= -1;
            console.log(`paused state after pressing p: ${this.paused}`);
          }
        })
      }

    get pausedM() {
        return this.paused
    }


    pauseMenuNav(up, down, enter, reset) {


        if (reset == -1) {
            document.addEventListener("keydown", event => {
                console.log(`pause menu pause status: ${this.paused} event key: ${event.key}`)
                switch (event.key) {
                    case up:
                        if (this.pauseMenuPosition <= 3) {
                        this.pauseMenuPosition += 1;
                        console.log(`menu position: ${this.pauseMenuPosition}, ${this.paused}`)
                        }
                        break;
                    case down:
                        if (this.pauseMenuPosition >= 2) {
                        this.pauseMenuPosition -= 1;
                        console.log(this.pauseMenuPosition)
                        }
                        break;
                    case enter:
                        if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 4) {
                            this.paused *= -1;
                            }
                        else if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 3) {
                            console.log('entered options')
                            }
                        else if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 2) {
                            console.log('restarted the match')
                            reset
                            // Ball.scorePlayer2 = 0
                            // Ball.scorePlayer1 = 0
                            }
                        else if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 1) {
                            console.log('exited to main')
                            }        
                            break;
                };
            });
        }
    }

    render(svg, up, down, enter) {
        
        //     this.lastEvent;

        // if (this.pausedM == -1) {
        //     document.addEventListener("keydown", event => {
        //         console.log(`pause menu pause status: ${this.paused} event key: ${event.key}`)
        //         switch (event.key) {
        //             case up:
        //                 if (this.pauseMenuPosition <= 3 && this.lastEvent != event.key) {
        //                 this.pauseMenuPosition += 1;
        //                 console.log(`menu position: ${this.pauseMenuPosition}`)
        //                 }
        //                 this.lastEvent = event.key
        //                 break;
        //             case down:
        //                 if (this.pauseMenuPosition >= 2 && this.lastEvent != event.key) {
        //                 this.pauseMenuPosition -= 1;
        //                 console.log(this.pauseMenuPosition)
        //                 }
        //                 this.lastEvent = event.key
        //                 break;
        //             case enter:
        //                 if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 4 && this.lastEvent != event.key) {
        //                     this.paused *= -1;
        //                     }
        //                 else if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 3 && this.lastEvent != event.key) {
        //                     console.log('entered options')
        //                     }
        //                 else if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 2 && this.lastEvent != event.key) {
        //                     console.log('restarted the match')
        //                     Game.reset()
        //                     // Ball.scorePlayer2 = 0
        //                     // Ball.scorePlayer1 = 0
        //                     }
        //                 else if (this.pausedM == -1 && this.pauseMenuDepth == 0 && this.pauseMenuPosition == 1 && this.lastEvent != event.key) {
        //                     console.log('exited to main')
        //                     }        
        //                     this.lastEvent = event.key
        //                     break;
        //         };
        //     });
        // }

        // this.lastEvent = ''
        
        if (this.pauseMenuDepth == 0) {
        let pauseShade = document.createElementNS(SVG_NS, "rect");
        pauseShade.setAttributeNS(null, 'width', 512);
        pauseShade.setAttributeNS(null, 'height', 256);
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
};