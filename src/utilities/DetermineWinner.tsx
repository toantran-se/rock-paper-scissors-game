import { ChoiceEnums } from "../shared";

export const DetermineWinner = (
  firstChoice: string,
  secondChoice: string,
  isTwoPlayerMode?: boolean
) => {
  if (firstChoice === secondChoice) {
    return "It's a draw!";
  } else if (
    (firstChoice === ChoiceEnums.Rock &&
      secondChoice === ChoiceEnums.Scissors) ||
    (firstChoice === ChoiceEnums.Scissors &&
      secondChoice === ChoiceEnums.Paper) ||
    (firstChoice === ChoiceEnums.Paper && secondChoice === ChoiceEnums.Rock)
  ) {
    return isTwoPlayerMode ? "1P Win!" : "You Win!";
  } else {
    return isTwoPlayerMode ? "2P Win!" : "You Lose!";
  }
};
