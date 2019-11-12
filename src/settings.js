export const SVG_NS = "http://www.w3.org/2000/svg";

export const KEYS = {
    a: 'a',
    z: 'z',
    up: 'ArrowUp',
    down: 'ArrowDown',
    spaceBar: 'Space',
    enter: 'Enter'
};

export const screenSettings = {
    gameWidth: 512,
    gameHeight: 256,
}

export const constants = {
    ballSizeRatio: .031,
    speedRatio: .00008,
    ballSpeedRatioHigh: .012,
    ballSpeedRatioLow: .002,
    screenValue: screenSettings.gameWidth * screenSettings.gameHeight,
}

export const Variables = {
    ballSize: screenSettings.gameHeight * constants.ballSizeRatio,
    paddleGap: 10,
    paddleSpeed: (screenSettings.gameWidth * screenSettings.gameHeight) * constants.speedRatio,
    ballSpeedHigh: screenSettings.gameWidth * constants.ballSpeedRatioHigh, 
    ballSpeedLow: screenSettings.gameWidth * constants.ballSpeedRatioLow, 

};