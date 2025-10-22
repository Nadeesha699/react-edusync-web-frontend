import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuBadgeCheck } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [n4, setN4] = useState("");
  const [n5, setN5] = useState("");
  const [n6, setN6] = useState("");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log(sessionStorage.getItem("otp"));
  }, []);

  const verifyOtp = (e) => {
    e.preventDefault();
    const storedOtp = sessionStorage.getItem("otp");
    const parseOtp = JSON.parse(storedOtp);
    if (parseOtp.expiry > Date.now()) {
      console.log(parseOtp.value)
      console.log(n1 + n2 + n3 + n4 + n5 + n6)
      if (parseOtp.value.toString() === `${n1}${n2}${n3}${n4}${n5}${n6}`) {
        sessionStorage.clear();
        navigate(`/change-password?id=${searchParams.get("id")}`);
      } else {
        toast.error("Mismatch OTP !");
      }
    } else {
      toast.error("OTP Expired !");
    }
  };

  const resendOtp = () => {
    axios
      .post(`http://127.0.0.1:5000/api/email/send_otp`, {
        receiver_email: atob(searchParams.get("email")),
      })
      .then((e1) => {
        const otpData = {
          value: e1.data.otp,
          expiry: Date.now() + 5 * 60 * 1000, // 5 minutes from now
          // expiry: Date.now() + 10 * 1000,
        };
        sessionStorage.setItem("otp", JSON.stringify(otpData));
        window.location.reload();
      })
      .catch((e) => {
        toast.error("network connection error !");
      });
  };

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
        onSubmit={verifyOtp}
        className="bg-white w-1/4 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <label className="font-bold text-gray-500 text-5xl">
            Verify<span className="text-blue-700"> OTP</span>{" "}
          </label>
          <label className="text-gray-400 text-sm mt-1 text-center">
            Enter the 6-digit OTP sent to your registered email. This code is
            valid for next 5 minitues.
          </label>
        </div>
        <div className="flex flex-row w-full gap-5">
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
            <input
              required
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="9"
              onChange={(e) => {
                setN1(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
            <input
              required
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="9"
              onChange={(e) => {
                setN2(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
            <input
              required
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="9"
              onChange={(e) => {
                setN3(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
            <input
              required
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="9"
              onChange={(e) => {
                setN4(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
            <input
              required
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="9"
              onChange={(e) => {
                setN5(e.target.value);
              }}
            />
          </div>
          <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg w-1/6">
            <input
              required
              type="number"
              className="w-full border-none focus:outline-none"
              min="0"
              max="9"
              onChange={(e) => {
                setN6(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white duration-300 ease-in hover:bg-blue-800"
            type="submit"
          >
            <LuBadgeCheck />
            <label className="font-bold">verify</label>
          </button>
          <label
            className="text-gray-400 text-sm mt-1"
            onClick={() => {
              resendOtp();
            }}
          >
            Didn't get the code?{" "}
            <span className="text-blue-700 underline underline-offset-2">
              Resend otp
            </span>
          </label>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="bg-blue-300 p-1 rounded-full"></div>
          <div className="bg-blue-700 p-1 rounded-full"></div>
          <div className="bg-blue-300 p-1 rounded-full"></div>
        </div>
      </form>
    </div>
  );
}
