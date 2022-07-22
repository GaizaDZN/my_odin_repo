// DOM ///////////////////////
const playerBtns = document.querySelectorAll(".submit");
const infoText = document.getElementById("infoText");
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
  gamOver = false;

  updateText(playerScore, "Player:");
  updateText(computerScore, "Computer:");
  updateText(drawScore, "Draws:");
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

const updateText = (el, str) => {
  el.textContent = str;
};

const playerSelection = (e) => {
  switch (e.target.id) {
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

const game = () => {
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

    roundCount++;
  }
};

const updateInfoLoop = () => {
  if (!gameOver) {
    if (infoText.textContent === "Awaiting player input...") {
      updateText(infoText, "Awaiting player input.");
    } else if (infoText.textContent === "Awaiting player input.") {
      updateText(infoText, "Awaiting player input..");
    } else if (infoText.textContent === "Awaiting player input..") {
      updateText(infoText, "Awaiting player input...");
    }
    setTimeout(updateInfoLoop, 1000);
  }
};

setTimeout(updateInfoLoop, 1000);
// gameLoop(2);

// const container = document.getElementById('container');
// const h3 = document.createElement('h3')
// h3.style.color = 'blue'
// h3.textContent = "I'm a blue h3!"
// const p = document.createElement('p')
// p.style.color = 'red'
// p.textContent = "Hey I'm red!"
// const div = document.createElement('div')
// div.setAttribute("style", "border: 1px solid black; background: pink")
// const h1 = document.createElement('h1')
// h1.textContent = "I'm in a div"
// const p2 = document.createElement('p')
// p2.textContent = "ME TOO!"

// container.appendChild(h3)
// container.appendChild(p)
// container.appendChild(div)
// div.appendChild(h1)
// div.appendChild(p2)
