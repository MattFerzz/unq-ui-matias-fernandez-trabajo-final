//rock paper scissors lizard spock game

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

export const playRound = (player1Choice, player2Choice) => {
  const winsAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };
  if (player1Choice === player2Choice) {
    return "tie";
  } else if (winsAgainst[player1Choice].includes(player2Choice)) {
    return "player1";
  } else {
    return "player2";
  }
};

export const playRoundAgainstAI = (playerChoice) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return playRound(playerChoice, randomChoice);
};