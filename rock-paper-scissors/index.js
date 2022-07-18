const getComputerChoice = () => {
  const answer = Math.floor(Math.random() * 3);

  switch (answer) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      break;
  }
};

console.log(getComputerChoice());
