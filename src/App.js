import React from "react";
// import "./App.css";
import Home from "./components/home";
import Login from "./user/login";
import Emailforgot from "./components/emailforgot"
import Register from "./user/register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Otp from "./components/otp";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/forgot" element={<ForgotPassword />}/>
              <Route exact path="/emailforgot" element={<Emailforgot />}/>
              <Route exact path="/dashboard" element={<Dashboard />}/>
              <Route exact path="/verification" element={<Otp />}/>

              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/register" element={<Register />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;









//Author: Naman Agarwal
//Contact: https://github.com/naman35