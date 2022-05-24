import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProceedPurchase from "./pages/Home/ProceedPurchase";
import RequireAuth from "./pages/Login/RequireAuth";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import MyPortfolio from "./pages/MyPortfolio.js/MyPortfolio";
import Purchase from "./pages/Purchase/Purchase";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool/:toolId" element={<ProceedPurchase />} />
        <Route
          path="/purchase/:toolId"
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
