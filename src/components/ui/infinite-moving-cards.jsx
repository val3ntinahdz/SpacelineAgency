import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingProjectCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            className="group relative w-[350px] max-w-full shrink-0 overflow-hidden rounded-2xl border border-[#1c1b5a]/50 hover:border-[#7d88ff]/50 transition-all duration-500"
            key={idx}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a]/80 z-10"></div>
            
            {/* Contenedor de la imagen con efecto hover - Versión con img estándar */}
            <div className="h-64 relative overflow-hidden">
              {item.image && (
                <img
                  src={item.image}
                  alt={`Preview de ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" // Carga diferida para mejor performance
                />
              )}
              {/* Overlay para mejorar legibilidad del texto */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
            
            <div className="p-6 relative z-20">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-jakarta font-medium bg-[#3b36d1]/10 text-[#7d88ff] mb-3">
                {item.category}
              </span>
              <h3 className="font-syne-bold text-xl text-white mb-2">{item.title}</h3>
              <p className="font-jakarta text-[#e0e7ff]/80">{item.description}</p>
              <button className="mt-4 text-[#7d88ff] font-syne-bold flex items-center group-hover:text-[#918bfb] transition-colors">
                Ver caso completo
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};