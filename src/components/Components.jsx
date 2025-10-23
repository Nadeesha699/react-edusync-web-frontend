import { BiArrowBack } from "react-icons/bi";
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
