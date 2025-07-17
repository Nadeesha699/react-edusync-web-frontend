import { useNavigate } from "react-router-dom";
import BackgroundImage from "../images/login-background.png";
import { MdEmail, MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [eyeVisible, setEyeVisible] = useState(false);
  return (
    <div
      className="w-full h-dvh bg-blend-multiply bg-black/80 bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-sm w-1/4 h-2/4 flex flex-col  items-center gap-10 rounded-lg p-12">
        <div className="flex flex-col text-center">
          <label className="text-black-900 font-bold text-4xl">
            Insight<span className="text-yellow-300">Board</span>
          </label>
          <label className="text-white">Welcoame Back</label>
        </div>
        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
            <MdEmail />
            <input className="bg-transparent focus:outline-none placeholder:text-gray-700" placeholder="Email" />
            <IoMdEye className="invisible" />
          </div>
          <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
            <MdLock />
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700"
              placeholder="Password"
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
          <div className="w-full text-right">
            <label className="underline underline-offset-1 font-bold text-sm duration-300 ease-in-out hover:text-white cursor-pointer" onClick={()=>{
              navigate("/forgot-password")
            }}>
              Forgot Password
            </label>
          </div>
          <button className="font-bold w-36 rounded-md ring ring-white text-white hover:bg-yellow-300 hover:text-black hover:ring-yellow-300 duration-300 ease-in-out" onClick={()=>{navigate("/")}}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
