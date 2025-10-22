import { BiArrowBack } from "react-icons/bi";
import { LuFileX, LuIdCard, LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { MdClear } from "react-icons/md";

export default function FindResult() {
  const navigate = useNavigate();
  const [index, setIndex] = useState("");
  const [indexs, setIndexs] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notConnect, setNotConnect] = useState(false);

  const findResult = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:5000/api/studentmarks/get-by-index/${index}`)
      .then((e) => {
        setNotConnect(false);
        if (e.data === null) {
          setShowResult(false);
          setNoResult(true);
        } else {
          setIssuedDate(foramtDate(e.data.updated_at));
          setName(e.data.student_name);
          setMarks(e.data.marks);
          setIndexs(e.data.student_index);
          setShowResult(true);
          setNoResult(false);
        }
      })
      .catch(() => {
        setShowResult(false);
        setNoResult(false);
        setNotConnect(true);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  function foramtDate(dateStr) {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedDate;
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
      <div className="flex flex-col gap-5 w-1/3 ">
        <form
          onSubmit={findResult}
          className="bg-white w-full  rounded-lg p-5 flex flex-col gap-5"
        >
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <label className="font-bold text-gray-500 text-5xl">
              ICT<span className="text-blue-700"> Results</span>{" "}
            </label>
            <label className="text-gray-400 text-sm">
              Check your examination performance instantly
            </label>
          </div>
          <div className="p-2 flex flex-row items-center justify-start gap-2 rounded-lg ring-blue-700 ring-1">
            <LuIdCard />
            <input
              required
              placeholder="Enter Examination Index Number"
              type="text"
              className="w-full border-none focus:outline-none"
              onChange={(e) => {
                setIndex(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
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
                  Searching…
                </>
              ) : (
                <>
                  <LuSearch />
                  check result
                </>
              )}
            </button>
          </div>
        </form>
        {showResult === true ? (
          <div className="bg-blue-100 w-full flex flex-col gap-5 jutify-center items-center rounded-lg p-5">
            <label className="text-2xl font-bold"> Results</label>
            <div className="flex flex-row gap-2 justify-between w-full p-5 bg-white rounded-lg">
              <div className="flex flex-col text-sm mt-1 text-gray-500">
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Index:</span>
                  <span>{indexs}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Name:</span>
                  <span>{name}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Marks:</span>
                  <span>{marks}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Subject:</span>
                  <span>Information Communication Technologhy</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-blue-500 font-bold">Issued Date:</span>
                  <span>{issuedDate}</span>
                </div>
              </div>
              {marks >= 75 ? (
                <label className="text-6xl text-emerald-600 font-bold">A</label>
              ) : marks >= 65 ? (
                <label className="text-6xl text-blue-500 font-bold">B</label>
              ) : marks >= 50 ? (
                <label className="text-6xl text-amber-500 font-bold">C</label>
              ) : marks >= 35 ? (
                <label className="text-6xl text-violet-500 font-bold">S</label>
              ) : (
                <label className="text-6xl text-rose-600 font-bold">F</label>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        {noResult ? (
          <div className="bg-blue-100 w-full flex flex-col gap-5 jutify-center items-center rounded-lg p-5">
            <div className="flex flex-col gap-2 justify-between w-full p-5 bg-white rounded-lg items-center text-gray-400">
              <LuFileX size={50} />
              <label className="font-bold text-center text-xl">
                No results found
              </label>
              <p className="text-center text-gray-600 text-sm sm-1">
                Sorry, we couldn’t find any record for that index number. Please
                check the number and try again.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {notConnect ? (
          <div className="bg-red-100 w-full flex flex-col gap-5 jutify-center items-center rounded-lg p-5">
            <div className="flex flex-col gap-2 justify-between w-full p-5 bg-white rounded-lg items-center text-red-400">
              <MdClear size={50} />
              <label className="font-bold text-center text-xl">
                Connection error
              </label>
              <p className="text-center text-gray-600 text-sm sm-1">
                We’re having trouble reaching the server right now. Please check
                your internet connection or try again in a few moments.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
