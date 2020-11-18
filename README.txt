## Coding Quiz

This is my browser quiz that asks you almost exclusively questions about programming
it can support any number of questions that are added to the code, as well as allows
those questions to contain any number of answers. It also features a high score
screen, which takes the users initials and presents their score alongside it.
Additionally, the high score screen maintains the users greatest score (while storing 
that information locally) unless the user chooses to press the "clear score" button, 
which will allow any score to be written to the screen the next time the user takes the 
quiz.

# The steps involved

This project has been easilly the most difficult one I've done so far, combining the
difficulties of making a website from scratch using html and css, as well as some 
difficult logic problems to solve while writing javascript. 
The webside also features the use of localstorage to have scores persist, which
is a completely new topic to me and I had to learn how to use it with experience.

*I started with making the website. I threw the html in and used the assignment demo
as a base, made some personal customizations with css, and looked up a nice color scheme
for the text and background color.

* the first challenge working with the javascript was that I had to immediately start
adding and changing elements to the dom dynamically with javascript as the user interacted
with the page. This is something I've seen before in class, but never practiced very much.
Once I ficured it out, I made a system that could start the quiz and go through the
questions as the user got the answers right.

* from there I added the high score sheet using similar html and css to the main page
which would use localstorage to take the time the user took to finish the quiz and
would display it with the users initials. This was pretty simple once I got the hang of
using javascript to edit the dom.

* from there all I needed to do was code the buttons that would take you back to the main
page, as well as one that could clear your score by clearing the localstorage item and
removing the displayed score from the dom.