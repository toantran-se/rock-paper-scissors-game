import { useEffect, useState } from "react";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { ChoiceEnums } from "../enums";
import { IconCard } from "./IconCard";
import { PlayerChoice } from "./PlayerChoice";
import { DetermineWinner } from "../../utilities";

export const OnePlayerMode = () => {
  const defaultChoice = ChoiceEnums.Rock;
  const [playerChoice, setPlayerChoice] = useState(`${defaultChoice}`);
  const [computerChoice, setComputerChoice] = useState(`${defaultChoice}`);
  const [showOption, setShowOption] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
    setComputerChoice(getRandomChoice());
    setShowOption(false);
  };

  const getRandomChoice = () => {
    const choices = Object.values(ChoiceEnums);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const onPlayAgain = () => {
    setPlayerChoice(defaultChoice);
    setComputerChoice(defaultChoice);
    setShowOption(true);
  };

  const onUpdateScore = (result: string) => {
    if (!result) return;

    if (result === "You Win!") {
      setPlayerScore(playerScore + 1);
    }

    if (result === "You Lose!") {
      setComputerScore(computerScore + 1);
    }
  };

  useEffect(() => {
    const result = DetermineWinner(playerChoice, computerChoice);
    setResult(result);
    onUpdateScore(result);
  }, [playerChoice, computerChoice]);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="w-full flex items-center justify-center gap-56">
        <div>
          <PlayerChoice
            choice={playerChoice}
            name={"You"}
            score={playerScore}
          />
        </div>

        <div className="flex flex-col items-center gap-5">
          <p
            className={`text-4xl font-bold w-[200px] text-center ${
              showOption
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-200"
            }`}
          >
            {result}
          </p>
          {!showOption && (
            <button
              className="btn text-white px-8 py-4 btn-secondary"
              onClick={onPlayAgain}
              aria-label="Play Again"
            >
              Play Again
            </button>
          )}
        </div>

        <div>
          <PlayerChoice
            isIconReverse={true}
            choice={computerChoice}
            name={"Computer"}
            score={computerScore}
          />
        </div>
      </div>

      {showOption && (
        <div className="absolute bottom-14 flex flex-col gap-5 items-center justify-center">
          <p className="text-2xl font-bold">Take Your Pick</p>

          <div className="flex gap-20 ">
            <IconCard
              Icon={GiRock}
              size={40}
              borderColor="border-red-500"
              label="Rock"
              handleChoice={handlePlayerChoice}
            />
            <IconCard
              Icon={GiPaper}
              size={40}
              borderColor="border-yellow-500"
              label="Paper"
              handleChoice={handlePlayerChoice}
            />
            <IconCard
              Icon={GiScissors}
              size={40}
              borderColor="border-purple-500"
              label="Scissors"
              handleChoice={handlePlayerChoice}
            />
          </div>
        </div>
      )}
    </div>
  );
};
