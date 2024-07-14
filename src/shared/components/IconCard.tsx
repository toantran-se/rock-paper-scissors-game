import { IconType } from "react-icons";
import { motion } from "framer-motion";
type IconCardTypes = {
  Icon: IconType;
  handleChoice?: (choice: string) => void;
  borderColor: string;
  size?: number;
  label?: string;
  isIconReverse?: boolean;
  isHasAnimation?: boolean;
};

export const IconCard = ({
  Icon,
  handleChoice = () => {},
  borderColor,
  size,
  label,
  isIconReverse,
  isHasAnimation = false,
}: IconCardTypes) => {
  const onChoice = () => {
    if (!label) {
      return;
    }

    handleChoice(label);
  };

  const shakeAnimation = {
    shake: {
      y: [0, -20, 20, -20, 20, 0],
      transition: { duration: 0.5, repeat: 3 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`bg-white text-black p-5 rounded-full border-[15px] border-solid ${borderColor} cursor-pointer ${
          isIconReverse ? `scale-x-[-1]` : ""
        }`}
        onClick={onChoice}
      >
        <motion.div
          variants={shakeAnimation}
          animate={isHasAnimation ? "shake" : "visible"}
        >
          <Icon size={size ?? 120} />
        </motion.div>
      </div>
      <p className="text-3xl">{label}</p>
    </div>
  );
};
