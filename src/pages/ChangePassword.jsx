import { BiArrowBack } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { LuEye, LuEyeOff, LuLock } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [eyehide1, setEyeHide1] = useState(false);
  const [eyehide2, setEyeHide2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const result = await axios.get(
      `http://127.0.0.1:5000/api/teachers/get-by-id/${atob(
        searchParams.get("id")
      )}`
    );
    setEmail(result.data[0].email);
    setName(result.data[0].student_name);
    setPhoneNumber(result.data[0].phone_number);
  };

  const changePassword = async (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .put(
        `http://127.0.0.1:5000/api/teachers/update-by-id/${atob(
          searchParams.get("id")
        )}`,
        {
          name: name,
          phone_number: phoneNumber,
          email: email,
          password: confirmPassword,
        }
      )
      .then(() => {
        navigate("/login");
        toast.success("Success! Your password has been updated ✅");
      })
      .catch(() => {
        toast.error("Server connection issue. Please try again in a moment.");
      })
      .finally(() => {
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
          navigate(-1);
        }}
      />
      <form
        onSubmit={changePassword}
        className="bg-white w-1/3 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex  flex-col gap-2 justify-center items-center">
          <label className="font-bold text-gray-500 text-5xl">
            Change<span className="text-blue-700"> Password</span>{" "}
          </label>
          <p className="text-gray-400 text-sm mt-1">
            Enter your new password below
          </p>
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuLock />
          <input
            required
            value={newPassword}
            placeholder="New Password"
            type={eyehide1 ? "text" : "password"}
            className="w-full border-none focus:outline-none"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          {eyehide1 ? (
            <LuEye
              onClick={() => {
                setEyeHide1(false);
              }}
            />
          ) : (
            <LuEyeOff
              onClick={() => {
                setEyeHide1(true);
              }}
            />
          )}
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuLock />
          <input
            required
            value={confirmPassword}
            placeholder="Confirm Password"
            type={eyehide2 ? "text" : "password"}
            className="w-full border-none focus:outline-none"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {eyehide2 ? (
            <LuEye
              onClick={() => {
                setEyeHide2(false);
              }}
            />
          ) : (
            <LuEyeOff
              onClick={() => {
                setEyeHide2(true);
              }}
            />
          )}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <button
            className="bg-blue-700 duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white font-bold"
            type="submit"
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
                updating…
              </>
            ) : (
              <>
                <MdUpdate />
                update password
              </>
            )}
          </button>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-blue-300 p-1 rounded-full"></div>
            <div className="bg-blue-300 p-1 rounded-full"></div>
            <div className="bg-blue-700 p-1 rounded-full"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
