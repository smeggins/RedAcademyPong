# Pong Game Starter

A starter project for a basic pong game using SVGs.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂


# VERSION HISTORY

## alpha 12

    ball.js
        *hitting another players wall now registers a scored goal...

    game.js
        *added all the functionality needed for the score system to work...

## alpha 11

    score.js
        *abandoned the previous text generation for now. ended up changing to svg text..

## alpha 10

    Note: skipped a couple git pushes on this readme due to time constraints while coding on the plane...

    Problem:
        *css won't apply to my score <p> element even though it is properlly generated and identified...

    Score.js:
        *added the basic skeleton for the score.js...
        *adds container for score text...

    game.css
        *added style for test score text...

## alpha 9:
    
    ball.js
        *added paddle collision...
        *added troubleshoot method...

    paddles.js
        *cleaned up some unused vars...
    

## alpha 8:

    game.js:
        *fixed the pause function so that it now works...

## alpha 7:

    problems:
        *didnt have time before i left class to finsish troubleshooting my pause function...

    Game.js
        *started working on the pause functuon...

## alpha 6:

    Ball.js
        *... i was over thinking it. re-read the slides and realised i only needed to multiply my vars by -1...
        *adds bounce on all 4 sides...
        *renamed collison method to fit with what the project slides wanted me to name it...

## alpha 5:
    
    Problem:
        *I cant get the horizontal bounce to work for some reason. been at it for a while so it's time for another git push regardless. Want to figure this out before school tonight...
    Ball.js
        *added movement and verticle bounce to ball...

## alpha 4:
    
    Ball.js:
        *added the ball.js and rendered the svg...

## alpha 3:
    
    Problems:
        *a & z doesnt control player 2's paddle yet...
    Paddles.js
        *defined the paddle class...
        *added event listeners for keypresses and added movement based on the button pressed...

## alpha 2:

    Game.js & Board.js:
        *Thank goodness for Anvit!! When importing a variable you need to enclose the var name in {}...
    
    Game.js:
        *Was showed a quicker way of refreshing my "canvas" by setting the innerHTML of the this.game as ""...

## alpha 1:
    
    Problems:
        *I still can't get the board to draw. but i see PONG and if I un-comment my svg in HTML it shows up...
        *it must either be a problem with my loop or i'm completely out to lunch with my board code...
        *The loop code worked in my "canvas" pong project.... dt only matters for moving objects so that part of the code shouldn't matter...
        *This is driving me bananas. I feel confident in my board code and I really hope that confidence is not missplaced...
        *ok I have to stop stalling by adding to this version history and start actually troubleshooting...

    index.js
        *Removed some of the element references from my original "canvas" pong project...
                
    Board.js:
        *added version history to readme so I'm not adding version noaazazazazazaztes to my git upload anymore...
        *realised I didnt add rect as my render argument in board so i fixed that...
        *when setting my rect width and height attributes I forgot to change the selected element to rect from svg after copying those line over from my... game.js...
        *added append child to the bottom of my rect element so I will amend my svg element with a rect child element...

    Game.js
        *added dt as an argument in render()...