import Lottie from "lottie-react";
import animacionData from "../assets/mockups.json";
import cellphoneAnimation from "../assets/cellphones.json";

export const HeroLottie = () => {
  return (
    <div className="w-full h-full object-cover">
      <Lottie animationData={animacionData} loop={true} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};


export const CellphoneLottie = () => {
  return (
    <div className="w-full max-w-[600px] h-auto aspect-square">
        <Lottie 
          animationData={cellphoneAnimation} 
          loop={true} 
          style={{ 
            width: "100%", 
            height: "100%",
            margin: "-50px" // Ajusta este valor negativo según necesites
          }} 
        />
    </div>
  )
};
