// Rock paper scissor game
//my algorithm for the game

//make a random choice by computer
function getComputerChoice() {
    // create a variable randomNum that contains numbers from 1 to 3 which are random
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let choice;
    //if the randomNum is 1 then return rock 
    if (randomNum === 1) {
        choice = "Rock";
        return choice;
    }
    //else if 2 then return paper 
    else if (randomNum === 2) {
        choice = "Paper";
        return choice;
    }
    //else scissor
    else {
        choice = "Scissor";
        return choice;

    }
}

console.log(getComputerChoice());
//get the input from user (rock scissor or paper)
//compare the two choices and return a winner 
//repeat the steps 5 times 
//game over , display won or lost
// and an option to play again 


