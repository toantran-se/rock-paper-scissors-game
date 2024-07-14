import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { IconCard } from "./IconCard";
import { ChoiceEnums } from "../enums";

type PlayerChoiceProps = {
  isIconReverse?: boolean;
  choice: string;
  score: number;
  name: string;
  isShowChoice?: boolean;
  isHasAnimation?: boolean;
  handlePlayerChoice?: (choice: string) => void;
};

export const PlayerChoice = ({
  isIconReverse = false,
  choice,
  score = 0,
  name = "",
  isShowChoice = false,
  isHasAnimation = false,
  handlePlayerChoice = () => {},
}: PlayerChoiceProps) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center -mt-20">
          <p className="text-3xl">
            {name}: {score}
          </p>
          <MdArrowDropDown size={50} />
        </div>
        {choice === ChoiceEnums.Rock && (
          <IconCard
            Icon={GiRock}
            size={200}
            isIconReverse={isIconReverse}
            borderColor="border-orange-500"
            isHasAnimation={isHasAnimation}
          />
        )}

        {choice === ChoiceEnums.Paper && (
          <IconCard
            Icon={GiPaper}
            size={200}
            isIconReverse={isIconReverse}
            borderColor="border-orange-500"
            isHasAnimation={isHasAnimation}
          />
        )}

        {choice === ChoiceEnums.Scissors && (
          <IconCard
            Icon={GiScissors}
            size={200}
            isIconReverse={isIconReverse}
            borderColor="border-orange-500"
            isHasAnimation={isHasAnimation}
          />
        )}
      </div>
      {isShowChoice && (
        <div className="flex gap-10 mt-5">
          <IconCard
            Icon={GiRock}
            size={30}
            borderColor="border-red-500"
            label="Rock"
            handleChoice={handlePlayerChoice}
          />
          <IconCard
            Icon={GiPaper}
            size={30}
            borderColor="border-yellow-500"
            label="Paper"
            handleChoice={handlePlayerChoice}
          />
          <IconCard
            Icon={GiScissors}
            size={30}
            borderColor="border-purple-500"
            label="Scissors"
            handleChoice={handlePlayerChoice}
          />
        </div>
      )}
    </>
  );
};
