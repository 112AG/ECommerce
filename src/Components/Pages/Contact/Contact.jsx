import React, { useState } from "react";
import { useSelector } from "react-redux";


function Contact() {
  const toggle = useSelector((state) => state.theme.toggle);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='w-full h-full  flex flex-col'>
      <div className={` ${toggle ? 'bg-black text-white' : 'bg-white text-black'} text-center px-36 py-6`}>
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's of type and scrambled it
          to make a type specimen book.
        </p>
      </div>

      <div className="w-full px-24 py-8  bg-gray-100 flex justify-around">
        <div className="">
          <h2 className="font-bold text-2xl text-left pl-6">Get in Touch</h2>
          <p className="text-left leading-tight text-[16px] pb-4">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem <br />
            Ipsum.
          </p>
          <ul className="flex flex-col items-start">
            <li className="flex gap-2 pb-1">
              <div className="h-[38px] w-[38px] bg-black text-white flex items-center justify-center rounded-full">
                <i class="ri-map-pin-fill"></i>
              </div>{" "}
              <div className="flex flex-col text-[12px]">
                <span className="font-semibold text-[14px]">Address</span>32 new
                york city from lorem ipsum and done
              </div>
            </li>
            <li className="flex item-center  gap-2 pb-1">
              <div className="h-[38px] w-[38px] bg-black text-white flex items-center justify-center rounded-full">
                <i class="ri-contacts-fill"></i>
              </div>{" "}
              <div className="flex flex-col text-[12px]">
                <span className=" text-[14px] font-semibold">Phone Number</span>
                0987654321
              </div>
            </li>
            <li className="flex item-center gap-2 pb-1">
              <div className="h-[38px] w-[38px] bg-black text-white flex items-center justify-center rounded-full">
                <i class="ri-mail-fill"></i>
              </div>{" "}
              <div className="flex flex-col text-[12px]">
                <span className="font-semibold text-[14px]">Email</span>
                hello@gmail.com
              </div>
            </li>
          </ul>
        </div>
        <form className="border w-[288px] px-2 py-3 rounded-[16px] flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
      <h1 className="font-bold text-[18px]">Send a Message</h1>
      <input 
        type="text" 
        placeholder="Full Name" 
        name="fullName" 
        value={formData.fullName} 
        onChange={handleChange} 
        className="border rounded p-1 w-full"
      />
      <input 
        type="email" 
        placeholder="Email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className="border rounded p-1 w-full"
      />
      <textarea 
        placeholder="Feedback" 
        name="feedback" 
        rows={4} 
        value={formData.feedback} 
        onChange={handleChange} 
        className="border rounded p-1 w-full"
      ></textarea>
      <button className="bg-black w-full rounded text-center text-white font-bold py-1">Send Us</button>
    </form>

      </div>

      <div className={`px-6 w-full h-[364px] flex items-center ${toggle ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767694.11883084!2d60.92944751922805!3d19.72019948337311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1740395998901!5m2!1sen!2sin" className="w-full h-[80%] rounded-[18px]" ></iframe>
      </div>
    </div>
  );
}

export default Contact;
