import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./compoentes/Home/Home";
import Navbar from "./compoentes/Navber/Navbar";
import UploadProducts from "./compoentes/UploadProducts/UploadProducts";
import Order from "./compoentes/Order/Order";
import SignIn from "./compoentes/SignIn/SignIn";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/uploadPd"
          element={
            <RequireAuth>
              <UploadProducts></UploadProducts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
