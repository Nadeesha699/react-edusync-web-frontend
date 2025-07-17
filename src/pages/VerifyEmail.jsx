import { BiLeftArrowCircle } from "react-icons/bi";
import BackgroundImage from "../images/login-background.png";
import { useNavigate } from "react-router-dom";
const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-dvh bg-blend-multiply bg-black/80 bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-sm w-1/4 h-2/4 flex flex-col  items-center rounded-lg p-10 gap-5">
        <div className="flex flex-row justify-start items-center w-full gap-10">
          <BiLeftArrowCircle
            size={50}
            className="text-black hover:text-white duration-300 ease-in-out"
            onClick={() => {
              navigate("/forgot-password");
            }}
          />
          <label className="font-bold text-2xl">Email Verification</label>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="font-bold text-2xl text-yellow-300">
            Get Your Code
          </label>
          <label className="text-center text-sm text-white">
            Please enter the 6 digit code that send to your email address
          </label>
        </div>
        <div className="flex flex-col  items-center gap-5 rounded-lg p-5">
          <div className="flex flex-row w-full justify-between items-center gap-2">
            <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-md p-1 w-8 h-8">
              <input
                className="bg-transparent focus:outline-none placeholder:text-gray-700 text-center h-full w-full"
                maxLength="1"
              />
            </div>
            <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-md p-1 w-8 h-8">
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700 text-center h-full w-full"
               maxLength="1"
            />
          </div><div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-md p-1 w-8 h-8">
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700 text-center h-full w-full"
               maxLength="1"
            />
          </div><div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-md p-1 w-8 h-8">
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700 text-center h-full w-full"
               maxLength="1"
            />
          </div><div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-md p-1 w-8 h-8">
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700 text-center h-full w-full"
               maxLength="1"
            />
          </div><div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-md p-1 w-8 h-8">
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700 text-center h-full w-full"
               maxLength="1"
            />
          </div>
          </div>
          <label className="text-sm">If you don't receive code! <span className="font-bold text-yellow-300 text-sm">resend</span></label>
          <button
            className="font-bold w-full rounded-md ring ring-black text-black hover:bg-yellow-300  hover:ring-yellow-300 duration-300 ease-in-out"
            onClick={() => {
              navigate("/reset-password");
            }}
          >
            verify and proceed
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
        <div className="bg-yellow-300 w-6 h-2 rounded-full"></div>
        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default VerifyEmail;
