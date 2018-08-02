
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
/*var rightAnswer = 0;
function guessTruth () {
    var submitTruth = "";
    if ((submitTruth.toLowerCase() == "true") || (submitTruth.toLowerCase() == "truth")) {
        var submitTruth = document.getElementById("wolverineQ" || "soManyPetsQ");
        submitTruth.innerHTML = "Right!";
        console.log("user input truth or true = right answer");
        rightAnswer++                
    } else {
        submitTruth.innerHTML = "Wrong!";
        console.log("user input lie, no or false = wrong answer");
    }
}
              var questionTwo = prompt('Truth or Lie: Growing up I had 1 dog, 3 cats, 2 ducks, 3 box turtles, an iguana, an anole lizard and some goldfish all at the same time.');
            if ((questionTwo.toLowerCase() == "true") || (questionTwo.toLowerCase() == "truth")) {
                alert("Ding-ding-ding-ding! Yep, I'm definitely an animal lover");
                rightAnswer++;
                console.log("correct");
            } else {
                alert("Oops, wrong! I am definitely an animal lover")
                console.log("nope, that one's true! :-P");
            }
            var quessLie = ""
            if ((guessLie.toLowerCase() == "false") || (guessLie.toLowerCase() == "lie")) {
                alert("You're right, I'm not a natural athlete but I did learn to ski about 5 years ago and I love it!");
                rightAnswer++;
                console.log("correct");
            } else {
                alert("HAHA, I wish! Naw I learned to ski as an adult.")
                console.log("nope, that one's false! I learned to ski as an adult :-P");
            } 
            alert("You got " + rightAnswer + " out of 3.")*/



        
    
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
    alert("Sweet, good guess!");
    console.log("Sweet, good guess!");
}