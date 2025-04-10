import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
