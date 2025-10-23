import { useEffect, useState } from "react";
import { BiExport, BiTrash } from "react-icons/bi";
import { LuFileX, LuMenu, LuSearch } from "react-icons/lu";
import { MdUpdate } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import logo from "../images/logo.png";
import { MdClear, MdPeople, MdLogout } from "react-icons/md";

export default function StudentsMarks() {
  const navigate = useNavigate();
  const [searchTxt, setSearchTxt] = useState("");
  const [marksData, setMarksData] = useState([
    {
      id: 0,
      marks: 0,
      student_name: "",
      student_index: "",
    },
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const result = await axios.get(
      `http://127.0.0.1:5000/api/studentmarks/get-all`
    );
    setMarksData(result.data);
  }

  return (
    <div className="flex flex-row h-dvh bg-zinc-300">
      <div className="w-1/6 flex flex-col justify-start pt-5 pb-5 pl-5 bg-white rounded-r-2xl hidden lg:block">
        <img src={logo} alt="icon" className="w-full pb-5" />
        <div
          className=" rounded-l-2xl hover:bg-blue-100 p-5 w-full  flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            navigate(`/home?user_id=${searchParams.get("user_id")}`);
          }}
        >
          <FaPlus />
          <label className="font-bold">Add Marks</label>
        </div>
        <div
          className="bg-blue-700 text-white rounded-l-2xl hover:bg-blue-800 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            navigate(`/student-marks?user_id=${searchParams.get("user_id")}`);
          }}
        >
          <MdPeople />
          <label className="font-bold">Students Marks</label>
        </div>
        <div
          className="rounded-l-xl hover:bg-blue-100 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            Swal.fire({
              title: "EduSync ICT",
              text: "Are you sure you want to logout ? ",
              icon: "warning",
              showCancelButton: true,
              cancelButtonText: "Stay",
              confirmButtonText: "Logout",
              confirmButtonColor: "#1D4ED8",
              cancelButtonColor: "#7590dcff",
            }).then((e) => {
              if (e.isConfirmed) {
                navigate("/login");
              }
            });
          }}
        >
          <MdLogout />
          <label className="font-bold">Logout</label>
        </div>
      </div>
      <div className="lg:w-5/6 w-full bg-transparent ">
        <div className="w-full h-dvh lg:pr-5 lg:pt-5 lg:pb-5 p-5">
          <div className="bg-white w-full h-full rounded-lg p-5 flex flex-col gap-5">
            <LuMenu
              size={30}
              className="text-blue-700 block lg:hidden"
              onClick={() => {
                setShowMenu(true);
              }}
            />
            <div className="flex flex-row justify-between items-center">
              <label className="font-bold text-5xl text-gray-500">
                Student<span className="text-blue-700"> Marks</span>
              </label>
              <div className="flex flex-col lg:flex-row w-1/3 gap-5">
                <div className="order-2 lg:order-1 ring-blue-700 ring-1 flex flex-row rounded-lg items-center duration-300 ease-in cursor-pointer w-full lg:w-1/2 p-2 gap-2">
                  <LuSearch />
                  <input
                    className="w-full bg-transparent focus:outline-none focus:ring-0"
                    value={searchTxt}
                    placeholder="Search by index, name and marks..."
                    onChange={(e) => {
                      setSearchTxt(e.target.value);
                    }}
                  />
                </div>
                <div className="order-1 lg:order-2 bg-blue-700 font-bold duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full lg:w-1/2 text-white">
                  <BiExport />
                  <label className="truncate">export data</label>
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-auto scrollbar-hide md:hidden block">
              {marksData.length === 0 ? (
                <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-gray-300">
                  <LuFileX size={40} />
                  <label className="font-bold">No data found</label>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {marksData
                    .filter(
                      (m) =>
                        m.student_name
                          .toLowerCase()
                          .includes(searchTxt.toLowerCase()) ||
                        m.student_index.toString().includes(searchTxt) ||
                        m.marks.toString().includes(searchTxt)
                    )
                    .map((e, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-col p-5 gap-2 justify-start border-2 rounded-lg border-blue-700 text-slate-700 text-sm  hover:bg-slate-50 transition"
                      >
                        <div className="flex flex-row justify-between items-start gap-2">
                          <div className="flex flex-col justify-start gap-2">
                            <label className="text-center truncate flex flex-row gap-2 font-bold">
                              <span className="text-blue-700">
                                Student Index:
                              </span>
                              {e.student_index}
                            </label>
                            <label className="text-center truncate flex flex-row gap-2 font-bold">
                              <span className="text-blue-700">
                                Student Name:
                              </span>{" "}
                              {e.student_name}
                            </label>
                            <label className=" text-center truncate flex flex-row gap-2 font-bold">
                              <span className="text-blue-700">
                                Student Marks:
                              </span>{" "}
                              {e.marks}
                            </label>
                          </div>
                          {e.marks >= 75 ? (
                            <label className="text-emerald-600 text-2xl font-bold">
                              A
                            </label>
                          ) : e.marks >= 65 ? (
                            <label className="text-blue-500 text-2xl font-bold">
                              B
                            </label>
                          ) : e.marks >= 50 ? (
                            <label className="text-amber-500 text-2xl font-bold">
                              C
                            </label>
                          ) : e.marks >= 35 ? (
                            <label className="text-violet-500 text-2xl font-bold">
                              S
                            </label>
                          ) : (
                            <label className="text-rose-600 text-2xl font-bold">
                              F
                            </label>
                          )}
                        </div>
                        <div className="flex flex-row justify-center gap-5 w-full">
                          <div className="p-2 flex flex-row justify-center gap-2 rounded-lg border border-1 border-green-500 text-green-500 font-bold items-center w-1/2">
                            <MdUpdate
                              onClick={() => {
                                const encodeId = btoa(e.id);
                                navigate(
                                  `/update-student?mark-id=${encodeId}&user-id=${searchParams.get(
                                    "user_id"
                                  )}`
                                );
                              }}
                            />
                            update
                          </div>
                          <div className="p-2 flex flex-row justify-center gap-2 rounded-lg border border-1 border-red-500 text-red-500 font-bold items-center w-1/2">
                            <BiTrash
                              onClick={() => {
                                Swal.fire({
                                  title: "EduSync ICT",
                                  text: "Are you want to delete the student mark ?",
                                  icon: "error",
                                  showCancelButton: true,
                                  cancelButtonText: "cancel",
                                  confirmButtonText: "confirm",
                                  confirmButtonColor: "#ff0062ff",
                                  cancelButtonColor: "#327affff",
                                }).then(async (e1) => {
                                  if (e1.isConfirmed) {
                                    await axios.delete(
                                      `http://127.0.0.1:5000/api/studentmarks/delete-by-id/${e.id}`
                                    );
                                    loadData();
                                  }
                                });
                              }}
                            />
                            delete
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div className="w-full h-full overflow-auto scrollbar-hide hidden md:block">
              {marksData.length === 0 ? (
                <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-gray-300">
                  <LuFileX size={40} />
                  <label className="font-bold">No data found</label>
                </div>
              ) : (
                <>
                  <div className="w-full flex flex-row justify-between border-b-2 border-slate-700 text-blue-700 text-sm">
                    <label className="md:w-1/6 text-center truncate  p-2 font-bold">
                      Index Number
                    </label>
                    <label className="md:w-1/6 text-center truncate p-2 font-bold">
                      Student Name
                    </label>
                    <label className="md:w-1/6 text-center  truncate p-2 font-bold">
                      Student Marks
                    </label>
                    <label className="md:w-1/6 text-center truncate p-2 font-bold">
                      Student Grade
                    </label>
                    <label className="md:w-1/6 text-center  truncate p-2 font-bold text-gray-500">
                      Action
                    </label>
                  </div>
                  {marksData
                    .filter(
                      (m) =>
                        m.student_name
                          .toLowerCase()
                          .includes(searchTxt.toLowerCase()) ||
                        m.student_index.toString().includes(searchTxt) ||
                        m.marks.toString().includes(searchTxt)
                    )
                    .map((e, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-row justify-between border-b-2 border-slate-700 text-slate-700 text-sm  hover:bg-slate-50 transition"
                      >
                        <label className="md:w-1/6 text-center truncate p-2">
                          {e.student_index}
                        </label>
                        <label className="md:w-1/6 text-center truncate p-2">
                          {e.student_name}
                        </label>
                        <label className="md:w-1/6 text-center truncate p-2">
                          {e.marks}
                        </label>

                        {e.marks >= 75 ? (
                          <label className="md:w-1/6 text-center truncate p-2 text-emerald-600 font-bold">
                            A
                          </label>
                        ) : e.marks >= 65 ? (
                          <label className="md:w-1/6 text-center truncate p-2 text-blue-500 font-bold">
                            B
                          </label>
                        ) : e.marks >= 50 ? (
                          <label className="md:w-1/6 text-center truncate p-2 text-amber-500 font-bold">
                            C
                          </label>
                        ) : e.marks >= 35 ? (
                          <label className="md:w-1/6 text-center truncate p-2 text-violet-500 font-bold">
                            S
                          </label>
                        ) : (
                          <label className="md:w-1/6 text-center truncate p-2 text-rose-600 font-bold">
                            F
                          </label>
                        )}

                        <div className="md:w-1/6 p-2 flex flex-row justify-center gap-5">
                          <MdUpdate
                            className="text-green-500 hover:text-black duration-300 ease-in-out cursor-pointer"
                            onClick={() => {
                              const encodeId = btoa(e.id);
                              navigate(
                                `/update-student?mark-id=${encodeId}&user-id=${searchParams.get(
                                  "user_id"
                                )}`
                              );
                            }}
                          />
                          <BiTrash
                            className="text-red-500 hover:text-black duration-300 ease-in-out cursor-pointer"
                            onClick={() => {
                              Swal.fire({
                                title: "EduSync ICT",
                                text: "Are you want to delete the student mark ?",
                                icon: "error",
                                showCancelButton: true,
                                cancelButtonText: "cancel",
                                confirmButtonText: "confirm",
                                confirmButtonColor: "#ff0062ff",
                                cancelButtonColor: "#327affff",
                              }).then(async (e1) => {
                                if (e1.isConfirmed) {
                                  await axios.delete(
                                    `http://127.0.0.1:5000/api/studentmarks/delete-by-id/${e.id}`
                                  );
                                  loadData();
                                }
                              });
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
          <div
            className={`bg-white left-0 right-0 bottom-0 top-0 fixed flex flex-col gap-5 justify-start items-center p-5 transition-transform duration-700 ease-in-out ${
              showMenu ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <img src={logo} alt="icon" className="h-1/4 w-1/2" />
            <div
              className="duration-300 ease-in cursor-pointer flex flex-row gap-2 justify-left items-center w-full font-bold"
              onClick={() => {
                setShowMenu(false);
                navigate(`/home?user_id=${searchParams.get("user_id")}`);
              }}
            >
              <FaPlus />
              Add Marks
            </div>
            <div
              className="duration-300 ease-in cursor-pointer flex flex-row gap-2 justify-left items-center w-full font-bold"
              onClick={() => {
                setShowMenu(false);
                navigate(
                  `/student-marks?user_id=${searchParams.get("user_id")}`
                );
              }}
            >
              <MdPeople />
              Students Marks
            </div>
            <div
              className=" p-2 w-full flex flex-row justify-center items-center gap-2 duration-300 ease-in cursor-pointer bg-blue-700 text-white rounded-full hover:bg-blue-800 font-bold"
              onClick={() => {
                Swal.fire({
                  title: "EduSync ICT",
                  text: "Are you sure you want to logout ? ",
                  icon: "warning",
                  showCancelButton: true,
                  cancelButtonText: "Stay",
                  confirmButtonText: "Logout",
                  confirmButtonColor: "#1D4ED8",
                  cancelButtonColor: "#7590dcff",
                }).then((e) => {
                  if (e.isConfirmed) {
                    navigate("/login");
                  }
                });
              }}
            >
              <MdLogout />
              logout
            </div>
            <div
              className=" p-2 w-full flex flex-row justify-center items-center gap-2 duration-300 ease-in cursor-pointer ring-blue-700 ring-1  text-blue-700 rounded-full font-bold"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <MdClear />
              cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
