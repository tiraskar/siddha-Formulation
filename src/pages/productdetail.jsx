import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { productData } from "../productdata.js";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  if (!product) {
    return <Navigate to="/" />;
  }

  const handleDecrement = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Section: Image and Details Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: Product Image */}
          <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
            <div className="w-full aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < product.rating ? "text-yellow-400 text-lg" : "text-gray-300 text-lg"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviewCount} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              {product.bundleTag && (
                <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded">
                  {product.bundleTag}
                </span>
              )}
            </div>

            {/* Product Meta Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
              {Object.entries(product.meta).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{key}:</p>
                  <p className="text-sm text-gray-900">{value}</p>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 bg-white h-12">
                <button
                  onClick={handleDecrement}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-100 transition text-gray-600 font-semibold"
                >
                  −
                </button>
                <input
                  type="text"
                  readOnly
                  value={qty}
                  className="w-12 h-full text-center bg-white font-semibold text-gray-900 focus:outline-none border-x border-gray-300"
                />
                <button
                  onClick={handleIncrement}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-100 transition text-gray-600 font-semibold"
                >
                  +
                </button>
              </div>

              {/* Action Buttons */}
              <button className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition flex items-center justify-center gap-2">
                Add to Cart →
              </button>
              <button className="flex-1 h-12 bg-gray-900 hover:bg-black text-white font-semibold rounded transition flex items-center justify-center gap-2">
                Buy Now →
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm text-gray-700">
              <div>• Ayurvedic Medicine</div>
              <div>• Exchange 3i Return Within 7 Days Of Delivery</div>
              <div>• For Shipping Other Than India Please Contact: +91 94090 9111</div>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-2 mt-6 pt-6 border-t border-gray-200">
              {product.paymentMethods.map((method, index) => (
                <span
                  key={index}
                  className="border border-gray-300 px-3 py-1 rounded text-xs font-semibold text-gray-700 bg-white"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200 pt-8">
          {/* Tab Navigation */}
          <div className="flex gap-8 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-4 font-semibold transition ${
                activeTab === "details"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Product details
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 font-semibold transition ${
                activeTab === "reviews"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Product Reviews
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-4 font-semibold transition ${
                activeTab === "shipping"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Shipping and Returns
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl py-6">
            {/* Details Tab */}
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">
                    Product Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {product.title} is a premium herbal formulation designed to support your health and wellness. This authentic Ayurvedic medicine combines traditional knowledge with modern quality standards to deliver effective results.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">
                    Key Features & Benefits
                  </h3>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">
                    Product Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(product.meta).map(([key, value]) => (
                      <div key={key}>
                        <p className="font-semibold text-gray-900">{key}</p>
                        <p className="text-gray-600 text-xs">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="py-6">
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Customer Reviews:</strong> This product has {product.reviewCount} reviews with an average rating of {product.rating}/5 stars.
                </p>
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <p className="text-green-800 text-sm">Be the first to review this product!</p>
                </div>
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === "shipping" && (
              <div className="py-6 space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">Shipping Information</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We offer fast and reliable shipping across India. Orders are processed within 1-2 business days and you'll receive a tracking number.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">Return Policy</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    7-day return/exchange policy from delivery date. Products must be unopened in original packaging.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts currentProductId={product.id} limit={4} />
    </div>
  );
};

export default ProductDetail;
