import React from "react";
import heroImage from "../../assets/hero/heroImage.svg";

const HeroSection = () => {
  return (
    <section className="relative h-100 md:h-200 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="City Skyline"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(107.5deg, #2F80ED 14.05%, #2AAB4E 78.48%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20 md:py-32">
        <h1 className="text-white mb-6 md:mb-8 mt-10 md:mt-0 text-center font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-15 tracking-normal">
          "Fintech & Remittance Software <br className="hidden md:block" /> for
          a Connected World"
        </h1>
        <p className="text-white/95 mb-8 md:mb-10 max-w-3xl mx-auto text-center font-manrope font-normal text-sm sm:text-base leading-relaxed md:leading-5.25 tracking-normal px-4">
          Secure digital solutions powering global payments, built to help
          businesses scale faster, transact smarter, and operate confidently in
          an interconnected financial world.
        </p>
        <button className="bg-white text-[#2F80ED] px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
