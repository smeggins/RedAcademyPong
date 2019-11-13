import { SVG_NS } from "../settings"

export default class Board {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.netWidth = width * .01;
        this.netPosition = width / 2 - (this.netWidth/2);
        this.netDensity = height * .06
    }

    
    render(svg) {
        
				// <rect width="512" height="256" fill="#353535" stroke="black" stroke-width="5" />
    let rect = document.createElementNS(SVG_NS, "rect")
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height); 
    rect.setAttributeNS(null, "stroke", "black");
    rect.setAttributeNS(null, "stroke-width", this.netWidth);
    rect.setAttributeNS(null, "fill", "#353535");
    rect.setAttributeNS(null, "id", "boardBack")
    svg.appendChild(rect);

                
				// <line x1="251" y1="0" x2="251" y2="256" stroke="black" stroke-width="5" stroke-dasharray="15" />
    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.netPosition);
    line.setAttributeNS(null, "y1", "0");
    line.setAttributeNS(null, "x2", this.netPosition);
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "stroke", "black");
    line.setAttributeNS(null, "stroke-width", this.netWidth);
    line.setAttributeNS(null, "stroke-dasharray", this.netDensity);
    svg.appendChild(line);
    }
};
