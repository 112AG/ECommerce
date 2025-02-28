import React, { useState } from "react";
import { filterOptions } from "../../../Utils/Data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/CartSlice";

function Dashboard() {
  const toggle = useSelector((state) => state.theme.toggle);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [readMoreState, setReadMoreState] = useState({});
  const [likeState, setLikeState] = useState({});

  const handleLike = (index) => {
    setLikeState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleReadmore = (index) => {
    setReadMoreState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  function filterData(category) {
    return filterOptions[category] || filterOptions.all;
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = filterData(selectedCategory);

  // Calculate if item is in cart
  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

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
            <button onClick={() => handleCategoryClick("all")}>All</button>
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
          <div key={index} className="relative w-48 border p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.brand}
              className="w-full h-32 object-cover rounded-md"
            />
            <button
              onClick={() => handleAddToCart({ ...item, id: index })}
              className={`absolute rounded-full h-[28px] w-[28px] text-sm flex items-center text-white transition justify-center ${
                isItemInCart(index)
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-500 hover:bg-gray-800"
              } right-2 top-32`}
            >
              <i className="ri-shopping-cart-2-fill"></i>
            </button>
            <h3 className="font-bold mt-2">{item.brand}</h3>
            <p onClick={() => handleReadmore(index)} className="text-[12px]">
              {readMoreState[index]
                ? item.description
                : `${item.description.substring(0, 14)}`}{" "}
              <span className="text-blue-500 cursor-pointer">
                {readMoreState[index] ? " Show Less" : "....Read More"}
              </span>
            </p>
            <div className="mt-2 flex justify-between items-bottom">
              <p className="font-semibold">Rs. {item.price}</p>
              <p onClick={() => handleLike(index)}>
                {likeState[index] ? (
                  <i className="ri-heart-fill text-red-500"></i>
                ) : (
                  <i className="ri-heart-line"></i>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
