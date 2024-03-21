// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched"

let randomInteger = Math.ceil(Math.random() * 10);
console.log(randomInteger);

let guessNumber = 2;

if (parseInt(guessNumber) === randomInteger) {
    console.log("Good Work");
} else {
    console.log("Not Matched");
}
