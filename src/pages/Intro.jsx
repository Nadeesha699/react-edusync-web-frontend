import { useNavigate } from "react-router-dom";
import  IntroImage from "../images/intro.png"


export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex- justify-center items-center p-5 bg-slate-700">
      <img src={IntroImage}/>
    </div>
  );
}
