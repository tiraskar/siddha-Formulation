
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full font-sans">
     
      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <img src="/src/assets/img/siddha.png" alt="Siddha Foundation" className="h-20 object-contain" />
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-green-800">Siddha Foundation</div>
              <div className="text-xs text-gray-500">Herbal Excellence</div>
            </div>
          </div>

          {/* Contact / Promo info center */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5h18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 3v2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-xs md:text-sm">
                <div className="text-gray-700 font-medium"> Call Us</div>
                <div className="text-gray-500">044 4859 9296</div>
              </div>
            </div>

          
          </div>

          {/* Search & Cart */}
          <div className="w-full md:w-1/3 flex items-center justify-end gap-4">
            <div className="flex items-center w-full max-w-md bg-gray-50 border rounded overflow-hidden">
              <input aria-label="Search" className="flex-1 px-3 py-2 text-sm bg-transparent outline-none" placeholder="Search" />
              <button className="px-3 py-2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* <button className="relative flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-50">
              <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              <span className="text-sm font-medium">Cart</span>
              <span className="ml-1 inline-flex items-center justify-center bg-green-700 text-white text-xs rounded-full h-5 w-5">3</span>
            </button> */}
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap gap-2 text-sm text-white py-3 items-center">
            <li className="px-3 hover:bg-green-700 rounded"><Link to="/products">Products</Link></li>
            <li className="px-3 hover:bg-green-700 rounded"><a href="#">Brands</a></li>
            <li className="px-3 hover:bg-green-700 rounded"><a href="#">Blogs</a></li>
            <li className="px-3 hover:bg-green-700 rounded"><Link to="/about">About Us</Link></li>
            <li className="px-3 hover:bg-green-700 rounded"><Link to="/contact">Contact</Link></li>
            <li className="ml-auto px-3"><a href="#" className="text-xs text-white/90">Offers</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
