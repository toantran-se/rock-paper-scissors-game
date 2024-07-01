import { GiRock, GiPaper, GiScissors } from "react-icons/gi";

export const GameIntro = () => {
    return (
        <>
            <div className="bg-white -z-10 p-5 rounded-full">
                <GiRock size={80} />
            </div>
            <GiPaper size={80} />
            <GiScissors size={80} />
        </>
    );
};
