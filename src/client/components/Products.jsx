import React from "react";
import products from "./productlist";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="w-full font-[Poppins] px-4 md:px-8 py-12 mb-44">
      {/* Section Heading */}
      <div className="text-center mb-8">
        {/* <h2 className="text-2xl md:text-3xl font-semibold">Our Products</h2> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-10">
        <button className="border border-black text-sm px-6 py-2 rounded hover:bg-black hover:text-white transition">
          Show More
        </button>
      </div>
    </section>
  );
}

export default Products;
