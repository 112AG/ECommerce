import React from 'react'
import { useSelector } from 'react-redux';

function Footer() {
  const toggle = useSelector((state) => state.theme.toggle);

  return (
    <div className='bg-[#000] text-white p-6 border-t border-white'>
      <div className='w-full flex items-start justify-between px-4 py-6'>
        <div className='text-center w-[240px] leading-tight'>
          <h1 className='font-bold text-4xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.6)]'>Leverk</h1>
          <ul className='flex items-center justify-center gap-2 py-2'>
            <li className={`${toggle? 'bg-black border-white text-white':'bg-gray-100 border-black text-black'} cursor-pointer h-[32px] w-[32px] flex items-center justify-center font-bold border rounded-full`}><i class="ri-facebook-fill"></i></li>
            <li className={`${toggle? 'bg-black border-white text-white':'bg-gray-100 border-black text-black'} cursor-pointer h-[32px] w-[32px] flex items-center justify-center font-bold border rounded-full`}><i class="ri-twitter-fill"></i></li>
            <li className={`${toggle? 'bg-black border-white text-white':'bg-gray-100 border-black text-black'} cursor-pointer h-[32px] w-[32px] flex items-center justify-center font-bold border rounded-full`}><i class="ri-instagram-fill"></i></li>
          </ul>
        </div>

        <div className='w-[240px] leading-tight'>
          <h3 className='font-semibold text-[16px]'>Contact Us</h3>
          <ul className='text-[#e6e6e6] flex flex-col gap-1'>
            <li className='text-[14px]'>hello@gmail.com</li>
            <li className='text-[14px]'>32 new york city
            from lorem ipsum and done</li>
            <li className='text-[14px]'>+ 91 0987654321</li>
          </ul>
        </div>

        <div className='w-[240px] leading-tight flex flex-col gap-1'>
          <h3 className='font-semibold text-[16px]'>Subscribe</h3>
          <p className='text-[14px] text-[#e6e6e6]'>Enter your Email to get notified
          about our new solutions</p>
          <div className='border border-white rounded py-2 px-4 flex justify-between placeholder:text-white'>
            <input type="email" placeholder='Email' className='outline-none' />
            <i><i class="ri-mail-line hover:border cursor-pointer border-white p-1 px-2 rounded-[2px]"></i></i>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-full px-3  bg-white text-center'></div>
      <div className='w-full text-white text-center'>Copyright © 2025 Leverk Cloth. All rights reserved.</div>
    </div>
  )
}

export default Footer