import { BiArrowBack } from "react-icons/bi";
import { MdUpdate} from "react-icons/md";
import { LuEye, LuEyeOff, LuLock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ChangePassword() {
  const navigate = useNavigate();
   const [eyehide1, setEyeHide1] = useState(false);
    const [eyehide2, setEyeHide2] = useState(false);
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed top-10 left-10"
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="bg-white w-1/3 rounded-lg p-5 flex flex-col gap-5">
        <div className="w-full flex  flex-col gap-2 justify-center items-center">
          <label className="font-bold text-gray-500 text-5xl">
            Change<span className="text-blue-700"> Password</span>{" "}
          </label>
          <p className="text-gray-400 text-sm mt-1">Enter your new password below</p>
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuLock />
          <input
          placeholder="New Password"
            type={eyehide1 ? "text" : "password"}
            className="w-full border-none focus:outline-none"
          />
          {eyehide1 ? (
            <LuEye
              onClick={() => {
                setEyeHide1(false);
              }}
            />
          ) : (
            <LuEyeOff
              onClick={() => {
                setEyeHide1(true);
              }}
            />
          )}
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuLock />
          <input
          placeholder="Confirm Password"
            type={eyehide2 ? "text" : "password"}
            className="w-full border-none focus:outline-none"
          />
          {eyehide2 ? (
            <LuEye
              onClick={() => {
                setEyeHide2(false);
              }}
            />
          ) : (
            <LuEyeOff
              onClick={() => {
                setEyeHide2(true);
              }}
            />
          )}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div
            className="bg-blue-700 duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            <MdUpdate />
            <label className="font-bold">update password</label>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-blue-300 p-1 rounded-full"></div>
            <div className="bg-blue-300 p-1 rounded-full"></div>
            <div className="bg-blue-700 p-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
