import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  classicalProductData,
  productData,
  veterinaryProductData,
} from "../productdata.js";

// Merge all products into a single searchable array
const allProducts = [
  ...productData,
  ...veterinaryProductData,
  ...classicalProductData,
];

// ----------------------------------------------------------------------
// 1. CONTENT DATA DEFINITION
// ----------------------------------------------------------------------
const getContentData = (product) => [
  {
    title: "Therapeutic Category",
    content: (
      <p className="text-sm text-gray-700">
        {product.details["Therapeutic Category"]}
      </p>
    ),
  },
  {
    title: "Description",
    content: (
      <p className="text-sm text-gray-700">{product.details.Description}</p>
    ),
  },
  {
    title: "How It Works",
    content: (
      <p className="text-sm text-gray-700">{product.details["How It Works"]}</p>
    ),
  },
  {
    title: "Indication",
    content: (
      <p className="text-sm text-gray-700">{product.details.Indication}</p>
    ),
  },
  {
    title: "Dosage",
    content: <p className="text-sm text-gray-700">{product.details.Dosage}</p>,
  },
  {
    title: "Presentation",
    content: (
      <p className="text-sm text-gray-700">{product.details.Presentation}</p>
    ),
  },
];

// ----------------------------------------------------------------------
// 2. PRODUCT DESCRIPTION TABS COMPONENT
// ----------------------------------------------------------------------
const ProductDescription = ({ product }) => {
  const contentData = getContentData(product);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (contentData.length === 0) return null;

  return (
    <div className="my-4 border-t border-gray-200">
      <div className="w-full mt-4">
        {/* Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 flex overflow-x-auto whitespace-nowrap rounded-t-md mx-4 md:mx-4">
          {contentData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`
                py-2 px-4 font-semibold text-sm cursor-pointer transition duration-150 ease-in-out
                ${index === activeTabIndex
                  ? "bg-[#6e9e54] text-white"
                  : "text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
                }
                ${index === activeTabIndex && index === 0 ? "rounded-tl-md" : ""}
              `}
              style={
                index === activeTabIndex
                  ? {
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% + 1px), 0 calc(100% + 1px))",
                    }
                  : {}
              }
            >
              {tab.title}
            </button>
          ))}
          <div className="grow"></div>
        </div>

        {/* Content */}
        <div className="mt-1 bg-[#fcfbf7] p-6 md:py-12 rounded-b-lg mx-4">
          {contentData[activeTabIndex].content}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. RELATED PRODUCT CARD
// ----------------------------------------------------------------------
const RelatedProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="block relative group">
    <div
      className="bg-white border border-gray-100 rounded-lg p-3 md:p-4
                  transition-shadow duration-300
                 flex flex-col items-center text-center min-h-[300px] relative overflow-hidden"
    >
      {/* Black overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

      {/* Product Image */}
      <div className="w-full h-32 mb-4 flex items-center justify-center rounded-md overflow-hidden  relative z-10">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="text-sm md:text-base font-semibold text-gray-800 h-10 overflow-hidden leading-tight line-clamp-2 relative z-10">
        {product.title}
      </h4>

      {/* Short Description */}
      <p className="text-xs md:text-sm text-gray-600 h-10 overflow-hidden line-clamp-2 my-3 relative z-10">
        {product.description || product.shortDescription || product.features?.[0] || "Short description coming soon."}
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
  </Link>
);


// ----------------------------------------------------------------------
// 4. RELATED PRODUCTS SECTION
// ----------------------------------------------------------------------
const RelatedProducts = ({ currentProductId }) => {
  let sourceList = productData;
  let categoryTitle = "The herbal choice is a healthy choice.";

  if (veterinaryProductData.some((item) => item.id === currentProductId)) {
    sourceList = veterinaryProductData;
    categoryTitle = "More herbal solutions for animal care.";
  } else if (classicalProductData.some((item) => item.id === currentProductId)) {
    sourceList = classicalProductData;
    categoryTitle = "Discover more from our Classical Ayurvedic range.";
  }

  const relatedItems = sourceList
    .filter((item) => item.id !== currentProductId)
    .slice(0, 8);

  if (relatedItems.length === 0) return null;

  return (
    <div className="mt-12 pt-6 border-t border-gray-200 w-full">
      <div className="max-w-[1100px] mx-auto px-6 md:px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 uppercase tracking-wider text-center">
          RELATED PRODUCTS
        </h2>
        <p className="text-gray-500 text-sm mb-8 text-center">{categoryTitle}</p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {relatedItems.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. MAIN PRODUCT DETAIL COMPONENT
// ----------------------------------------------------------------------
const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const product = allProducts.find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-6 font-sans relative pb-32">
      {/* Back Button */}
      <Link
        to="/"
        className="self-start m-4 md:m-8 flex items-center text-gray-700 font-semibold hover:text-gray-900 transition max-w-[1100px] w-full"
      >
        ← Back to all products
      </Link>

      {/* MASTER CONTAINER */}
      <div className="bg-white rounded-lg shadow-xl max-w-[1100px] w-full mt-0 md:mt-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="bg-[#fcfbf7] p-8 flex items-center justify-center relative overflow-hidden mx-4 mt-4">
            <div className="w-full aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="p-6 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold text-gray-900 leading-tight mb-2 line-clamp-2 md:line-clamp-none">
              {product.title}
            </h1>
          </div>
        </div>

        {/* Product Tabs */}
        <ProductDescription product={product} />
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts currentProductId={productId} />
    </div>
  );
};

export default ProductDetail;
