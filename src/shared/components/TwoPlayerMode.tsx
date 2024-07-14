import { useEffect, useState } from "react";
import { DetermineWinner } from "../../utilities";
import { ChoiceEnums } from "../enums";
import { PlayerChoice } from "./PlayerChoice";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
};

const playerChoiceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const TwoPlayerMode = () => {
  const defaultChoice = ChoiceEnums.Rock;
  const [player1Choice, setPlayer1Choice] = useState(`${defaultChoice}`);
  const [player2Choice, setPlayer2Choice] = useState(`${defaultChoice}`);
  const [tempPlayer1Choice, setTempPlayer1Choice] = useState("");
  const [tempPlayer2Choice, setTempPlayer2Choice] = useState("");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [showPlayer1Option, setShowPlayer1Option] = useState(true);
  const [showPlayer2Option, setShowPlayer2Option] = useState(true);
  const [player1HasChosen, setPlayer1HasChosen] = useState(false);
  const [player2HasChosen, setPlayer2HasChosen] = useState(false);
  const [result, setResult] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handlePlayer1Choice = (choice: string) => {
    setTempPlayer1Choice(choice);
    setShowPlayer1Option(false);
      setPlayer1HasChosen(true);
  };

  const handlePlayer2Choice = (choice: string) => {
    setTempPlayer2Choice(choice);
    setShowPlayer2Option(false);
      setPlayer2HasChosen(true);
  };

  const onPlayAgain = () => {
    setPlayer1Choice(defaultChoice);
    setPlayer2Choice(defaultChoice);
    setShowPlayer1Option(true);
    setShowPlayer2Option(true);
    setPlayer1HasChosen(false);
    setPlayer2HasChosen(false);
    setResult("");
  };

  const onUpdateScore = (result: string) => {
    if (!result) return;

    if (result === "1P Win!") {
      setPlayer1Score(player1Score + 1);
    }

    if (result === "2P Win!") {
      setPlayer2Score(player2Score + 1);
    }
  };

  useEffect(() => {
    if (player1HasChosen && player2HasChosen) {
      setIsShaking(true);

      setTimeout(() => {
        setPlayer1Choice(tempPlayer1Choice);
        setPlayer2Choice(tempPlayer2Choice);
        const result = DetermineWinner(
          tempPlayer1Choice,
          tempPlayer2Choice,
          true
        );
        onUpdateScore(result);
        setResult(result);
        setIsShaking(false);
      }, 1100);
    }
  }, [player1Choice, player2Choice, player1HasChosen, player2HasChosen]);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="w-full flex items-center justify-center gap-56">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={playerChoiceVariants}
        >
          <PlayerChoice
            choice={player1Choice}
            name={"1P"}
            score={player1Score}
            isShowChoice={showPlayer1Option}
            handlePlayerChoice={handlePlayer1Choice}
            isHasAnimation={isShaking}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-5">
          <p
            className={`text-4xl font-bold w-[200px] text-center ${
              result !== "" ? "opacity-100" : "opacity-0"
            }`}
          >
            {result}
          </p>
          {player1HasChosen && player2HasChosen && (
            <motion.button
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="btn text-white px-8 py-4 btn-secondary"
              onClick={onPlayAgain}
              aria-label="Play Again"
            >
              Play Again
            </motion.button>
          )}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={playerChoiceVariants}
        >
          <PlayerChoice
            isIconReverse={true}
            choice={player2Choice}
            name={"2P"}
            score={player2Score}
            isShowChoice={showPlayer2Option}
            handlePlayerChoice={handlePlayer2Choice}
            isHasAnimation={isShaking}
          />
        </motion.div>
      </div>
    </div>
  );
};
