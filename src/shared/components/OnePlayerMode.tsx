import { useEffect, useState } from "react";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { ChoiceEnums } from "../enums";
import { IconCard } from "./IconCard";
import { PlayerChoice } from "./PlayerChoice";
import { DetermineWinner } from "../../utilities";
import { motion } from "framer-motion";

const resultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={resultVariants}
        >
          <PlayerChoice
            choice={playerChoice}
            name={"You"}
            score={playerScore}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-5">
          <p
            className={`text-4xl font-bold w-[200px] text-center ${
              showOption ? "opacity-0" : "opacity-100"
            }`}
          >
            {result}
          </p>
          {!showOption && (
            <motion.button
              className="btn text-white px-8 py-4 btn-secondary"
              onClick={onPlayAgain}
              aria-label="Play Again"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              Play Again
            </motion.button>
          )}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={resultVariants}
        >
          <PlayerChoice
            isIconReverse={true}
            choice={computerChoice}
            name={"Computer"}
            score={computerScore}
          />
        </motion.div>
      </div>

      {showOption && (
        <div className="absolute bottom-14 flex flex-col gap-5 items-center justify-center">
          <p className="text-2xl font-bold">Take Your Pick</p>

          <motion.div
            className="flex gap-20"
            initial="hidden"
            animate="visible"
            variants={resultVariants}
          >
            {[GiRock, GiPaper, GiScissors].map((Icon, i) => (
              <div key={i}>
                <IconCard
                  Icon={Icon}
                  size={40}
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
                  handleChoice={handlePlayerChoice}
                />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};
