import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative w-full z-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[30px] overflow-hidden ">
          <div className="flex">
            {/* Left  */}
            <div className="bg-white px-16 w-1/2 flex flex-col justify-end">
              <h2 className="text-[40px] font-bold text-[#0F172A] mb-6 leading-tight">
                Start Your Journey With Us
              </h2>
              <p className="text-[#334155] text-base leading-relaxed mb-12">
                With us by your side, we’ll turn your vision into reality,
                shaping every step of the process into a meaningful experience
                and a success story worth celebrating
              </p>
            </div>

            {/* Right */}
            <div className="bg-white w-1/2  flex items-center justify-center">
              <div className="bg-white border border-black/5 shadow-[0_0_16px_rgba(0,0,0,0.12)] rounded-3xl p-16 my-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
