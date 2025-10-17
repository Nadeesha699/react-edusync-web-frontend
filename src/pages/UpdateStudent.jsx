import { BiArrowBack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa6";
import { LuCalculator, LuIdCard, LuUser } from "react-icons/lu";
import { MdAssignment, MdClear, MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function UpdateStudent() {
 const navigate =  useNavigate()
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
       <BiArrowBack size={30} className="fixed top-10 left-10" onClick={()=>{
          navigate(-1)
        }}/>
      <div className="bg-white w-1/2 rounded-lg p-5 flex flex-col gap-5">
        <label className="font-bold text-gray-500 text-5xl">
          Update<span className="text-blue-700"> Student</span>{" "}
        </label>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuIdCard />
          <input
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuUser />
          <input
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuCalculator />
          <input
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="flex flex-row gap-5 justify-start">
          <div className="bg-blue-700 duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4 text-white">
            <MdUpdate />
            <label className="font-bold">update</label>
          </div>
          <div className="ring-blue-700 ring-1 text-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4">
            <MdClear />
            <label className="font-bold">cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
}
