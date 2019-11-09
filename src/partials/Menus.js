import { SVG_NS } from '../settings';

export default class PauseMenu  {
    constructor(up, down) {


        this.pauseMenuPosition = 0;

        console.log(`pause menu pause status2: ${this.pause}`)

    }

    pauseMenuNav(up, down, pause) {
        
        this.pause = pause;

        if (this.pause == -1) {
            document.addEventListener("keydown", event => {
                console.log(`pause menu pause status: ${this.pause}`)
                switch (event.key) {
                    case up:
                        if (this.pauseMenuPosition <= 3) {
                        this.pauseMenuPosition += 1;
                        console.log(this.pauseMenuPosition)
                        }
                        break;
                    case down:
                        if (this.pauseMenuPosition >= 1) {
                        this.pauseMenuPosition -= 1;
                        console.log(this.pauseMenuPosition)
                        }
                        break;
                }
            });
        }

    };

    pauseUpdater(paused) {
        return paused
    }

    render(svg, paused) {


        this.pauseUpdater(paused)
    


        let pauseShade = document.createElementNS(SVG_NS, "rect");
        pauseShade.setAttributeNS(null, 'width', 512);
        pauseShade.setAttributeNS(null, 'height', 256);
        pauseShade.setAttributeNS(null, 'fill', 'black');
        pauseShade.setAttributeNS(null, 'opacity', 0.3);
        svg.appendChild(pauseShade);

        let pausemenu = document.createElementNS(SVG_NS, "rect");
        pausemenu.setAttributeNS(null, 'x', 192);
        pausemenu.setAttributeNS(null, 'y', 32);
        pausemenu.setAttributeNS(null, 'width', 128);
        pausemenu.setAttributeNS(null, 'height', 192);
        pausemenu.setAttributeNS(null, 'fill', 'black');
        svg.appendChild(pausemenu);

        let pausemenu2 = document.createElementNS(SVG_NS, "rect");
        pausemenu2.setAttributeNS(null, 'x', 192);
        pausemenu2.setAttributeNS(null, 'y', 32);
        pausemenu2.setAttributeNS(null, 'width', 128);
        pausemenu2.setAttributeNS(null, 'height', 192);
        pausemenu2.setAttributeNS(null, 'fill', 'black');
        svg.appendChild(pausemenu2);

        let resumeSelect = document.createElementNS(SVG_NS, "rect");
        resumeSelect.setAttributeNS(null, 'x', 195);
        resumeSelect.setAttributeNS(null, 'y', 32 + 30);
        resumeSelect.setAttributeNS(null, 'width', 118);
        resumeSelect.setAttributeNS(null, 'height', 10);
        resumeSelect.setAttributeNS(null, 'fill', 'grey');
        svg.appendChild(resumeSelect);

        let resume = document.createElementNS(SVG_NS, "text");
        resume.setAttributeNS(null, "x", 195);
        resume.setAttributeNS(null, "y", 32 + 40);
        resume.setAttributeNS(null, "fill", 'red');
        resume.innerHTML = `Resume`
        svg.appendChild(resume);

        let options = document.createElementNS(SVG_NS, "text");
        options.setAttributeNS(null, "x", 195);
        options.setAttributeNS(null, "y", 32 + 60);
        options.setAttributeNS(null, "fill", 'red');
        options.innerHTML = `Options`
        svg.appendChild(options);

        let restart = document.createElementNS(SVG_NS, "text");
        restart.setAttributeNS(null, "x", 195);
        restart.setAttributeNS(null, "y", 32 + 80);
        restart.setAttributeNS(null, "fill", 'red');
        restart.innerHTML = `Restart Game`
        svg.appendChild(restart);

        let exit = document.createElementNS(SVG_NS, "text");
        exit.setAttributeNS(null, "x", 195);
        exit.setAttributeNS(null, "y", 32 + 100);
        exit.setAttributeNS(null, "fill", 'red');
        exit.innerHTML = `Exit`
        svg.appendChild(exit);
    }
};