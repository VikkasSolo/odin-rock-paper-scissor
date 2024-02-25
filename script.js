// Rock paper scissor game, Following ODIN PROJECT

//reference of some elements 
let winCount = 0,
    loseCount = 0,
    tieCount = 0,
    roundNumber = 0;
const playerChoice = document.querySelector(".choiceContainer");
const mainContainer = document.querySelector(".mainContainer");
//Creating elements result in DOM
const result = document.querySelector(".result");
const resultDisplay = document.createElement("p");
const roundDisplay = document.createElement("p");
result.appendChild(resultDisplay);
result.appendChild(roundDisplay);

//returns the values of computerChoice
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
//restart 
function restartGame(Node) {
    //removes the gameOverDiv
    Node.remove();
    //re enables(make them visible)  the buttons and results of single round
    mainContainer.style.visibility = "visible";
    //resets the the values of single round
    winCount = 0;
    loseCount = 0;
    roundNumber = 0;
    tieCount = 0;
    resultDisplay.textContent = "";
    roundDisplay.textContent = "";
}

//runs when game over
function gameOver() {
    //hides the main buttons and elements
    mainContainer.style.visibility = "hidden";
    //creates element to show result for five 
    const gameOverDiv = document.createElement("div");  
    const para = document.createElement("p")
    const finalResult = document.createElement("h3");
    //shows the result
    para.textContent = `WON - ${winCount}, LOST - ${loseCount}, TIE - ${tieCount}`;
    if(winCount > loseCount) {
        finalResult.textContent = "YOU WON";
    }
    else if(winCount < loseCount) {
        finalResult.textContent = "YOU LOST";
    }
    else {
        finalResult.textContent = "TIE";
    }
    //appends the changed elements 
    gameOverDiv.appendChild(finalResult);
    gameOverDiv.appendChild(para);
    //
    const restart = document.createElement("button");
    restart.textContent = "CLICK TO RESTART";
    gameOverDiv.appendChild(restart);
    //appends the div to the body
    document.body.appendChild(gameOverDiv);
    //adds addEventListener to restart button 
    restart.addEventListener("click", e => {
        //stops propagating, this resolved some bugs 
        e.stopPropagation();
        //calls restart function with gameOverDiv as the parameter
        restartGame(gameOverDiv)
    });
}


//compare the ComputerChoice and playerChoice and return win, tie, and lose string values as an output 
function playRound (computerChoice, playerChoice) {
    //exits the function after 5 turns
    if (roundNumber == 5) {
        gameOver();
    }
    //console.log(roundNumber, winCount,loseCount); --- for debugging
    if (computerChoice === playerChoice) {
        resultDisplay.textContent = `ComputerChoice - ${computerChoice}, TIE`;
        tieCount ++;
    }
    else if(playerChoice === "rock" && computerChoice === "scissor") {
        resultDisplay.textContent =  `ComputerChoice - ${computerChoice}, YOU WON`;
        winCount ++;
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        resultDisplay.textContent =  `ComputerChoice - ${computerChoice}, YOU WON`;
        winCount ++;
    } 
    else if(playerChoice === "scissor" && computerChoice === "paper") {
        resultDisplay.textContent =  `ComputerChoice - ${computerChoice}, YOU WON`;
        winCount ++;
    }
    else {
        resultDisplay.textContent =  `ComputerChoice - ${computerChoice}, YOU LOST`;
        loseCount ++;
    }
    roundNumber ++;
    roundDisplay.textContent = `ROUND - ${roundNumber}`;
    
}
 
//actual game starts at this point i think
playerChoice.addEventListener("click", (e) => {
    let target = e.target;
    let computerChoice = getComputerChoice();
    switch (target.id) {
        case "rock":
            playRound(computerChoice,target.id);
            break;
        case "paper":
            playRound(computerChoice,target.id);
            break;
        case "scissor":
            playRound(computerChoice,target.id);
            break;
    }

});

