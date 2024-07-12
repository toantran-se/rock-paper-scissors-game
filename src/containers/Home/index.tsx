import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  GameIntro,
  OnePlayerMode,
  PlayModeEnums,
  TwoPlayerMode,
} from "../../shared";
import "./Home.scss";

export const Home = () => {
  const [playMode, setPlayMode] = useState("");

  const onChangePlayMode = (playMode: PlayModeEnums | string) => {
    setPlayMode(playMode);
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-[#010123] flex flex-col items-center justify-center gap-3 text-white absolute">
        {playMode === "" && <GameIntro onChangePlayMode={onChangePlayMode} />}
        {playMode === PlayModeEnums.OnePlayer && <OnePlayerMode />}
        {playMode === PlayModeEnums.TwoPlayer && <TwoPlayerMode />}

        {playMode !== "" && (
          <button
            onClick={() => {
              onChangePlayMode("");
            }}
            className="btn btn-outline absolute top-5 left-5"
          >
            Back to Home
          </button>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={1500} theme="light" />
    </>
  );
};
