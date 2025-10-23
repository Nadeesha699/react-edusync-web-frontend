import { BiArrowBack } from "react-icons/bi";
import { LuFileX } from "react-icons/lu";
import { MdClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <BiArrowBack
      size={30}
      className="fixed lg:top-10 lg:left-10 top-5 left-5"
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export const LoadingUi = ()=>{
    return(
        <svg
                  className="mr-3 w-5 h-5 animate-spin text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
    )
}

export const ResultNotFound =()=>{
return(
    <div className="bg-blue-100 w-full flex flex-col gap-5 jutify-center items-center rounded-lg p-5">
                <div className="flex flex-col gap-2 justify-between w-full p-5 bg-white rounded-lg items-center text-gray-400">
                  <LuFileX size={50} />
                  <label className="font-bold text-center text-xl">
                    No results found
                  </label>
                  <p className="text-center text-gray-600 text-sm sm-1">
                    Sorry, we couldn’t find any record for that index number. Please
                    check the number and try again.
                  </p>
                </div>
              </div>
)
}

export const ServerNotConnect = () =>{
    return(
         <div className="bg-red-100 w-full flex flex-col gap-5 jutify-center items-center rounded-lg p-5">
                    <div className="flex flex-col gap-2 justify-between w-full p-5 bg-white rounded-lg items-center text-red-400">
                      <MdClear size={50} />
                      <label className="font-bold text-center text-xl">
                        Connection error
                      </label>
                      <p className="text-center text-gray-600 text-sm sm-1">
                        We’re having trouble reaching the server right now. Please check
                        your internet connection or try again in a few moments.
                      </p>
                    </div>
                  </div>
    )
}

export const ResultCard = ({marks,indexs,name,issuedDate}) =>{
    return(
         <div className="bg-blue-100 w-full flex flex-col gap-5 jutify-center items-center rounded-lg p-5">
            <label className="text-2xl font-bold"> Results</label>
            <div className="flex flex-row gap-2 justify-between w-full p-5 bg-white rounded-lg">
              <div className="flex flex-col text-sm mt-1 text-gray-500">
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Index:</span>
                  <span>{indexs}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Name:</span>
                  <span>{name}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Marks:</span>
                  <span>{marks}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Subject:</span>
                  <span>Information Communication Technologhy</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Issued Date:</span>
                  <span>{issuedDate}</span>
                </div>
              </div>
              {marks >= 75 ? (
                <label className="text-6xl text-emerald-600 font-bold">A</label>
              ) : marks >= 65 ? (
                <label className="text-6xl text-blue-500 font-bold">B</label>
              ) : marks >= 50 ? (
                <label className="text-6xl text-amber-500 font-bold">C</label>
              ) : marks >= 35 ? (
                <label className="text-6xl text-violet-500 font-bold">S</label>
              ) : (
                <label className="text-6xl text-rose-600 font-bold">F</label>
              )}
            </div>
          </div>
    )
}
