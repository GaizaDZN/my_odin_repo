const randNum = () => {
  return Math.floor(Math.random() * (3 - 1) + 1);
};
const getComputerChoice = (a) => {
  switch (a) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
};

const playerSelection = () => {
  let result = window.prompt("Enter 'rock, 'paper' or 'scissors'");
  return result.toLowerCase();
};

function playRound(playerSelection, computerSelection) {
  let game = {
    scissors: "scissors beats paper",
    paper: "paper beats rock",
    rock: "rock beats scissors",
  };

  const playerWin = (str) => {
    console.log(str);
    console.log("Player wins the round!");
    return { player: 1 };
  };

  const computerWin = (str) => {
    console.log(str);
    console.log("Computer wins the round!");
    return { computer: 1 };
  };

  const draw = () => {
    console.log("Draw. Try again!");
    return { draw: 1 };
  };

  if (playerSelection === computerSelection) draw();

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "paper":
        computerWin(game.paper);
        break;
      case "scissors":
        playerWin(game.rock);
        break;
    }
  }
  if (playerSelection === "paper") {
    switch (computerSelection) {
      case "scissors":
        computerWin(game.scissors);
        break;
      case "rock":
        playerWin(game.paper);
        break;
    }
  }
  if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        computerWin(game.rock);
        break;
      case "paper":
        playerWin(game.scissors);
        break;
    }
  }
}

const gameLoop = (winCount) => {
  let gameWins = { player: 0, computer: 0, draw: 0 };

  console.log("ROCK, PAPER SCISSORS");
  while (gameWins.player <= winCount || gameWins.computer <= winCount) {
    if (gameWins.player === 0 && gameWins.computer === 0)
      console.log("Let the games begin!");
    let result = playRound(playerSelection(), getComputerChoice());
    gameWins.Object.keys[result] += result.values[0];
  }
  if (gameWins.player === winCount) {
    console.log("YOU WIN!");
  } else {
    console.log("YOU LOSE!");
  }
};

gameLoop(5);
