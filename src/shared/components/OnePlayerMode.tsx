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

  useEffect(() => {
    setResult(DetermineWinner(playerChoice, computerChoice));
  }, [playerChoice, computerChoice]);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="w-full flex items-center justify-center gap-56">
        <div>
          <PlayerChoice choice={playerChoice} />
        </div>

        {!showOption ? (
          <div className="flex flex-col items-center gap-5">
            <p className="text-4xl font-bold">{result}</p>
            <button
              className="btn text-white px-8 py-4 btn-secondary"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="opacity-0">{result}</div>
        )}

        <div>
          <PlayerChoice isIconReverse={true} choice={computerChoice} />
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
