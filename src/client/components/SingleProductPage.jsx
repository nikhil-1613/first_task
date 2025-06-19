import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import products from "./productlist"; // Adjust the path if needed
import Product from './Products'
import Footer from './Footer'

function SingleProductPage() {
  const { id } = useParams();
  const product = products.find((p, index) => index === parseInt(id));

  const [activeTab, setActiveTab] = useState("Description");

  if (!product) {
    return (
      <div className="text-center py-20">
        <Header />
        <p className="text-xl font-semibold text-gray-600">
          Product not found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      {/* 🔹 Breadcrumb Strap */}
      <div className="text-sm px-6 py-3 text-gray-500 bg-[#F4F5F7]">
        Home &gt; Shop &gt; <span className="text-black">{product.name}</span>
      </div>

      {/* 🔸 Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Left: Thumbnails + Image */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex lg:flex-col gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded border p-1 cursor-pointer bg-[#F4F5F7]"
              >
                <img
                  src={product.img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 bg-[#F4F5F7] rounded-xl p-6">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto object-contain rounded shadow-md"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold text-red-500">{product.price}</p>

          {product.oldPrice && (
            <p className="text-base text-gray-400 line-through">
              {product.oldPrice}
            </p>
          )}

          <p className="text-sm text-gray-600">
            Rating: ⭐ {product.rating || "4.5"} / 5
          </p>

          {/* Size */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-1">Size</h3>
            <div className="flex items-center gap-2">
              {["L", "XL", "XS"].map((size) => (
                <button key={size} className="px-3 py-1 border rounded text-sm">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-1">Color</h3>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full border" />
              <div className="w-6 h-6 bg-blue-500 rounded-full border" />
              <div className="w-6 h-6 bg-black rounded-full border" />
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border px-2 py-1 rounded">
              <button className="text-xl px-2">-</button>
              <span className="px-2">1</span>
              <button className="text-xl px-2">+</button>
            </div>

            <button className="px-6 py-2 bg-black text-white rounded border border-black">
              Add To Cart
            </button>
            <button className="px-6 py-2 border rounded">+ Compare</button>
          </div>

          {/* SKU, Category, Tags, Share */}
          <div className="pt-6 border-t text-sm text-gray-700 space-y-1">
            <p>
              <strong>SKU</strong>: SS001
            </p>
            <p>
              <strong>Category</strong>: Sofas
            </p>
            <p>
              <strong>Tags</strong>: Sofa, Chair, Home, Shop
            </p>
            <p className="flex items-center gap-3">
              <strong>Share</strong>:
              <span className="flex gap-3">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ⬇️ Description Tabs Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-t">
        {/* Tabs */}
        <div className="flex gap-8 text-gray-500 text-sm font-medium border-b">
          {["Description", "Additional Information", "Reviews [5]"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black font-semibold"
                    : "hover:text-black"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Tab Content */}
        {activeTab === "Description" && (
          <div className="mt-6 text-gray-600 text-sm space-y-4">
            <p>
              Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the cords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>

            {/* Related Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#f4f5f7] p-4 rounded-xl">
                <div className="h-[240px] w-full overflow-hidden rounded-xl">
                  <img
                    src="https://www.estre.in/cdn/shop/files/2-min_2d969ef7-e5ee-4cdd-a08a-6b0871211bab.jpg?v=1743762665"
                    alt="sofa variation 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="bg-[#f4f5f7] p-4 rounded-xl">
                <div className="h-[240px] w-full overflow-hidden rounded-xl">
                  <img
                    src="https://craftsmill.in/cdn/shop/files/sofas-accent-chairs-cider-orange-soft-velvet-touch-fabric-emily-flared-arm-2-seater-sofa-60-46567514931491.jpg?v=1725047510"
                    alt="sofa variation 2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Additional Information" && (
          <div className="mt-6 text-gray-600 text-sm">
            <p>Material: Sheesham wood, Foam cushion</p>
            <p>Assembly: DIY (Assembly Instructions Provided)</p>
            <p>Warranty: 3 years structural warranty</p>
          </div>
        )}

        {activeTab === "Reviews [5]" && (
          <div className="mt-6 text-gray-600 text-sm">
            <p>
              ⭐️⭐️⭐️⭐️⭐️ “Absolutely love this sofa!” – A Happy Customer
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center font-[poppins] text-bold text-6xl">
        Related Products
       
      </div>
       <Product />
      <div className="mt-[-12rem]">
        <Footer/>
      </div>
    </div>
  );
}

export default SingleProductPage;

// import React from "react";
// import { useParams } from "react-router-dom";
// import Header from "./Header";
// import products from "./productlist"; // Adjust the path if needed

// function SingleProductPage() {
//   const { id } = useParams();
//   const product = products.find((p, index) => index === parseInt(id));

//   if (!product) {
//     return (
//       <div className="text-center py-20">
//         <Header />
//         <p className="text-xl font-semibold text-gray-600">Product not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       <Header />

//       {/* 🔹 Breadcrumb Strap */}
//       <div className="text-sm px-6 py-3 text-gray-500 bg-[#F4F5F7]">
//         Home &gt; Shop &gt; <span className="text-black">{product.name}</span>
//       </div>

//       {/* 🔸 Main Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10 max-w-7xl mx-auto">
//         {/* Left: Thumbnails + Image */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Thumbnails */}
//           <div className="flex lg:flex-col gap-4">
//             {[...Array(4)].map((_, index) => (
//               <div
//                 key={index}
//                 className="w-20 h-20 rounded border p-1 cursor-pointer bg-[#F4F5F7]"
//               >
//                 <img
//                   src={product.img}
//                   alt={`${product.name} thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover rounded"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Main Image Container */}
//           <div className="flex-1 bg-[#F4F5F7] rounded-xl p-6">
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-auto object-contain rounded shadow-md"
//             />
//           </div>
//         </div>

//         {/* Right: Product Info */}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-xl font-semibold text-red-500">{product.price}</p>

//           {product.oldPrice && (
//             <p className="text-base text-gray-400 line-through">
//               {product.oldPrice}
//             </p>
//           )}

//           <p className="text-sm text-gray-600">
//             Rating: ⭐ {product.rating || "4.5"} / 5
//           </p>

//           {/* Size */}
//           <div className="mt-4">
//             <h3 className="text-sm font-semibold mb-1">Size</h3>
//             <div className="flex items-center gap-2">
//               {["L", "XL", "XS"].map((size) => (
//                 <button key={size} className="px-3 py-1 border rounded text-sm">
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Color */}
//           <div className="mt-4">
//             <h3 className="text-sm font-semibold mb-1">Color</h3>
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 bg-purple-500 rounded-full border" />
//               <div className="w-6 h-6 bg-blue-500 rounded-full border" />
//               <div className="w-6 h-6 bg-black rounded-full border" />
//             </div>
//           </div>

//           {/* Quantity & Buttons */}
//           <div className="flex items-center gap-4 mt-6">
//             <div className="flex items-center border px-2 py-1 rounded">
//               <button className="text-xl px-2">-</button>
//               <span className="px-2">1</span>
//               <button className="text-xl px-2">+</button>
//             </div>

//             <button className="px-6 py-2 bg-black text-white rounded border border-black">
//               Add To Cart
//             </button>
//             <button className="px-6 py-2 border rounded">+ Compare</button>
//           </div>

//           {/* Description */}
//           <div className="pt-6 border-t">
//             <h2 className="text-lg font-semibold">Description</h2>
//             <p className="text-sm text-gray-700 mt-2">
//               {product.description ||
//                 "Introducing the new collection of minimalist and functional designs perfect for your modern home."}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProductPage;
