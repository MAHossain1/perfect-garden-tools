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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyPurchaseItem from "./pages/Dashboard/MyPurchaseItem";
import AddReview from "./pages/Dashboard/AddReview";
import MyProfile from "./pages/Dashboard/MyProfile";
import Footer from "./pages/Shared/Footer";
import NotFound from "./pages/Shared/NotFound";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tool/:toolId" element={<ProceedPurchase />} />
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyPurchaseItem></MyPurchaseItem>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
