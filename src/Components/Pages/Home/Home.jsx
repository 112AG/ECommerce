import React from "react";
import HomeImage from "../../../assets/Images/HomeImage.jpg";
import HomeImage2 from "../../../assets/Images/HomeImage2.jpg";
import { Link } from "react-router-dom";
import "../../../App.css";
import { useSelector } from "react-redux";
import { bestSells, seasonSeller } from "../../../Utils/Data.jsx";
import SeasonClothList from "../../Lists/SeasonSeller/SeasonClothList.jsx";
import BestSells from "../../Lists/SeasonSeller/BestSells.jsx";
import HomeImage3 from "../../../assets/Images/HomeImage3.jpg";

function Home({isLoggedIn}) {
  const toggle = useSelector((state) => state.theme.toggle);
  return (
    <div className={`${toggle ? "dark-mode" : "light-mode"} pb-7`}>
      <div className="relative ">
        <img src={HomeImage} className="w-full" alt="Image" />

        <div className="absolute top-[25%] right-[72px] z-50 ">
          <p className="text-left text-[#565050] font-medium">Urban Edge</p>
          <div className="flex flex-col items-end">
            <h1 className="text-right font-bold text-[72px] leading-[68px] text-white">
              Clothes for the
              <br />
              Summer
            </h1>
            <Link
              className={`text-center mt-4 w-[118px] py-1 rounded-[2px] border ${
                toggle ? "bg-black border-white" : "bg-white border-black"
              }`}
              to={`${isLoggedIn? '/dashboard' : '/login'}`}
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 ">
        <h1 className="font-bold text-[28px] ">This Season’s best Seller</h1>

        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden pb-2 scroll-bar">
          {seasonSeller.map((data, idx) => (
            <SeasonClothList data={data} key={idx} />
          ))}
        </div>
      </div>

      <div className="w-full h-full relative">
        <div className="absolute - w-full h-full bg-black opacity-20"></div>
        <img src={HomeImage2} className="" alt="Image" />
        <div
          className={`absolute z-50 top-[32%] left-[12%] font-bold text-4xl flex items-center text-center p-2 border-2 h-[140px] ${
            toggle ? "text-black border-black" : "text-white border-white"
          }`}
        >
          <p>
            Style Technical <br /> Innovative
          </p>
        </div>
      </div>

      <div className="p-6 h-full w-full bg-red flex flex-col justify-center items-center">
        <h1 className="font-bold text-[28px] ">This Season’s best Seller</h1>

        <div className="w-full h-full flex flex-wrap py-4 ">
          {bestSells.map((data, idx) => (
            <BestSells data={data} key={idx} />
          ))}
        </div>
      </div>

      <div className="flex gap-3 justify-around">
        <div className="w-[50vw] h-[454px] overflow-hidden">
          <img src={HomeImage3} className="h-full w-[100%] object-cover object-top" alt="Image" />
        </div>

        <div className="w-[50vw]  flex flex-col text-center gap-3 justify-start mt-[28px] px-8">
          <h1 className="font-bold text-[34px]">What we stand for ?</h1>
          <p className="pb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
          <Link
            className={`text-center w-[118px] py-1 px-3 rounded-[2px] border  ${
              toggle ? "bg-black border-white" : "bg-white border-black"
            }`}
          >
            Read More
          </Link>
          </div>
        </div>
      </div>

      {/* CSS */}

      <style jsx>{`
        .scroll-bar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .scroll-bar::-webkit-scrollbar-track {
          background: #2b2b2b;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .scroll-bar::-webkit-scrollbar-thumb {
          background: #fff;
          border-radius: 10px;
          border: 1px solid black;
        }

        .scroll-bar::-webkit-scrollbar-thumb:hover {
          background: #dbdbdb;
        }
      `}</style>
    </div>
  );
}

export default Home;
