import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MyProfile from "./pages/MyProfile/MyProfile";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
