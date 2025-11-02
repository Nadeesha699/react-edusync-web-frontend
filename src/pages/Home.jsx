import logo from "../images/logo.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import { MdPeople, MdLogout } from "react-icons/md";
import AddMarks from "../components/AddMarks";

const Home = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-dvh bg-gradient-to-tr from-gray-200 via-blue-200 to-cyan-200">
      <div className="w-1/6 flex flex-col justify-start pt-5 pb-5 pl-5 bg-white rounded-r-2xl hidden lg:block">
        <img src={logo} alt="icon" className="w-full pb-5" />
        <div
          className="bg-blue-700  text-white rounded-l-2xl hover:bg-blue-800 p-5 w-full  flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            // navigate(`/home?user_id=${searchParams.get("user_id")}`);
            navigate(`/home`);
          }}
        >
          <FaPlus />
          <label className="font-bold">Add Marks</label>
        </div>
        <div
          className=" rounded-l-2xl hover:bg-blue-100 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            // navigate(`/student-marks?user_id=${searchParams.get("user_id")}`);
            navigate(`/student-marks`);
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
        <AddMarks />
    </div>
  );
};

export default Home;
