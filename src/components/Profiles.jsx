import { BiRightArrowAlt } from "react-icons/bi";
import BackgroundImage from "../images/login-background.png";
import ProfileImage from "../images/profile.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Profiles() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-dvh  bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-md p-10 flex flex-row gap-10 absolute inset-0 justify-between">
        <div className="flex flex-col justify-between w-1/2">
          <label className="font-bold text-4xl">Profile</label>
          <div className="flex flex-col justify-center items-start">
            <label className="text-black-900 font-bold text-9xl">
              Nadeesha
            </label>
            <label className="text-yellow-300 font-bold text-9xl">
              Ruwandima
            </label>
          </div>
          <div className="bg-black/20 backdrop-blur-md w-full h-1/3 flex flex-col p-5 rounded-xl justify-between">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl">Email</label>
              <label className="bg-transparent focus:outline-none">
                nadeesharuwandima@gmail.com
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-2xl">Address</label>
              <label className="bg-transparent focus:outline-none">
                Matara, Sri Lanka
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <img
            src={ProfileImage}
            alt="profile-image"
            className="rounded-full w-96 h-96 shadow-md"
          />
          <FaFacebookF className="text-blue-500 hover:text-black duration-300 ease-in-out" />
          <FiMail className="text-red-400 hover:text-black duration-300 ease-in-out" />
          <FaWhatsapp className="text-green-700 hover:text-black duration-300 ease-in-out" />
          <FaLinkedinIn className="text-blue-700 hover:text-black duration-300 ease-in-out" />
          <FaGithub className="text-purple-500 hover:text-black duration-300 ease-in-out" />
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Profile Status</label>
              <div className="bg-gray-400 w-36 h-2 rounded-full">
                <div className="bg-orange-400 w-24 h-full rounded-full"></div>
              </div>
              <label className="text-sm">70% Complete</label>
            </div>
            <div
              className="text-orange-400 font-bold  flex flex-row items-center justify-center gap-2 cursor-pointer hover:text-black  duration-300 ease-in-out"
              onClick={() => {
                navigate("/update-profile");
              }}
            >
              <label>Edit Profile</label>
              <BiRightArrowAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
