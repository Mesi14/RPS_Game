const humanChoice = document.getElementById("humanChoiceText");
const buttonsDiv = document.getElementById("humanChoices");
let humanScore = document.getElementById("pScore").innerHTML;
let computerScore = document.getElementById("cScore").innerHTML;

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx]; 
}

let playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
    } else {
        if (humanChoice === 'rock') {
            if(computerChoice === 'paper') {
                console.log("You loose! Paper beats rock!");
                computerScore++;
            } else {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            }
        } else if(humanChoice === 'paper') {
            if(computerChoice === 'rock') {
                console.log('You win! Paper beats rock!')
                humanScore++;
            } else {
                console.log('You loose! Scissors beats paper!')
            }
        } else if(humanChoice === 'scissors') {
            if(computerChoice === 'rock') {
                console.log('You loose! Rock beats scissors!')
                computerScore++;
            } else {
                console.log('You win! Paper beats rock!');
                humanScore++;
            }
        }
    }
}

let playGame = () => {
    console.log('Welcome to the Rock Paper Scissors Console App!')
    console.log('===============================================')
    
    humanChoice.innerHTML = 'Please make your choice now!'
    buttonsDiv.addEventListener('click', ev => {
        if(ev.target.classList.contains('buttons')) {
            let currChoice = ev.target.innerHTML.toLowerCase();
            playRound(currChoice, getComputerChoice());

            };
        }
    );
    
    console.log(humanScore);
    console.log(computerScore)
}

playGame();