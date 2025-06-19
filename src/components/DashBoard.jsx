import { MdAdd, MdAnimation } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Pie,
  PieChart,
  Bar,
  BarChart,
  Cell,
} from "recharts";

// Fake data for last 7 days
const userData = [
  { date: "Jun 10", activeUsers: 120 },
  { date: "Jun 11", activeUsers: 135 },
  { date: "Jun 12", activeUsers: 98 },
  { date: "Jun 13", activeUsers: 143 },
  { date: "Jun 14", activeUsers: 170 },
  { date: "Jun 15", activeUsers: 155 },
  { date: "Jun 16", activeUsers: 190 },
];

const data = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 100 },
];

const geoData = [
  { country: "India", users: 520 },
  { country: "USA", users: 430 },
  { country: "Germany", users: 210 },
  { country: "Brazil", users: 165 },
  { country: "Canada", users: 125 },
];

const COLORS = ["#FF8042", "#ffcc00", "#ff005d"];

export default function DashBoard() {
  return (
    <div className="bg-gray-100 w-full h-dvh p-10 flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <label className="font-bold text-4xl">Dashboard</label>
        <div className="bg-orange-400 flex flex-row p-2 rounded-full items-center gap-2 hover:bg-orange-200 duration-300 ease-in cursor-pointer">
          <MdAdd />
          <label>Add Admin</label>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-yellow-200 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
          <div className="flex flex-col">
            <label className="font-bold text-3xl">120k</label>
            <label>Users</label>
          </div>
          <MdAnimation />
        </div>
        <div className="bg-yellow-400 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
          <div className="flex flex-col ">
            <label className="font-bold text-3xl">20k</label>
            <label>Employees</label>
          </div>
          <MdAnimation />
        </div>
        <div className="bg-yellow-300 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
          <div className="flex flex-col ">
            <label className="font-bold text-3xl">50k</label>
            <label>Students</label>
          </div>
          <MdAnimation />
        </div>
        <div className="bg-yellow-500 flex flex-row items-center p-5 w-1/6 justify-between rounded-lg">
          <div className="flex flex-col ">
            <label className="font-bold text-3xl">100k</label>
            <label>Admins</label>
          </div>
          <MdAnimation />
        </div>
      </div>
      <div className=" w-full h-1/3 flex flex-row justify-between">
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="orange"
              strokeWidth={4}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className=" w-full h-1/3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={geoData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="users">
        {geoData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Bar>
    </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
