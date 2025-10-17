import { BiArrowBack } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import { LuIdCard, LuMail, LuSearch, LuSend } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FindResult() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-slate-700">
      <BiArrowBack
        size={30}
        className="text-white fixed top-10 left-10"
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="bg-gray-300 w-1/4 rounded-lg p-5 flex flex-col gap-5">
        <div className="w-full flex justify-center items-center">
          <label className="font-bold text-amber-400 text-5xl">
            I<span className="text-slate-700">ct Results</span>{" "}
          </label>
        </div>
        <div className="bg-white p-5 flex flex-row items-center justify-start gap-5 rounded-lg">
          <LuIdCard />
          <input
            placeholder="Enter Examination Index Number"
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div
            className="bg-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white"
            onClick={() => {
              navigate("/verify-otp");
            }}
          >
            <LuSearch />
            <label className="font-bold">check result</label>
          </div>
        </div>
      </div>
    </div>
  );
}
