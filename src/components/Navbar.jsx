import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";

// 1. Define the Navigation Data
const NAV_LINKS = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  {
    title: "About Us",
    id: "about",
    children: [
      {
        heading: "About Siddha",
        links: [
          { label: "Who We Are", path: "/about" },
          { label: "MD Message", path: "/about/md" },
          { label: "Board of Directors", path: "/board-of-directors" },
          { label: "Patron & Adviser", path: "/patron_adviser" },
        ],
      },
      {
        heading: "Departments",
        links: [
          { label: "Marketing", path: "/departments/marketing" },
          { label: "Production", path: "/departments/production" },
          { label: "Finance", path: "/departments/finance" },
        ],
      },
    ],
  },
  { title: "Blogs", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subnav, setSubnav] = useState("");
  const [mobileOpen, setMobileOpen] = useState({});
  const closeTimeout = useRef(null);

  const handleSubnavEnter = (menuId) => {
    clearTimeout(closeTimeout.current);
    setSubnav(menuId);
  };

  const handleSubnavLeave = () => {
    closeTimeout.current = setTimeout(() => setSubnav(""), 150);
  };

  const toggleMobileSubnav = (id) => {
    setMobileOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src="/assets/img/siddha.png" alt="Logo" className="h-20 object-contain" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-green-800">Siddha Formulation</h1>
            <p className="text-sm text-gray-700">Herbal Excellence</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block text-gray-700 font-medium">
            {/* Contact Us : */}
            <a href="tel:9857030665" className="text-green-800 hover:underline"> <Phone className="inline-block  h-4 w-4 text-green-800" /> 9857030665</a>
          </div>
          <button className="md:hidden p-2 text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-green-50 md:bg-green-700 relative">
        <div className="max-w-7xl mx-auto px-4">

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-[17px] items-center gap-4  text-white font-semibold">
            {NAV_LINKS.map((item) => (
              <li
                key={item.title}
                className="px-3 py-4 hover:bg-green-800/60  relative cursor-pointer tracking-wide font-medium"
                onMouseEnter={() => item.children && handleSubnavEnter(item.id)}
                onMouseLeave={item.children ? handleSubnavLeave : undefined}
              >
                {item.children ? (
                  <button className="flex items-center gap-1">{item.title} <ChevronDown size={14} /></button>
                ) : (
                  <Link to={item.path}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden text-green-700 font-bold text-sm py-2">
              {NAV_LINKS.map((item) => (
                <li key={item.title} className="px-4 py-3 border-t border-green-600">
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between"
                        onClick={() => toggleMobileSubnav(item.id)}
                      >
                        {item.title} <span>{mobileOpen[item.id] ? "▴" : "▾"}</span>
                      </button>
                      {mobileOpen[item.id] && (
                        <ul className="mt-3 pl-4 space-y-2 font-medium">
                          {item.children.flatMap(group => group.links).map((sub) => (
                            <li key={sub.label}>
                              <Link to={sub.path} onClick={() => setIsMenuOpen(false)} className="block py-1">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={item.path} onClick={() => setIsMenuOpen(false)}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Desktop Mega Menu Dropdown */}
      {subnav === "about" && (
        <div
          className="hidden md:block absolute left-0 top-full w-full bg-green-50/95 backdrop-blur-md border-t border-green-200 shadow-xl z-40"
          onMouseEnter={() => clearTimeout(closeTimeout.current)}
          onMouseLeave={handleSubnavLeave}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-3 gap-8">
            {NAV_LINKS.find(n => n.id === "about").children.map((section) => (
              <div key={section.heading} className="border-r border-green-200 last:border-0 pr-4">
                <h3 className="font-bold text-green-900 mb-4 uppercase tracking-wider text-sm">
                  {section.heading}
                </h3>
                <ul className="space-y-1 text-gray-800 font-medium">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} onClick={() => setSubnav("")} className="block px-3 py-2 rounded hover:bg-green-100 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Special CTA Card */}
            <div className="p-6 rounded-xl border border-green-200 bg-white/80">
              <h3 className="text-green-900 font-bold mb-3">Herbal Excellence</h3>
              <p className="text-sm text-gray-700 mb-4">Dedicated to wellness through authentic Ayurvedic solutions.</p>
              <Link to="/contact" onClick={() => setSubnav("")} className="inline-block bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 font-semibold">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}