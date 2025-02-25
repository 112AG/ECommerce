import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../../../assets/Images/SignupImage.jpg";
import {users} from '../../../Utils/Data';
import { toast } from 'react-toastify';

function SignUp({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password:'',
  })
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    users.push(formData);
    navigate('/dashboard');
    toast.success(`Welcome ${formData.fullname}`);
    setIsLoggedIn(true);
  }

  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value, 
    });

  }
  return (
    <div className="w-full flex"    >
      <div className="flex -z-20 w-[50vw] h-full ">
        <img
          src={SignupImage}
          className="h-full w-full object-cover object-center"
          alt="Login"
        />
      </div>

      <div className="flex flex-col items-center w-[50%]  ">
        <h1 className="font-bold text-[34px] py-8">Create Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            className='border-black border rounded-full px-5 w-[320px] py-1.5 mb-2'
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            className='border-black border rounded-full px-5 w-[320px] py-1.5 mb-2'
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            className='border-black border rounded-full px-5 w-[320px] py-1.5 mb-2'
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            className='border-black border rounded-full px-5 w-[320px] py-1.5 mb-2'
            onChange={handleChange}
          />
          <button className="border bg-[#171717] my-2 cursor-pointer hover:bg-[#000] transition text-white font-bold rounded-full px-3 py-1.5">
            Sign Up
          </button>
        </form>

        <div className="w-[80%] flex items-center mx-14 py-2">
          <div className={`bg-black h-px flex-1`} />
          <p className="mx-4 text-sm ">or continue with</p>
          <div className={`bg-black h-px flex-1`} />
        </div>

        <ul className="flex gap-4 ">
          <li
            className='border rounded-full text-white transition bg-[#606060] hover:bg-white hover:text-black cursor-pointer h-[28px] w-[28px] flex items-center justify-center'
            >
            <i className="ri-google-fill"></i>
          </li>
          <li
            className='border rounded-full text-white transition bg-[#606060] hover:bg-white hover:text-black cursor-pointer h-[28px] w-[28px] flex items-center justify-center'
          >
            <i className="ri-apple-fill"></i>
          </li>
          <li
            className='border rounded-full text-white transition bg-[#606060] hover:bg-white hover:text-black cursor-pointer h-[28px] w-[28px] flex items-center justify-center'
          >
            <i className="ri-facebook-fill"></i>
          </li>
        </ul>

        <p className="w-full font-normal text-center py-12">
          Already have an Account ?  <span className="text-[#fff] bg-black rounded-full py-1 px-2 text-center">
            <Link to="/signup">Log In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
