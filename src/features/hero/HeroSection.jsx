import React from "react";
import heroImage from "../../assets/hero/heroImage.svg";

const HeroSection = () => {
  return (
    <section className="relative h-200 flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <h1 className="text-white mb-8 text-center font-manrope font-bold text-[48px] leading-15 tracking-normal">
          "Fintech & Remittance Software <br /> for a Connected World"
        </h1>
        <p className="text-white/95 mb-10 max-w-3xl mx-auto text-center font-manrope font-normal text-base leading-5.25 tracking-normal">
          Secure digital solutions powering global payments, built to help
          businesses scale faster, transact smarter, and operate confidently in
          an interconnected financial world.
        </p>
        <button className="bg-white text-[#2F80ED] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
