import { useState } from "react";
import { BiExport, BiTrash } from "react-icons/bi";
import { FcExport } from "react-icons/fc";
import { LuSearch } from "react-icons/lu";
import { MdSearch, MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const userData = [
  {
    id: 1,
    name: "Nadeesha",
    marks: 87,
  },
  {
    id: 1,
    name: "Nadeesha",
    marks: 67,
  },
  {
    id: 1,
    name: "Nadeesha",
    marks: 57,
  },
  {
    id: 1,
    name: "Nadeesha",
    marks: 45,
  },
  {
    id: 1,
    name: "Nadeesha",
    marks: 10,
  },
];

export default function StudentsMarks() {
  const navigate = useNavigate();
  const [searchTxt, setSearchTxt] = useState("");
  return (
    <div className="w-full h-dvh pr-5 pt-5 pb-5">
      <div className="bg-gray-300 w-full h-full rounded-lg p-5 flex flex-col gap-5">
        <div className="flex flex-row justify-between items-center">
          <label className="font-bold text-5xl text-amber-400">
            S<span className="text-slate-700">tudent Marks</span>
          </label>
          <div className="flex flex-row w-1/3 gap-5">
          <div className="bg-white flex flex-row rounded-full items-center duration-300 ease-in cursor-pointer w-full p-2 gap-2">
            <LuSearch />
            <input
              className="w-full bg-transparent focus:outline-none focus:ring-0"
              value={searchTxt}
              placeholder="Search by index, name and grade..."
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
          </div>
          <div className="bg-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/2 text-white">
                      <BiExport/>
                      <label className="font-bold">export data</label>
                    </div>
          </div>
        </div>
        <div className="w-full h-full overflow-auto scrollbar-hide">
          <div className="w-full flex flex-row justify-between border-b-2 border-slate-700 text-amber-400">
            <label className="w-1/6 text-center p-2 font-bold">
              Index Number
            </label>
            <label className="w-1/6 text-center p-2 font-bold">
              Student Name
            </label>
            <label className="w-1/6 text-center p-2 font-bold">
              Student Marks
            </label>
            <label className="w-1/6 text-center p-2 font-bold">
              Student Grade
            </label>
            <label className="w-1/6 text-center p-2 font-bold text-gray-500">
              Action
            </label>
          </div>

          {userData
            .filter(
              (userData) =>
                userData.name.toLowerCase().includes(searchTxt.toLowerCase()) ||
                userData.id.toString().includes(searchTxt) ||
                userData.marks.toString().includes(searchTxt)
            )
            .map((e, index) => {
              return (
                <div
                  className="w-full flex flex-row justify-between border-b-2 border-slate-700 text-slate-700"
                  key={index}
                >
                  <label className="w-1/6 text-center truncate p-2">
                    {e.id}
                  </label>
                  <label className="w-1/6 text-center truncate p-2">
                    {e.name}
                  </label>
                  <label className="w-1/6 text-center truncate p-2">
                    {e.marks}
                  </label>
                  {e.marks >= 75 ? (
                    <label className="w-1/6 text-center truncate p-2 text-emerald-600 font-bold">
                      A
                    </label>
                  ) : e.marks >= 65 ? (
                    <label className="w-1/6 text-center truncate p-2 text-blue-500 font-bold">
                      B
                    </label>
                  ) : e.marks >= 50 ? (
                    <label className="w-1/6 text-center truncate p-2 text-amber-500 font-bold">
                      C
                    </label>
                  ) : e.marks >= 35 ? (
                    <label className="w-1/6 text-center truncate p-2 text-violet-500 font-bold">
                      S
                    </label>
                  ) : (
                    <label className="w-1/6 text-center truncate p-2 text-rose-600 font-bold">
                      F
                    </label>
                  )}
                  {/* <label className="w-1/6 text-center truncate p-2">
                    {e.address}
                  </label> */}
                  <div className="w-1/6 p-2 flex flex-row justify-center gap-5">
                    <MdUpdate
                      className="text-green-500 hover:text-black duration-300 ease-in-out"
                      onClick={() => {
                        navigate("/update-student");
                      }}
                    />
                    <BiTrash className="text-red-500 hover:text-black duration-300 ease-in-out" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
