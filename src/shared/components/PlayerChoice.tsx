import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { IconCard } from "./IconCard";
import { ChoiceEnums } from "../enums";

type PlayerChoiceProps = {
  isIconReverse?: boolean;
  choice: string;
};

export const PlayerChoice = ({
  isIconReverse = false,
  choice,
}: PlayerChoiceProps) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center -mt-20">
          <p className="text-3xl">You: 20</p>
          <MdArrowDropDown size={50} />
        </div>
        {choice === ChoiceEnums.Rock && (
          <IconCard
            Icon={GiRock}
            size={200}
            isIconReverse={isIconReverse}
            borderColor="border-orange-500"
          />
        )}

        {choice === ChoiceEnums.Paper && (
          <IconCard
            Icon={GiPaper}
            size={200}
            isIconReverse={isIconReverse}
            borderColor="border-orange-500"
          />
        )}

        {choice === ChoiceEnums.Scissors && (
          <IconCard
            Icon={GiScissors}
            size={200}
            isIconReverse={isIconReverse}
            borderColor="border-orange-500"
          />
        )}
      </div>
    </>
  );
};
