import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuMail, LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function SendOtp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function sendOtp(e) {
    setLoading(true);
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:5000/api/teachers/verify-email/${email}`, {
        email: email,
      })
      .then((e) => {
        if (e.data) {
          axios
            .post(`http://127.0.0.1:5000/api/email/send_otp`, {
              receiver_email: email,
            })
            .then((e1) => {
              const otpData = {
                value: e1.data.otp,
                expiry: Date.now() + 5 * 60 * 1000, // 5 minutes from now
                // expiry: Date.now() + 10 * 1000,
              };
              sessionStorage.setItem("otp", JSON.stringify(otpData));
              navigate(
                `/verify-otp?email=${btoa(email)}&id=${btoa(e.data.id)}`
              );
            })
            .catch(() => {
              toast.error(
                "Server connection issue. Please try again in a moment."
              );
            });
        } else {
          toast.error("Hmm… that email doesn’t match our records. Try again.");
        }
      })
      .catch(() => {
        toast.error("Server connection issue. Please try again in a moment.");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BiArrowBack
        size={30}
        className="fixed lg:top-10 lg:left-10 top-5 left-5"
        onClick={() => {
          navigate(-1);
        }}
      />
      <form
        onSubmit={sendOtp}
        className="bg-white lg:w-1/3 xl:w-1/4 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <label className="font-bold text-gray-500 text-5xl text-center">
            Send <span className="text-blue-700">OTP</span>{" "}
          </label>
          <label className="text-gray-400 text-sm mt-1 text-center">
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
              sending…
            </>
          ) : (
            <>
              <LuSend />
              send
            </>
          )}
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
