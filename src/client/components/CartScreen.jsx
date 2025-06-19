import React from "react";
import Header from "./Header";
function CartScreen() {
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

  const subtotal = "Rs. 520,000.00";

  return (
  <div>
    <Header/>
      
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-blue-600 font-semibold">{item.price}</div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="border rounded-lg p-6 shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-medium">{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-4 mt-4">
              <span>Total</span>
              <span>{subtotal}</span>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>

  </div>  );
}

export default CartScreen;

// import React from 'react'

// function CartScreen() {
//   return (
//     <div>CartScreen</div>
//   )
// }

// export default CartScreen