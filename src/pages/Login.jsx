import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuEye, LuEyeOff, LuLock, LuLogIn, LuMail } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [eyehide, setEyeHide] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-slate-700">
      <BiArrowBack
        size={30}
        className="text-white fixed top-10 left-10"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="bg-gray-300 w-1/4 rounded-lg p-5 flex flex-col gap-5">
        <div className="w-full flex justify-center items-center">
          <label className="font-bold text-amber-400 text-5xl">
            L<span className="text-slate-700">ogin</span>{" "}
          </label>
        </div>
        <div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuMail />
          <input
          placeholder="Email"
            type="email"
            className="w-full border-none focus:outline-none"
          />
        </div>
        <div className="bg-white p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuLock />
          <input
          placeholder="Password"
            type={eyehide?"text":"password"}
            className="w-full border-none focus:outline-none"
          />
          {eyehide ? <LuEye onClick={()=>{setEyeHide(false)}} /> : <LuEyeOff onClick={()=>{setEyeHide(true)}}/>}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="bg-slate-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white" onClick={()=>{navigate("/home")}}>
            <LuLogIn />
            <label className="font-bold">sign up</label>
          </div>
          <label
            className="text-gray-500"
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
