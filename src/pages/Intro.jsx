import { useNavigate } from "react-router-dom";
import  IntroImage from "../images/intro.jpg"
import  logo from "../images/logo.png"
import { FaArrowRight } from "react-icons/fa6";


export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex-row justify-center items-center bg-white">
      <div className="w-1/2 h-full p-10 flex flex-col justify-between">
        <div className="flex flex-row">
          <img src={logo} alt="icon" className="w-1/6"/>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-5xl text-gray-400">EduSync ICT</label>
            <label className="font-bold text-sm mt-1">Empowering Students and Teachers with <br></br> Smart ICT Results Access.</label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-blue-700 text-7xl font-bold">&lt;Welcome/&gt;</label>
          <label className="text-gray-400 text-sm mt-1">Check student results, manage grades, and view academic <br></br> performance anytime, anywhere.</label>
          <div className="flex flex-row gap-5">
            <div className="bg-blue-700 text-white p-2 gap-2 rounded-full flex flex-row items-center font-bold duration-300 ease-in hover:bg-blue-800" onClick={()=>{navigate("/find-result")}}>
              continue as student
              <FaArrowRight/>
            </div>
             <div className="text-blue-700 ring-2 ring-blue-700 p-2 gap-2 rounded-full flex flex-row items-center font-bold ease-in hover:text-blue-800 hover:ring-blue-800" onClick={()=>{navigate("/login")}}>
              continue as teacher
              <FaArrowRight/>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center"> <label className="text-gray-400"> © 2025 EduSync ICT | Developed by <a href="https://nadeesha699.github.io/nadeesha-ruwandima/" className="text-blue-700 font-bold ease-in hover:text-blue-800">Nadeesha Ruwandima</a></label></div>
      </div>
      <img src={IntroImage} alt="icon" className="w-1/2 h-full"/>

    </div>
  );
}
