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

console.log(getHumanChoice());