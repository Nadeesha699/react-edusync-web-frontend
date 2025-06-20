import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
