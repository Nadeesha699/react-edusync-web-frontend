import logo from "../images/logo.png";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { LuCalculator, LuIdCard, LuMenu, LuSend, LuUser } from "react-icons/lu";
import { MdClear, MdPeople, MdLogout } from "react-icons/md";
import { toast } from "react-toastify";

const Home = () => {
  const [searchParams] = useSearchParams();
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function saveMarks(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/api/studentmarks/save`, {
        student_index: index,
        student_name: name,
        marks: marks,
      })
      .then(() => {
        toast.success("New mark added successfully!");
        setIndex("");
        setMarks("");
        setName("");
      })
      .catch((e) => {
        if (e.status === 409) {
          toast.error("Oops! Marks for this student are already recorded.");
        } else {
          toast.error("Server connection issue. Please try again in a moment.");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }

  // #1D4ED8
  const navigate = useNavigate();
  return (
    <div className="flex flex-row h-dvh bg-zinc-300">
      <div className="w-1/6 flex flex-col justify-start pt-5 pb-5 pl-5 bg-white rounded-r-2xl hidden lg:block">
        <img src={logo} alt="icon" className="w-full pb-5" />
        <div
          className=" rounded-l-2xl hover:bg-blue-100 p-5 w-full  flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {}}
        >
          <FaPlus />
          <label className="font-bold">Add Marks</label>
        </div>
        <div
          className=" rounded-l-2xl hover:bg-blue-100 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
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
        <div className="w-full h-dvh lg:pr-5 lg:pt-5 lg:pb-5 p-5 ">
          <form
            onSubmit={saveMarks}
            className="bg-white rounded-lg p-5 flex flex-col gap-5"
          >
            <LuMenu
              size={40}
              className="text-blue-700 block lg:hidden"
              onClick={() => {
                setShowMenu(true);
              }}
            />
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
                disabled={loading}
                type="submit"
                className="bg-blue-700  duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/2 md:w-1/4 text-white font-bold"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-3 w-5 h-5 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    submiting…
                  </>
                ) : (
                  <>
                    <LuSend />
                    submit
                  </>
                )}
              </button>
              <button
                type="reset"
                className="ring-blue-700 ring-1 text-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/2 md:w-1/4 font-bold"
              >
                <MdClear />
                clear
              </button>
            </div>
          </form>
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
};

export default Home;
