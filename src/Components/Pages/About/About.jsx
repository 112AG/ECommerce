import React from 'react'
import { useSelector } from 'react-redux';
import './About.css'
import AboutUs from '../../../assets/Images/AboutUs.jpg'

function About() {
  const toggle = useSelector((state) => state.theme.toggle);

  return (
    <div className={`${toggle?'bg-black text-white' : 'bg-white text-black'} py-4 px-6`}>
      <div className='w-full flex items-center py-5'>
        <h3 className='w-[30vw] text-left font-semibold text-[#929292] leading-tight'>About our <br />Teams members</h3>
        <div className='w-[70vw]'>
          <h1 className='font-bold text-5xl py-1'>About Us.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className='w-full py-5 flex'>
        <div className='w-[60vw]'>
          <h1 className='font-extrabold text-6xl w-[55vw] quote'>‘‘Our Work does make sense only if it is a faithful witness of his time.’’</h1>
        </div>
        <div className='w-[40vw]'>
          <img className='w-full' src={AboutUs} alt="About" />
        </div>
      </div>
    </div>
  )
}

export default About