import React from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: "Rs. 250,000.00",
      quantity: 1,
      image: "https://i.imgur.com/qkdpN.jpg",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: "Rs. 270,000.00",
      quantity: 1,
      image: "https://i.imgur.com/Jt6plpT.jpg",
    },
  ];

  const total = "Rs. 520,000.00";
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose}>
            <FiX size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border rounded-lg p-2 shadow-sm"
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} x <span className="text-blue-600">{item.price}</span>
                </p>
              </div>
              <button>
                <FiX size={16} className="text-gray-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="border-t px-5 py-4">
          <div className="flex justify-between items-center font-semibold">
            <span>Subtotal</span>
            <span className="text-blue-600">{total}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-around gap-2 p-4 border-t">
          <button className="border px-4 py-2 rounded-full text-sm font-medium" onClick={()=>navigate('/cartscreen')}>Cart</button>
          <button className="border px-4 py-2 rounded-full text-sm font-medium">Checkout</button>
          <button className="border px-4 py-2 rounded-full text-sm font-medium">Comparison</button>
        </div>
      </div>
    </>
  );
};

export default Cart;