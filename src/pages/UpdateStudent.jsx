import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { LuCalculator, LuIdCard, LuUser } from "react-icons/lu";
import { MdClear, MdUpdate } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BackButton } from "../components/Components";

export default function UpdateStudent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const result = await axios.get(
      `http://127.0.0.1:5000/api/studentmarks/get-by-id/${atob(
        searchParams.get("mark-id")
      )}`
    );
    setIndex(result.data[0].student_index);
    setName(result.data[0].student_name);
    setMarks(result.data[0].marks);
  }

  function updateMarks(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .put(
        `http://127.0.0.1:5000/api/studentmarks/update-by-id/${atob(
          searchParams.get("mark-id")
        )}`,
        {
          student_index: index,
          student_name: name,
          marks: marks,
        }
      )
      .then(() => {
        toast.success("Mark updated successfully!");
      })
      .catch((e) => {
        toast.error("Server connection issue. Please try again in a moment.");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          loadData();
        }, 500);
      });
  }

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BackButton/>
      <form
        onSubmit={updateMarks}
        className="bg-white lg:w-1/2 rounded-lg p-5 flex flex-col gap-5"
      >
        <label className="font-bold text-gray-500 text-5xl text-center">
          Update<span className="text-blue-700"> Student</span>{" "}
        </label>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuIdCard />
          <input
            required
            value={index}
            type="text"
            className="w-full border-none focus:outline-none"
            onChange={(e) => {
              setIndex(e.target.value);
            }}
          />
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuUser />
          <input
            required
            value={name}
            type="text"
            className="w-full border-none focus:outline-none"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="ring-blue-700 ring-1 p-2 flex flex-row items-center justify-start gap-2 rounded-lg">
          <LuCalculator />
          <input
            required
            value={marks}
            type="number"
            className="w-full border-none focus:outline-none"
            min="0"
            max="100"
            onChange={(e) => {
              setMarks(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-5 justify-start">
          <button
            type="submit"
            className="bg-blue-700 duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/2 lg:w-1/4 text-white font-bold"
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
                update
              </>
            )}
          </button>
          <button
          type="button"
            onClick={() => {
              navigate(-1);
            }}
            className="ring-blue-700 ring-1 text-blue-700 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-1/2 lg:w-1/4 font-bold"
          >
            <MdClear />cancel
          </button>
        </div>
      </form>
    </div>
  );
}
