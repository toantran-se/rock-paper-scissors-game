import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { IconCard } from "./IconCard";
import { PlayModeEnums } from "../enums";
import { motion } from "framer-motion";

type GameIntroTypes = {
  onChangePlayMode: (playMode: PlayModeEnums) => void;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

export const GameIntro = ({ onChangePlayMode }: GameIntroTypes) => {
  return (
    <>
      <motion.div className="flex gap-20" initial="hidden" animate="visible">
        {[GiRock, GiPaper, GiScissors].map((Icon, i) => (
          <motion.div key={i} custom={i} variants={cardVariants}>
            <IconCard
              Icon={Icon}
              borderColor={
                Icon === GiRock
                  ? "border-red-500"
                  : Icon === GiPaper
                  ? "border-yellow-500"
                  : "border-purple-500"
              }
              label={
                Icon === GiRock
                  ? "Rock"
                  : Icon === GiPaper
                  ? "Paper"
                  : "Scissors"
              }
            />
          </motion.div>
        ))}
      </motion.div>

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
