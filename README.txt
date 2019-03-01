----------------------------------------------------------------------------------------------------------
|| Cella Rule 90                                                                                        ||
----------------------------------------------------------------------------------------------------------
The program displays Wolfram's Cella Rule 90 in 400x400 canvas in a web browser using Javascript and CSS.

Features: Displays the Cella Rule 90 in a 400x400 canvas in a web browser.
          Presumes that cells outside the grid are empty.

Intro:

Implementation - We created a 2040 by 2030 canvas that we set up a grid we broke down into a
          400 by 400 squares and labeled accordingly. we then used a 2D array in Javascript to record the
          placement of black cells. When we find a cell that should be black we find the index in the
          2D array and draw a 5x5 black pixel box at the corresponding grid location to mark the cell.

----------------------------------------------------------------------------------------------------------
|| External Requirements                                                                                ||
----------------------------------------------------------------------------------------------------------
A web browser

----------------------------------------------------------------------------------------------------------
|| Team Information                                                                                     ||
----------------------------------------------------------------------------------------------------------

Team Members: Jonathan Ishii, Matthew Mikulka
Team Name: NFG
Class Number: CSPC 335
Project Name: Cella Rule 90
Project Number: 1

----------------------------------------------------------------------------------------------------------
|| Contents                                                                                             ||
----------------------------------------------------------------------------------------------------------

Setup and Installation: None
Bugs: None

Files:
Cella Rule 90.html
README.txt
assets/draw-stuff.js
assets/styles.css
Tasks.PDF
Complexity Order.PDF

----------------------------------------------------------------------------------------------------------
|| How to execute program                                                                               ||
----------------------------------------------------------------------------------------------------------

How to handle the JS-1 files to get results:

1. Main HTML file is js-1.html, a web page.
2. Sibling folder (at same level as .html) is "assets".
  (You can move this folder elsewhere if so, move js-1.html accordingly.
    They need to be in the same directory.)
3. Web page links to (loads) assets/styles.css, a very simple CSS file.
4. Web page has some HTML markup for title, header and text.
5. After body, web page loads a script file from assets with functions.
6. After that, another Script section defines another function.
7. And then runs some "loose" Javascript commands.

How to show (and run) the web page:
1. Drag and drop the "cella rule 90.html" file onto a browser to see what it does,
    or double click on it and it will launch in your default browser.
