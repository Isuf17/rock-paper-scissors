function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return (options[Math.floor(Math.random() * 3)]);
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == 'rock') {
        if (playerSelection == 'scissors') {
            return 'You lose! Rock beats Scissors';
        } else if (playerSelection == 'rock') {
            return 'Draw!';
        } else if (playerSelection == 'paper') {
            return 'You win! Paper beats Scissors';
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            return 'You lose! Paper beats rock';
        } else if (playerSelection == 'paper') {
            return 'Draw!';
        } else if (playerSelection == 'scissors') {
            return 'You win! Scissors beats paper';
        }
    } else if (computerSelection == 'scissors') {
        if (playerSelection == 'paper') {
            return 'You lose! Scissors beats paper';
        } else if (playerSelection == 'scissors') {
            return 'Draw!';
        } else if (playerSelection == 'rock') {
            return 'You win! Rock beats scissors';
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper, scissors?');
        const computerSelection = computerPlay();
        let result = round(playerSelection, computerSelection);

        console.log(result)

        if (result == 'Draw!') {
            continue
        } else if (result.slice(0,6) == 'You win') {
            playerScore++
        } else {
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        return "You win the game!"
    } else if (computerScore < playerScore) {
        return "You lose the game!"
    } else {
        return "Draw!"
    }
}