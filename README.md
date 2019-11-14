# PONG

Pong is the classic arcade game that some say kicked off the entire gaming industry. This is my simple competitive version with a focus more on functional polish and code than special features or additional game mechanics.

## Technologies Used

HTML, CSS, JavaScript, NPM, NODE

### Personal Learnings

A deep foundational understanding of javascript is what I get as my reward for completing this project.
At times it was tough as I had to (for the most part) figure out how to code pong using the slides and google. I was on vacation while everyone
else was coding the entirety of the game along with the instructor.
I firmly believe that this was beneficial to me, as it forced me to learn, through many hours of trial and error, what javascript can and cannot do.
Therefore, I am confident walking away from this project that I could, given enough time and internet connection, code whatever is required of me using the javascript language.

### Installing

Simply visit https://smeggins.github.io/RedAcademyPong/ and press enter to begin

## Built With

* Javascript
* HTML
* CSS
* NODE
* NPM

## Authors

* **Phillip (Smeggins) Chadwick** - Main Author, Primary Programmer

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Red Academy
* My Fellow Students
* My instructor Anvit

# VERSION HISTORY

## 1.0

    Cleaned up code and updated package.json to prepare the game for final deployment

## Beta 4

    menu.js
        added a controls section to the main menu
        removed options from main and pause menu

## Beta 3.1

    ball.js
        -added top and bottom paddle collision
        -fixed a bug that was causing the ball to get 'stuck' inside the paddle

## Beta 3.0 

    menu.js
        -main menu fully functional

    Bug Fixes:
        -paddle collision fixed
        -paddles now reset when you start a new game
        -menu now navigates as intended
        -some basic code clean-up

## Beta 2.2 

    Note:
        -Got half way to getting the start menu finished and switched some of my values over to an object in game to make it easier to change and refer to those values

## Beta 2.1

    game.js & score.js
        -win screen is now working. 
            -still need to stop the win screen from directing to the pause menu

## Beta 2.0

    Menu.js
        -fixed the pause menu issue. works like a dream now.

    paddle.js
        -applied the same concept to fix the paddle movement in menu bug

    Note:
        -I dreamed about the pausemenu problem all night... and then, INSPIRATION! the answer was staring me in the face the whole time. of course I check the value of paused IN the -event handler so it checks every time a key is pressed...... I cant believe that took me like 4 hours at least of googling, and troubleshooting.. I deserve a treat, greasy -diner breakfast here i come!

## Beta 1.16

    Menu.js
        -Restart function in pause menu is now fully functional!

## Beta 1.15

    paddles.js
        -Made both paddles able to move smoothly and independently of each other. 
            -took a while, spent a long time trying to get keypress to work over separate key up and down checks but at the end of the day this works... 

## Beta 1.14

    pressing pause on my pausemenu.
        -had to remove my menu nav from my render loop after it caused too much instability. still trying to find a way to update the (paused = ) in my menunav so it only works when the game is paused..
        -haven't been able to figure out how to call the reset function in my Game class in a method within my menu class.. basically to reset the game when the option is selected in the menu  

## Beta 1.13
    menu.js
        -Finally found a solution to the pause menu issue. But it seems to have significant latency lag, may need to be more specific when calling event.

## Beta 1.12
    menu.js
        -added code to track menu selection but having a hard time getting an updated value from my game class to apply to my pause class

## Beta 1.1
    
    menu.js
        -Adds a pause menu an options to select.
        -need to add pause menu functionality

## Beta 1.0

    Goals:
            Menus:
                *Start menu
                    -start 
                    -controls
                
                *Pause menu
                    -resume
                    -exit to title
                    -restart match
            
            Visuals
                *Game window border
                *dedicated score area

            
            *code clean-up
            *add audio
            *set number of points required for a win
            *add a goal screen
            *add a win screen (with play again option)
            *add ability to press buttons and have paddle move simultaneously for player 1 and 2

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
        *css won't apply to my score <p> element even though it is properly generated and identified...

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
        *didnt have time before i left class to finish troubleshooting my pause function...

    Game.js
        *started working on the pause functuon...

## alpha 6:

    Ball.js
        *... i was over thinking it. re-read the slides and realized i only needed to multiply my vars by -1...
        *adds bounce on all 4 sides...
        *renamed collision method to fit with what the project slides wanted me to name it...

## alpha 5:
    
    Problem:
        *I cant get the horizontal bounce to work for some reason. been at it for a while so it's time for another git push regardless. Want to figure this out before school tonight...
    Ball.js
        *added movement and vertical bounce to ball...

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
        *added version history to readme so I'm not adding version to my git upload anymore...
        *realized I didnt add rect as my render argument in board so i fixed that...
        *when setting my rect width and height attributes I forgot to change the selected element to rect from svg after copying those line over from my... game.js...
        *added append child to the bottom of my rect element so I will amend my svg element with a rect child element...

    Game.js
        *added dt as an argument in render()...