# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sadashiva Yalla**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/nervous-excellent-cod?path=README.md%3A107%3A34)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn//(I Initially had this but to make it possible to hear the pokemon cry I disabled it)
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- List anything else that you can get done to improve the app!
- [x] Added a progress bar synced to the timer
- [x] Added a pokemon theme for each region
- [x] Added custom Pokemon fonts 
- [x] Added custom pokemon noises
- [x] Added an input mistakes screen
- [x] Added an input timer screen

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
1. Winning Game (With Speed Increasing) Gif of last 30 Seconds

![](https://media.giphy.com/media/nG78dPTK5wObxMvJlz/giphy.gif)

2. Start and Stop Toggle Feature + Themes + Input Screens

![](https://media.giphy.com/media/7JeJX2Eo2gBjZubYEY/giphy.gif)

3. Random Pattern Feauture (Refreshing the page and a new pattern appears)

![](https://media.giphy.com/media/8tJnepsckEzwCuLh8r/giphy.gif)

4. Lose Game due to Timeout 

![](https://media.giphy.com/media/WbAl9sDslccLIO7or9/giphy.gif)

5. Lose Game due to Mistakes 

![](https://media.giphy.com/media/xF5GstkpX5tuldrsxa/giphy.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Overall I was able to get by with the guide given for the basic template of the game. However, as I did all of the optional steps and some more, I had to refer to some online resources. I was able to add more than 4 buttons, implement a random secret pattern, speed the game up, customize the buttons and give the player 3 strikes fairly easily. I did use online  resources such as Youtube, stackOverflow and Geeks for Geeks to get the ticking clock feature and the sound portion working as I had some difficulty with it. I also used google images for the button images and theme images.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I faced with this pre-work was finishing up the countdown portion and doing the sound portion. The countdown portion initially took me a while to understand. The setInterval and clearInterval functions tripped me up for a couple of minutes but I understood them eventually. It took me a good amount of time to implement them, however. I came across so many errors while doing this bit. I overcame it by referring to online resources such as youtube, geeks for geeks, and StackOverflow. I finally was able to create a solution that, worked and stopped the game once the time was up and then restarted once you hit start again. I wanted to go even more overboard and add a progress bar to the project, which did not take too long.  If I had more time I would have made the progress bar even better and more visually appealing. I had a similar situation with the sound portion as well. I got the audio tags and the audio to work, but the real trouble came when I was replacing the previous sound frequency map with the new sounds. I failed countless times and I finally got it to work after rewriting a bunch of functions in the program. I also had trouble making the sound stop but I found a solution for that quickly. 
So to summarize, I am proud of being able to implement the clock feature and the sound feature because I never gave up each time I failed. I tried my best to fix the issue by thinking of out-of-the-box solutions along with referring to outside resources to help and guide me.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I had a few questions about web development after completing my submission. One of them was how efficient would HTML and CSS be in creating the front end for a big website? I had this question because I imagine as the number of elements and complexity in a website increases wouldn’t the difficulty to update/edit also increase tremendously? 
I also had a question on how all this data could be stored? Websites nowadays also have to store data in a server in the cloud or a personal server, what is the best way of accomplishing that? How can we keep the data in the website secure? Are there any important principles followed that would help in creating a website?
How would you manage between so many elements in a big website front end, any tips? I also had one last question which was, How massively would web development change with the rise of web 3.0?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would mainly try to get the progress bar to be more efficient, make my website more visually appealing to the eyes, create 3d buttons with custom sounds that change according to the theme. I would also like it if I could make the pokemon in the buttons change along with the theme. I also would have wanted to make my javascript functions more optimized and give the user more control over the game settings like how many buttons they can use, how many values the secret pattern can be, and maybe even add a volume slider. I honestly would love to spend more time on this project and make it a lot more fancy as I had a great time doing it.




## Interview Recording URL Link

[My 5-minute Interview Recording]
(https://youtu.be/-m2P_gDzEkQ)


## License

    Copyright [Sadashiva Yalla]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
