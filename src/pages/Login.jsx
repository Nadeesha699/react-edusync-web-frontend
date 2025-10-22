import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuEye, LuEyeOff, LuLock, LuLogIn, LuMail } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [eyehide, setEyeHide] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/api/teachers/login`, {
        email: email,
        password: password,
      })
      .then((e1) => {
        toast.success("Login successful! Welcome back 👋");
        navigate(`/home?user_id?${btoa(e1.data.user_id)}`);
      })
      .catch((e) => {
        if (e.status === 401) {
          toast.error("Incorrect credentials. Please check your details and try again.");
        } else if (e.status === 500) {
          toast.error("Server connection issue. Please try again in a moment.");
        }
      }).finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed top-10 left-10"
        onClick={() => {
          navigate("/");
        }}
      />
      <form
        onSubmit={login}
        className="bg-white w-1/4 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex justify-center items-center">
          <img src={logo} alt="icon" className="w-1/2" />
        </div>
        <div className="w-full flex justify-center items-center">
          <label className="font-bold text-gray-500 text-2xl">
            EduSync <span className="text-blue-700">ICT Login</span>
          </label>
        </div>
        <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1">
          <LuMail />
          <input
            required
            value={email}
            placeholder="Email"
            type="email"
            className="w-full border-none focus:outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1">
          <LuLock />
          <input
            required
            value={password}
            placeholder="Password"
            type={eyehide ? "text" : "password"}
            className="w-full border-none focus:outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {eyehide ? (
            <LuEye
              onClick={() => {
                setEyeHide(false);
              }}
            />
          ) : (
            <LuEyeOff
              onClick={() => {
                setEyeHide(true);
              }}
            />
          )}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <button
            disabled={loading}
            type="submit"
            className="bg-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white duration-300 ease-in hover:bg-blue-800 font-bold"
          >
            {loading ? (
              <>
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
                signing…
              </>
            ) : (
              <>
                <LuLogIn />
                sign up
              </>
            )}
          </button>
          <label
            className="text-blue-700 underline underline-offset-2 text-sm mt-1"
            onClick={() => {
              navigate("/send-otp");
            }}
          >
            forgot password ?
          </label>
        </div>
      </form>
    </div>
  );
}
