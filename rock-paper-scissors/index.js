// DOM ///////////////////////
const playerBtns = document.querySelectorAll(".submit");
const compBtns = document.querySelectorAll(".comp-btn");
const infoText = document.getElementById("infoText");
const subInfoText = document.getElementById("subInfoText");
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const winText = document.getElementById("winText");

// add event listeners to player buttons
playerBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => playerSelection(e))
);
// DOM ///////////////////////

let gameOver = false;
let inGame = false;
let userChoice = "";
let playerWins = 0;
let compWins = 0;
let draws = 0;
let roundCount = 1;
let winCount = 2;

const newGame = (num) => {
  playerWins = 0;
  compWins = 0;
  draws = 0;
  roundCount = 1;
  winCount = num;
  inGame = true;
  gameOver = false;

  updateText(playerScore, "Player: 0");
  updateText(compScore, "Computer: 0");
  updateText(drawScore, "Draws: 0");
  updateText(winText, "");
};

const endGame = () => {
  gameOver = true;
  inGame = false;
};

const randNum = () => {
  return Math.floor(Math.random() * 3);
};

const getComputerChoice = () => {
  let rand = randNum();
  const alterBtn = (id) => {
    console.log(id);
    compBtns.forEach((btn) =>
      btn.id !== id
        ? (btn.classList.add("unselected"), btn.classList.remove("selected"))
        : (btn.classList.add("selected"), btn.classList.remove("unselected"))
    );
  };

  switch (rand) {
    case 0:
      alterBtn("compRock");
      return "rock";
      break;
    case 1:
      alterBtn("compPaper");
      return "paper";
      break;
    case 2:
      alterBtn("compScissors");
      return "scissors";
      break;
  }
};

const updateText = (el, str) => {
  el.textContent = str;
};

const selectAction = (id) => {
  playerBtns.forEach((btn) =>
    btn.id !== id
      ? (btn.classList.add("unselected"), btn.classList.remove("selected"))
      : (btn.classList.add("selected"), btn.classList.remove("unselected"))
  );
};

const playerSelection = (e) => {
  let target = e.target.id;
  selectAction(target);

  switch (target) {
    case "rockBtn":
      userChoice = "rock";
      break;
    case "paperBtn":
      userChoice = "paper";
      break;
    case "scissorsBtn":
      userChoice = "scissors";
      break;
    default:
      userChoice = undefined;
  }

  if (gameOver) {
    newGame(2);
  }
  game();
};

function playRound(playerSelection, computerSelection) {
  let game = {
    scissors: "scissors beats paper",
    paper: "paper beats rock",
    rock: "rock beats scissors",
  };

  let result = "";

  const playerWin = (str) => {
    // console.log(str);
    updateText(subInfoText, str);
    updateText(infoText, "Player wins the round!");
    result = "PLAYER";
  };

  const computerWin = (str) => {
    // console.log(str);
    updateText(subInfoText, str);
    updateText(infoText, "Computer wins the round!");
    result = "COMPUTER";
  };

  const draw = () => {
    updateText(infoText, "Draw. Try again!");
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

const game = () => {
  if (roundCount === 1) console.log("Let the games begin!");
  inGame = true;

  let result = playRound(userChoice, getComputerChoice());

  switch (result) {
    case "PLAYER":
      playerWins += 1;
      updateText(playerScore, `Player: ${playerWins}`);
      break;
    case "COMPUTER":
      compWins += 1;
      updateText(compScore, `Computer: ${compWins}`);
      break;
    default:
      draws += 1;
      updateText(drawScore, `Draws: ${draws}`);
      break;
  }

  console.log({ player: playerWins, computer: compWins, draws });

  if (playerWins >= winCount || compWins >= winCount) {
    let winMsg = "";
    if (playerWins === winCount) {
      winMsg = "YOU WIN!";
    } else if (compWins === winCount) {
      winMsg = "YOU LOSE!";
    }
    updateText(winText, winMsg);
    endGame();
  } else {
    roundCount++;
  }
};
