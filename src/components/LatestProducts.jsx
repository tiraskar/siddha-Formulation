import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../productdata.js";

const LatestProducts = () => {
  // Get only the latest 6 products (reverse array to get newest first, then slice 6)
  const latestProducts = [...productData].reverse().slice(0, 6);

  // Function to safely extract the first feature as a description
  const getProductDescription = (product) => {
    return product.features && product.features.length > 0
      ? product.features[0]
      : "Details not available.";
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto bg-white">
      <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">
        Latest Products
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Discover our newest herbal medicines and wellness products
      </p>

      {/* Grid: responsive columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
        {latestProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block h-full group"
          >
            {/* Card Container */}
            <div
              className="bg-white border border-gray-100 rounded-lg p-3 md:p-4 
                         hover:shadow-lg transition-shadow duration-300 
                         flex flex-col items-center text-center h-full min-h-[300px]"
            >
              {/* Image Container */}
              <div className="bg-white w-full flex items-center justify-center p-2 mb-2">
                <div className="w-2/3 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-between items-center w-full">
                {/* Title */}
                <h2 className="text-base font-bold text-gray-800 line-clamp-2 mb-1">
                  {product.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-3 px-1 flex-grow">
                  {getProductDescription(product)}
                </p>

                {/* Learn More Button */}
                <button
                  className="mt-3 text-green-700 border border-green-700 text-sm font-semibold 
                             px-4 py-1.5 rounded-sm hover:bg-green-700 hover:text-white 
                             transition duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Products Button */}
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
