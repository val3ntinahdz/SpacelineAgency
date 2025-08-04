const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="bg-[#3b36d1] text-white font-syne-bold w-12 h-12 rounded-full flex items-center justify-center text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-syne-bold text-xl text-[#0a0a36] mb-2">{title}</h3>
        <p className="font-jakarta text-[#1c1b5a]/80">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;