import { PointerHighlight } from "@/components/ui/pointer-highlight";

export const OurWorksSection = () => {
  return (
    <section 
    id="portfolio"
    className="bg-[#0a0a1a] py-20 px-6 sm:px-10 lg:px-24 border-t border-[#1c1b5a]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-16">
          <h2 className="text-5xl sm:text-6xl font-syne-bold tracking-tight text-white">
            Algunas{" "}
            <PointerHighlight
              rectangleClassName="bg-[#5a67ff]/20 border-[#7d88ff]"
              pointerClassName="text-[#7d88ff] h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7d88ff] to-[#918bfb]">
                misiones
              </span>
            </PointerHighlight>
            <br className="sm:hidden" /> en las que hemos trabajado
          </h2>
          
          <p className="mt-6 font-jakarta text-lg text-[#e0e7ff] max-w-2xl">
            Explora nuestros casos de éxito donde combinamos innovación y diseño para resolver desafíos complejos.
          </p>
        </div>

        {/* Espacio reservado para los proyectos (cards o carrusel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {/* Ejemplo de card de proyecto - repetir por cada proyecto */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#1c1b5a]/50 hover:border-[#7d88ff]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a]/80 z-10"></div>
            <div className="h-64 bg-[#1c1b5a]/30"></div> {/* Imagen iría aquí */}
            <div className="p-6 relative z-20">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-jakarta font-medium bg-[#3b36d1]/10 text-[#7d88ff] mb-3">
                Desarrollo Web
              </span>
              <h3 className="font-syne-bold text-xl text-white mb-2">CADEQ</h3>
              <p className="font-jakarta text-[#e0e7ff]/80">Breve descripción del proyecto y los resultados obtenidos.</p>
              <button className="mt-4 text-[#7d88ff] font-syne-bold flex items-center group-hover:text-[#918bfb] transition-colors">
                Ver caso completo
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Segunda card de ejemplo */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#1c1b5a]/50 hover:border-[#7d88ff]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a]/80 z-10"></div>
            <div className="h-64 bg-[#1c1b5a]/30"></div>
            <div className="p-6 relative z-20">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-jakarta font-medium bg-[#3b36d1]/10 text-[#7d88ff] mb-3">
                UI/UX Design
              </span>
              <h3 className="font-syne-bold text-xl text-white mb-2">ZooVetMX Landing Page</h3>
              <p className="font-jakarta text-[#e0e7ff]/80">Rediseño de interfaz que mejoró la experiencia de usuario.</p>
              <button className="mt-4 text-[#7d88ff] font-syne-bold flex items-center group-hover:text-[#918bfb] transition-colors">
                Ver caso completo
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Tercera card de ejemplo */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#1c1b5a]/50 hover:border-[#7d88ff]/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a]/80 z-10"></div>
            <div className="h-64 bg-[#1c1b5a]/30"></div>
            <div className="p-6 relative z-20">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-jakarta font-medium bg-[#3b36d1]/10 text-[#7d88ff] mb-3">
                Desarrollo de Software
              </span>
              <h3 className="font-syne-bold text-xl text-white mb-2">Wisecost</h3>
              <p className="font-jakarta text-[#e0e7ff]/80">Solución personalizada para gestión de procesos internos.</p>
              <button className="mt-4 text-[#7d88ff] font-syne-bold flex items-center group-hover:text-[#918bfb] transition-colors">
                Ver caso completo
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Botón */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-3.5 rounded-full font-syne-bold text-lg border-2 border-[#3b36d1] text-white bg-[#3b36d1]/10 hover:bg-[#3b36d1]/20 hover:border-[#5a67ff] transition-all duration-300 group">
            ¡Explora nuestro portafolio!
            <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};