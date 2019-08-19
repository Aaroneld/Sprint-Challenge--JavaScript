# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

.forEach iterates through each element of an array executing a function for each of the elements whilst returning "undefined" itself, it is allowed to mutate the array it is 
called on. The .map method iterates through each element of the array preforming a function on the data and moves the new values to a new array. .map requires variable assignment (e.g var = someArr.map(function)) forEach does not.

2. What is the difference between a function and a method?

Methods are declared inside object structures, functions are not. 

3. What is closure?

Closure refers to the concept of a lexical environment, that is to say, the importance of a piece of code's location in the general code structure. In JavaScript there is the
global and local scopes. Closure describes how these local scopes go about accessing data both within and outsides their local range. For instance if a variable is referenced 
that is not within the range of a certain local scope Javascript will look outside of that scope to the nearest adjacent local scope (or the global scope providing it is the
only thing existing outside of a specific local scope) for the existance of that variable.  

4. Describe the four rules of the 'this' keyword.

Rule 1: Window/Global Object Binding: When this is called by itself it represents the Global Object which is the container for the 
JavaScript code unique to each instance of its occurance. On a web browser the Global Object is called window. The Global Object is the initial state in which Javascript 
executes code before refering to functions as they are called inside it. It provides Javascript with its basic functionality.

Rule 2: Implicit Binding: When "this" is called in the following format "this.something", it refers to the object directly preceding what "something" represents. 

Rule 3: New binding: In this case "this" refers to the particular object that was created by a constructor function, the constructor function has "this" keywords as 
variable declarations which represent some form of key/value information (e.g. primitive data types, functions, sub-objects) that are instantiated in a new object when the constructor is called to instantiate it.

Rule 4: Principle 4 Explicit Binding: Explicit binding allows a programmer to explicitly point to the environment in which "this" refers to its container object, using the call or apply methods. By calling or applying a certain object "this" now refers to that object.  

5. Why do we need super() in an extended class?

super() allows an extended class to access its parents methods and key/value pairs. 

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
