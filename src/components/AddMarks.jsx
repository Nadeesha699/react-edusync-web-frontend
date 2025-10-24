import { MdClear } from "react-icons/md";
import { LoadingUi } from "../components/Components";
import { LuCalculator, LuIdCard, LuMenu, LuSend, LuUser } from "react-icons/lu";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const AddMarks = () => {
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState("");
  const [name, setName] = useState("");

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

  return (
    <div className="w-full h-dvh lg:pr-5 lg:pt-5 lg:pb-5 p-5 ">
      <form
        onSubmit={saveMarks}
        className="bg-white rounded-lg p-5 flex flex-col gap-5"
      >
        <LuMenu
          size={30}
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
  );
};

export default AddMarks;
