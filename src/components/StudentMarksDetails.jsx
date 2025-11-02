import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiExport, BiTrash } from "react-icons/bi";
import { LuFilter, LuMenu, LuSearch } from "react-icons/lu";
import { MdClear, MdUpdate, MdPeople, MdLogout } from "react-icons/md";
import StudentMarksJson from "../json/studentmarks.json";
import {
  DataNotFound,
  LoadingScreen,
  LoadingUi,
  ServerNotConnect,
  StudentMobileCard,
  StudentWebCard,
} from "./UiComponents";
import Swal from "sweetalert2";
import logo from "../images/logo.png";
import { FaPlus } from "react-icons/fa";
import { deleteById, getAll } from "../Service/StudentMarksService";
import { BatchData } from "../data/LocalData";
import { CgProfile } from "react-icons/cg";
import Modal from "react-modal";
import { exportAsCsv, exportAsPdf } from "../utils/utils";
import { getById } from "../Service/TeacherService";

Modal.setAppElement("#root");

const StudentMarksDetails = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [filterBatch, setFilterBatch] = useState("");
  const [marksData, setMarksData] = useState([StudentMarksJson]);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [notConnect, setNotConnect] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loading01, setLoading01] = useState(false);
  const [loading02, setLoading02] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUserName] = useState("loading...");

  useEffect(() => {
    const checkUser = () => {
      if (searchParams.get("user_id") === null) {
        navigate("*");
      }
    };

    const handelSetUserName = async () => {
      try {
        const id = atob(searchParams.get("user_id"));
        const result = await getById({ id });
        setUserName(result.name);
      } catch (error) {
        navigate("N/A");
      }
    };

    checkUser();
    handleGetAll();
    handelSetUserName();
  }, [searchParams, navigate]);

  const handleGetAll = async () => {
    try {
      const data = await getAll();
      setMarksData(data);
      setLoadingScreen(false);
      setNotConnect(false);
    } catch (error) {
      setLoadingScreen(false);
      setNotConnect(true);
    }
  };

  const handleExportAsCsv = async () => {
    setLoading01(true);

    await exportAsCsv({ marksData });

    setInterval(() => {
      setLoading01(false);
      setOpen(false);
    }, 500);
  };

  const handleExportAsPdf = async () => {
    setLoading02(true);

    await exportAsPdf({ marksData });

    setInterval(() => {
      setLoading02(false);
      setOpen(false);
    }, 500);
  };

  const openExportModel = () => {
    setOpen(true);
  };

  return (
    <div className="lg:w-5/6 w-full h-dvh bg-transparent flex flex-col gap-2 lg:pr-5 lg:pt-5 lg:pb-5 p-5">
      <div className="bg-white w-full h-1/9 p-2 rounded-lg flex justify-between items-center lg:justify-end lg:items-end">
        <LuMenu
          size={30}
          className="text-blue-700 block lg:hidden"
          onClick={() => {
            setShowMenu(true);
          }}
        />
        <div className="flex flex-row gap-2 p-2 bg-gray-300 rounded-full w-fit justify-center items-center">
          <CgProfile /> login as
          <span className="text-blue-600 font-bold">{username}</span>
        </div>
      </div>
      <div className="bg-white w-full rounded-lg p-5 flex flex-1 flex-col gap-5 overflow-auto">
        <div className="flex flex-row justify-between items-start lg:items-center">
          <label className="font-bold text-4xl lg:text-5xl text-gray-500">
            Student<span className="text-blue-700"> Marks</span>
          </label>
          <div className="flex flex-col lg:flex-row w-1/2 gap-5">
            <div className="order-3 lg:order-1  ring-blue-700 ring-1 flex flex-row rounded-lg items-center duration-300 ease-in cursor-pointer w-full lg:w-1/2 p-2 gap-2">
              <LuFilter />
              <select
                value={filterBatch}
                onChange={(e) => {
                  setFilterBatch(e.target.value);
                }}
                className="w-full bg-transparent focus:outline-none focus:ring-0"
              >
                {BatchData.map((e, index) => {
                  return (
                    <option key={index} value={e.value}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="order-2 lg:order-2 ring-blue-700 ring-1 flex flex-row rounded-lg items-center duration-300 ease-in cursor-pointer w-full lg:w-1/2 p-2 gap-2">
              <LuSearch />
              <input
                className="w-full bg-transparent focus:outline-none focus:ring-0"
                value={searchTxt}
                placeholder="Search by index, name and marks..."
                onChange={(e) => {
                  setSearchTxt(e.target.value);
                }}
              />
            </div>
            <div
              className="order-1 lg:order-3 bg-gradient-to-r from-blue-700 to-blue-500 font-bold duration-300 ease-in hover:bg-blue-800 flex flex-row rounded-lg p-2 gap-2 items-center justify-center w-full lg:w-1/2 text-white"
              onClick={() => {
                openExportModel();
              }}
            >
              <BiExport />
              export
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-auto scrollbar-hide md:hidden block">
          {loadingScreen ? (
            <LoadingScreen />
          ) : notConnect ? (
            <ServerNotConnect />
          ) : marksData.length === 0 ? (
            <DataNotFound />
          ) : (
            <div className="flex flex-col gap-5 w-full">
              {marksData
                .filter((m) => {
                  const searchValue =
                    m.student_name
                      .toLowerCase()
                      .includes(searchTxt.toLowerCase()) ||
                    m.student_index.toString().includes(searchTxt) ||
                    m.marks.toString().includes(searchTxt);
                  const filterValue =
                    filterBatch === "" || m.batch === filterBatch;
                  return filterValue && searchValue;
                })
                .map((e, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col p-5 gap-2 justify-start border-2 rounded-lg border-blue-700 text-slate-700 text-sm  hover:bg-slate-50 transition"
                  >
                    <StudentMobileCard
                      student_index={e.student_index}
                      student_name={e.student_name}
                      marks={e.marks}
                      batch={e.batch}
                    />
                    <div className="flex flex-row justify-center gap-5 w-full">
                      <div className="p-2 flex flex-row justify-center gap-2 rounded-lg border border-1 border-green-500 text-green-500 font-bold items-center w-1/2">
                        <MdUpdate
                          onClick={() => {
                            const encodeId = btoa(e.id);
                            navigate(
                              `/update-student?mark-id=${encodeId}&user-id=${searchParams.get(
                                "user_id"
                              )}`
                            );
                          }}
                        />
                        update
                      </div>
                      <div className="p-2 flex flex-row justify-center gap-2 rounded-lg border border-1 border-red-500 text-red-500 font-bold items-center w-1/2">
                        <BiTrash
                          onClick={() => {
                            Swal.fire({
                              title: "EduSync ICT",
                              text: "Are you want to delete the student mark ?",
                              icon: "error",
                              showCancelButton: true,
                              cancelButtonText: "cancel",
                              confirmButtonText: "confirm",
                              confirmButtonColor: "#ff0062ff",
                              cancelButtonColor: "#327affff",
                            }).then(async (e1) => {
                              if (e1.isConfirmed) {
                                await deleteById(e.id);
                                await handleGetAll();
                              }
                            });
                          }}
                        />
                        delete
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="w-full h-full overflow-auto scrollbar-hide hidden md:block">
          {loadingScreen ? (
            <LoadingScreen />
          ) : notConnect ? (
            <ServerNotConnect />
          ) : marksData.length === 0 ? (
            <DataNotFound />
          ) : (
            <>
              <div className="w-full flex flex-row justify-between border-b-2 border-slate-700 text-blue-700 text-sm">
                <label className="md:w-1/6 text-center truncate  p-2 font-bold">
                  Index Number
                </label>
                <label className="md:w-1/6 text-center truncate p-2 font-bold">
                  Student Name
                </label>
                <label className="md:w-1/6 text-center  truncate p-2 font-bold">
                  Student Marks
                </label>
                <label className="md:w-1/6 text-center truncate p-2 font-bold">
                  Student Grade
                </label>
                <label className="md:w-1/6 text-center truncate p-2 font-bold">
                  Student Batch
                </label>
                <label className="md:w-1/6 text-center  truncate p-2 font-bold text-gray-500">
                  Action
                </label>
              </div>
              {marksData
                .filter((m) => {
                  const searchValue =
                    m.student_name
                      .toLowerCase()
                      .includes(searchTxt.toLowerCase()) ||
                    m.student_index.toString().includes(searchTxt) ||
                    m.marks.toString().includes(searchTxt);
                  const filterValue =
                    filterBatch === "" || m.batch === filterBatch;
                  return filterValue && searchValue;
                })
                .map((e, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row justify-between border-b-2 border-slate-700 text-slate-700 text-sm  hover:bg-slate-50 transition"
                  >
                    <StudentWebCard
                      student_index={e.student_index}
                      student_name={e.student_name}
                      marks={e.marks}
                      batch={e.batch}
                    />
                    <div className="md:w-1/6 p-2 flex flex-row justify-center gap-5">
                      <MdUpdate
                        className="text-green-500 hover:text-black duration-300 ease-in-out cursor-pointer"
                        onClick={() => {
                          const encodeId = btoa(e.id);
                          navigate(
                            `/update-student?mark-id=${encodeId}&user-id=${searchParams.get(
                              "user_id"
                            )}`
                          );
                        }}
                      />
                      <BiTrash
                        className="text-red-500 hover:text-black duration-300 ease-in-out cursor-pointer"
                        onClick={() => {
                          Swal.fire({
                            title: "EduSync ICT",
                            text: "Are you want to delete the student mark ?",
                            icon: "error",
                            showCancelButton: true,
                            cancelButtonText: "cancel",
                            confirmButtonText: "confirm",
                            confirmButtonColor: "#ff0062ff",
                            cancelButtonColor: "#327affff",
                          }).then(async (e1) => {
                            if (e1.isConfirmed) {
                              const id = e.id;
                              await deleteById({ id });
                              await handleGetAll();
                            }
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
      <div
        className={`bg-white left-0 right-0 bottom-0 top-0 fixed flex flex-col gap-5 justify-start items-center p-5 transition-transform duration-700 ease-in-out ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img src={logo} alt="icon" className="w-full md:w-1/2" />
        <div
          className="duration-300 ease-in cursor-pointer flex flex-row gap-2 justify-left items-center w-full font-bold"
          onClick={() => {
            setShowMenu(false);
            navigate(`/home?user_id=${searchParams.get("user_id")}`);
          }}
        >
          <FaPlus />
          Add Marks
        </div>
        <div
          className="duration-300 ease-in cursor-pointer flex flex-row gap-2 justify-left items-center w-full font-bold"
          onClick={() => {
            setShowMenu(false);
            navigate(`/student-marks?user_id=${searchParams.get("user_id")}`);
          }}
        >
          <MdPeople />
          Students Marks
        </div>
        <div
          className=" p-2 w-full flex flex-row justify-center items-center gap-2 duration-300 ease-in cursor-pointer bg-blue-700 text-white rounded-full hover:bg-blue-800 font-bold"
          onClick={() => {
            Swal.fire({
              title: "EduSync ICT",
              text: "Are you sure you want to logout ? ",
              icon: "warning",
              showCancelButton: true,
              cancelButtonText: "Stay",
              confirmButtonText: "Logout",
              confirmButtonColor: "#1D4ED8",
              cancelButtonColor: "#7590dcff",
            }).then((e) => {
              if (e.isConfirmed) {
                navigate("/login");
              }
            });
          }}
        >
          <MdLogout />
          logout
        </div>
        <div
          className=" p-2 w-full flex flex-row justify-center items-center gap-2 duration-300 ease-in cursor-pointer ring-blue-700 ring-1  text-blue-700 rounded-full font-bold"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <MdClear />
          cancel
        </div>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        contentLabel="Example Popup"
        className="bg-white p-5 rounded-lg border-none focus:outline-none flex flex-col gap-5 justify-center items-center"
        overlayClassName="fixed inset-0 bg-black/80 flex justify-center items-center"
      >
        <label className="font-bold text-blue-600 text-xl">
          Choose Export Format
        </label>
        <div className="flex flex-row gap-5">
          <div
            className="flex flex-row gap-2 justify-center items-center bg-blue-600 rounded-full p-2 text-white font-bold"
            onClick={() => {
              handleExportAsCsv();
            }}
          >
            {loading01 ? (
              <>
                <LoadingUi />
                exporting
              </>
            ) : (
              <>
                <BiExport />
                expoert as csv
              </>
            )}
          </div>
          <div
            className="flex flex-row gap-2 justify-center items-center bg-red-500 text-white rounded-full p-2 text-white font-bold"
            onClick={() => {
              handleExportAsPdf();
            }}
          >
            {loading02 ? (
              <>
                <LoadingUi />
                exporting
              </>
            ) : (
              <>
                <BiExport />
                expoert as pdf
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StudentMarksDetails;
