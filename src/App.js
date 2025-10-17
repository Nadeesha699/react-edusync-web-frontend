import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UpdateStudent from "./pages/UpdateStudent";
import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";
import SendOtp from "./pages/SendOtp";
import ChangePassword from "./pages/ChangePassword";
import FindResult from "./pages/FindResult";
import Intro from "./pages/Intro";

//tailwindcss add
// https://v3.tailwindcss.com/docs/guides/create-react-app

//tailwindcss resources
// https://tailwindcss.com/docs

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Intro} path="/" />
          <Route Component={Home} path="/home"/>
          <Route Component={UpdateStudent} path="/update-student"/>
          <Route Component={Login} path="/login"/>
          <Route Component={VerifyOtp} path="/verify-otp"/>
          <Route Component={SendOtp} path="/send-otp"/>
          <Route Component={ChangePassword} path="/change-password"/>
          <Route Component={FindResult} path="/find-result"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
