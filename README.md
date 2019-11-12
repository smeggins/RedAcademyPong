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

## Beta 1.16

    Restart function in pause menu is now fully functional!

## Beta 1.15

    Made both paddles able to move smoothly and independantly of each other. 
        -took a while, spent a long time trying to get keypress to work over seperate key up and down checks but at the end of the day this works... 

## Beta 1.14

    pressing pause on my pausemenu.
        -had to remove my menu nav from my render loop after it caused too much instability. still trying to find a way to update the (paused = ) in my menunav so it only works when the game is paused..
        -haven't been able to figure out how to call the reset function in my Game class in a method within my menu class.. basically to reset the game when the option is selected in the menu  

## Beta 1.13

    Finally found a solution to the pause menu issue. But it seems to have significant latency lag, may need to be more specific when calling event.

## Beta 1.12

    added code to track menu selection but having a hard time getting an updated value from my game class to apply to my pause class

## Beta 1.1
    
    Adds a pause menu an options to select.
    need to add pause menu functionality

## Beta 1.0

    BUGS:
        *ball collision is off on right paddle.
        *Ball can get stuck IN the paddle if it hits from the top (ie add top and bottom paddle collision)

    Priorities:
        **AUDIO AS PER THE PROJECT GUIDLINE**
        1.Game is scaleable
        2.paddles can be controlled simultaniously
        3.menus
        4.Win condition
        5.

    Goals:
        Front-End
            Menus:
                *Start menu
                    -start 
                        -number of goals to victory
                        -check-box for tutorial
                    -exit
                    -options
                
                *Pause menu
                    -resume
                    -exit to title
                    -options
                    -resart match
                        
                        *Options menu
                            -difficulty (when AI implemented)
                            -sound volume
                            -game speed
                            -number of goals to victory
                            -paddle color selection
                            -ball color selection
                            -screen size
            
            Visuals
                *different paddle colors for each player
                *different ball colors
                *Game window border
                *dedicated score area
                */* perhaps glass wall on each side that cracks as ball hits then falls along with paddle when 
                    a player wins...

        Back-End:

            Debug mode:
                *display in top left of screen
                    -paddle positions
                    -ball position
                    -ball speed
                    -viewport size
                    -keys depressed
            
            *Game size Scaleable
            *code clean-up
            *add audio
            *set number of points required for a win
            *add a goal screen/animation
            *add a win screen (with play again option)
            *add a launch button to start ball moving from start position.
            *add ability to press buttons and have paddle move simultaniously for player 1 and 2
            *impliment DT

        

       
       
       
       
       
       
        Main game pivot:
            Note:
                
                **this is VERY unlikley to be completed over the long weekend, the focus will be on a polished multiplayer experience first as is required by the project outline**

                *Time permitting i'd like the game to be a single player pong clone with an ai paddle on the other side with breakable blocks in-between...
                *you would play up-down during regular play and left right during multiplayer...
                * there would be certain blocks that have items in them and certain 'glowing' blocks that would gradually dim. if you break the block while its glowing you get a powerful power up. if the block goes out it becomes a single hit block...
                *with each level more blocks would stand between you and the enemy paddle and some blocks would take more hits to break...
                *some blocks are unbreakable and are used to create special level designs.
                *there should be a currency from breaking gold blocks that you can use in a store menu to buy upgrades for your paddle...
                *when the ball hits your area you lose your upgrades, otherwise you keep them from level to level...



            *add AI option / difficulties
            *add complex vector calculations to allow for "aiming" based on where the ball hits your paddle.
                -ideas on this would be to set a vy instead of randomizing it and increasing (or decreasing) that vy by 1 the further left or right you are from center on the paddle
            *add block-break function
                -blocks containing items
                -blocks that take more than 1 hit
                -unbreakable blocks
                -glowing 'super' blocks

            *add store
            *add abilities
            *add levels
            *add save feature (either to record progress of a game or to save high score)




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