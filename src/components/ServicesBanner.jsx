import { Code2, Paintbrush, Brain, Cog } from "lucide-react";

export const ServicesBanner = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios rápidos, modernos y responsivos.",
      icon: <Code2 className="w-10 h-10" />,
      span: "md:col-span-2",
      color: "bg-[#5a67ff]/10"
    },
    {
      title: "Desarrollo de Software",
      description: "Optimiza tus procesos con tecnología y controla la lógica de tu negocio de manera más eficaz",
      icon: <Cog className="w-10 h-10" />,
      span: "md:row-span-2",
      color: "bg-[#1c1b5a]/10"
    },
    {
      title: "Mantenimiento",
      description: "Decisiones técnicas con visión de negocio.",
      icon: <Brain className="w-10 h-10" />,
      color: "bg-[#7d88ff]/10"
    },
    {
      title: "UI/UX Design",
      description: "Interfaces intuitivas y centradas en el usuario.",
      icon: <Paintbrush className="w-10 h-10" />,
      color: "bg-[#918bfb]/10"
    }
  ];

  return (
    <div className="relative bg-[#0a0a1a]">

      <section className="bg-gradient-to-b from-white via-[#f0f2ff] to-[#c7d2fe] py-24 px-6 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-lg font-jakarta font-medium text-[#5a67ff] mb-2 block flex items-center">
                Lo que ofrecemos
              </span> 
              <h2 className="text-5xl md:text-6xl font-syne-bold font-bold text-[#1c1b5a] leading-tight tracking-tight">
                Servicios diseñados para{' '}
                <span className="relative inline-block">
                  impulsar tu negocio
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#7d88ff]/30 -z-10"></span>
                </span>
              </h2>
            </div>
            
            {/* Botón CTA moderno en lugar de la línea */}
            <button className="hidden lg:flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#5a67ff] to-[#3b36d1] text-white font-syne-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              Ver todos los servicios
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,_1fr)]">
            {services.map((service, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${service.color} backdrop-blur-sm border border-white/70
                  shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col 
                  hover:-translate-y-2 hover:border-[#7d88ff]/40 relative overflow-hidden group ${service.span || ""}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7d88ff_0,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="mb-6 p-3 bg-white rounded-xl w-12 h-12 flex items-center justify-center shadow-xs group-hover:rotate-12 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-[#1c1b5a] font-syne-bold mb-3 relative inline-block">
                    {service.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a67ff] group-hover:w-full transition-all duration-500"></span>
                  </h3>
                  <p className="text-[#1c1b5a]/90 text-md font-jakarta leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón CTA para móvil */}
          <div className="mt-12 lg:hidden text-center">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5a67ff] to-[#3b36d1] text-white font-syne-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              Ver todos los servicios
              <svg className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};