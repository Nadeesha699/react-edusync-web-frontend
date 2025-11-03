import { MdUpdate } from "react-icons/md";
import { LuEye, LuEyeOff, LuLock } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BackButton, LoadingUi } from "../components/UiComponents";
import { getById, updateById } from "../Service/TeacherService";

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

    const loadData = async () => {
      try {
        const id = atob(searchParams.get("id"));
        const result = await getById({ id });
        setEmail(result.email);
        setName(result.name);
        setPhoneNumber(result.phone_number);
      } catch (error) {
        navigate("/login")
      }
    };
    loadData();
  }, [searchParams, navigate]);

  const changePassword = async (e) => {
    setLoading(true);
    e.preventDefault();
    const id = atob(searchParams.get("id"));
    try {
      await updateById({ id, name, phoneNumber, email, confirmPassword });
      navigate("/login");
      toast.success("Success! Your password has been updated ✅");
    } catch (error) {
      toast.error("Server connection issue. Please try again in a moment.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-gradient-to-tr from-gray-200 via-blue-200 to-cyan-200">
      <BackButton />
      <form
        onSubmit={(e) => {
          changePassword(e);
        }}
        className="bg-white lg:w-1/3 rounded-lg p-5 flex flex-col gap-5"
      >
        <div className="w-full flex  flex-col gap-2 justify-center items-center text-center">
          <label className="font-bold text-gray-500 text-4xl lg:text-5xl">
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
            className="bg-gradient-to-r from-blue-700 to-blue-500 duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full text-white font-bold"
            type="submit"
          >
            {loading ? (
              <>
                <LoadingUi />
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
