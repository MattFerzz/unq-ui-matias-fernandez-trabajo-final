import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { playRoundAgainstAI } from "./rpsls";
import ChoiceSelection from "./ChoiceSelection";
import HorizontalCounter from "./HorizontalCounter";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [resultInfo, setResultInfo] = useState("");
  const [rounds, setRounds] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [ties, setTies] = useState(0);
  const [resultBox, setResultBox] = useState(<></>);
  const [playerButtonClass, setPlayerButtonClass] = useState(
    "container-selection-button"
  );

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setPlayerButtonClass("container-selection-button disabled");
    handlePlayRound(choice);
  };

  const handlePlayRound = (choice) => {
    const result = playRoundAgainstAI({
      name: "Player",
      choice: choice,
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
  };

  useEffect(() => {
    if (!!resultInfo) {
      setResultBox(
        <>
          <div className={"container-result " + resultInfo.style}>
            <h2>{resultInfo.message}</h2>
          </div>
          <div className="buttons play">
            <button className="buttons play button" onClick={handleNewRound}>
              <h2>Play Again</h2>
            </button>
          </div>
        </>
      );
    } else {
      setResultBox(<></>);
    }
  }, [resultInfo]);

  const handleNewRound = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResultInfo("");
    setPlayerButtonClass("container-selection-button");
  };
  const handleResetGame = () => {
    handleNewRound();
    setRounds(0);
    setPlayerWins(0);
    setComputerWins(0);
    setTies(0);
  };

  const options = [
    {
      value: "rock",
      title: "Rock",
      label: <img src={require("./rock96.png")} alt={"Rock"} />,
    },
    {
      value: "paper",
      title: "Paper",
      label: <img src={require("./paper96.png")} alt={"Paper"} />,
    },
    {
      value: "scissors",
      title: "Scissors",
      label: <img src={require("./scissors96.png")} alt={"Scissors"} />,
    },
    {
      value: "lizard",
      title: "Lizard",
      label: <img src={require("./lizard96.png")} alt={"Lizard"} />,
    },
    {
      value: "spock",
      title: "Spock",
      label: <img src={require("./spock96.png")} alt={"Spock"} />,
    },
  ];

  return (
    <div className="game">
      <div className="container">
        <div className="container-title">
          <h1>Rock, Paper, Scissors, Lizard, Spock</h1>
        </div>
        <HorizontalCounter
          columns={[
            {
              title: "Round",
              value: rounds,
            },
          ]}
        />
        <div className="container-selection">
          <div className="container-selection-player p1">
            <div className="container-selection-title">
              <h1>Player</h1>
            </div>
            <ChoiceSelection
              options={options}
              setChoice={handlePlayerChoice}
              buttonClass={playerButtonClass}
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
        <HorizontalCounter
          columns={[
            {
              title: "Player",
              value: playerWins,
            },
            {
              title: "Ties",
              value: ties,
            },
            {
              title: "Computer",
              value: computerWins,
            },
          ]}
        />
        <div className="buttons reset">
          <button className="buttons reset button" onClick={handleResetGame}>
            <h2>Reset</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
