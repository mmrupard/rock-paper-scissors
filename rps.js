let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  let playerChoiceLower = playerChoice.toLowerCase();
  let computerChoiceLower = computerChoice.toLowerCase();

  if (playerChoiceLower == computerChoiceLower) {
    return "It is a draw!";
  } else if (playerChoiceLower == "rock") {
    if (computerChoiceLower == "scissors") {
      playerScore++;
      return "You win! Rock beats scissors";
    } else {
      computerScore++;
      return "You lose! Paper beats rock";
    }
  } else if (playerChoiceLower == "paper") {
    if (computerChoiceLower == "rock") {
      playerScore++;
      return "You win! Paper beats rock";
    } else {
      computerScore++;
      return "You lose! Scissors beats paper";
    }
  } else if (playerChoiceLower == "scissors") {
    if (computerChoiceLower == "paper") {
      playerScore++;
      return "You win! Scissors beats paper";
    } else {
      computerScore++;
      return "You lose! Rock beats scissors";
    }
  }
}

const playButtons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
const pScore = document.createElement("p");
const cScore = document.createElement("p");

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resultsDiv.textContent = playRound(button.value, getComputerChoice());
    pScore.textContent = "Player score: " + playerScore;
    cScore.textContent = "Computer score: " + computerScore;

    resultsDiv.appendChild(pScore);
    resultsDiv.appendChild(cScore);

    if (playerScore >= 5) {
      alert("Player Wins!");
      playerScore = 0;
      computerScore = 0;
    }

    if (computerScore >= 5) {
      alert("Computer Wins!");
      playerScore = 0;
      computerScore = 0;
    }
  });
});
