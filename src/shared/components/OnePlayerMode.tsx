import { useState } from "react";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { ChoiceEnums } from "../enums";
import { IconCard } from "./IconCard";
import { PlayerChoice } from "./PlayerChoice";

export const OnePlayerMode = () => {
  const [playerChoice, setPlayerChoice] = useState(`${ChoiceEnums.Rock}`);

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="w-full flex items-center justify-around">
        <div>
          <PlayerChoice choice={playerChoice} />
        </div>
        <div>
          <PlayerChoice isIconReverse={true} choice={playerChoice} />
        </div>
      </div>

      <div className="flex gap-20 absolute bottom-14">
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
  );
};
