import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { MdSearch, MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../images/login-background.png";

const userData = [
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 0,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 0,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com ",
    address: "Matara",
    active: 0,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 0,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 4,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "rawi@gmail.com",
    address: "Matara",
    active: 1,
  },
  {
    id: 1,
    name: "Nadeesha",
    email: "nadeesharwandima@gmail.com",
    address: "Galle",
    active: 1,
  },
  {
    id: 1,
    name: "Amal",
    email: "nadeesharwandima@gmail.com",
    address: "Matara",
    active: 1,
  },
];

export default function Users() {
  const navigate = useNavigate();
  const [searchTxt, setSearchTxt] = useState("");
  return (
    // <div className="bg-gray-100 w-full h-dvh p-10 flex flex-col gap-10">
    <div
      className="w-full h-dvh  bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 backdrop-blur-md p-10 flex flex-col gap-10 absolute inset-0">
        <div className="flex flex-row justify-between items-center">
          <label className="font-bold text-4xl">Users</label>
          <div className="bg-white flex flex-row p-3 rounded-full items-center gap-2 duration-300 ease-in cursor-pointer w-1/4">
            <MdSearch />
            <input
              className="w-full bg-transparent focus:outline-none focus:ring-0"
              value={searchTxt}
              placeholder="Search by ID, name, email, or address..."
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full h-full overflow-auto scrollbar-hide">
          <div className="w-full flex flex-row justify-between border-b-2 border-gray-300 ">
            <label className="w-1/6 text-center p-2 font-bold text-orange-500 text-3xl">
              ID
            </label>
            <label className="w-1/6 text-center p-2 font-bold text-orange-500 text-3xl">
              Name
            </label>
            <label className="w-1/6 text-center p-2 font-bold text-orange-500 text-3xl">
              Email
            </label>
            <label className="w-1/6 text-center p-2 font-bold text-orange-500 text-3xl">
              Address
            </label>
            <label className="w-1/6 text-center p-2 font-bold text-orange-500 text-3xl">
              Active
            </label>
            <label className="w-1/6 text-center p-2 font-bold text-gray-500 text-3xl">
              Action
            </label>
          </div>

          {userData
            .filter(
              (userData) =>
                userData.name.toLowerCase().includes(searchTxt.toLowerCase()) ||
                userData.id.toString().includes(searchTxt) ||
                userData.address
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase()) ||
                userData.email.toLowerCase().includes(searchTxt.toLowerCase())
            )
            .map((e, index) => {
              return (
                <div
                  className="w-full flex flex-row justify-between border-b-2 border-gray-300"
                  key={index}
                >
                  <label className="w-1/6 text-center truncate p-2">
                    {e.id}
                  </label>
                  <label className="w-1/6 text-center truncate p-2">
                    {e.name}
                  </label>
                  <label className="w-1/6 text-center truncate p-2">
                    {e.email}
                  </label>
                  <label className="w-1/6 text-center truncate p-2">
                    {e.address}
                  </label>
                  <div className="w-1/6 text-center p-2">
                    <label
                      className={`${
                        e.active === 1
                          ? "bg-green-300 text-green-900"
                          : "bg-red-300 text-red-900"
                      } font-bold rounded-lg px-5`}
                    >
                      {e.active === 1 ? "online" : "offline"}
                    </label>
                  </div>
                  <div className="w-1/6 p-2 flex flex-row justify-center gap-5">
                    <MdUpdate
                      className="text-green-500 hover:text-black duration-300 ease-in-out"
                      onClick={() => {
                        navigate("/update-user");
                      }}
                    />
                    <BiTrash className="text-red-500 hover:text-black duration-300 ease-in-out" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
