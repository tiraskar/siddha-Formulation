import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../productdata.js";

const LatestProducts = () => {
  const latestProducts = [...productData].reverse().slice(0, 6);

  const getProductDescription = (product) =>
    product.features?.[0] || "Details not available.";

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-green-600 font-bold text-sm uppercase tracking-widest mb-2">
          Our Collection
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Latest Products
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Discover our newest herbal medicines and premium wellness products
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
        {latestProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group relative">
            {/* Black overlay (above card content) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl pointer-events-none z-30"></div>

            {/* Card */}
            <div
              className="relative bg-white border border-gray-100 rounded-xl p-4 md:p-5
                         flex flex-col items-center text-center min-h-[320px]
                          duration-300  z-10"
            >
              {/* Image */}
              <div className="bg-white w-full flex items-center justify-center p-2 mb-2">
                <div className="w-2/3 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="grow flex flex-col justify-between items-center w-full">
                <h2 className="text-base font-bold text-gray-900 line-clamp-2 mb-3 transition group-hover:text-green-700">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 h-10 line-clamp-2 mb-4 px-1 grow ">
                  {getProductDescription(product)}
                </p>

                {/* Button */}
               <button
        className="w-full mt-auto px-4 py-2 rounded-md border-2 border-green-700
                   text-green-700 font-semibold
                   hover:bg-green-700 hover:text-white hover:shadow-md
                   transition-all duration-300 relative z-10"
        type="button"
      >
        Learn More →
      </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
