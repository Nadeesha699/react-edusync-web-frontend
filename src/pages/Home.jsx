import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md"; 
import { MdSettings } from "react-icons/md"; 
import { MdBarChart } from "react-icons/md";
import Logo from '../images/insightboard.png'


const Home = () => {
  return (
    <div className="flex flex-row h-dvh">
      <div className="w-1/6 flex flex-col justify-start">
      
        <img src={Logo} alt="logo-image" className="w-full h-1/4"/>
        
        <div className="hover:bg-yellow-300 p-5 w-full  flex flex-row justify-start items-center gap-4">
            <MdDashboard/>
          <label>Dashboard</label>
        </div>
        <div className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4">
            <MdPeople/>
          <label>Users</label>
        </div>
        <div className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4">
            <MdBarChart/>
          <label>Report</label>
        </div>
        <div className="hover:bg-yellow-300 p-5 w-full flex flex-row justify-start items-center gap-4">
            <MdSettings/>
          <label>Settings</label>
        </div>
      </div>
      <div className="w-5/6 bg-gray-200 "></div>
    </div>
  );
};

export default Home;
