// components/FounderCard.jsx
export const FounderCard = ({ name, role, expertise, funFact, image, accentColor }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-md">
            <div className="relative h-64">
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"
                    style={{ backgroundColor: `${accentColor}10` }}
                ></div>
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
                <div 
                    className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full backdrop-blur-sm"
                    style={{ backgroundColor: `${accentColor}20` }}
                >
                    <span className="font-jakarta-bold text-white">{role}</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-syne-bold text-2xl text-[#0a0a36] mb-2">{name}</h3>
                <div className="mb-4">
                    <p className="font-jakarta-bold text-sm text-[#3b36d1] mb-1">Experta en:</p>
                    <p className="font-jakarta text-[#1c1b5a]">{expertise}</p>
                </div>
                <div className="pt-4 border-t border-[#c7d2fe]/30">
                    <p className="font-jakarta-bold text-sm text-[#818cf8] mb-1">Dato curioso:</p>
                    <p className="font-jakarta text-[#1c1b5a]">{funFact}</p>
                </div>
            </div>
        </div>
    )
}