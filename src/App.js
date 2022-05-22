import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MyPortfolio from "./pages/MyPortfolio.js/MyPortfolio";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
