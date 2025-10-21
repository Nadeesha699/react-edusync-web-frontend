import axios from "axios";
import { useState } from "react";
import { LuCalculator, LuIdCard, LuSend, LuUser } from "react-icons/lu";
import { MdClear } from "react-icons/md";
import { toast } from "react-toastify";

export default function AddMarks() {
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState("");
  const [name, setName] = useState("");

  async function saveMarks(e) {
    e.preventDefault();
    await axios.post(`http://127.0.0.1:5000/api/studentmarks/save`, {
      student_index: index,
      student_name: name,
      marks: marks,
    });

    toast.success("new mark added !");

    setIndex("");
    setMarks("");
    setName("");
  }
  return (
    <div className="w-full h-dvh pr-5 pt-5 pb-5">
        <form onSubmit={saveMarks} className="bg-white w-full rounded-lg p-5 flex flex-col gap-5">
          <label className="font-bold text-gray-500 text-5xl">
            Add<span className="text-blue-700"> Marks</span>{" "}
          </label>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuIdCard />
            <input
              required
              placeholder="Index Number"
              type="text"
              className="w-full border-none focus:outline-none"
              value={index}
              onChange={(e) => {
                setIndex(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuUser />
            <input
              required
              placeholder="Student Name"
              type="text"
              className="w-full border-none focus:outline-none"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuCalculator />
            <input
              required
              placeholder="Student Marks"
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="100"
              value={marks}
              onChange={(e) => {
                setMarks(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row gap-5 justify-start">
            <button
              type="submit"
              className="bg-blue-700  duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4 text-white"
            >
              <LuSend />
              <label className="font-bold">submit</label>
            </button>
            <button
              type="reset"
              className="ring-blue-700 ring-1 text-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4"
            >
              <MdClear />
              <label className="font-bold">clear</label>
            </button>
          </div>
      </form>
    </div>
  );
}
