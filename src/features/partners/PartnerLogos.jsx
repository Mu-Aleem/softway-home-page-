import bananaPayIcon from '../../assets/partners/bananaPayIcon.svg';
import tawakalExpressIcon from '../../assets/partners/tawakalExpressIcon.svg';
import tawakalUkIcon from '../../assets/partners/tawakalUkIcon.svg';

const partners = [
  { name: 'BananaPay', logo: bananaPayIcon },
  { name: 'Tawakal Express', logo: tawakalExpressIcon },
  { name: 'Tawakal UK', logo: tawakalUkIcon },
];

const PartnerLogos = () => {
  return (
    <section className="px-6 py-12 md:py-20 bg-[#F8FAFC] rounded-[40px]">
      <div className="max-w-7xl mx-auto  px-8 text-center">
        {/* 2. Header Section */}
        <div className="mb-12">
          <h2 className="font-manrope text-[48px] md:text-4xl font-extrabold text-[#0F172A] mb-4">
            Our Partners
          </h2>
          <p className="font-nunito text-[#A1A1A1] text-sm md:text-base mx-auto">
            Partnering with organizations that share our commitment to
            innovation and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#8FAFC] border border-[#E5E5E5] rounded-2xl p-8 flex items-center justify-center h-40  hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-16 object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
