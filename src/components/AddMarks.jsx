import { FaUser } from "react-icons/fa";
import { FaIdBadge, FaPaperPlane } from "react-icons/fa6";
import { MdAssignment, MdClear } from "react-icons/md";

export default function AddMarks() {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center pr-5 pt-5 pb-5">
      <div className="bg-gray-300 w-1/2 rounded-lg p-5 flex flex-col gap-5">
        <label className="font-bold text-amber-400 text-5xl">
          A<span className="text-slate-700">dd Marks</span>{" "}
        </label>
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
            <FaPaperPlane />
            <label className="font-bold">submit</label>
          </div>
          <div className="bg-white text-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4">
            <MdClear />
            <label className="font-bold">clear</label>
          </div>
        </div>
      </div>
    </div>
  );
}
