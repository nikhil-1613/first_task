// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShare, FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} key={product.id}>
      <div className="relative group border rounded-xl overflow-hidden shadow-sm cursor-pointer">
        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Tag */}
        {product.tag && (
          <span
            className={`absolute top-3 left-3 px-2 py-1 text-xs rounded-full ${
              product.tag === "New" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {product.tag}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center space-y-4">
          <button className="bg-white text-black text-sm px-6 py-2 rounded shadow font-medium">
            Add to cart
          </button>
          <div className="flex gap-6 text-white text-sm items-center">
            <button className="flex items-center gap-2 hover:underline">
              <FaShare /> Share
            </button>
            <button className="flex items-center gap-2 hover:underline">
              <FaHeart /> Like
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="p-4 bg-white space-y-1">
          <h4 className="font-semibold">{product.name}</h4>
          <p className="text-gray-500 text-sm">{product.category}</p>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <div className="text-sm">
            <span className="text-[#0070f3] font-medium mr-2">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="line-through text-gray-400">
                {product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
