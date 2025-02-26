import React, { useState } from "react";
import { filterOptions } from "../../../Utils/Data";
import { useSelector } from "react-redux";

function Dashboard() {
  const toggle = useSelector((state) => state.theme.toggle);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [readmore, setReadmore] = useState(false);

  const [like, setLike] = useState(false);

  function hanldeLike () {
    setLike(!like);
  }

  const handleReadmore = () => {
    setReadmore(!readmore);
  };

  function filterData(category) {
    return filterOptions[category] || filterOptions.all;
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = filterData(selectedCategory);

  return (
    <div
      className={`w-full ${
        toggle ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav>
        <ul className="w-full flex justify-center gap-5">
          <li
            className={`${
              toggle
                ? "bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white"
                : "bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md"
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}
          >
            <button className="" onClick={() => handleCategoryClick("all")}>All</button>
          </li>
          <li
            className={`${
              toggle
                ? "bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white"
                : "bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md"
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}
          >
            <button onClick={() => handleCategoryClick("men")}>Men</button>
          </li>
          <li
            className={`${
              toggle
                ? "bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white"
                : "bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md"
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}
          >
            <button onClick={() => handleCategoryClick("women")}>Women</button>
          </li>
          <li
            className={`${
              toggle
                ? "bg-white text-black hover:bg-black hover:text-white hover:border-2 border-white"
                : "bg-white border-2 border-[#565050] hover:bg-[#565050] hover:text-white hover:shadow-md"
            } transition ease-in-out font-bold rounded-full h-[32px] w-[78px] flex items-center justify-center my-8`}
          >
            <button onClick={() => handleCategoryClick("babies")}>
              Babies
            </button>
          </li>
        </ul>
      </nav>

      <div className="w-full flex flex-wrap justify-center items-start gap-4 py-8">
        {filteredData.map((item, index) => (
          <div key={index} className="w-48 border p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.brand}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="font-bold mt-2">{item.brand}</h3>
            <p onClick={handleReadmore} className="text-[12px]">
              {readmore
                ? item.description
                : `${item.description.substring(0, 14)}`}{" "}
              <span className="text-blue-500  cursor-pointer">
                {readmore ? " Show Less" : "....Read More"}
              </span>
            </p>
                <div className="mt-2 flex justify-between items-bottom">
                <p className="font-semibold">Rs. {item.price}</p>
                <p onClick={hanldeLike}>{like? 'Like': 'NaN'}</p>

                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;