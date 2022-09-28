function test() {
    return console.log('Hello, world!');
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);              // generate random seed
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
    let playerSelection = input.toLowerCase();             // convert input to lowercase for standardisation

    if ((playerSelection === 'rock') || (playerSelection === 'scissors') || (playerSelection === 'paper')) {
        return playerSelection;
    } else {
        alert('Try again');
    }                                                   // check if the input is a correct value, else reject input and prompt again
}

function playRound (playerSelection, computerSelection) {   // rock beats scissors, scissors beats paper, paper beats rock

    let computerCapitalise = computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1);  // capitalise player and computer inputs for correct message output
    let playerCapitalise = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {        // determine if the inputs result in a draw, win, or loss condition
        return `Draw! Go again!`; 
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        return `You Win! ${playerCapitalise} beats ${computerCapitalise}!`;
    } else {
        return `You Lose! ${computerCapitalise} beats ${playerCapitalise}!`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice(); 
        let computerSelection = getComputerChoice(); 
        console.log(playRound(playerSelection, computerSelection));  
    }
}
