import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UpdateStudent from "./pages/UpdateStudent";

//tailwindcss add
// https://v3.tailwindcss.com/docs/guides/create-react-app

//tailwindcss resources
// https://tailwindcss.com/docs

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={UpdateStudent} path="/update-student"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
