let i = 0;
let j = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);              // generate random seed
    switch (x) {                                        // map random seed to a meaningful result
        case 0: 
            computerSelection = 'Rock';
            break;
        case 1: 
            computerSelection = 'Paper'; 
            break;
        case 2: 
            computerSelection = 'Scissors'; 
            break;
    }
    return computerSelection;                           // return computer selection after result has been determined
}

function playRound (playerSelection, computerSelection) {   // rock beats scissors, scissors beats paper, paper beats rock

    if (playerSelection === computerSelection) {        // determine if the inputs result in a draw, win, or loss condition 
        return `Draw! Go again!`; 
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        i++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        j++;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game(input) {
    let playerSelection = input;                        // playerSelection set to input on button selection in DOM
    let computerSelection = getComputerChoice(); 
    results.textContent = playRound(playerSelection, computerSelection);  // print return value of playRound to DOM

    if (i >= 5) {                                       // after 5 games print results and score to DOM 
        results.textContent = 'GAME OVER! Player Wins! Would you like to play again?';
        score.textContent = (`${i} vs ${j}`);  
        i = 0;
        j = 0;
    } else if (j >= 5) {
        results.textContent = 'GAME OVER! Computer Wins! Would you like to play again?';
        score.textContent = (`${i} vs ${j}`);  
        i = 0;
        j = 0;
    } else {
    score.textContent = (`${i} vs ${j}`);  
    }
}
