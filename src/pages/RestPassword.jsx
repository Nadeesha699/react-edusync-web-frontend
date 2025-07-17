import { BiLeftArrowCircle } from "react-icons/bi";
import BackgroundImage from "../images/login-background.png";
import { MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ResetPassword = () => {
  const navigate = useNavigate();
  const [eyeVisible, setEyeVisible] = useState(false);
  return (
    <div
      className="w-full h-dvh bg-blend-multiply bg-black/80 bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-sm w-1/4 h-2/4 flex flex-col  items-center rounded-lg p-5 gap-5">
        <div className="flex flex-row justify-start items-center w-full gap-5">
          <BiLeftArrowCircle
            size={50}
            className="text-black hover:text-white duration-300 ease-in-out"
            onClick={() => {
              navigate("/verify-email");
            }}
          />
          <label className="font-bold text-2xl">Reset Password</label>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="font-bold text-2xl text-yellow-300">
            Enter New Password
          </label>
          <label className="text-center text-sm text-white">
            Your new password must be different from previously used password
          </label>
        </div>
        <div className="flex flex-col  items-center gap-5 rounded-lg p-5">
          <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
            <MdLock />
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700"
              placeholder="New Password"
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
              className="bg-transparent focus:outline-none placeholder:text-gray-700 "
              placeholder="Confirm Password"
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
          <button
            className="font-bold w-full rounded-md ring ring-black text-black hover:bg-yellow-300  hover:ring-yellow-300 duration-300 ease-in-out"
            onClick={() => {
              navigate("/login");
            }}
          >
            continue
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
        <div className="bg-yellow-300 w-6 h-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
