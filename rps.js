let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  let playerChoiceLower = playerChoice.toLowerCase();
  let computerChoiceLower = computerChoice.toLowerCase();

  if (playerChoice == computerChoice) {
    return "It is a draw!";
  } else if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      return "You win! Rock beats scissors";
    } else {
      return "You lose! Paper beats rock";
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      return "You win! Paper beats rock";
    } else {
      return "You lose! Scissors beats paper";
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      return "You win! Scissors beats paper";
    } else {
      return "You lose! Rock beats scissors";
    }
  }
}
