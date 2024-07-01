import { IconType } from "react-icons";

type IconCardTypes = {
  Icon: IconType;
  borderColor: string;
  label?: string;
};

export const IconCard = ({ Icon, borderColor, label }: IconCardTypes) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`bg-white text-black p-5 rounded-full border-[15px] border-solid border-${borderColor}`}
      >
        <Icon size={120} />
      </div>
      <p className="text-3xl">{label}</p>
    </div>
  );
};
