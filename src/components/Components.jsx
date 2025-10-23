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
