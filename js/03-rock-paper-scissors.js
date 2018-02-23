/*eslint-env browser*/
var choice = window.prompt('Pick Rock, Paper, or Scissors');

var challenger = Math.floor(Math.random() * 3);
if (challenger === 0) {
    challenger = 'Rock';
} else if (challenger === 1) {
    challenger = 'Paper';
} else {
    challenger = 'Scissors';
}


var compare = function (choice, challenger) {
    'use strict';
    if (choice === challenger) {
        window.alert("You tied. Play again!");
    }
    if (choice === "Rock") {
        if (challenger === "scissors") {
            window.alert("Rock destroys scissors.");
        } else {
            window.alert("Paper covers rock.");
        }
    }
    if (choice === "Paper") {
        if (challenger === "Rock") {
            window.alert("Paper covers rock.");
        } else {
            window.alert("Scissors cut paper.");
        }
    }
    if (choice === "Scissors") {
        if (challenger === "Rock") {
            window.alert("Rock destroys scissors.");
        } else {
            window.alert("Scissors cut paper.");
        }
    }
};

compare(choice, challenger);