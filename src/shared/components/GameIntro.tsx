import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { IconCard } from "./IconCard";
import { PlayModeEnums } from "../enums";

type GameIntroTypes = {
  onChangePlayMode: (playMode: PlayModeEnums) => void;
};

export const GameIntro = ({ onChangePlayMode }: GameIntroTypes) => {
  return (
    <>
      <div className="flex gap-20">
        <IconCard Icon={GiRock} borderColor="border-red-500" label="Rock" />
        <IconCard Icon={GiPaper} borderColor="border-yellow-500" label="Paper" />
        <IconCard Icon={GiScissors} borderColor="border-purple-500" label="Scissors" />
      </div>

      <p className="text-2xl mt-20">Choose your play mode:</p>

      <div className="flex gap-10 mt-5">
        <button
          className={`btn text-white px-8 py-4 btn-secondary`}
          onClick={() => onChangePlayMode(PlayModeEnums.OnePlayer)}
        >
          1P
        </button>
        <button
          className={`btn text-white px-8 py-4 btn-accent`}
          onClick={() => onChangePlayMode(PlayModeEnums.TwoPlayer)}
        >
          2P
        </button>
      </div>
    </>
  );
};
