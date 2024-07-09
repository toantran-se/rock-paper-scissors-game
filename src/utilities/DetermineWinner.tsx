import { ChoiceEnums } from "../shared";

export const DetermineWinner = (firstChoice: string, secondChoice: string) => {
  if (firstChoice === secondChoice) {
    return "It's a draw!";
  } else if (
    (firstChoice === ChoiceEnums.Rock &&
      secondChoice === ChoiceEnums.Scissors) ||
    (firstChoice === ChoiceEnums.Scissors &&
      secondChoice === ChoiceEnums.Paper) ||
    (firstChoice === ChoiceEnums.Paper && secondChoice === ChoiceEnums.Rock)
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
};
