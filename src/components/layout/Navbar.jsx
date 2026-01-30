import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Softway" className="h-8 w-auto" />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center text-white font-medium">
          <a href="#" className="hover:text-gray-200 transition">
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <a
              href="#"
              className="flex items-center gap-1 hover:text-gray-200 transition"
            >
              About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {/* {isAboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Story</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Team</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</a>
              </div>
            )} */}
          </div>
          <a href="#" className="hover:text-gray-200 transition">
            Services
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Our Clients
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Blog
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Contact
          </a>
          {/* Action Button */}
          <button className="bg-[#2F80ED] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
