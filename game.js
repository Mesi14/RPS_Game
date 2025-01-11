let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx]; 
}

let isChoiceValid = (choice) => {
    let currChoice = choice.toLowerCase();
    return (currChoice === "rock" || currChoice === "paper" || currChoice === "scissors") ? true : false
}

let getHumanChoice = () => {
    let choice = prompt("Enter your choice:")
    while(!isChoiceValid(choice)) {
        choice = prompt("Enter either rock, paper, or scissors");
    }
    return choice.toLowerCase();
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
    for(let i=0; i<5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if(humanScore > computerScore) {
        console.log(`You win by ${humanScore-computerScore} points. Final results: Human: ${humanScore} : Computer: ${computerScore}!`)
    } else if(humanScore === computerScore) {
        console.log(`It's a tie! Final results: Human: ${humanScore} : Computer: ${computerScore}!`)
    } else {
        console.log(`You loose by ${computerScore-humanScore} points. Final results: Human: ${humanScore} : Computer: ${computerScore}!`)
    }
    console.log("Game over!")
}

playGame();