//rock paper scissors lizard spock game

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

export const playRound = (
  { name: p1Name, choice: p1Choice },
  { name: p2Name, choice: p2Choice }
) => {
  const winsAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };
  if (p1Choice === p2Choice) {
    return { result: "tie", [p1Name]: p1Choice, [p2Name]: p2Choice };
  } else if (winsAgainst[p1Choice].includes(p2Choice)) {
    return { result: p1Name, [p1Name]: p1Choice, [p2Name]: p2Choice };
  } else {
    return { result: p2Name, [p1Name]: p1Choice, [p2Name]: p2Choice };
  }
};

export const playRoundAgainstAI = (playerInfo) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return playRound(playerInfo, { name: "computer", choice: randomChoice });
};
