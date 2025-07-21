import Lottie from "lottie-react";
import animacionData from "../assets/mockups.json";

export const HeroLottie = () => {
  return (
    <div className="w-full h-full object-cover">
      <Lottie animationData={animacionData} loop={true} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
