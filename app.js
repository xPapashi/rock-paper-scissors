const words = ["Rock", "Paper", "Scissors"];
console.log("Number meaning:\n0 - Rock\n1 - Paper\n2 - Scissors");


function getComputerChoice() {
  const choice = words[Math.floor(Math.random() * words.length)];
  return choice;
}

function getPlayerChoice() {
    let playerInput = parseInt(prompt("Enter a number from 0-2:"));
    const error = "Invalid choice!";

    if (playerInput == 0) {
        playerInput = words[0];
    } else if (playerInput == 1) {
        playerInput = words[1];
    } else if (playerInput == 2) {
        playerInput = words[2];
    } else {
        playerInput = error
    }

    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player input: ${playerSelection}`);
    console.log(`Computer choice: ${computerSelection}`);
}

playRound(getPlayerChoice(), getComputerChoice());
getComputerChoice();
