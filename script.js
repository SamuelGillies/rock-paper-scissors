function test() {
    return console.log('Hello, world!');
}


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);              // generate random seed
    let computerSelection = 'undecided';                // create container for computers choice to sit in

    switch (x) {                                        // map random seed to a meaningful result
        case 0: 
            computerSelection = 'rock';
            break;
        case 1: 
            computerSelection = 'paper'; 
            break;
        case 2: 
            computerSelection = 'scissors'; 
            break;
    }
    return computerSelection;                           // return computer selection after result has been determined
}

function getPlayerChoice() {
    const input = prompt("Rock, Paper, or Scissors?");  // get input prompt from player
    let playerChoice = input.toLowerCase();             // convert input to lowercase for standardisation

    if ((playerChoice === 'rock') || (playerChoice === 'scissors') || (playerChoice === 'paper')) {
        return playerChoice;
    } else {
        alert('Try again');
    }                                                   // check if the input is a correct value, else reject input and prompt again
}

function playRound (playerSelection, computerSelection) {


}