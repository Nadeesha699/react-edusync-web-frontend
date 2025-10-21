import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuCalculator, LuIdCard, LuUser } from "react-icons/lu";
import { MdClear, MdUpdate } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function UpdateStudent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const result = await axios.get(
      `http://127.0.0.1:5000/api/studentmarks/get-by-id/${searchParams.get("id")}`
    );
    setIndex(result.data[0].student_index)
    setName(result.data[0].student_name)
    setMarks(result.data[0].marks)
  }

 async function updateMarks(e) {
  e.preventDefault();
    await axios.put(`http://127.0.0.1:5000/api/studentmarks/update-by-id/${searchParams.get("id")}`, {
      student_index: index,
      student_name: name,
      marks: marks,
    });

    toast.success("mark updated !");

    loadData()
  }

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed top-10 left-10"
        onClick={() => {
          navigate(-1);
        }}
      />
        <form onSubmit={updateMarks} className="bg-white w-1/2 rounded-lg p-5 flex flex-col gap-5">
          <label className="font-bold text-gray-500 text-5xl">
            Update<span className="text-blue-700"> Student</span>{" "}
          </label>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuIdCard />
            <input
              required
              value={index}
              type="text"
              className="w-full border-none focus:outline-none"
              onChange={(e) => {
                setIndex(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuUser />
            <input
              required
              value={name}
              type="text"
              className="w-full border-none focus:outline-none"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuCalculator />
            <input
              required
              value={marks}
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="100"
              onChange={(e) => {
                setMarks(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row gap-5 justify-start">
            <button
              type="submit"
              className="bg-blue-700 duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4 text-white"
            >
              <MdUpdate />
              <label className="font-bold">update</label>
            </button>
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="ring-blue-700 ring-1 text-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/4"
            >
              <MdClear />
              <label className="font-bold">cancel</label>
            </button>
          </div>
      </form>
    </div>
  );
}
