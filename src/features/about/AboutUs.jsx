import React from "react";
import professionalWomanImage from "../../assets/about/professionalWomanImage.svg";
import bridgeImage from "../../assets/about/bridgeImage.svg";

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-[#64748B] text-xs md:text-sm font-medium">
              Softway
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Softway delivers secure fintech and remittance software designed
              for a connected global economy. Backed by Tawakal Group, we build
              scalable, compliant, and high-performance digital solutions that
              help businesses move money faster, safer, and smarter.
            </p>
            <button className="bg-[#2F80ED] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-600 transition shadow-md text-sm md:text-base">
              Get In Touch
            </button>
          </div>

          {/* Right Section - Images with proper overlapping */}
          <div className="relative mt-8 md:mt-0">
            {/* Top Image - Bridge - Hidden on mobile */}
            <div className="relative z-10 hidden md:block">
              <img
                src={bridgeImage}
                alt="Bridge"
                className="w-full h-auto rounded-2xl"
                style={{
                  imageRendering: "auto",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Bottom Image - Woman with overlay - positioned to overlap bottom-left of top image on desktop, standalone on mobile */}
            <div className="relative md:-mt-52.5 md:mr-96.25 md:-ml-12.5 z-0 mt-0 mr-0 ml-0">
              <img
                src={professionalWomanImage}
                alt="Professional Woman"
                className="rounded-2xl w-full md:w-auto max-w-full"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Green Overlay Box - positioned bottom-right of bottom image */}
            <div className="absolute bottom-4 right-4 md:relative md:w-40 md:-mt-35 md:ml-52.5 md:bottom-auto md:right-auto w-28 md:w-40 z-50 bg-[#2AAB4E] rounded-2xl px-3 md:px-6 py-2.5 md:py-4 shadow-lg">
              <p className="text-white text-xl md:text-3xl font-bold leading-tight">
                3 Years
              </p>
              <p className="text-white text-xs md:text-base mt-1">
                of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
