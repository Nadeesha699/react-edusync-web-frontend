import { LuIdCard, LuSearch } from "react-icons/lu";
import axios from "axios";
import { useState } from "react";
import {
  BackButton,
  LoadingUi,
  ResultCard,
  ResultNotFound,
  ServerNotConnect,
} from "../components/UiComponents";
import { formatDate } from "../utils/utils";

export default function FindResult() {
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
          setIssuedDate(formatDate(e.data.updated_at));
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

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BackButton />
      <div className="flex flex-col gap-5 lg:w-1/3 sm:w-1/2">
        <form
          onSubmit={findResult}
          className="bg-white w-full rounded-lg p-5 flex flex-col gap-5"
        >
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <label className="font-bold text-gray-500 text-5xl text-center">
              ICT<span className="text-blue-700"> Results</span>{" "}
            </label>
            <label className="text-gray-400 text-sm text-center">
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
                  <LoadingUi />
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
          <ResultCard
            marks={marks}
            indexs={indexs}
            name={name}
            issuedDate={issuedDate}
          />
        ) : (
          ""
        )}
        {noResult ? <ResultNotFound /> : ""}
        {notConnect ? <ServerNotConnect /> : ""}
      </div>
    </div>
  );
}
