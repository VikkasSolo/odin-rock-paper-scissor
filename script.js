// Rock paper scissor game
//my algorithm for the game

//make a random choice by computer
function getComputerChoice() {
    // create a variable randomNum that contains numbers from 1 to 3 which are random
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let choice;
    //if the randomNum is 1 then return rock 
    if (randomNum === 1) {
        choice = "rock";
        return choice;
    }
    //else if 2 then return paper 
    else if (randomNum === 2) {
        choice = "paper";
        return choice;
    }
    //else scissor
    else {
        choice = "scissor";
        return choice;

    }
}
// console.log(getComputerChoice());

//compare the two choices and return a winner 
function playRound (computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice === playerChoice) {
        return "Tie";
    }
    else if(playerChoice === "rock" && computerChoice === "scissor") {
        return "win";
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        return "win";
    } 
    else if(playerChoice === "scissor" && computerChoice === "paper") {
        return "win";
    }
    else {
        return "You Lose " + computerChoice + " beats " + playerChoice;
    }
}

// console.log(playRound(computerChoice,playerChoice));

//repeat the steps 5 times 
function game() {
    let winCount = 0;
    let lostCount = 0;
    //welcome a player
    alert("Welcome to the game of Rock Paper Scissor")
    //loop for 5 times
    for (let i = 0; i < 5; i++) {
        //display the round
        console.log("Round: " + (i+1));
        //get the input from user (rock scissor or paper)
        let playerChoice = prompt("Enter your Choice: ");
        let computerChoice = getComputerChoice();
        //play a round 
        let roundResult = playRound(computerChoice, playerChoice);
        if (roundResult === "win" ) {
            winCount ++;
            console.log("You Won This Round!!");
        }
        else if(roundResult === "Tie") {
            console.log(roundResult);
        }
        else {
            console.log(roundResult);
            lostCount++
        }
    }
    //shows the final winner 
    if (winCount === lostCount) {
        console.log("The Game is Tie");
    }
    //game over , display won or lost
    else if (winCount > lostCount){
        console.log("WON The Game");
    }
    else {
        console.log("Lost the Game")
    }
    alert("GAME OVER");
    //an option to replay 
    let replay = prompt("Wanna play again? Y/N", "Y");
    if (replay === "y" || replay === "Y") {
        game();
    }
    else{
        return;
    }
}

game();
