import { BiArrowBack } from "react-icons/bi";
import { FaSave, FaUser } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa6";
import { MdAssignment, MdClear, MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function UpdateStudent() {
 const navigate =  useNavigate()
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-slate-700">
      <div className="bg-gray-300 w-1/2 rounded-lg p-5 flex flex-col gap-5">
       <div className="w-full flex flex-row items-center gap-5">
        <BiArrowBack size={30} className="text-slate-700" onClick={()=>{
          navigate("/")
        }}/>
        <label className="font-bold text-amber-400 text-5xl">
          U<span className="text-slate-700">pdate Student</span>{" "}
        </label>
        </div>
        <label className="font-bold text-gray-500">Index Number</label>
        <div className="bg-white p-5 flex flex-row items-center justify-start gap-5 rounded-lg">
          <FaIdBadge />
          <input
            placeholder="e.g. 1045"
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <label className="font-bold text-gray-500">Student Name</label>
        <div className="bg-white p-5 flex flex-row items-center justify-start gap-5 rounded-lg">
          <FaUser />
          <input
            placeholder="e.g. Kamal Perera"
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <label className="font-bold text-gray-500">Student Marks</label>
        <div className="bg-white p-5 flex flex-row items-center justify-start gap-5 rounded-lg">
          <MdAssignment />
          <input
            placeholder="e.g. 87"
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="flex flex-row gap-5 justify-start">
          <div className="bg-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4 text-white">
            <MdUpdate />
            <label className="font-bold">update</label>
          </div>
          <div className="bg-white text-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4">
            <MdClear />
            <label className="font-bold">cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
}
