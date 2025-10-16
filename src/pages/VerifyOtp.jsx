import { BiArrowBack } from "react-icons/bi";
import { LuBadgeCheck } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
 const navigate =  useNavigate()
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-slate-700">
      <BiArrowBack size={30} className="text-white fixed top-10 left-10" onClick={()=>{
          navigate(-1)
        }}/>
      <div className="bg-gray-300 w-1/4 rounded-lg p-5 flex flex-col gap-5">
      <div className="w-full flex justify-center items-center">
        <label className="font-bold text-amber-400 text-5xl">
          V<span className="text-slate-700">erify OTP</span>{" "}
        </label>
        </div>
        <div className="flex flex-row w-full gap-5">
        <div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="9"
          />
        </div>
        <div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="9"
          />
        </div><div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="9"
          />
        </div><div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="9"
          />
        </div><div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="9"
          />
        </div><div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="9"
          />
        </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="bg-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white" onClick={()=>{
            navigate("/change-password")
          }}>
            <LuBadgeCheck />
            <label className="font-bold">verify</label>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-slate-400 p-1 rounded-full"></div>
            <div className="bg-slate-700 p-1 rounded-full"></div>
            <div className="bg-slate-400 p-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
