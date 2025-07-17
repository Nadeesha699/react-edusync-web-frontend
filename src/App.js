import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddAdmin from "./pages/AddAdmin";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateUser from "./pages/UpdateUser";
import EditAdmin from "./pages/EditAdmin";

// inforamtion
// https://chatgpt.com/c/684fa405-6f54-8011-bbb0-bcc56e71bb2a

//tailwindcss add
// https://v3.tailwindcss.com/docs/guides/create-react-app

//tailwindcss resources
// https://tailwindcss.com/docs

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/"/>
          <Route Component={Login} path="/login"/>
          <Route Component={AddAdmin} path="/add-admin"/>
          <Route Component={UpdateUser} path="/update-user"/>
          <Route Component={ForgotPassword} path="/forgot-password"/>
          <Route Component={EditAdmin} path="/update-profile"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
