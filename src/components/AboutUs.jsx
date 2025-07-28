import React from 'react';
import abstract from '../assets/images/abstract.png';
import { FaCheckCircle, FaPalette, FaHandsHelping, FaRocket } from 'react-icons/fa';

export const AboutUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: 'Soluciones a la medida',
      description: 'Nada de plantillas: software personalizado para ti.',
      color: 'from-[#6366F1] to-[#818cf8]'
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: 'Diseño estratégico',
      description: 'Potenciamos tu marca con diseño inteligente.',
      color: 'from-[#3b36d1] to-[#5a67ff]'
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: 'Acompañamiento cercano',
      description: 'Estamos contigo en cada paso del proyecto.',
      color: 'from-[#7d88ff] to-[#918bfb]'
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Entrega rápida y escalabilidad',
      description: 'Soluciones que crecen contigo y a tu ritmo.',
      color: 'from-[#5a67ff] to-[#3b36d1]'
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Contenido textual */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 lg:py-32 gap-12 z-10">
        <div className="space-y-6">
          <span className="inline-block font-jakarta font-medium text-[#5a67ff] text-lg tracking-wide">
            Sobre Spaceline
          </span>
          
          <h1 className="font-syne-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-[#1c1b5a]">
            Desarrollamos experiencias digitales{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#818cf8] bg-clip-text text-transparent">
              a la velocidad de las ideas
            </span>
          </h1>

          <p className="font-jakarta text-[#1c1b5a]/90 text-lg leading-relaxed max-w-2xl">
            En Spaceline construimos software funcional y centrado en el usuario. 
            Diseñamos productos digitales que conectan, inspiran y generan resultados reales.
          </p>
        </div>

        {/* Botón mejorado */}
        <button
          className="relative w-max px-10 py-3.5 rounded-full font-syne-bold text-white text-lg
          bg-gradient-to-r from-[#3b36d1] to-[#5a67ff]
          shadow-lg hover:shadow-xl hover:scale-[1.03]
          transition-all duration-300
          group overflow-hidden"
        >
          <span className="relative z-10">Contáctanos</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#5a67ff] to-[#3b36d1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>

        {/* Grid de características mejorado */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {features.map(({ icon, title, description, color }, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-[#e0e7ff]
              shadow-sm hover:shadow-md hover:border-[#7d88ff]/60
              transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center text-white`}>
                {icon}
              </div>
              <h4 className="font-syne-bold text-[#1c1b5a] text-xl mt-2">
                {title}
              </h4>
              <p className="font-jakarta text-[#1c1b5a]/80 text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Imagen de fondo mejorada */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[55%] overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/70 to-transparent z-10"></div>
        <img
          src={abstract}
          alt="Diseño abstracto"
          className="h-full w-full object-cover object-left"
        />
      </div>

      {/* Versión mobile para la imagen */}
      <div className="lg:hidden w-full h-64 mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
        <img
          src={abstract}
          alt="Diseño abstracto"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};