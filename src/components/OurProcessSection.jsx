import desktopImage from '../assets/images/desktop.png';
import { ContainerScroll } from './ui/container-scroll-animation';
import { StickyScrollCards } from './StickyScrollCards';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const OurProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-40% 0px -40% 0px' }); // Detecta solo cuando el centro está visible

  return (
    <div className="w-full transition-colors duration-700 ease-in-out" 
         style={{
           backgroundColor: isInView ? '#0b0e11' : 'white', // Spaceline dark fondo vs fondo base
         }}
    >
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-6xl font-syne-bold tracking-tight">
              Tu próximo salto digital <br />
              <span className="text-7xl md:text-[6rem] font-syne-bold mt-1 leading-none tracking-tight bg-gradient-to-l from-[#c7d2fe] to-[#3b36d1] bg-clip-text text-transparent">
                Empieza aquí
              </span>
            </h1>
          }
        >
          <img
            src={desktopImage}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div ref={sectionRef} className="transition-colors duration-500 mt-0">
        <StickyScrollCards />
      </div>
    </div>
  );
};
