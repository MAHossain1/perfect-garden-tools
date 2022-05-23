import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import RequireAuth from "./pages/Login/RequireAuth";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import MyPortfolio from "./pages/MyPortfolio.js/MyPortfolio";
import Purchase from "./pages/Purchase/Purchase";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
