import { playRound } from "./rpsls";

test("Scissors cuts paper", () => {
  expect(playRound("scissors", "paper")).toBe("player1");
  expect(playRound("paper", "scissors")).toBe("player2");
});
test("Paper covers rock", () => {
  expect(playRound("paper", "rock")).toBe("player1");
  expect(playRound("rock", "paper")).toBe("player2");
});
test("Rock crushes lizard", () => {
  expect(playRound("rock", "lizard")).toBe("player1");
  expect(playRound("lizard", "rock")).toBe("player2");
});
test("Lizard poisons Spock", () => {
  expect(playRound("lizard", "spock")).toBe("player1");
  expect(playRound("spock", "lizard")).toBe("player2");
});
test("Spock smashes scissors", () => {
  expect(playRound("spock", "scissors")).toBe("player1");
  expect(playRound("scissors", "spock")).toBe("player2");
});
test("Scissors decapitates lizard", () => {
  expect(playRound("scissors", "lizard")).toBe("player1");
  expect(playRound("lizard", "scissors")).toBe("player2");
});
test("Lizard eats paper", () => {
  expect(playRound("lizard", "paper")).toBe("player1");
  expect(playRound("paper", "lizard")).toBe("player2");
});
test("Paper disproves Spock", () => {
  expect(playRound("paper", "spock")).toBe("player1");
  expect(playRound("spock", "paper")).toBe("player2");
});
test("Spock vaporizes rock", () => {
  expect(playRound("spock", "rock")).toBe("player1");
  expect(playRound("rock", "spock")).toBe("player2");
});
test("Rock crushes scissors.", () => {
  expect(playRound("rock", "scissors")).toBe("player1");
  expect(playRound("scissors", "rock")).toBe("player2");
});
