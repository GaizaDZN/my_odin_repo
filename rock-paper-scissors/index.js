const randNum = () => {
  return Math.floor(Math.random() * 3);
};
const getComputerChoice = () => {
  let rand = randNum();
  console.log("compChoice = " + rand);
  switch (rand) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const playerSelection = () => {
  let result = window
    .prompt("Enter 'rock, 'paper' or 'scissors'")
    .toLowerCase();
  return result;
};

function playRound(playerSelection, computerSelection) {
  let game = {
    scissors: "scissors beats paper",
    paper: "paper beats rock",
    rock: "rock beats scissors",
  };

  let result = "";
  const playerWin = (str) => {
    console.log(str);
    console.log("Player wins the round!");
    result = "PLAYER";
  };

  const computerWin = (str) => {
    console.log(str);
    console.log("Computer wins the round!");
    result = "COMPUTER";
  };

  const draw = () => {
    console.log("Draw. Try again!");
    result = "DRAW";
  };

  if (playerSelection === computerSelection) {
    draw();
  }

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

  return result;
}

const gameLoop = (winCount) => {
  let playerWins = 0;
  let compWins = 0;
  let draws = 0;
  let roundCount = 1;

  console.log("ROCK, PAPER SCISSORS");
  while (playerWins < winCount || compWins < winCount) {
    if (roundCount === 1) console.log("Let the games begin!");
    let result = playRound(playerSelection(), getComputerChoice());
    console.log("Result: " + result);
    switch (result) {
      case "PLAYER":
        playerWins += 1;
        break;
      case "COMPUTER":
        compWins += 1;
        break;
      default:
        draws += 1;
        break;
    }

    console.log({ player: playerWins, computer: compWins, draws });
    if (playerWins === winCount) {
      console.log("YOU WIN!");
      break;
    } else if (compWins === winCount) {
      console.log("YOU LOSE!");
      break;
    }

    roundCount++;
  }
};

gameLoop(2);
