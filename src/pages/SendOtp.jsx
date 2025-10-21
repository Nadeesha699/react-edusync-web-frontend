import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuMail, LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function SendOtp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function sendOtp(e) {
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:5000/api/teachers/verify-email/${email}`, {
        email: email,
      })
      .then((e) => {
        if (e.data.verify) {
          axios
            .post(`http://127.0.0.1:5000/api/email/send_otp`, {
              receiver_email: email,
            })
            .then((e) => {
              navigate("/verify-otp",{otp:e.data.otp})
            })
            .catch((e) => {
              toast.error("network connection error !");
            });
        } else {
          toast.error("wrong email !");
        }
      })
      .catch(() => {
        toast.error("network connection error !");
      });
  }
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed top-10 left-10"
        onClick={() => {
          navigate(-1);
        }}
      />
      <form
        onSubmit={sendOtp}
        className="bg-white w-1/4 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <label className="font-bold text-gray-500 text-5xl">
            Send <span className="text-blue-700">OTP</span>{" "}
          </label>
          <label className="text-gray-400 text-sm mt-1">
            {" "}
            We’ll send a verification code to your registered email
          </label>
        </div>
        <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1">
          <LuMail />
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Registered Email"
            type="email"
            className="w-full border-none focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white duration-300 ease-in hover:bg-blue-800"
        >
          <LuSend />
          <label className="font-bold">send</label>
        </button>
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="bg-blue-700 p-1 rounded-full"></div>
          <div className="bg-blue-300 p-1 rounded-full"></div>
          <div className="bg-blue-300 p-1 rounded-full"></div>
        </div>
      </form>
    </div>
  );
}
