import { ToastContainer } from "react-toastify";
import "./Home.scss";

export const Home = () => {


  return (
    <>
      <div className="w-screen min-h-screen bg-[#010123] flex items-centers justify-center gap-3 text-white">
        <div className="w-full h-fit max-w-lg rounded-xl border border-solid border-white p-3 mt-6 flex items-center justify-between">
          <div>
            {['Rock', 'Paper', 'Scissors'].map((item, index) => (
              <p key={index} className="text-3xl tracking-wide">
                {item}
              </p>
            ))}
          </div>

          <div className="py-2 px-8 bg-white rounded-lg flex flex-col items-center justify-center gap-2 text-black ">
            <p className="text-lg">SCORE</p>
            <p className="text-3xl font-medium">20</p>
          </div>
        </div>

      </div>

      <ToastContainer position="top-center" autoClose={1500} theme="light" />
    </>
  );
};
