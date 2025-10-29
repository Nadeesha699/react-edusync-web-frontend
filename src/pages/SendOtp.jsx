import { useState } from "react";
import { LuMail, LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackButton, LoadingUi } from "../components/UiComponents";
import { sendOtp, verifyEmail } from "../Service/TeacherService";

export default function SendOtp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendOtp(e) {
    setLoading(true);
    e.preventDefault();

    try {
      const result = await verifyEmail({ email });
      if (result) {
        try {
          const result01 = await sendOtp({ email });
          const otpData = {
            value: result01.otp,
            expiry: Date.now() + 5 * 60 * 1000, // 5 minutes from now
            // expiry: Date.now() + 10 * 1000,
          };
          sessionStorage.setItem("otp", JSON.stringify(otpData));
          toast.success(`OTP has been sent successfully to ${email}`);
          navigate(`/verify-otp?email=${btoa(email)}&id=${btoa(result.id)}`);
        } catch (error) {
          toast.error("Server connection issue. Please try again in a moment.");
        }
      } else {
        toast.error("Hmm… that email doesn’t match our records. Try again.");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("Hmm… that email doesn’t match our records. Try again.");
      } else if (error.response?.status === 500) {
        toast.error("Server connection issue. Please try again in a moment.");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BackButton />
      <form
        onSubmit={(e) => {
          handleSendOtp(e);
        }}
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
              <LoadingUi />
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
