import React from "react";
import clipBoardIcon from "../../assets/process/clipBoardIcon.svg";
import gitBranchIcon from "../../assets/process/gitBranchIcon.svg";
import paintBrushIcon from "../../assets/process/paintBrushIcon.svg";

const WorkingProcess = () => {
  const steps = [
    {
      title: "Payment Platforms",
      desc: "Secure, scalable systems for digital payments, wallets, and transaction processing.",
      icon: clipBoardIcon,
    },
    {
      title: "Remittance Solutions",
      desc: "End-to-end software for fast, compliant cross-border money transfers.",
      icon: paintBrushIcon,
    },
    {
      title: "API & Integrations",
      desc: "Robust financial APIs connecting banks, fintechs, and third-party services.",
      icon: gitBranchIcon,
    },
    {
      title: "Compliance & Security",
      desc: "Built in regulatory compliance, data protection, and fraud prevention to ensure safe and trusted financial operations.",
      icon: clipBoardIcon,
    },
    {
      title: "Custom Fintech Development",
      desc: "Tailor made financial software designed to match your business model, market requirements and growth goals.",
      icon: paintBrushIcon,
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="w-full bg-process-gradient rounded-none md:rounded-[40px] py-12 md:py-20 overflow-hidden">
        <div className="px-6 text-center mb-8 md:mb-16">
          <h2 className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-4 md:mb-6">
            Our working Process
          </h2>
          <p className="font-nunito text-blue-100 text-sm sm:text-base md:text-[16px] lg:text-lg max-w-2xl mx-auto opacity-90 px-4">
            A clear, structured approach carefully designed to make every step
            of the journey simple, transparent, and highly effective.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-16 pb-8 no-scrollbar snap-x snap-mandatory">
          {steps.map((step, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[30%] snap-center bg-white/10 backdrop-blur- rounded-2xl p-6 md:p-10 flex flex-col items-start transition-all hover:bg-white/15"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 md:mb-8 text-xl">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>

              <h3 className="font-manrope text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="font-nunito text-blue-50/80 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
