import { MdAdd, MdCategory } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BiPackage} from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import Profile from "../images/profile.jpg"

export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-dvh flex flex-col p-2 gap-2"
    >
      <div  className="flex flex-row justify-end items-center w-full bg-white rounded-full p-2">
        <div className="flex flex-row bg-gray-200 p-2 rounded-full gap-2">
          <img src={Profile} alt="profole" className="w-12 h-12 rounded-full"/>
          <div className="flex flex-col">
            <label className="font-bold text-xs">Nadeesha Ruwandima</label>
            <label className="text-gray-500 text-xs">nadeesharuwandima@gmail.com</label>
          </div>
        </div>
      </div>
      <div className="flex-col flex bg-white rounded-3xl p-2 w-full h-full gap-10">
        <div className="flex flex-row justify-between">
         <label className="font-bold text-4xl">Dashboard</label>
         <div
            className="flex flex-row items-center justify-center gap-2 bg-gray-200 rounded-3xl p-2"
            onClick={() => {
              navigate("/add-admin");
            }}
          >
            <MdAdd />
            <label className="font-bold">Add Admin</label>
          </div>
        </div>
        <div className="flex flex-row w-full h-1/4 gap-2">
          <div className="flex flex-col w-1/3 p-2 bg-yellow-200 justify-between rounded-3xl">
            <div className="flex flex-row justify-between ">
              <label className="font-bold text-3xl">Products</label>
              <BiPackage className="text-3xl"/>
            </div>
            <label className="font-bold text-6xl text-white">200</label>
          </div>
          <div className="flex flex-col w-1/3 p-2 bg-gray-800 justify-between rounded-3xl">
            <div className="flex flex-row justify-between ">
              <label className="font-bold text-3xl text-white">Category</label>
              <MdCategory className="text-3xl text-white"/>
            </div>
            <label className="font-bold text-6xl text-white">20</label>
          </div>
          <div className="flex flex-col w-1/3 p-2 bg-gray-800 justify-between rounded-3xl">
            <div className="flex flex-row justify-between ">
              <label className="font-bold text-3xl text-white">Suppliers</label>
              <BsTruck className="text-3xl text-white"/>
            </div>
            <label className="font-bold text-6xl text-white">10</label>
          </div>
        </div>
      </div>
        {/* <div className="flex flex-row justify-between items-center">
          <label className="font-bold text-4xl">Dashboard</label>
          <div
            className=""
            onClick={() => {
              navigate("/add-admin");
            }}
          >
            <MdAdd />
            <label>Add Admin</label>
          </div>
          <img src={Profile} alt="profile" className="w-24 h-24"/>
        </div>
        <div className="flex flex-row justify-between">
          <div className="bg-yellow-200 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
            <div className="flex flex-col">
              <label className="font-bold text-3xl">4000</label>
              <label>Products</label>
            </div>
            <BiPackage/>
          </div>
          <div className="bg-yellow-400 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
            <div className="flex flex-col ">
              <label className="font-bold text-3xl">4</label>
              <label>Categories</label>
            </div>
            <MdCategory />
          </div>
          <div className="bg-yellow-500 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
            <div className="flex flex-col ">
              <label className="font-bold text-3xl">40</label>
              <label>Suppliers</label>
            </div>
            <BsTruck />
          </div>
        </div> */}
      </div>
  );
}
