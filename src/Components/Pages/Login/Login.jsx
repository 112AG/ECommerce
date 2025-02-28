import React, { useState } from "react";
import LoginImage from "../../../assets/Images/LoginImage.png";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {users} from '../../../Utils/Data'
import { toast } from 'react-toastify';


function Login({setIsLoggedIn}) {
  const [emai, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggle = useSelector((state) => state.theme.toggle);
  let navigate = useNavigate();
  

  function handleSubmit(e) {
    e.preventDefault();
    if(emai && password){
      users.map((data) => {
        if(emai === data.email && password === data.password){
          setIsLoggedIn(true);
          navigate('/dashboard');
          toast.success(`Welcome ${data.fullname}`);
        }else{
          toast.error('wrong email or password, try again!');
        }
      })
    }else{
      toast.warn('Fill all inputs');
    }
  }

  return (
    <div
      className='w-full flex'
    >
      <div className="flex flex-col items-center w-[50%]  ">
        <h1 className="font-bold text-[34px] py-8">Welcome Back !</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={emai}
            onChange={(e) => setEmail(e.target.value)}
            className='border-black border rounded-full px-5 w-[320px] py-1.5 mb-6'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-black border rounded-full px-5 w-[320px] py-1.5 mb-6'
          />
          <p className="text-right text-[12px] cursor-pointer">
            Forget Password ?
          </p>
          <button className="border bg-[#171717] my-4 cursor-pointer hover:bg-[#000] transition text-white font-bold rounded-full px-3 py-1.5">
            LogIn
          </button>
        </form>

        <div className="w-[80%] flex items-center mx-14 py-2">
          <div className='bg-black h-px flex-1' />
          <p className="mx-4 text-sm ">or continue with</p>
          <div className='bg-black h-px flex-1' />
        </div>

        <ul className="flex gap-4 ">
          <li className={`border rounded-full text-white transition bg-[#606060] ${toggle?'hover:bg-white hover:text-black':'hover:bg-black hover:text-white'} cursor-pointer h-[28px] w-[28px] flex items-center justify-center`}>
            <i className="ri-google-fill"></i>
          </li>
          <li className={`border rounded-full text-white transition bg-[#606060] ${toggle?'hover:bg-white hover:text-black':'hover:bg-black hover:text-white'} cursor-pointer h-[28px] w-[28px] flex items-center justify-center`}>
            <i className="ri-apple-fill"></i>
          </li>
          <li className={`border rounded-full text-white transition bg-[#606060] ${toggle?'hover:bg-white hover:text-black':'hover:bg-black hover:text-white'} cursor-pointer h-[28px] w-[28px] flex items-center justify-center`}>
            <i className="ri-facebook-fill"></i>
          </li>
        </ul>

        <p className="w-full font-normal text-center py-12">
          Not a member?
          <span className="text-[#a1a1a1]">
            <Link to="/signup"> Register Now</Link>
          </span>
        </p>
      </div>
      <div className="flex -z-20 w-[50vw]">
        <img cle={LoginImage} alt="Login" />
      </div>
    </div>
  );
}

export default Login;
