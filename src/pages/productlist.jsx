import React, { useState, useMemo } from "react";
import {
  productData,
  veterinaryProductData,
  classicalProductData,
} from "../productdata.js";
import { Leaf, Pill, PawPrint, Filter, ChevronDown, X } from "lucide-react";
import ScrollUpButton from "../common/ScrollUpButton.jsx";

// ---------------- PRODUCT SECTION ----------------
const ProductSection = ({ id, title, products }) => {
  const getProductDescription = (product) =>
    product.features?.[0] || "Details not available.";

  return (
    <>
      <div id={id} className="scroll-mt-20 mb-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 text-center uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-500 text-center text-sm md:text-base mb-8">
          Choose from our premium selection of herbal products
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-8 rounded"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {products.map((product) => {
          const slug = product.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

          return (
            <a
              id={`p-${slug}`}
              key={product.id}
              href={`/product/${product.id}`}
              className="group w-full sm:w-[48%] md:w-[23%]"
            >
              <div className="relative bg-gray-100 hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg p-4 md:p-5 flex flex-col items-center text-center min-h-[340px]">
                <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between w-full">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2 mb-2 transition group-hover:text-green-700">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2 h-10 mb-4 leading-relaxed group-hover:text-black">
                      {getProductDescription(product)}
                    </p>
                  </div>

                  <button className="text-green-700 border-2 border-green-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-700 hover:text-white hover:shadow-md hover:scale-105 transition-all duration-300 ease-out w-full mt-auto active:scale-95">
                    Learn More →
                  </button>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

// ---------------- PRODUCT LIST ----------------
const filterCategories = [
  { id: "all", label: "All Products", icon: Leaf },
  { id: "herbal", label: "Herbal Healthcare", icon: Leaf },
  { id: "veterinary", label: "Veterinary Care", icon: PawPrint },
];

const herbalSubCategories = [
  { id: "all", label: "All Herbal" },
  { id: "patent", label: "Patent" },
  { id: "classical", label: "Classical" },
];

const ProductList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeMainFilter, setActiveMainFilter] = useState("all");
  const [activeHerbalFilter, setActiveHerbalFilter] = useState("all");

  // Toggle dropdown card
  const toggleFilter = () => setIsFilterOpen((v) => !v);

  const handleMainFilterChange = (filter) => {
    setActiveMainFilter(filter);
    if (filter !== "herbal") setActiveHerbalFilter("all");
  };

  const handleHerbalFilterChange = (filter) => {
    setActiveHerbalFilter(filter);
    setActiveMainFilter("herbal");
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = [];
    if (activeMainFilter === "all") {
      products = [...productData, ...classicalProductData, ...veterinaryProductData];
    } else if (activeMainFilter === "herbal") {
      if (activeHerbalFilter === "all") {
        products = [...productData, ...classicalProductData];
      } else if (activeHerbalFilter === "patent") {
        products = productData;
      } else {
        products = classicalProductData;
      }
    } else if (activeMainFilter === "veterinary") {
      products = veterinaryProductData;
    }
    return products;
  }, [activeMainFilter, activeHerbalFilter]);

  // Split products by type for sections
  const patentFiltered = filteredProducts.filter((p) => productData.includes(p));
  const classicalFiltered = filteredProducts.filter((p) => classicalProductData.includes(p));
  const veterinaryFiltered = filteredProducts.filter((p) => veterinaryProductData.includes(p));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50  to-white relative">
      {/* Filters (anchored inside products container) */}
      <div className="p-2 md:p-2 max-w-7xl mx-auto">
        <div className="flex justify-end mb-2   relative">
          <button
            onClick={toggleFilter}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md  bg-green-700 text-white hover:bg-green-800 shadow"
            aria-label="Toggle filters"
            title="Filter"
          >
            {isFilterOpen ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
            <span className="text-sm font-semibold">Filter</span>
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 top-full mt-3 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              <button
                onClick={toggleFilter}
                className="absolute top-2 right-2 text-green-700 hover:text-green-900"
              >
                {/* <X size={20} /> */}
              </button>

              <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
                Filter By Category
              </h3>

              <div className="space-y-4">
                {/* Main Category */}
                <div>
                  <label className="block text-green-700 font-semibold mb-2">Main Category</label>
                  <div className="flex flex-wrap gap-2">
                    {filterCategories.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => handleMainFilterChange(filter.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                          activeMainFilter === filter.id
                            ? "bg-green-700 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Herbal Sub-Category */}
                {activeMainFilter === "herbal" && (
                  <div className="pt-3 border-t">
                    <label className="block text-green-700 font-semibold mb-2">Herbal Sub-Category</label>
                    <div className="flex flex-wrap gap-2">
                      {herbalSubCategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleHerbalFilterChange(sub.id)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                            activeHerbalFilter === sub.id
                              ? "bg-green-600 text-white"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
        {/* Products container continues below */}

      {/* Products */}
      <div className="p-2 md:p-2 max-w-7xl mx-auto">
        {patentFiltered.length > 0 && (
          <ProductSection title="Patent Herbal Medicines" products={patentFiltered} />
        )}
        {classicalFiltered.length > 0 && (
          <div className="mt-2 md:mt-2 pt-2 ">
            <ProductSection title="Classical Herbal Medicines" products={classicalFiltered} />
          </div>
        )}
        {veterinaryFiltered.length > 0 && (
          <div className="mt-2 md:mt-2 pt-2 ">
            <ProductSection title="Animal Herbal Medicines (Veterinary Care)" products={veterinaryFiltered} />
          </div>
        )}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            <h3 className="text-xl font-semibold">No Products Match Your Filter</h3>
            <p>Try selecting another option.</p>
          </div>
        )}
      </div>

      <ScrollUpButton />
    </div>
  );
};

export default ProductList;
