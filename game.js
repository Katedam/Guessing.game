
function rightAnswer (answerId) {
    var submitAnswer = document.getElementById(answerId);
    submitAnswer.innerHTML = "Right!";
    console.log("user clicked truth");
}

function wrongAnswer (answerId) {
    var submitAnswer = document.getElementById(answerId);
    submitAnswer.innerHTML = "Wrong!";
    console.log("user clicked lie");
}

function guessTheNum() {
    var randomNum = Math.floor(Math.random() * 10) + 1;
    var guessNum = prompt('Now I am going to think of a random number between 1-10. Can you guess what it is?');
    while (guessNum != randomNum) {
        if (guessNum > randomNum) {
            guessNum = prompt('That number is too high. Try again!');
            console.log("That number is too high. Try again!");
        } else if (guessNum < randomNum) {
            guessNum = prompt("That number is too low. Try again!");
        }
    }
    var submitAnswer = document.getElementById("number");
    submitAnswer.innerHTML = "Nice";
    console.log("user clicked guessed number");
}