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

function getFunFact() {
    let x = Math.floor(Math.random() * 12);              // generate random seed
    switch (x) {                                        // map random seed to a meaningful result
        case 0: 
            return 'Fun Fact: Rock-Paper-Scissors originated during the 2nd imperial dynasty of China'; 
        case 1: 
            return 'Fun Fact: The odds of winning Rock-Paper-Scissors is 33.33%'; 
        case 2: 
            return 'Fun Fact: On average, players use rock and scissors 35% of the time'; 
        case 3: 
            return 'Fun Fact: On average, paper is only used around 29.6% of the time'; 
        case 4: 
            return 'Fun Fact: Rock-Paper-Scissors spread to Europe from Japan in the 20th century'; 
        case 5: 
            return 'Fun Fact: Rock-Paper-Scissors is a simultaneous zero-sum game'; 
        case 6: 
            return 'Fun Fact: Rock-Paper-Scissors is also known as ‘Roshambo\''; 
        case 7: 
            return 'Fun Fact: In Germany, people call Rock-Paper-Scissors "Schnick-Schnack-Schnuck"'; 
        case 8: 
            return 'Fun Fact: Rock-Paper-Scissors is not just about luck as players exhibit a tendency for unconscious moves'; 
        case 9: 
            return 'Fun Fact: Players are most likely to stick with a winning move'; 
        case 10: 
            return 'Fun Fact: Players tend to change their losing moves right away'; 
        case 11: 
            return 'Fun Fact: Mario Anastasov was the first professional US rock-paper-scissors player'; 
    }
}

function game(input) {
    let playerSelection = input;                        // playerSelection set to input on button selection in DOM
    let computerSelection = getComputerChoice(); 
    outcome.textContent = playRound(playerSelection, computerSelection);  // print return value of playRound to DOM
    funFact.textContent = getFunFact(); 
    if (i >= 5) {                                       // after 5 games print results and score to DOM 
        gameover.textContent = 'GAME OVER!';
        outcome.textContent = 'Player Wins! Would you like to play again?';
        score.textContent = (`Player: ${i} Computer: ${j}`);  
        i = 0;
        j = 0;
    } else if (j >= 5) {
        gameover.textContent = 'GAME OVER!';
        outcome.textContent = 'Computer Wins! Would you like to play again?';
        score.textContent = (`Player: ${i} Computer: ${j}`);  
        i = 0;
        j = 0;
    } else {
    gameover.textContent = '––-';
    score.textContent = (`Player: ${i} Computer: ${j}`);  
    }
}
