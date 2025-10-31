import { useNavigate } from "react-router-dom";
import IntroImage from "../images/intro.jpg";
import logo from "../images/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full lg:h-dvh flex flex-col lg:flex-row justify-center items-center bg-white">
      <div className="w-full lg:w-1/2 h-full p-10 gap-10 flex flex-col justify-between items-center lg:items-start">
        <img src={logo} alt="icon" className="w-full md:w-1/2" />
        <img
          src={IntroImage}
          alt="icon"
          className="w-full h-full lg:w-1/2 md:w-1/3 sm:w-1/3 flex lg:hidden block rounded-full h-auto"
        />
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start">
          <Typewriter
            options={{
              strings: [
                '<span class="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 text-transparent bg-clip-text text-5xl lg:text-7xl font-bold">Welcome</span>',
                '<span class="inline-block bg-gradient-to-r from-black to-blue-700 text-transparent bg-clip-text text-5xl lg:text-7xl font-bold">EduSync ICT</span>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <label className="text-gray-400 text-sm mt-1 text-center lg:text-left">
            Check student results, manage grades, and view academic performance
            anytime, anywhere.
          </label>
          <div className="flex lg:flex-row flex-col gap-5">
            <div
              className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-2 gap-2 rounded-full flex flex-row justify-center items-center font-bold duration-300 ease-in hover:bg-blue-800"
              onClick={() => {
                navigate("/find-result");
              }}
            >
              continue as student
              <FaArrowRight />
            </div>
            <div
              className="text-blue-700 ring-2 ring-blue-700 p-2 gap-2 rounded-full flex flex-row justify-center items-center font-bold ease-in hover:text-blue-800 hover:ring-blue-800"
              onClick={() => {
                navigate("/login");
              }}
            >
              continue as teacher
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <label className="text-gray-400">
            © 2025 EduSync ICT | Developed by
            <a
              href="https://nadeesha699.github.io/nadeesha-ruwandima/"
              className="text-blue-700 font-bold ease-in hover:text-blue-800"
            >
              Nadeesha Ruwandima
            </a>
          </label>
        </div>
      </div>
      <img
        src={IntroImage}
        alt="icon"
        className="w-1/2 h-full flex hidden lg:block"
      />
    </div>
  );
}
