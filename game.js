let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx]; 
}

console.log(getComputerChoice());