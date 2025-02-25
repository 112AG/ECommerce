import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "../../../Redux/ThemeSlice";
import { toast } from 'react-toastify';


function Header({isLoggedIn, setIsLoggedIn}) {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.theme.toggle);

  function handleLogOut () {
    setIsLoggedIn(false);
    toast.info('You are LogOut now!');
  }

  // ${toggle? 'dark-mode': 'light-mode'}
  // style={{ color: toggle ? 'black' : 'white' }}

  return (
    <div className={`w-full flex justify-between items-center py-1 px-6 border-b  ${toggle? 'shadow-[inset_5px_10px_20px_5px_green]' : 'shadow-lg'} shadow-[#00000032]`}>
      <div>
        <h1 className="font-extrabold text-[36px] text-[#4A4A4A] logo">
          Leverk
        </h1>
      </div>
      <nav>
        <ul className="flex gap-4 items-center nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
          {isLoggedIn? '' : <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              LogIn
            </NavLink>
          </li>}
          {isLoggedIn ? '' : <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              SignUp
            </NavLink>
          </li>}
          {isLoggedIn ?<li onClick={handleLogOut}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              LogOut
            </NavLink>
          </li> : ''}
          {isLoggedIn ?<li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Dashboard
            </NavLink>
          </li> : ''}
        </ul>
      </nav>
      <div
        onClick={() => dispatch(handleToggle())}
        className="w-[74px]  border border-black bg-[#777777] rounded-full flex items-center gap-1 p-1 relative"
      >
        <div
          className={`absolute w-[38px] h-[28px] bg-black rounded-full transition-transform duration-300 
            ${toggle ? "translate-x-[0px]" : "translate-x-[28px]"}
          `}>  
        </div>

        <div
          className={`rounded-full w-full flex justify-around  py-1 z-50 text-white`}
        >
          <FaMoon />
          <IoSunnySharp />
        </div>
      </div>
    </div>
  );
}

export default Header;
