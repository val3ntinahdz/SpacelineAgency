import { Navbar } from "@/components/Navbar";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import TestimonialCard from "@/components/TestimonialCard";
import { ContactSection } from "@/components/ContactSection";

import secondDShape from '../assets/images/secondShape.png';

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="bg-gradient-to-bl from-[#0a0a36] via-[#1c1b5a] via-[#3b36d1] via-[#818cf8] to-[#c7d2fe]
 rounded-b-[60px] pt-28 pb-32 md:pt-36 md:pb-48 relative overflow-hidden">
          
          <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mr-0 mt-10">
            <div className="text-right max-w-4xl mx-auto">
              <h1 className="font-syne-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                Soluciones digitales 
                <PointerHighlight
                  rectangleClassName="bg-white/20 border-white"
                  pointerClassName="text-white h-3 w-3"
                  containerClassName="inline-block mx-1.5"
                >
                  <span className="relative">a medida</span>
                </PointerHighlight>
              </h1>
              
              <p className="font-jakarta text-[#e0e7ff] text-xl md:text-2xl leading-relaxed mb-10">
                Diseño y desarrollo web premium para marcas que buscan <br /> destacar con una presencia digital excepcional.
              </p>

              <button
                  className="relative font-syne-bold z-10 mt-6 sm:mt-8 md:mt-10 flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 text-lg sm:text-xl font-semibold text-white transition-all duration-250 ease-out border-2 border-white/40 rounded-full shadow-lg group backdrop-blur-sm bg-white/15 hover:bg-white/25 hover:border-white/60 hover:shadow-xl active:scale-95 ml-auto w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  type="button"
              >
                  <span className="relative z-10 whitespace-nowrap">Contáctanos</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 19"
                    className="w-6 h-6 inline-block transition-transform duration-250 ease-out bg-white/20 border border-white/40 rounded-full group-hover:translate-x-1 group-hover:rotate-90 align-middle"
                  >
                    <path
                      className="fill-white group-hover:fill-white"
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    ></path>
                  </svg>
              </button>
            </div>
          </div>

            <div className="relative z-10 h-full w-full min-h-[400px] md:absolute md:left-0 md:top-0 md:-translate-x-1/2">
              <img 
                  src={secondDShape} 
                  alt="Formas 3D abstractas"
                  className="w-full h-auto max-w-[1200px] ml-100"
                  style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.25))',
                  clipPath: 'inset(0 0 0 -100px)'
                  }}
              />
          </div>
        </div>
      </div>

      {/* Nuestros Servicios */}
      <div className="px-6 md:px-12 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-syne-bold text-4xl md:text-5xl text-[#0a0a36] mb-6">
              Nuestro <span className="text-[#3b36d1]">stack de servicios</span>
            </h2>
            <p className="font-jakarta text-[#1c1b5a]/80 text-lg md:text-xl max-w-3xl mx-auto">
              Soluciones integrales desde el concepto inicial hasta el lanzamiento y más allá
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={
                <svg className="w-10 h-10 text-[#3b36d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Diseño UX/UI Premium"
              description="Interfaces intuitivas y hermosas que convierten visitantes en clientes"
              highlights={[
                "Research de usuarios",
                "Prototipos interactivos",
                "Sistemas de diseño",
                "Pruebas de usabilidad"
              ]}
              bgColor="#f6f7ff"
              borderColor="#c7d2fe"
            />
            
            <ServiceCard 
              icon={
                <svg className="w-10 h-10 text-[#5d59e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              title="Desarrollo Web Avanzado"
              description="Sitios rápidos, seguros y escalables con tecnología de punta"
              highlights={[
                "Next.js/React",
                "Ruby on Rails",
                "Bases de datos optimizadas",
                "Integraciones API"
              ]}
              bgColor="#f0f2ff"
              borderColor="#a5b4fc"
            />
            
            <ServiceCard 
              icon={
                <svg className="w-10 h-10 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Estrategia Digital"
              description="Planes de crecimiento basados en datos y mejores prácticas"
              highlights={[
                "Análisis de mercado",
                "Roadmap tecnológico",
                "Arquitectura de información",
                "KPIs personalizados"
              ]}
              bgColor="#e0e7ff"
              borderColor="#818cf8"
            />
          </div>
        </div>
      </div>

      {/* Nuestro Enfoque */}
      <div className="px-6 md:px-12 lg:px-24 py-24 bg-[#f9fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl">
                <img 
                  src="/images/equipo-trabajando.jpg" 
                  alt="Equipo Spaceline trabajando"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b36d1]/50 to-transparent"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="font-syne-bold text-4xl text-[#0a0a36] mb-8">
                Metodología <span className="text-[#3b36d1]">centrada en resultados</span>
              </h2>
              
              <div className="space-y-8">
                <ProcessStep 
                  number="01"
                  title="Descubrimiento estratégico"
                  description="Investigación profunda para entender tus objetivos, audiencia y mercado"
                />
                
                <ProcessStep 
                  number="02"
                  title="Diseño iterativo"
                  description="Prototipado rápido con feedback constante para refinar la solución"
                />
                
                <ProcessStep 
                  number="03"
                  title="Desarrollo ágil"
                  description="Implementación en sprints con entregables funcionales cada 2 semanas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Casos de Estudio */}
      <div className="px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-[#0a0a36] to-[#1c1b5a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-syne-bold text-4xl md:text-5xl mb-6">
              Transformaciones <span className="text-[#818cf8]">digitales</span>
            </h2>
            <p className="font-jakarta text-[#c7d2fe] text-lg md:text-xl max-w-3xl mx-auto">
              Proyectos donde hemos ayudado a marcas a alcanzar sus objetivos digitales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-[#3b36d1]/30 hover:border-[#818cf8]/50 transition-all duration-300">
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img src="/images/caso-1.jpg" alt="Caso de estudio 1" className="w-full h-auto" />
              </div>
              <h3 className="font-syne-bold text-2xl mb-3">Rediseño de plataforma SaaS</h3>
              <p className="font-jakarta text-[#e0e7ff] mb-6">Aumentamos la retención de usuarios en un 40% con un rediseño centrado en UX</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#3b36d1]/30 text-[#c7d2fe] px-3 py-1 rounded-full text-sm">UX Research</span>
                <span className="bg-[#3b36d1]/30 text-[#c7d2fe] px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-[#3b36d1]/30 text-[#c7d2fe] px-3 py-1 rounded-full text-sm">Sistema de diseño</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-[#3b36d1]/30 hover:border-[#818cf8]/50 transition-all duration-300">
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img src="/images/caso-2.jpg" alt="Caso de estudio 2" className="w-full h-auto" />
              </div>
              <h3 className="font-syne-bold text-2xl mb-3">Ecommerce de lujo</h3>
              <p className="font-jakarta text-[#e0e7ff] mb-6">Solución personalizada que incrementó las conversiones en un 65%</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#3b36d1]/30 text-[#c7d2fe] px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
                <span className="bg-[#3b36d1]/30 text-[#c7d2fe] px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                <span className="bg-[#3b36d1]/30 text-[#c7d2fe] px-3 py-1 rounded-full text-sm">Integración ERP</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-[#818cf8] hover:bg-[#a5b4fc] text-[#0a0a36] font-syne-bold px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-3 mx-auto">
              Ver todos los casos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="px-6 md:px-12 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-syne-bold text-4xl md:text-5xl text-[#0a0a36] mb-6">
              Lo que dicen <span className="text-[#3b36d1]">nuestros clientes</span>
            </h2>
            <p className="font-jakarta text-[#1c1b5a]/80 text-lg md:text-xl max-w-3xl mx-auto">
              Historias de colaboraciones exitosas y resultados transformadores
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Spaceline transformó completamente nuestra presencia digital. Su enfoque estratégico hizo la diferencia."
              author="María González"
              role="CEO, TechStartup"
              avatar="/avatars/maria.jpg"
              rating={5}
            />
            
            <TestimonialCard 
              quote="El diseño que crearon superó todas nuestras expectativas. ¡Nuestros usuarios están encantados!"
              author="Carlos Mendoza"
              role="Director de Marketing"
              avatar="/avatars/carlos.jpg"
              rating={5}
            />
            
            <TestimonialCard 
              quote="Rara vez encuentras un equipo que combine tan bien diseño y tecnología. Totalmente recomendados."
              author="Ana Lucía Ramírez"
              role="Fundadora, EcoBrand"
              avatar="/avatars/ana.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b36d1] to-[#818cf8] transform -skew-y-3 origin-top-left z-0"></div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-syne-bold text-4xl md:text-5xl text-white mb-8">
              ¿Listo para llevar tu presencia digital al siguiente nivel?
            </h2>
            <p className="font-jakarta text-[#e0e7ff] text-xl mb-10 leading-relaxed">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-[#f6f7ff] text-[#0a0a36] font-jakarta-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Agenda una llamada
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-jakarta-bold px-8 py-4 rounded-full transition-all duration-300 border-2 border-white shadow-lg hover:shadow-xl">
                Envíanos un email
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default Services;