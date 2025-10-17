import { BiArrowBack } from "react-icons/bi";
import { LuIdCard,LuSearch} from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function FindResult() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed top-10 left-10"
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="bg-white w-1/4 rounded-lg p-5 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <label className="font-bold text-gray-500 text-5xl">
            ICT<span className="text-blue-700"> Results</span>{" "}
          </label>
          <label className="text-gray-400 text-sm">Check your examination performance instantly</label>
        </div>
        <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1">
          <LuIdCard />
          <input
            placeholder="Enter Examination Index Number"
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div
            className="bg-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white duration-300 ease-in hover:bg-blue-800"
          >
            <LuSearch />
            <label className="font-bold">check result</label>
          </div>
        </div>
      </div>
    </div>
  );
}
