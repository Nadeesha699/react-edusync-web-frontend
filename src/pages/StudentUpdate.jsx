import { useEffect, useState } from "react";
import { LuCalculator, LuIdCard, LuUser } from "react-icons/lu";
import { MdClear, MdUpdate } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BackButton, LoadingUi } from "../components/UiComponents";
import { getById, updateById } from "../Service/StudentMarksService";

export default function StudentUpdate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [index, setIndex] = useState("");
  const [marks, setMarks] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetById()
  }, []);

  async function handleGetById() {
    const id = atob(searchParams.get("mark-id"))
    const result = await getById({id})
    setIndex(result.student_index);
    setName(result.student_name);
    setMarks(result.marks);
  }

  function updateMarks(e) {
    setLoading(true);
    const id = atob(searchParams.get("mark-id"))
    e.preventDefault();

    try {
      updateById({id,index,name,marks})
    } catch (error) {
      toast.error("Server connection issue. Please try again in a moment.");
    }finally{
      setTimeout(() => {
          setLoading(false);
          handleGetById()
        }, 500);
    }

  }

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-zinc-300">
      <BackButton />
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
                <LoadingUi />
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
            <MdClear />
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
