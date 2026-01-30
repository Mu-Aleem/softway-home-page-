import React from "react";

const ContactForm = () => {
  return (
    <form className=" space-y-5">
      <div>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-6 py-4 rounded-full border border-gray-100 bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-6 py-4 rounded-full border border-gray-100 bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-6 py-4 rounded-full border border-gray-100 bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
        />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="privacy"
          className="w-5 h-5 mt-0.5 rounded border-gray-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
        />
        <label
          htmlFor="privacy"
          className="text-gray-600 text-sm leading-relaxed cursor-pointer"
        >
          By Clicking you accept our{" "}
          <a href="#" className="text-[#3B4D66] font-medium underline">
            Privacy Policy
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="px-10 py-3.5 bg-[#2F80ED] text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-md text-sm mt-4"
      >
        Get Started
      </button>
    </form>
  );
};

export default ContactForm;
