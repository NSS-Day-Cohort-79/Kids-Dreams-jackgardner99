# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The Kids.js module contains the event listener code. The Kids.js module is the same module with the appended HTML with added "dataset" attributes, so it's easier to navigate and find the correct data to target in the module when adding the EventListener and setting it's intended target. 

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > It's invoked because you want to throw in one 'kid' object of the kids array as one of the arguments instead of the entire kids array. You then want to use the celebrities array as the second argument to iterate in the function that you invoked to return a celebrity object, with a matching id to the kid's id property to be displayed in the appended HTML.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > I added an EventListener to the CelebrityList module to run a callback function to trigger a window alert displaying the sport the clicked on celebrity plays. In that function is a series of nesting if statements and a for...of loop that iterates the celebrities array to match one celebrity's id property to the DOM property of the celebrity clicked in the browser. When it finds the match, it pops up an alert in the browser.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > In the main.js module, we are importing and invoking three functions that have  HTML return values in the value of the applicationHTML variable with more HTML elements written out. We are then grabbing the id of the `<main>` element in the index.html with `document.querySelector` method, setting it as the value of the mainContainer variable. Finally we are setting it's innerHTML equal to the applicationHTML variable to append the index with the html we created from the three functions in the other modules to display in the DOM.

