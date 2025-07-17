import { BiLeftArrowCircle } from "react-icons/bi";
import BackgroundImage from "../images/login-background.png";
import { MdEmail } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-dvh bg-blend-multiply bg-black/80 bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-sm w-1/4 h-2/4 flex flex-col  items-center rounded-lg p-12 gap-5">
        <div className="flex flex-row justify-start items-center w-full gap-10">
          <BiLeftArrowCircle
            size={50}
            className="text-black hover:text-white duration-300 ease-in-out"
            onClick={() => {
              navigate("/login");
            }}
          />
          <label className="font-bold text-2xl">Forgot Password</label>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="font-bold text-2xl text-yellow-300">
            Mail Address Here
          </label>
          <label className="text-center text-sm text-white">
            Enter the email address associated with your account
          </label>
        </div>
        <div className="flex flex-col  items-center gap-5 rounded-lg p-5">
          <div className="flex flex-row justify-between items-center gap-2 bg-yellow-300 rounded-lg p-1">
            <MdEmail />
            <input
              className="bg-transparent focus:outline-none placeholder:text-gray-700"
              placeholder="Email"
            />
            <IoMdEye className="invisible" />
          </div>
          <button className="font-bold w-full rounded-md ring ring-black text-black hover:bg-yellow-300  hover:ring-yellow-300 duration-300 ease-in-out" onClick={()=>{navigate("/verify-email")}}>
            send otp
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="bg-yellow-300 w-6 h-2 rounded-full"></div>
        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
        <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
