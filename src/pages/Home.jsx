import { MdDashboard, MdLogout } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import Logo from "../images/insightboard.png";
import Profile from "../images/profile.jpg";
import DashBoard from "../components/DashBoard";
import Setting from "../components/Setting";
import Report from "../components/Report";
import Users from "../components/Users";
import Profiles from "../components/Profiles";
import { useState } from "react";

const Home = () => {
  const [routeNumber, setRouteNumber] = useState(0);

  const setRoute = (value) => {
    setRouteNumber(value);
  };
  return (
    <div className="flex flex-row h-dvh">
      <div className="w-1/6 flex flex-col justify-start">
        <img src={Logo} alt="logo-image" className="w-full h-1/5" />
        <div
          className="flex flex-col justify-center items-center h-1/4 p-10 hover:bg-yellow-300 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(2);
          }}
        >
          <img
            src={Profile}
            alt="profile-icon"
            className="rounded-full h-full"
          />
          <label className="font-bold">Nadeesha Ruwandima</label>
        </div>
        <div
          className="hover:bg-yellow-300 p-5 w-full  flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(0);
          }}
        >
          <MdDashboard />
          <label>Dashboard</label>
        </div>
        <div
          className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(1);
          }}
        >
          <MdPeople />
          <label>Users</label>
        </div>
        <div
          className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(3);
          }}
        >
          <MdBarChart />
          <label>Report</label>
        </div>
        <div
          className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer"
          onClick={() => {
            setRoute(4);
          }}
        >
          <MdSettings />
          <label>Settings</label>
        </div>
        <div className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4 duration-300 ease-in cursor-pointer">
          <MdLogout />
          <label>Logout</label>
        </div>
      </div>
      <div className="w-5/6 bg-gray-200 ">
        {routeNumber === 0 ? (
          <DashBoard />
        ) : routeNumber === 1 ? (
          <Users />
        ) : routeNumber === 2 ? (
          <Profiles />
        ) : routeNumber === 3 ? (
          <Report />
        ) : routeNumber === 4 ? (
          <Setting />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
