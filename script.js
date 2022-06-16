function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return (options[Math.floor(Math.random() * 3)]);
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
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

// function game() {
//     let playerScore = 0
//     let computerScore = 0

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Rock, paper, scissors?');
//         const computerSelection = computerPlay();
//         let result = round(playerSelection, computerSelection);

//         console.log(result)

//         if (result == 'Draw!') {
//             continue
//         } else if (result.slice(0,6) == 'You win') {
//             playerScore++
//         } else {
//             computerScore++
//         }
//     }
//     if (playerScore > computerScore) {
//         return "You win the game!"
//     } else if (computerScore < playerScore) {
//         return "You lose the game!"
//     } else {
//         return "Draw!"
//     }
// }


let playerScore = 0;
let computerScore = 0;
const body = document.querySelector('body');

const round = document.createElement('div');
round.classList.add('round');

const finish = document.createElement('div');
finish.classList.add('end-game');

const buttons = document.querySelectorAll('button');


window.addEventListener('click', function (e) {
    const playerSelection = e.target.className;
    let round_result = playRound(playerSelection);

    if (round_result == 'Draw!') {
        round.textContent = round_result + " Player score =  " + playerScore + ", computer score = " + computerScore + ".";
        body.appendChild(round);
        return
    } else if (round_result.slice(0,7) == 'You win') {
        playerScore++
    } else {
        computerScore++
    }

    round.textContent = round_result + " Player score =  " + playerScore + ", computer score = " + computerScore + ".";
    body.appendChild(round);

    if (playerScore == 5) {
        finish.textContent = 'You Won!';
        body.appendChild(finish);
        buttons.forEach(button => {
            button.disabled = true;
        })
    } else if (computerScore == 5) {
        finish.textContent = 'You Lose!';
        body.appendChild(finish);
        buttons.forEach(button => {
            button.disabled = true;
        })
    }
})