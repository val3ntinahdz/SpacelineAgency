import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content }) => {
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

  return (
    <motion.div
      className="relative min-h-[100vh] py-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4">
        {content.map((item, index) => (
          <div 
            key={item.title + index} 
            className="flex flex-col lg:flex-row items-center justify-center my-24 gap-8"
          >
            {/* Contenido textual con efectos */}
            <div className="lg:w-1/2 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.4,
                  x: activeCard === index ? 0 : -40,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center mb-4"
              >
                <motion.div
                  className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-full mr-4",
                    "border-2",
                    activeCard === index 
                      ? "border-[#c7d2fe] text-[#c7d2fe]" 
                      : "border-[#818cf8] text-[#818cf8]"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl font-syne-bold">{index + 1}</span>
                </motion.div>
                
                <motion.h2
                  className={cn(
                    "text-5xl md:text-7xl font-syne-bold tracking-tighter",
                    activeCard === index 
                      ? "bg-gradient-to-r from-[#818cf8] to-[#c7d2fe] bg-clip-text text-transparent" 
                      : "text-[#818cf8]"
                  )}
                  whileHover={{ scale: 1.02 }}
                >
                  {item.title}
                </motion.h2>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-md text-white font-jakarta text-2xl leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>

            {/* Imagen con efectos */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ 
                opacity: activeCard === index ? 1 : 0.4,
                x: activeCard === index ? 0 : 40,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto max-h-[50vh] object-contain"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};