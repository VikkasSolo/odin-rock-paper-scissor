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
        return "You Win " + playerChoice + " beats " + computerChoice;
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        return "You Win " + playerChoice + " beats " + computerChoice;
    } 
    else if(playerChoice === "scissor" && computerChoice === "paper") {
        return "You Win " + playerChoice + " beats " + computerChoice;
    }
    else {
        return "You Lose " + computerChoice + " beats " + playerChoice;
    }
}
let computerChoice = getComputerChoice();
// console.log(playRound(computerChoice,playerChoice));
//get the input from user (rock scissor or paper)
let playerChoice = prompt("Enter your Choice: ");
//repeat the steps 5 times 

//game over , display won or lost
// and an option to play again 


