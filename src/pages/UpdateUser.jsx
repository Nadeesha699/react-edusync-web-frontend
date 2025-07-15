import BackgroundImage from "../images/login-background.png";
import { MdEmail, MdLocationPin,MdPerson } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowCircle } from "react-icons/bi";

export default function UpdateUser() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-dvh bg-blend-multiply bg-black/80 bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-sm w-2/4 h-3/5 flex flex-col  items-center rounded-lg p-12">
        <div className="flex flex-row justify-start items-center w-full gap-10">
          <BiLeftArrowCircle
            size={50}
            className="text-black hover:text-white duration-300 ease-in-out"
            onClick={() => {
              navigate("/");
            }}
          />
          <label className="font-bold text-2xl">Update User</label>
        </div>
        <div className="flex flex-row w-full justify-around">
          <div className="flex flex-col  items-center gap-10 rounded-lg p-12">
            <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
              <MdPerson />
              <input
                className="bg-transparent focus:outline-none placeholder:text-gray-700"
                placeholder="Full Name"
              />
              <IoMdEye className="invisible" />
            </div>
            <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
              <MdEmail />
              <input
                className="bg-transparent focus:outline-none placeholder:text-gray-700"
                placeholder="Email"
              />
              <IoMdEye className="invisible" />
            </div>
            <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
              <MdLocationPin />
              <input
                className="bg-transparent focus:outline-none placeholder:text-gray-700"
                placeholder="Address"
              />
              <IoMdEye className="invisible" />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <button className="font-bold w-24 rounded-md ring ring-black text-black hover:bg-yellow-300  hover:ring-yellow-300 duration-300 ease-in-out">
                update
              </button>
              <button className="font-bold w-24 rounded-md ring ring-black text-black hover:bg-green-300 hover:ring-green-300 duration-300 ease-in-out">
                cancel
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <label className="text-black-900 font-bold text-7xl">Insight</label>
            <label className="text-yellow-300 font-bold text-5xl">Board</label>
          </div>
        </div>
      </div>
    </div>
  );
}
