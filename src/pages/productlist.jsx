import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Pill, PawPrint, Filter } from "lucide-react";
import {
  productData,
  veterinaryProductData,
  classicalProductData,
} from "../productdata.js";
import ScrollUpButton from "../common/ScrollUpButton.jsx";

// Single Product Section Component
const ProductSection = ({ id, title, products }) => {
  const getProductDescription = (product) =>
    product.features?.[0] || "Details not available.";

  return (
    <>
      <div id={id} className="scroll-mt-20 mb-2">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-500 text-center text-sm md:text-base mb-8">
          Choose from our premium selection of herbal products
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-8 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => {
          const slug = product.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

          return (
            <Link
              id={`p-${slug}`}
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div
                className="relative bg-white border border-gray-100 rounded-lg p-4 md:p-5
                           transition-all duration-300 flex flex-col items-center text-center min-h-[340px]"
              >
                {/* Card overlay */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-black pointer-events-none"></div>

                {/* Product Image */}
                <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow justify-between w-full">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 mb-2 transition group-hover:text-green-700">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                      {getProductDescription(product)}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <button
                    className="text-green-700 border-2 border-green-700 text-sm font-semibold
                               px-4 py-2 rounded-md hover:bg-green-700 hover:text-white hover:shadow-md hover:scale-105
                               transition-all duration-300 ease-out w-full mt-auto
                               active:scale-95"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

// Product List Component with Filters
const ProductList = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Set filter from query params
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter");
    if (filterParam === "herbal") setActiveFilter("herbal");
    else if (filterParam === "veterinary") setActiveFilter("veterinary");
  }, [location.search]);

  useEffect(() => {
    if (location.pathname === "/products" && location.hash) {
      const id = location.hash.replace("#", "");
      const el =
        document.getElementById(id) ||
        document.getElementById(`p-${id}`) ||
        document.getElementById(`p-${id.replace(/[^a-z0-9]+/g, "-")}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const filterCategories = [
    { id: "all", label: "All Products", icon: Leaf },
    { id: "patent", label: "Patent Medicines", icon: Pill },
    { id: "classical", label: "Classical Medicines", icon: Leaf },
    { id: "veterinary", label: "Veterinary Care", icon: PawPrint },
  ];

  const pillLabel = (id, label) => {
    const map = {
      all: "ALL",
      patent: "PATENT",
      classical: "CLASSICAL",
      veterinary: "VETERINARY CARE",
    };
    return map[id] || label.toUpperCase();
  };

  const getFilteredProducts = () => {
    switch (activeFilter) {
      case "patent":
        return productData;
      case "classical":
        return classicalProductData;
      case "herbal":
        return [...productData, ...classicalProductData];
      case "veterinary":
        return veterinaryProductData;
      case "all":
      default:
        return [...productData, ...classicalProductData, ...veterinaryProductData];
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r text-green py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-6 flex items-start md:items-center justify-between gap-4">
          <div className="flex-1"></div>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-green/95">
              <Filter className="w-5 h-5 text-black" />
              <span className="font-semibold text-green-900">Filter by</span>
            </div>

            <div className="flex items-center gap-2">
              {filterCategories.map((category) => {
                const isActive = activeFilter === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 border shadow-sm
                      ${
                        isActive
                          ? "bg-green text-green-700 border-green"
                          : "bg-green-700 text-white border-green/30 hover:bg-white-600/50 hover:border-green/50"
                      }`}
                  >
                    {pillLabel(category.id, category.label)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm md:hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="flex items-center gap-2 shrink-0 px-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-semibold">Filter by</span>
            </div>
            <div className="flex gap-2 items-center py-1">
              {filterCategories.map((category) => {
                const isActive = activeFilter === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase transition-all duration-200 shrink-0 ${
                      isActive ? "bg-green-700 text-white shadow-lg" : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {pillLabel(category.id, category.label)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="p-6 md:p-12 max-w-7xl mx-auto">
        {activeFilter === "all" ? (
          <>
            <ProductSection id="patent" title="Patent Herbal Medicines" products={productData} />
            <div className="mt-16 md:mt-20 pt-12 border-t-2 border-gray-200">
              <ProductSection id="classical" title="Classical Herbal Medicines" products={classicalProductData} />
            </div>
            <div className="mt-16 md:mt-20 pt-12 border-t-2 border-gray-200">
              <ProductSection id="veterinary" title="Animal Herbal Medicines (Veterinary Care)" products={veterinaryProductData} />
            </div>
          </>
        ) : activeFilter === "herbal" ? (
          <>
            <ProductSection id="patent" title="Patent Herbal Medicines" products={productData} />
            <div className="mt-16 md:mt-20 pt-12 border-t-2 border-gray-200">
              <ProductSection id="classical" title="Classical Herbal Medicines" products={classicalProductData} />
            </div>
          </>
        ) : (
          <ProductSection
            id={activeFilter}
            title={filterCategories.find((c) => c.id === activeFilter)?.label}
            products={filteredProducts}
          />
        )}
      </div>

      <ScrollUpButton />
    </div>
  );
};

export default ProductList;
