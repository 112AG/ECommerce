import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Pages/Header/Header'
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from './Components/Pages/Footer/Footer'
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Profile from "./Components/Pages/Profile/Profile";
import Cart from './Components/Pages/Cart/Cart';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import PrivateRoute from './Utils/PrivateRoute';
import RandomRoute from "./Utils/RandomRoute";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<RandomRoute />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
