import { LuCalculator, LuIdCard, LuSend, LuUser } from "react-icons/lu";
import { MdClear } from "react-icons/md";

export default function AddMarks() {
  return (
    <div className="w-full h-dvh pr-5 pt-5 pb-5">
      <div className="bg-white w-full rounded-lg p-5 flex flex-col gap-5">
        <label className="font-bold text-gray-500 text-5xl">
          Add<span className="text-blue-700"> Marks</span>{" "}
        </label>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuIdCard />
          <input
            placeholder="Index Number"
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuUser />
          <input
            placeholder="Student Name"
            type="text"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuCalculator />
          <input
            placeholder="Student Marks"
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
          />
        </div>
        <div className="flex flex-row gap-5 justify-start">
          <div className="bg-blue-700  duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4 text-white">
            <LuSend />
            <label className="font-bold">submit</label>
          </div>
          <div className="ring-blue-700 ring-1 text-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4">
            <MdClear />
            <label className="font-bold">clear</label>
          </div>
        </div>
      </div>
    </div>
  );
}
