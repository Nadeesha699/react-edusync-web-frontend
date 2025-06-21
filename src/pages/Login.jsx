import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full h-dvh bg-yellow-400 flex flex-row">
      <div className="w-1/2 h-dvh bg-white-500"></div>
      <div className="w-1/2 h-dvh bg-red-500">
      <input placeholder="Email"/>
      <input placeholder="Password" type="password" />
      <button onClick={()=>{navigate('/')}}>login</button>
      </div>
    </div>
  );
};

export default Login;
