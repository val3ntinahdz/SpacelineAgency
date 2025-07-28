import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

   useEffect(() => {
    setActiveCard(0);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, #3b36d1, #9333ea)",
      "linear-gradient(to bottom right, #6366f1, #06b6d4)",
      "linear-gradient(to bottom right, #3b36d1, #0ea5e9)", 
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      className="relative flex min-h-[90vh] justify-center space-x-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              {/* Contenedor del número y título con efecto de iluminación */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.4,
                  x: activeCard === index ? 0 : -20,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                  "flex items-center mb-4",
                  activeCard === index ? "glow-effect" : ""
                )}
              >
                {/* Número del paso con estilo circular */}
                <motion.div
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full mr-4",
                    "border-2",
                    activeCard === index 
                      ? "border-white bg-white/10 text-white text-6xl font-syne-bold" 
                      : "border-slate-500 text-slate-500"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xl font-bold">{index + 1}</span>
                </motion.div>
                
                {/* Título con efecto de iluminación cuando está activo */}
                <motion.h2
                  className={cn(
                    "text-7xl font-syne-bold",
                    activeCard === index ? "bg-gradient-to-r from-[#818cf8] to-[#c7d2fe] bg-clip-text text-transparent" : "text-slate-500"
                  )}
                >
                  {item.title}
                </motion.h2>
              </motion.div>
              
              {/* Descripción con animación suave */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 10
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-sm text-slate-300 font-jakarta tracking-tight text-2xl"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Panel derecho con efecto de iluminación más pronunciado */}
      <motion.div
        style={{ background: backgroundGradient }}
        animate={{
          boxShadow: activeCard !== null 
            ? "0 0 30px rgba(99, 102, 241, 0.5)" 
            : "none"
        }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </motion.div>
    </motion.div>
  );
};