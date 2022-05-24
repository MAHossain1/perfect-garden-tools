import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import RequireAuth from "./pages/Login/RequireAuth";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import MyPortfolio from "./pages/MyPortfolio.js/MyPortfolio";
import Purchase from "./pages/Purchase/Purchase";
import Navbar from "./pages/Shared/Navbar";

export const ToolContext = createContext();

function App() {
  const [tools, setTools] = useState([]);

  return (
    <div className="max-w-7xl mx-auto px-12">
      <ToolContext.Provider value={[tools, setTools]}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/purchase/:id"
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
      </ToolContext.Provider>
    </div>
  );
}

export default App;
