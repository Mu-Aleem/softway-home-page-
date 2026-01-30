import React from "react";
import logo from "../../assets/mainLogo.svg";

const Footer = () => {
  return (
    <footer
      className="relative pt-68 pb-2 px-6 -mt-52 z-10"
      style={{
        background: "linear-gradient(107.5deg, #2F80ED 14.05%, #2AAB4E 78.48%)",
        // minHeight: '600px'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="md:col-span-1">
            <img
              src={logo}
              alt="Softway"
              className="h-10 w-auto brightness-0 invert mb-6"
            />
          </div>

          <div className="md:col-span-1">
            <p className="text-white/80 text-sm font-manrope">
              © 2020 Softway. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-sm"
              >
                <span className="text-gray-700 font-bold text-xs">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-sm"
              >
                <span className="text-gray-700 font-bold text-xs">@</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
