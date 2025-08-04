const ServiceCard = ({ icon, title, description, highlights, bgColor, borderColor }) => {
  return (
    <div 
      className={`bg-${bgColor} border border-${borderColor}/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full`}
    >
      <div className="mb-6">
        <div className={`w-16 h-16 rounded-2xl bg-${borderColor}/20 flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="font-syne-bold text-2xl text-[#0a0a36] mb-3">{title}</h3>
        <p className="font-jakarta text-[#1c1b5a]/80 mb-6">{description}</p>
      </div>
      
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#3b36d1] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-jakarta text-[#1c1b5a]">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;