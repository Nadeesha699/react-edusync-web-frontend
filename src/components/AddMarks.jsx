import { MdClear, MdPeople, MdLogout } from "react-icons/md";
import { LoadingUi } from "../components/UiComponents";
import {
  LuCalculator,
  LuGraduationCap,
  LuIdCard,
  LuMenu,
  LuSend,
  LuUser,
} from "react-icons/lu";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import logo from "../images/logo.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { save } from "../Service/StudentMarksService";
import { toast } from "react-toastify";
import { BatchData } from "../data/LocalData";
import { CgProfile } from "react-icons/cg";
import { getById } from "../Service/TeacherService";

const AddMarks = () => {
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [username, setUserName] = useState("loading...");

  const handeleSave = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await save({ index, name, marks, batch });
      toast.success("New mark added successfully!");
      setIndex("");
      setMarks("");
      setName("");
      setBatch("");
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("Oops! Marks for this student are already recorded.");
      } else {
        toast.error("Server connection issue. Please try again in a moment.");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    handelSetUserName();
  }, []);

  const handelSetUserName = async () => {
    try {
      const id = atob(searchParams.get("user_id"));
      const result = await getById({ id });
      setUserName(result.name);
    } catch (error) {
      setUserName("N/A");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:w-5/6 w-full bg-transparent lg:pr-5 lg:pt-5 lg:pb-5 p-5">
      <div className="bg-white w-full p-2 rounded-lg flex justify-between items-center lg:justify-end lg:items-end">
        <LuMenu
          size={30}
          className="text-blue-700 block lg:hidden"
          onClick={() => {
            setShowMenu(true);
          }}
        />
        <div className="flex flex-row gap-2 p-2 bg-gray-300 rounded-full w-fit justify-center items-center">
          <CgProfile /> login as
          <span className="text-blue-600 font-bold">{username}</span>
        </div>
      </div>

      <div className="w-full">
        <form
          onSubmit={(e) => {
            handeleSave(e);
          }}
          className="bg-white rounded-lg p-5 flex flex-col gap-5"
        >
          <label className="font-bold text-gray-500 text-4xl lg:text-5xl">
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
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
            <LuGraduationCap />
            <select
              required
              onChange={(e) => {
                setBatch(e.target.value);
              }}
              className="w-full bg-transparent focus:outline-none focus:ring-0"
            >
              {BatchData.map((e, index) => {
                return (
                  <option key={index} value={e.value}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-row gap-5 justify-start">
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-700  duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/2 md:w-1/4 text-white font-bold"
            >
              {loading ? (
                <>
                  <LoadingUi />
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
          <img src={logo} alt="icon" className="w-full md:w-1/2" />
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
              navigate(`/student-marks?user_id=${searchParams.get("user_id")}`);
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
  );
};

export default AddMarks;
