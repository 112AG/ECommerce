import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../../../Redux/CartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const toggle = useSelector((state) => state.theme.toggle);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div
        className={`min-h-screen ${
          toggle ? "bg-black text-white" : "bg-white text-black"
        } flex flex-col items-center justify-center p-4`}
      >
        <i className="ri-shopping-cart-line text-6xl mb-4"></i>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="mb-6">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link
          to="/dashboard"
          className={`px-6 py-2 rounded-full ${
            toggle
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        toggle ? "bg-black text-white" : "bg-white text-black"
      } p-4`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="mb-4 flex justify-between items-center">
          <p>{totalQuantity} items in your cart</p>
          <button
            onClick={() => dispatch(clearCart())}
            className="text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <i className="ri-delete-bin-line"></i> Clear Cart
          </button>
        </div>

        <div className="space-y-4 flex justify-evenly items-start">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`grid max-w-[312px] grid-cols-[1fr,3fr,1fr] md:grid-cols-[100px,3fr,1fr,1fr] gap-4 p-4 rounded-lg ${
                toggle ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-24 object-cover rounded-md"
              />

              <div>
                <h3 className="font-bold">{item.brand}</h3>
                <p className="text-sm">
                  {item.description?.substring(0, 30)}...
                </p>
                <p className="font-semibold mt-1">Rs. {item.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    toggle
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    toggle
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  +
                </button>
              </div>

              <div className="hidden md:flex items-center justify-end">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 p-4 rounded-lg ${
            toggle ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. {cartItems.length > 0 ? 150 : 0}</span>
            </div>
            <div className="border-t pt-2 mt-2 font-bold flex justify-between">
              <span>Total</span>
              <span>Rs. {totalAmount + (cartItems.length > 0 ? 150 : 0)}</span>
            </div>
          </div>

          <button
            className={`w-full py-3 rounded-lg mt-4 font-bold ${
              toggle
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Proceed to Checkout
          </button>

          <Link
            to="/dashboard"
            className="w-full flex justify-center mt-4 text-blue-500 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
