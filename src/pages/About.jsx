import { Navbar } from "@/components/Navbar";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

import { ValuePill } from "@/components/ValuePill";
import { GlowCircle } from "@/components/ui/glow-circle";
import { ContactSection } from "@/components/ContactSection";
import { FounderCard } from "@/components/FounderCard";

import threeDShape from '../assets/images/threeShape.png';

const About = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative">
                <div className="bg-gradient-to-bl from-[#818cf8] via-[#5d59e0] to-[#3b36d1] rounded-b-[60px] pt-24 pb-28 md:pt-28 md:pb-40 lg:pb-52 relative overflow-hidden">
                    
                    {/* Efectos de fondo */}
                    <GlowCircle color="#c7d2fe" size="xl" position="top-right" opacity="30" />
                    <GlowCircle color="#a5b4fc" size="lg" position="bottom-left" opacity="20" />
                    
                    {/* Contenido principal */}
                    <div className="relative mt-12 z-20 px-6 md:px-12 lg:px-24 xl:px-32 mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            
                            {/* Texto (siempre visible) */}
                            <div className="z-30 space-y-6 md:space-y-8">
                                <h1 className="font-syne-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.15]">
                                    Creando el futuro digital 
                                    <PointerHighlight
                                    rectangleClassName="bg-white/20 border-white"
                                    pointerClassName="text-white h-3 w-3"
                                    containerClassName="inline-block mx-1.5"
                                    >
                                    <span className="relative">con propósito</span>
                                    </PointerHighlight>
                                </h1>
                                
                                <p className="font-jakarta text-[#e0e7ff] text-lg md:text-xl max-w-2xl leading-relaxed">
                                    En Spaceline combinamos frescura creativa con experiencia técnica. Desarrollamos soluciones web que transforman marcas en experiencias memorables.
                                </p>
                            
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                                    <button
                                        className="relative font-syne-bold z-10 mt-6 sm:mt-8 md:mt-10 flex items-center justify-center lg:justify-start gap-3 px-6 sm:px-7 py-3 sm:py-3.5 text-lg sm:text-xl font-semibold text-white transition-all duration-250 ease-out border-2 border-white/40 rounded-full shadow-lg group backdrop-blur-sm bg-white/15 hover:bg-white/25 hover:border-white/60 hover:shadow-xl active:scale-95 mx-auto lg:ml-0 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                        type="button"
                                    >
                                        <span className="relative z-10 whitespace-nowrap">Contáctanos</span>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 19"
                                        className="w-8 h-8 p-2 transition-transform duration-250 ease-out transform bg-white/20 border border-white/40 rounded-full group-hover:translate-x-1 group-hover:rotate-90"
                                        >
                                        <path
                                            className="fill-white group-hover:fill-white"
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                        ></path>
                                        </svg>
                                    </button>

                                    <button
                                        className="relative font-syne-bold z-10 mt-6 sm:mt-8 md:mt-10 flex items-center justify-center lg:justify-start gap-3 px-6 sm:px-7 py-3 sm:py-3.5 text-lg sm:text-xl font-semibold text-white transition-all duration-250 ease-out border-2 border-white/30 rounded-full shadow-lg group bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 hover:border-white/40 hover:shadow-xl active:scale-95 mx-auto lg:ml-0 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                        type="button"
                                    >
                                        <span className="relative z-10 whitespace-nowrap">Ver portafolio</span>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 19"
                                        className="w-8 h-8 p-2 transition-transform duration-250 ease-out transform bg-white/15 border border-white/30 rounded-full group-hover:translate-x-1 group-hover:rotate-90"
                                        >
                                        <path
                                            className="fill-white/90 group-hover:fill-white"
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                        ></path>
                                        </svg>
                                    </button>
                                    </div>
                                </div>

                                {/* Imagen 3D (grande pero no interfiere) */}
                                <div className="relative z-10 h-full w-full min-h-[400px] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
                                    <img 
                                        src={threeDShape} 
                                        alt="Formas 3D abstractas"
                                        className="w-full h-auto max-w-[900px] ml-150"
                                        style={{
                                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.25))',
                                        clipPath: 'inset(0 0 0 -100px)'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            
            <div className="px-8 md:px-20 lg:px-40 -mt-20 relative z-20">
                <div className="bg-white rounded-[40px] shadow-2xl p-12 md:p-16 lg:p-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="font-syne-bold text-4xl text-[#0a0a36] mb-8">
                                Más que una agencia,<br />
                                <span className="text-[#3b36d1]">un sueño en crecimiento</span>
                            </h2>
                            <p className="font-jakarta text-[#1c1b5a] text-lg leading-relaxed mb-6">
                                Spaceline nació del deseo de hacer el diseño accesible, funcional y memorable para startups y negocios con visión.  
                                Desde el primer día, nos enfocamos en crear soluciones digitales con alto impacto, cuidando cada detalle del proceso.
                            </p>
                            <p className="font-jakarta text-[#1c1b5a] text-lg leading-relaxed">
                                En solo siete meses, hemos colaborado con más de 10 clientes y lanzado 8 proyectos que reflejan lo que mejor sabemos hacer:  
                                fusionar tecnología, diseño y estrategia para lograr resultados extraordinarios.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#f6f7ff] rounded-3xl p-6 border border-[#c7d2fe]/30">
                                    <h3 className="font-syne-bold text-[#3b36d1] text-3xl mb-2">12+</h3>
                                    <p className="font-jakarta text-[#1c1b5a]">Clientes felices</p>
                                </div>
                                <div className="bg-[#f6f7ff] rounded-3xl p-6 border border-[#c7d2fe]/30">
                                    <h3 className="font-syne-bold text-[#3b36d1] text-3xl mb-2">15</h3>
                                    <p className="font-jakarta text-[#1c1b5a]">Proyectos lanzados</p>
                                </div>
                                <div className="bg-[#f6f7ff] rounded-3xl p-6 border border-[#c7d2fe]/30">
                                    <h3 className="font-syne-bold text-[#3b36d1] text-3xl mb-2">100%</h3>
                                    <p className="font-jakarta text-[#1c1b5a]">Women-powered</p>
                                </div>
                                <div className="bg-[#f6f7ff] rounded-3xl p-6 border border-[#c7d2fe]/30">
                                    <h3 className="font-syne-bold text-[#3b36d1] text-3xl mb-2">∞</h3>
                                    <p className="font-jakarta text-[#1c1b5a]">Creatividad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filosofía - Sección Rediseñada con Visuales */}
            <div className="px-6 md:px-12 lg:px-24 py-24 bg-[#f9fafc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="font-syne-bold text-4xl md:text-5xl text-[#0a0a36] mb-6">
                        Nuestro ADN <span className="text-[#3b36d1]">creativo</span>
                    </h2>
                    <p className="font-jakarta text-[#1c1b5a]/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Los principios que guían cada decisión y cada línea de código en Spaceline
                    </p>
                    </div>
                    
                    {/* Tarjetas de valores con iconos animados */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#e0e7ff] hover:border-[#c7d2fe]">
                        <div className="w-16 h-16 rounded-2xl bg-[#f0f2ff] flex items-center justify-center mb-6 group-hover:bg-[#3b36d1] transition-all duration-300">
                        <svg className="w-8 h-8 text-[#3b36d1] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        </div>
                        <h3 className="font-syne-bold text-2xl text-[#0a0a36] mb-3">Velocidad con propósito</h3>
                        <p className="font-jakarta text-[#1c1b5a]/80 leading-relaxed">
                        Iteramos rápido pero con dirección clara. Cada sprint acerca al producto a su mejor versión.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#e0e7ff] hover:border-[#c7d2fe]">
                        <div className="w-16 h-16 rounded-2xl bg-[#f0f2ff] flex items-center justify-center mb-6 group-hover:bg-[#3b36d1] transition-all duration-300">
                        <svg className="w-8 h-8 text-[#3b36d1] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        </div>
                        <h3 className="font-syne-bold text-2xl text-[#0a0a36] mb-3">Seguridad ante todo</h3>
                        <p className="font-jakarta text-[#1c1b5a]/80 leading-relaxed">
                        Implementamos las mejores prácticas de seguridad desde el primer commit hasta el deploy.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#e0e7ff] hover:border-[#c7d2fe]">
                        <div className="w-16 h-16 rounded-2xl bg-[#f0f2ff] flex items-center justify-center mb-6 group-hover:bg-[#3b36d1] transition-all duration-300">
                        <svg className="w-8 h-8 text-[#3b36d1] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        </div>
                        <h3 className="font-syne-bold text-2xl text-[#0a0a36] mb-3">Mobile-first</h3>
                        <p className="font-jakarta text-[#1c1b5a]/80 leading-relaxed">
                        Diseñamos pensando primero en móvil, porque sabemos que es donde tus usuarios te encontrarán.
                        </p>
                    </div>
                    </div>
                    
                    {/* Proceso de trabajo visual */}
                    <div className="bg-gradient-to-r from-[#3b36d1] to-[#5d59e0] rounded-3xl p-10 md:p-14 text-white overflow-hidden relative">
                        <GlowCircle color="#ffffff" size="lg" position="top-right" opacity="10" />
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="md:w-1/2">
                                <h3 className="font-syne-bold text-3xl md:text-4xl mb-6">Nuestro proceso de trabajo</h3>
                                <p className="font-jakarta text-white/90 mb-8 leading-relaxed">
                                Metodología ágil que garantiza resultados sin sacrificar calidad o transparencia.
                                </p>
                                <button className="bg-white hover:bg-[#f6f7ff] text-[#0a0a36] font-jakarta px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center gap-2">
                                Ver caso de estudio
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                            <div className="md:w-1/2">
                                <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                                    <span className="font-syne-bold text-xl">1</span>
                                    </div>
                                    <div>
                                    <h4 className="font-syne-bold text-xl mb-2">Descubrimiento</h4>
                                    <p className="font-jakarta text-white/90">Investigación de mercado y usuarios</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                                    <span className="font-syne-bold text-xl">2</span>
                                    </div>
                                    <div>
                                    <h4 className="font-syne-bold text-xl mb-2">Diseño estratégico</h4>
                                    <p className="font-jakarta text-white/90">Wireframes, prototipos y pruebas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                                    <span className="font-syne-bold text-xl">3</span>
                                    </div>
                                    <div>
                                    <h4 className="font-syne-bold text-xl mb-2">Desarrollo ágil</h4>
                                    <p className="font-jakarta text-white/90">Sprints de 2 semanas con entregables</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Final  */}
            <div className="relative overflow-hidden bg-[#0a0a36]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b36d1] to-[#818cf8] transform -skew-y-3 origin-top-left z-0"></div>
            <div className="relative z-10 px-6 md:px-12 lg:px-24 py-28">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-syne-bold text-4xl md:text-5xl text-white mb-6">
                        Transformemos tus ideas en <span className="text-[#c7d2fe]">realidad digital</span>
                        </h2>
                        <p className="font-jakarta text-[#e0e7ff] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Desde el concepto inicial hasta el lanzamiento, estamos contigo en cada paso del viaje.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                        <button className="bg-white hover:bg-[#f6f7ff] text-[#0a0a36] font-syne-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Agenda una llamada
                        </button>
                        <button className="bg-transparent hover:bg-white/10 text-white font-syne-bold px-8 py-4 rounded-full transition-all duration-300 border-2 border-white flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver portafolio
                        </button>
                    </div>
                    
                    {/* Elementos decorativos */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#818cf8]/20 blur-3xl z-0"></div>
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#3b36d1]/30 blur-2xl z-0"></div>
                </div>
            </div>
            </div>

            <ContactSection />
        </>
    )
}

export default About;