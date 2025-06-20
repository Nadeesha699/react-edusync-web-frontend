import { BiTrash } from "react-icons/bi";
import { MdSearch, MdUpdate } from "react-icons/md";

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
];

export default function Users() {
  return (
    <div className="bg-gray-100 w-full h-dvh p-10 flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <label className="font-bold text-4xl">Users</label>
        <div className="bg-gray-300 flex flex-row p-3 rounded-full items-center gap-2 duration-300 ease-in cursor-pointer w-1/4">
          <MdSearch />
          <input className="w-full bg-transparent focus:outline-none focus:ring-0" />
        </div>
      </div>
      <div className="w-full h-full  overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="w-full flex flex-row justify-between border-b-2 border-gray-300">
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
          <label className="w-1/6 text-center p-2 font-bold text-orange-500 text-3xl">
            Action
          </label>
        </div>

        {userData.map((e, index) => {
          return (
            <div
              className="w-full flex flex-row justify-between border-b-2 border-gray-300"
              key={index}
            >
              <label className="w-1/6 text-center truncate p-2">{e.id}</label>
              <label className="w-1/6 text-center truncate p-2">{e.name}</label>
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
                <MdUpdate className="text-green-500" />
                <BiTrash className="text-red-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
