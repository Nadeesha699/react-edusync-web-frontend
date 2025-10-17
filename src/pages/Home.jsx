import { MdLogout } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import logo from "../images/logo.png";
import AddMarks from "../components/AddMarks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import StudentsMarks from "../components/StudentsMarks";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  const [routeNumber, setRouteNumber] = useState(0);
  const [colors, setColor] = useState(0);

  const setRoute = (value) => {
    setRouteNumber(value);
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-row h-dvh bg-zinc-300">
      <div className="w-1/6 flex flex-col justify-start pt-5 pb-5 pl-5 bg-white rounded-r-2xl mr-5">
        <img src={logo} alt="icon" className="w-full pb-5" />
        <div
          className=" rounded-l-2xl hover:bg-blue-100 p-5 w-full  flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(0);
            setColor(0);
          }}
          style={{ backgroundColor: colors === 0 ? "#1D4ED8" : "" , color:colors === 0 ? "#ffffffff" : ""}}
        >
          <FaPlus />
          <label className="font-bold">Add Marks</label>
        </div>
        <div
          className=" rounded-l-2xl hover:bg-blue-100 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(1);
            setColor(1);
          }}
          style={{ backgroundColor: colors === 1 ? "#1D4ED8" : "" , color:colors === 1 ? "#ffffffff" : "" }}
        >
          <MdPeople />
          <label className="font-bold">Students Marks</label>
        </div>
        <div
          className="rounded-l-xl hover:bg-blue-100 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            Swal.fire({
              title: "Are you sure you want to logout?",
              text: "You will need to log in again to access InsightBoard.",
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
      <div className="w-5/6 bg-transparent ">
        {routeNumber === 0 ? (
          <AddMarks />
        ) : routeNumber === 1 ? (
          <StudentsMarks />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
