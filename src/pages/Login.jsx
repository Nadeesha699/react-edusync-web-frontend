import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuEye, LuEyeOff, LuLock, LuLogIn, LuMail } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import  logo from "../images/logo.png"

export default function Login() {
  const [eyehide, setEyeHide] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed top-10 left-10"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="bg-white w-1/4 rounded-lg p-5 flex flex-col gap-5">
      <div className="w-full flex justify-center items-center"><img src={logo} alt="icon" className="w-1/2"/></div>
        <div className="w-full flex justify-center items-center">
          <label className="font-bold text-gray-500 text-2xl">
            EduSync <span className="text-blue-700">ICT Login</span>
          </label>
        </div>
        <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1" >
          <LuMail />
          <input
          placeholder="Email"
            type="email"
            className="w-full border-none focus:outline-none"
          />
        </div>
        <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1">
          <LuLock />
          <input
          placeholder="Password"
            type={eyehide?"text":"password"}
            className="w-full border-none focus:outline-none"
          />
          {eyehide ? <LuEye onClick={()=>{setEyeHide(false)}} /> : <LuEyeOff onClick={()=>{setEyeHide(true)}}/>}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="bg-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white duration-300 ease-in hover:bg-blue-800" onClick={()=>{navigate("/home")}}>
            <LuLogIn />
            <label className="font-bold">sign up</label>
          </div>
          <label
            className="text-blue-700 underline underline-offset-2"
            onClick={() => {
              navigate("/send-otp");
            }}
          >
            forgot password
          </label>
        </div>
      </div>
    </div>
  );
}
