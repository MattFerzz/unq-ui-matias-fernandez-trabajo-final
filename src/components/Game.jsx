import { useEffect } from "react";
import { useState } from "react";
import { playRoundAgainstAI } from "../rpsls";
import ChoiceSelection from "./ChoiceSelection";
import HorizontalCounter from "./HorizontalCounter";
import pop from "../assets/pop.m4a";
import shwank from "../assets/shwank.m4a";

const Game = () => {
  const popSound = new Audio(pop);
  const shwankSound = new Audio(shwank);
  const [playerChoice, setPlayerChoice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");
  const [resultInfo, setResultInfo] = useState("");
  const [rounds, setRounds] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [ties, setTies] = useState(0);
  const [resultBox, setResultBox] = useState(<></>);
  const player2Name = "Computer";
  const [playerButtonClass, setPlayerButtonClass] = useState(
    "container-selection-button"
  );

  const handlePlayerChoice = (choice) => {
    popSound.volume = .05;
    popSound.play();
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
    setPlayer2Choice(result[player2Name]);
    if (result.result === "Player") {
      setPlayerWins(playerWins + 1);
      setResultInfo({
        message: "🎉 " + result.result + " wins! 🎉",
        style: "p1",
      });
    } else if (result.result === player2Name) {
      setPlayer2Wins(player2Wins + 1);
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
  },[resultInfo]);

  const handleNewRound = () => {
    shwankSound.volume = .05;
    shwankSound.play();
    setPlayerChoice("");
    setPlayer2Choice("");
    setResultInfo("");
    setPlayerButtonClass("container-selection-button");
  };
  const handleResetGame = () => {
    handleNewRound();
    setRounds(0);
    setPlayerWins(0);
    setPlayer2Wins(0);
    setTies(0);
  };

  const options = [
    {
      value: "rock",
      title: "Rock",
      label: <img src={require("../assets/rock96.png")} alt={"Rock"} />,
    },
    {
      value: "paper",
      title: "Paper",
      label: <img src={require("../assets/paper96.png")} alt={"Paper"} />,
    },
    {
      value: "scissors",
      title: "Scissors",
      label: <img src={require("../assets/scissors96.png")} alt={"Scissors"} />,
    },
    {
      value: "lizard",
      title: "Lizard",
      label: <img src={require("../assets/lizard96.png")} alt={"Lizard"} />,
    },
    {
      value: "spock",
      title: "Spock",
      label: <img src={require("../assets/spock96.png")} alt={"Spock"} />,
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
              <h1>{player2Name}</h1>
            </div>
            <ChoiceSelection
              options={options}
              setChoice={() => {}}
              buttonClass="container-selection-button disabled"
              activeChoice={player2Choice}
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
              title: player2Name,
              value: player2Wins,
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
