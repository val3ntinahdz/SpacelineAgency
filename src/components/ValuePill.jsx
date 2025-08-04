// components/ValuePill.jsx
export const ValuePill = ({ title, description, icon, bgColor, borderColor }) => {
    return (
        <div 
            className="rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            style={{ 
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`
            }}
        >
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="font-syne-bold text-xl text-[#0a0a36] mb-2">{title}</h3>
            <p className="font-jakarta text-[#1c1b5a]">{description}</p>
        </div>
    )
}