import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
