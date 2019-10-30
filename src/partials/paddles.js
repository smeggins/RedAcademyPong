import SVG_NS from "../settings"

export default class Paddles {
    constructor (width, height) {
        this.width = width
        this.height = height
    }

    render() {
        
				// <rect width="512" height="256" fill="#353535" stroke="black" stroke-width="5" />
     let rect = document.createElementNS(SVG_NS, "rect")

                
				// <line x1="251" y1="0" x2="251" y2="256" stroke="black" stroke-width="5" stroke-dasharray="15" />
     let line = document.createElementNS(SVG_NS, "line")
    }
};
