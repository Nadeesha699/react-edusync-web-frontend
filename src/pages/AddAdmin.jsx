import BackgroundImage from "../images/login-background.png";
import { MdArrowLeft, MdEmail, MdLocationPin, MdLock, MdPerson } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
export default function AddAdmin() {
  const navigate = useNavigate();
  const [eyeVisible, setEyeVisible] = useState(false);
  return (
    <div
      className="w-full h-dvh bg-blend-multiply bg-black/80 bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/25 w-2/4 h-3/4 flex flex-col  items-center gap-10 rounded-lg p-12">
        <BiLeftArrowCircle size={50} color="white" />
        <label>Add Admin</label>
         <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
          <MdPerson />
          <input className="bg-transparent focus:outline-none placeholder:text-gray-700" placeholder="Full Name" />
          <IoMdEye className="invisible" />
        </div>
        <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
          <MdEmail />
          <input className="bg-transparent focus:outline-none placeholder:text-gray-700" placeholder="Email"/>
          <IoMdEye className="invisible" />
        </div>
        <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
          <MdLocationPin />
          <input className="bg-transparent focus:outline-none placeholder:text-gray-700" placeholder="Address" />
          <IoMdEye className="invisible" />
        </div>
       
        <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
          <MdLock />
          <input
            className="bg-transparent focus:outline-none placeholder:text-gray-700" placeholder="New Password"
            type={eyeVisible ? "text" : "password"}
          />
          <div
            onClick={() => {
              setEyeVisible(!eyeVisible);
            }}
          >
            {eyeVisible ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
          <MdLock />
          <input
            className="bg-transparent focus:outline-none placeholder:text-gray-700 " placeholder="Confirm Password"
            type={eyeVisible ? "text" : "password"}
          />
          <div
            onClick={() => {
              setEyeVisible(!eyeVisible);
            }}
          >
            {eyeVisible ? <IoMdEye /> : <IoMdEyeOff />}
          </div>
        </div>
      </div>
    </div>
  );
}
