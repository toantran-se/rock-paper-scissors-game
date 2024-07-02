import { IconType } from "react-icons";

type IconCardTypes = {
  Icon: IconType;
  handleChoice?: (choice: string) => void;
  borderColor: string;
  size?: number;
  label?: string;
  isIconReverse?: boolean;
};

export const IconCard = ({
  Icon,
  handleChoice = () => {},
  borderColor,
  size,
  label,
  isIconReverse,
}: IconCardTypes) => {
  const onChoice = () => {
    if (!label) {
      return;
    }

    handleChoice(label);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`bg-white text-black p-5 rounded-full border-[15px] border-solid ${borderColor} cursor-pointer ${
          isIconReverse ? `scale-x-[-1]` : ""
        }`}
        onClick={onChoice}
      >
        <Icon size={size ?? 120} />
      </div>
      <p className="text-3xl">{label}</p>
    </div>
  );
};
