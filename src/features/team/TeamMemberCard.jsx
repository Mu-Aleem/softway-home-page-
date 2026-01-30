const TeamMemberCard = ({ name, role, image, description }) => {
  return (
    <div className="relative mt-12 group">
      <div className="relative p-px rounded-2xl bg-linear-to-br from-brand-blue to-brand-green">
        <div className="bg-white rounded-[calc(1rem-1px)] p-8 pt-16 h-full transition-transform duration-300 group-hover:-translate-y-1">
          <div className="absolute -top-16 left-6">
            <div className="w-24 h-24 rounded-full ">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* 4. Text Content */}
          <div className="space-y-2">
            <h3 className="font-manrope text-[18px] font-bold text-brand-black leading-tight">
              {name}
            </h3>
            <p className="font-nunito text-brand-black font-medium text-[14px] tracking-wide uppercase">
              {role}
            </p>
            <p className="font-nunito text-[#64748B] text-[16px] leading-relaxed pt-2">
              {description ||
                'Alexander drives innovation and growth, building strong teams and delivering high-quality solutions that make a real impact.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
