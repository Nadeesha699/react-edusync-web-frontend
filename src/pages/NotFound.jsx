import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center gap-5 p-5 bg-gradient-to-tr from-gray-200 via-blue-200 to-cyan-200">
      <label className="text-8xl inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 text-transparent bg-clip-text font-bold">
        Oops!
      </label>
      <label className="text-xl font-bold">404 - PAGE NOT FOUND</label>
      <p className="text-center text-gray-500 text-sm">
        The page you are looking for might have been removed had it's name
        changed is or is temporarily unavailable
      </p>
      <div
        className="bg-gradient-to-r from-blue-700 to-blue-500 p-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-bold duration-300 ease-in hover:bg-blue-800"
        onClick={() => {
          navigate("/");
        }}
      >
        <LuArrowLeft /> go back home
      </div>
    </div>
  );
};

export default NotFound;
