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
    submitAnswer.innerHTML = "Nice guess";
    console.log("user clicked guessed number");
}

function guessVeggies() {
    var veggies = ['zucchini', 'green beans', 'tomatoes', 'peppers', 'kale', 'lettuce', 'squash'];
    var vegPrompt = prompt('Guess one of the delicious veggies I have in my garden:').toLowerCase();
    for (var i = 0; i < veggies.length; i++) {
        console.log(i);
        console.log(vegPrompt);
        if (vegPrompt == veggies[i]) {
            var goodGuess = document.getElementById("guessVeg");
            goodGuess.innerHTML = "Nom nom nom! Good guess, click again to guess more veggies.";
            console.log("user picked something growing in my garden");
            break;
        } else {
            var goodGuess = document.getElementById("guessVeg");
            goodGuess.innerHTML = "So tasty but not growing in my garden this year. click again to try another guess.";
            console.log("user chose a vegetable that isn't in my garden");
        }
    }
}

