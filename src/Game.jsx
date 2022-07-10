import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { playRoundAgainstAI } from "./rpsls";
import ChoiceSelection from "./ChoiceSelection";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [resultInfo, setResultInfo] = useState("");
  const [rounds, setRounds] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [ties, setTies] = useState(0);
  const [resultBox, setResultBox] = useState(<></>);

  const handlePlayRound = () => {
    if (!!playerChoice) {
      const result = playRoundAgainstAI({
        name: "Player",
        choice: playerChoice,
      });
      setRounds(rounds + 1);
      setComputerChoice(result["Computer"]);
      if (result.result === "Player") {
        setPlayerWins(playerWins + 1);
        setResultInfo({
          message: "🎉 " + result.result + " wins! 🎉",
          style: "p1",
        });
      } else if (result.result === "Computer") {
        setComputerWins(computerWins + 1);
        setResultInfo({
          message: "🤖 " + result.result + " wins 🤖",
          style: "p2",
        });
      } else {
        setTies(ties + 1);
        setResultInfo({
          message: "😯 It's a " + result.result + " 😯",
          style: "tie",
        });
      }
    } else {
      alert("Please choose before playing!!");
    }
  };

  useEffect(() => {
    if (!!resultInfo) {
      setResultBox(
        <div className={"container-result " + resultInfo.style}>
          <h2>{resultInfo.message}</h2>
        </div>
      );
    } else {
      setResultBox(<></>);
    }
  }, [resultInfo]);

  const handleResetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResultInfo("");
    setRounds(0);
    setPlayerWins(0);
    setComputerWins(0);
    setTies(0);
  };

  const options = [
    {
      value: "rock",
      title: "Rock",
      label: <img src={require("./rock96.png")} />,
    },
    {
      value: "paper",
      title: "Paper",
      label: <img src={require("./paper96.png")} />,
    },
    {
      value: "scissors",
      title: "Scissors",
      label: <img src={require("./scissors96.png")} />,
    },
    {
      value: "lizard",
      title: "Lizard",
      label: <img src={require("./lizard96.png")} />,
    },
    {
      value: "spock",
      title: "Spock",
      label: <img src={require("./spock96.png")} />,
    },
  ];

  return (
    <div className="game">
      <div className="container">
        <div className="container-title">
          <h1>Rock, Paper, Scissors, Lizard, Spock</h1>
        </div>
        <div className="container-round">
          <h3>Round</h3>
          <h2 className="no-margin-top">{rounds}</h2>
        </div>
        <div className="container-selection">
          <div className="container-selection-player p1">
            <div className="container-selection-title">
              <h1>Player</h1>
            </div>
            <ChoiceSelection
              options={options}
              setChoice={setPlayerChoice}
              buttonClass="container-selection-button"
              activeChoice={playerChoice}
            />
          </div>
          <div className="container-selection-player p2">
            <div className="container-selection-title">
              <h1>Computer</h1>
            </div>
            <ChoiceSelection
              options={options}
              setChoice={() => {}}
              buttonClass="container-selection-button disabled"
              activeChoice={computerChoice}
              animated={true}
            />
          </div>
        </div>
        {resultBox}
        <div className="container-score">
          <div className="container-score-score">
            <div className="container-score-counter">
              <h2>Player</h2>
              <h2>{playerWins}</h2>
            </div>
            <div className="container-score-counter">
              <div className="container-ties-title">
                <h2>Ties</h2>
              </div>
              <div className="container-ties-ties">
                <h2>{ties}</h2>
              </div>
            </div>
            <div className="container-score-counter">
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
