import { useEffect, useState } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BackButton, LoadingUi } from "../components/UiComponents";
import { sendOtp, verifyOtp } from "../Service/TeacherService";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [n4, setN4] = useState("");
  const [n5, setN5] = useState("");
  const [n6, setN6] = useState("");
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = atob(searchParams.get("email"));
    const otp = `${n1}${n2}${n3}${n4}${n5}${n6}`;

    try {
      await verifyOtp({ email, otp });
      navigate(`/change-password?id=${searchParams.get("id")}`);
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response?.data.message);
      } else if (error.response?.status === 500) {
        toast.error("Server connection issue. Please try again in a moment.");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const resendOtp = async () => {
    try {
      const email = atob(searchParams.get("email"));
      await sendOtp({ email });
      toast.success(`OTP has been sent successfully to ${email}`);
    } catch (error) {
      toast.error("Server connection issue. Please try again in a moment.");
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-gradient-to-tr from-gray-200 via-blue-200 to-cyan-200">
      <BackButton />
      <form
        onSubmit={handleVerifyOtp}
        className="bg-white  lg:w-1/3 xl:w-1/4 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
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
              className="w-full border-none focus:outline-none text-center"
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
              className="w-full border-none focus:outline-none text-center"
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
              className="w-full border-none focus:outline-none text-center"
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
              className="w-full border-none focus:outline-none text-center"
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
              className="w-full border-none focus:outline-none text-center"
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
              className="w-full border-none focus:outline-none text-center"
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
            className="bg-gradient-to-r from-blue-700 to-blue-500 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white duration-300 ease-in hover:bg-blue-800 font-bold"
            type="submit"
          >
            {loading ? (
              <>
                <LoadingUi />
                verifying…
              </>
            ) : (
              <>
                <LuBadgeCheck />
                verify
              </>
            )}
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
