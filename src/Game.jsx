import { Link } from "react-router-dom";
import { useState } from "react";
import { playRoundAgainstAI } from "./rpsls";
import ChoiceSelection from "./ChoiceSelection";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [rounds, setRounds] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [ties, setTies] = useState(0);

  const handlePlayerSelection = (value) => {
    setPlayerChoice(value);
  };

  const handlePlayRound = () => {
    const result = playRoundAgainstAI({
      name: "player1",
      choice: playerChoice,
    });
    setWinner(result.result);
    setRounds(rounds + 1);
    setComputerChoice(result["computer"]);
    if (result.result === "player1") {
      setPlayerWins(playerWins + 1);
    } else if (result.result === "computer") {
      setComputerWins(computerWins + 1);
    } else {
      setTies(ties + 1);
    }
  };

  const handleResetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setWinner("");
    setRounds(0);
    setPlayerWins(0);
    setComputerWins(0);
    setTies(0);
  };


  const options = [
    { value: "rock", label: <img src={require("./rock96.png")} alt="Rock" /> },
    {
      value: "paper",
      label: <img src={require("./paper96.png")} alt="Paper" />,
    },
    {
      value: "scissors",
      label: <img src={require("./scissors96.png")} alt="Scissors" />,
    },
    {
      value: "lizard",
      label: <img src={require("./lizard96.png")} alt="Lizard" />,
    },
    {
      value: "spock",
      label: <img src={require("./spock96.png")} alt="Spock" />,
    },
  ];

  return (
    <div className="game">
      <div className="container">
        <div className="container-title">
          <h1>Rock, Paper, Scissors, Lizard, Spock</h1>
        </div>
        <div className="container-selection">
          <div className="container-selection-player p1">
            <div className="container-selection-title">
              <h1>Player</h1>
            </div>
            <ChoiceSelection
              options={options}
              handleSelection={handlePlayerSelection}
            />
          </div>
          <div className="container-selection-player p2">
            <div className="container-selection-title">
              <h1>Computer</h1>
            </div>
            <ChoiceSelection options={options} handleSelection={() => {}} />
          </div>
        </div>
        {!!winner && (
          <div className="container-result">
            <div className="container-result-title">
              <h2>Result</h2>
            </div>
            <div className="container-result-winner">
              <h2>{winner}</h2>
            </div>
          </div>
        )}
        <div className="container-rounds">
          <div className="container-rounds-title">
            <h2>Rounds</h2>
          </div>
          <div className="container-rounds-rounds">
            <h2>{rounds}</h2>
          </div>
        </div>
        <div className="container-score">
          <div className="container-score-title">
            <h2>Score</h2>
          </div>
          <div className="container-score-score">
            <div className="container-score-score-player">
              <h2>Player</h2>
              <h2>{playerWins}</h2>
            </div>
            <div className="container-ties">
              <div className="container-ties-title">
                <h2>Ties</h2>
              </div>
              <div className="container-ties-ties">
                <h2>{ties}</h2>
              </div>
            </div>
            <div className="container-score-score-computer">
              <h2>Computer</h2>
              <h2>{computerWins}</h2>
            </div>
          </div>
        </div>
        <div className="container-buttons">
          <div className="container-buttons-play">
            <button
              className="container-buttons-play-button"
              onClick={handlePlayRound}
            >
              <h2>Play</h2>
            </button>
          </div>
          <div className="container-buttons-reset">
            <button
              className="container-buttons-reset-button"
              onClick={handleResetGame}
            >
              <h2>Reset</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
