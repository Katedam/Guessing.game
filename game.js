function rightAnswer (answerId) {
    var submitAnswer = document.getElementById(answerId);
    submitAnswer.innerHTML = "Right!";
    submitAnswer.innerHTML += "<img src='ebcd691b-1dcd-4d1a-9e1d-1dd36a1c2548.svg'>";
    submitAnswer.setAttribute("class", "response right");
    console.log("user clicked truth");
}

function wrongAnswer (answerId) {
    var submitAnswer = document.getElementById(answerId);
    submitAnswer.innerHTML = "Wrong!";
    submitAnswer.innerHTML += "<img src='7456c25c-bd3a-4bf7-84d9-3f0f5acfc457.svg'>";
    submitAnswer.setAttribute("class", "response");
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
    submitAnswer.innerHTML = "<img src='ebcd691b-1dcd-4d1a-9e1d-1dd36a1c2548.svg'>";
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
            goodGuess.innerHTML = "<img src='5bbdb7b1-9096-4b76-a8ef-2af8638da7e9.svg'>";
            goodGuess.setAttribute("class", "correct");
            console.log("user picked something growing in my garden");
            break;
        } else {
            var goodGuess = document.getElementById("guessVeg");
            goodGuess.setAttribute("class", "incorrect");
            goodGuess.innerHTML = "Not this year.";
            goodGuess.innerHTML += "<input type='button' value='Try again!' onclick='guessTheNum()'>";
            console.log("user chose a vegetable that isn't in my garden");
        }
    }
}

