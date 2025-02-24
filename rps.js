// set up html elements

const humanScoreDiv = document.querySelector(".human-score");
humanScoreDiv.textContent = "Your Score: -";
const computerScoreDiv = document.querySelector(".computer-score");
computerScoreDiv.textContent = "Computer Score: -";
const humanSelectionDiv = document.querySelector(".human-selection");
humanSelectionDiv.textContent = "You choose: -";
const computerSelectionDiv = document.querySelector(".computer-selection");
computerSelectionDiv.textContent = "The Computer chooses: -";

const resultDiv = document.querySelector(".result");
resultDiv.textContent = "Play A Game";
const winnerDiv = document.querySelector(".winner");
winnerDiv.textContent = "-";


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound(getComputerChoice(), 1));
paperButton.addEventListener("click", () => playRound(getComputerChoice(), 2));
scissorsButton.addEventListener("click", () => playRound(getComputerChoice(), 3));


// set up game logic

const RPSChoice = Object.freeze({
  1: "ROCK",
  2: "PAPER",
  3: "SCISSORS",
});

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  humanSelectionDiv.textContent = "You choose: " + RPSChoice[humanChoice];
  computerSelectionDiv.textContent = "The Computer chooses: " + RPSChoice[computerChoice];

  if (
      humanChoice === 1 && computerChoice === 2 ||
      humanChoice === 2 && computerChoice === 3 ||
      humanChoice === 3 && computerChoice === 1
  ) {
    resultDiv.textContent = RPSChoice[computerChoice] + " beats " + RPSChoice[humanChoice];
    winnerDiv.textContent = "You Lose";
    computerScore++;
    updateScore();
    return 0;
  } else if (
      computerChoice === 1 && humanChoice === 2 ||
      computerChoice === 2 && humanChoice === 3 ||
      computerChoice === 3 && humanChoice === 1
  ) {
    resultDiv.textContent = RPSChoice[humanChoice] + " beats " + RPSChoice[computerChoice];
    winnerDiv.textContent = "You Win";
    humanScore++;
    updateScore();
    return 1;
  }
  resultDiv.textContent = RPSChoice[humanChoice] + " == " + RPSChoice[computerChoice];
  winnerDiv.textContent = "Tie";
  return -1;
}

function updateScore() {
  humanScoreDiv.textContent = "Your Score: " + String(humanScore);
  computerScoreDiv.textContent = "Computer Score: " + String(computerScore);
}
