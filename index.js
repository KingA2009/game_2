
const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    
  });
});

function computerPlay() {
  const choices = ["tosh", "qogoz", "qychi"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Durrang";
  } else if (
    (playerSelection === "tosh" && computerSelection === "qychi") ||
    (playerSelection === "qogoz" && computerSelection === "tosh") ||
    (playerSelection === "qychi" && computerSelection === "qogoz")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "Sen yutdin " ;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Sen yutqazdin ";
  }
}
