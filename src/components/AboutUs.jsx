import React from 'react';
import abstract from '../assets/images/abstract.png';
import { FaCheckCircle, FaPalette, FaHandsHelping, FaRocket } from 'react-icons/fa';

export const AboutUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-[#3b36d1] w-12 h-12 flex-shrink-0" />,
      title: 'Soluciones a la medida',
      description: 'Nada de plantillas: software personalizado para ti.',
    },
    {
      icon: <FaPalette className="text-[#3b36d1] w-12 h-12 flex-shrink-0" />,
      title: 'Diseño estratégico',
      description: 'Potenciamos tu marca con diseño inteligente.',
    },
    {
      icon: <FaHandsHelping className="text-[#3b36d1] w-12 h-12 flex-shrink-0" />,
      title: 'Acompañamiento cercano',
      description: 'Estamos contigo en cada paso del proyecto.',
    },
    {
      icon: <FaRocket className="text-[#3b36d1] w-12 h-12 flex-shrink-0" />,
      title: 'Entrega rápida y escalabilidad',
      description: 'Soluciones que crecen contigo y a tu ritmo.',
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex bg-white overflow-x-visible">
      {/* Imagen grande posicionada a la derecha, desbordando */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[50vw] overflow-visible">
        <img
          src={abstract}
          alt="Banner visual"
          className="h-full w-auto object-cover rounded-l-3xl filter brightness-105 contrast-110"
          style={{ maxWidth: '140vw' }}
        />
        {/* Overlay degradado para suavizar borde izquierdo */}
        <div
          className="absolute top-0 left-0 h-full w-48 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, transparent, rgba(255,255,255,0.95))',
            zIndex: 1,
          }}
        />
      </div>

      {/* Contenido textual y cards */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-24 gap-16 bg-white bg-opacity-90">

        {/* Texto principal */}
        <div>
          <h1 className="font-syne-bold text-5xl lg:text-6xl leading-tight tracking-tight mb-6 bg-gradient-to-r from-[#818cf8] via-[#3b36d1] to-[#818cf8] bg-clip-text text-transparent">
            Desarrollamos experiencias digitales <br />
            <span className="text-transparent bg-gradient-to-r from-[#6366F1] to-[#818cf8] bg-clip-text">
              a la velocidad de las ideas.
            </span>
          </h1>

          <p className="font-jakarta text-[#1c1b5a] text-lg lg:text-xl leading-relaxed max-w-xl">
            En Spaceline construimos software funcional y centrado en el usuario. Diseñamos productos digitales que conectan, inspiran y generan resultados reales.
          </p>
        </div>

        {/* Botón con animación pulse */}
        <button
          type="submit"
          className="mt-8 w-max px-12 py-4 rounded-full font-syne text-white text-xl
            bg-[#3b36d1] shadow-lg
            hover:bg-[#818cf8]
            transition-colors duration-300
            focus:outline-none focus:ring-4 focus:ring-[#818cf8]/50
            active:scale-95 transform
            animate-pulse-slow"
        >
          Contáctanos
        </button>

        {/* Grid 2x2 Cards extendidas */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-xl">
          {features.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-8 rounded-2xl border border-[#3b36d1]/40
                shadow-lg hover:shadow-2xl hover:scale-[1.08]
                transition-transform duration-300 cursor-pointer"
              style={{ animation: `fadeSlideUp 0.6s ease forwards`, animationDelay: `${i * 0.2}s`, opacity: 0 }}
            >
              <div className="flex items-center gap-5 relative">
                {icon}
                <h4 className="font-syne-bold text-[#0a0a36] text-1xl mb-1 relative after:block after:w-14 after:h-1 after:rounded-full after:absolute after:-bottom-3 after:left-0">
                  {title}
                </h4>
              </div>
              <p className="font-jakarta text-[#1c1b5a] text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </section>
  );
};
