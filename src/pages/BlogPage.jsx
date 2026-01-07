
import React from "react";
import { Link } from "react-router-dom";
import LatestProducts from "../components/LatestProducts";

const BlogPostCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonTo, // Used for the entire card link
}) => {
  // Function to scroll to the top of the window (0, 0)
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    // The entire card is now wrapped in the Link component
    <Link
      to={buttonTo}
      // ✅ FIX: Scroll to top when the card is clicked
      onClick={handleScrollToTop}
      className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-lg p-4 lg:p-6 shadow-md transition duration-300 hover:shadow-lg hover:border-[#a3e6b7] group cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-50 lg:w-1/5 shrink-0 mb-4 lg:mb-0 order-1 lg:order-2 flex justify-center items-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-[158px] h-45 rounded-md object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="font-serif flex-1 lg:pr-6 order-2 lg:order-1">
        <h3 className="text-2xl pt-2 md:pt-8 font-semibold text-green-700 mb-2 transition duration-300 group-hover:text-green-900">
          {title}
        </h3>
        <p className="text-gray-700  mb-0 text-lg ">{description}</p>
      </div>
    </Link>
  );
};

/* =====================
    Blog Page
===================== */
const BlogPage = () => {
  const posts = [
    {
      title: "All about Kidney Failure (किड्नी फेलियर बारे सम्पूर्ण जानकारी)",
      description:
        "Kidney failure means one or both kidneys stop functioning properly. This condition can be acute or chronic and needs early diagnosis and care...",
      imageSrc: "/assets/img/crystomin_tab.png",
      imageAlt: "Crystomin Tablets",
      // buttonText: "Keep Reading",
      buttonTo: "/kidney-failure",
    },
    {
      title: "Xtreme Tablet for Extreme Sex Pleasure",
      description:
        "A premium Ayurvedic formulation used to improve sexual performance, stamina, erectile dysfunction, and overall male vitality...",
      imageSrc: "/assets/img/xtreme.jpg",
      imageAlt: "Xtreme Tablet",
      // buttonText: "Keep Reading",
      buttonTo: "/xtreme-tablet",
    },
  ];

  return (
    <div className=" min-w-full  p-4 lg:p-8 font-serif bg-white">
      <div className="max-w-7xl mx-auto p-6  flex flex-col space-y-10 lg:p-8 rounded-lg ">
        {/* Header */}
        <div className="">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Latest blogs
          </h2>
          <p className="text-center">{`Read our latest blogs on Ayurveda and wellness products`}</p>
        </div>

        {/* Blog List */}
        <div className="grid md:grid-cols-2 gap-4  h-fit">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
      <LatestProducts isMainPage={true} />
      {/* Right Green Strip */}
    </div>
  );
};

export default BlogPage;
