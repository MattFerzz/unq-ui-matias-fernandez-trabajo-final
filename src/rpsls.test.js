import { playRound } from "./rpsls";

test("Scissors cuts paper", () => {
  expect(
    playRound(
      { name: "player1", choice: "scissors" },
      { name: "player2", choice: "paper" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "paper" },
      { name: "player2", choice: "scissors" }
    ).result
  ).toBe("player2");
});
test("Paper covers rock", () => {
  expect(
    playRound(
      { name: "player1", choice: "paper" },
      { name: "player2", choice: "rock" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "rock" },
      { name: "player2", choice: "paper" }
    ).result
  ).toBe("player2");
});
test("Rock crushes lizard", () => {
  expect(
    playRound(
      { name: "player1", choice: "rock" },
      { name: "player2", choice: "lizard" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "lizard" },
      { name: "player2", choice: "rock" }
    ).result
  ).toBe("player2");
});
test("Lizard poisons Spock", () => {
  expect(
    playRound(
      { name: "player1", choice: "lizard" },
      { name: "player2", choice: "spock" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "spock" },
      { name: "player2", choice: "lizard" }
    ).result
  ).toBe("player2");
});
test("Spock smashes scissors", () => {
  expect(
    playRound(
      { name: "player1", choice: "spock" },
      { name: "player2", choice: "scissors" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "scissors" },
      { name: "player2", choice: "spock" }
    ).result
  ).toBe("player2");
});
test("Scissors decapitates lizard", () => {
  expect(
    playRound(
      { name: "player1", choice: "scissors" },
      { name: "player2", choice: "lizard" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "lizard" },
      { name: "player2", choice: "scissors" }
    ).result
  ).toBe("player2");
});
test("Lizard eats paper", () => {
  expect(
    playRound(
      { name: "player1", choice: "lizard" },
      { name: "player2", choice: "paper" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "paper" },
      { name: "player2", choice: "lizard" }
    ).result
  ).toBe("player2");
});
test("Paper disproves Spock", () => {
  expect(
    playRound(
      { name: "player1", choice: "paper" },
      { name: "player2", choice: "spock" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "spock" },
      { name: "player2", choice: "paper" }
    ).result
  ).toBe("player2");
});
test("Spock vaporizes rock", () => {
  expect(
    playRound(
      { name: "player1", choice: "spock" },
      { name: "player2", choice: "rock" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "rock" },
      { name: "player2", choice: "spock" }
    ).result
  ).toBe("player2");
});
test("Rock crushes scissors.", () => {
  expect(
    playRound(
      { name: "player1", choice: "rock" },
      { name: "player2", choice: "scissors" }
    ).result
  ).toBe("player1");
  expect(
    playRound(
      { name: "player1", choice: "scissors" },
      { name: "player2", choice: "rock" }
    ).result
  ).toBe("player2");
});
