import { useNavigate } from "react-router-dom";
import  IntroImage from "../images/intro.jpg"
import  logo from "../images/logo.png"
import { FaArrowRight } from "react-icons/fa6";


export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full lg:h-dvh flex flex-col lg:flex-row justify-center items-center bg-white">
      <div className="w-full lg:w-1/2 h-full p-10 gap-10 flex flex-col justify-between items-center lg:items-start">
        <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-center">
          <img src={logo} alt="icon" className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 h-auto"/>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-3xl lg:text-5xl text-gray-400 text-center lg:text-left">EduSync ICT</label>
            <label className="font-bold text-sm mt-1 text-center lg:text-left">Empowering Students and Teachers with Smart ICT Results Access.</label>
          </div>
        </div>
         <img src={IntroImage} alt="icon" className="w-full h-full lg:w-1/2 md:w-1/3 sm:w-1/3 flex lg:hidden block rounded-full h-auto"/>
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start">
          <label className="text-blue-700 text-5xl lg:text-7xl font-bold">&lt;Welcome/&gt;</label>
          <label className="text-gray-400 text-sm mt-1 text-center lg:text-left">Check student results, manage grades, and view academic performance anytime, anywhere.</label>
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="bg-blue-700 text-white p-2 gap-2 rounded-full flex flex-row justify-center items-center font-bold duration-300 ease-in hover:bg-blue-800" onClick={()=>{navigate("/find-result")}}>
              continue as student
              <FaArrowRight/>
            </div>
             <div className="text-blue-700 ring-2 ring-blue-700 p-2 gap-2 rounded-full flex flex-row justify-center items-center font-bold ease-in hover:text-blue-800 hover:ring-blue-800" onClick={()=>{navigate("/login")}}>
              continue as teacher
              <FaArrowRight/>
            </div>
          </div>
        </div>
        <div className="w-full text-center"> <label className="text-gray-400"> © 2025 EduSync ICT | Developed by <a href="https://nadeesha699.github.io/nadeesha-ruwandima/" className="text-blue-700 font-bold ease-in hover:text-blue-800">Nadeesha Ruwandima</a></label></div>
      </div>
      <img src={IntroImage} alt="icon" className="w-1/2 h-full flex hidden lg:block"/>
    </div>
  );
}
