import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "Courtney Henry",
    role: "CEO (Chief Executive Officer)",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Marvin McKinney",
    role: "CTO (Chief Technology Officer)",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Darlene Robertson",
    role: "CFO (Chief Financial Officer)",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Floyd Miles",
    role: "HR (Human Resources)",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Esther Howard",
    role: "Team Lead",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Savannah Nguyen",
    role: "Director IT",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-22">
          <h2 className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-brand-black mb-3 md:mb-4">
            Meet Our Team
          </h2>
          <p className="font-nunito text-brand-gray text-sm sm:text-base md:text-[16px] max-w-2xl mx-auto px-4">
            Driven by expertise. United by innovation. Focused on fintech
            excellence.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={i} {...member} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto gap-6 px-4 pb-4 no-scrollbar snap-x snap-mandatory">
          {teamMembers.map((member, i) => (
            <div key={i} className="min-w-70 snap-center mt-4 md:mt-0">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
