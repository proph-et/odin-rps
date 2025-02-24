function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  let choice = 0;
  do {
    choice = parseInt(prompt("input your choice: ROCK = 1, PAPER = 2, SCISSORS = 3"))
  } while ((choice < 1 || choice > 3))
  return choice;
}

const RPSChoice = Object.freeze({
  1: "ROCK",
  2: "PAPER",
  3: "SCISSORS",
});

function playRound(computerChoice, humanChoice) {
  if (
      humanChoice === 1 && computerChoice === 2 ||
      humanChoice === 2 && computerChoice === 3 ||
      humanChoice === 3 && computerChoice === 1
  ) {
    console.log(RPSChoice[computerChoice] + " beats " + RPSChoice[humanChoice]);
    return 0;
  } else if (
      computerChoice === 1 && humanChoice === 2 ||
      computerChoice === 2 && humanChoice === 3 ||
      computerChoice === 3 && humanChoice === 1
  ) {
    console.log(RPSChoice[humanChoice] + " beats " + RPSChoice[computerChoice]);
    return 1;
  }
  return -1;
}

let humanScore = 0;
let computerScore = 0;
let gameCounter = 0;
while (gameCounter < 5) {
  let result = playRound(getComputerChoice(), getHumanChoice());
  if (result === 0) {
    computerScore++;
  } else if (result === 1) {
    humanScore++;
  } else {
    console.log("tied");
  }
  gameCounter++;
}
console.log("humanScore: " + humanScore);
console.log("computerScore: " + computerScore);
if (computerScore > humanScore) {
  console.log("computer wins");
} else if (humanScore > computerScore) {
  console.log("human wins");
} else {
  console.log("tie game");
}

