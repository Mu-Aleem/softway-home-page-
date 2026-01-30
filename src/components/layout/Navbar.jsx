import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center md:ml-0 ml-auto md:mr-0 mr-auto">
            <img src={logo} alt="Softway" className="h-8 w-auto" />
          </div>

          {/* Desktop Links */}
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

      {/* Mobile Sidebar */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <img src={logo} alt="Softway" className="h-8 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="text-gray-800 font-medium hover:text-[#2F80ED] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 font-medium hover:text-[#2F80ED] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 font-medium hover:text-[#2F80ED] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 font-medium hover:text-[#2F80ED] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Clients
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 font-medium hover:text-[#2F80ED] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 font-medium hover:text-[#2F80ED] transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <button
                    className="bg-[#2F80ED] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition mt-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </>
    </>
  );
};

export default Navbar;
