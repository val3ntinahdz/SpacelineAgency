import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { FiExternalLink, FiGithub, FiFigma } from "react-icons/fi";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Plataforma SaaS de Diseño",
      description: "Rediseño completo de interfaz que aumentó la retención de usuarios en un 40%",
      tags: ["UX Research", "Next.js", "Sistema de diseño"],
      image: "/projects/saas-platform.jpg",
      link: "#",
      github: "#",
      figma: "#"
    },
    {
      id: 2,
      title: "Ecommerce de Lujo",
      description: "Solución personalizada que incrementó conversiones en 65% con checkout optimizado",
      tags: ["Ruby on Rails", "Tailwind CSS", "Integración ERP"],
      image: "/projects/luxury-ecommerce.jpg",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Aplicación de Salud Mental",
      description: "Plataforma móvil con IA para seguimiento emocional y recomendaciones personalizadas",
      tags: ["React Native", "Node.js", "Machine Learning"],
      image: "/projects/mental-health-app.jpg",
      link: "#"
    }
  ];

  const stats = [
    { value: "12+", label: "Clientes satisfechos" },
    { value: "40%", label: "Aumento promedio en métricas" },
    { value: "100%", label: "Proyectos entregados a tiempo" },
    { value: "∞", label: "Creatividad aplicada" }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-bl from-[#c7d2fe] via-[#818cf8] via-[#3b36d1] via-[#1c1b5a] to-[#0a0a36]
 rounded-b-[60px] pt-28 pb-32 md:pt-36 md:pb-48">
          
          <div className="relative z-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-syne-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                Portafolio de 
                <PointerHighlight
                  rectangleClassName="bg-white/20 border-white"
                  pointerClassName="text-white h-3 w-3"
                  containerClassName="inline-block mx-1.5"
                >
                  <span className="relative">trabajos destacados</span>
                </PointerHighlight>
              </h1>
              
              <p className="font-jakarta text-[#e0e7ff] text-xl md:text-2xl leading-relaxed mb-10">
                Cada proyecto cuenta una historia de desafíos superados, diseño estratégico y resultados medibles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <p className="font-syne-bold text-[#3b36d1] text-3xl md:text-4xl mb-2">{stat.value}</p>
                <p className="font-jakarta text-[#1c1b5a]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyectos Destacados */}
      <div className="px-6 md:px-12 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-syne-bold text-4xl md:text-5xl text-[#0a0a36] mb-6">
              Nuestros <span className="text-[#3b36d1]">proyectos</span>
            </h2>
            <p className="font-jakarta text-[#1c1b5a]/80 text-lg md:text-xl max-w-3xl mx-auto">
              Selección de trabajos que representan nuestro enfoque estratégico y atención al detalle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-[#3b36d1] hover:bg-[#1c1b5a] text-white font-jakarta-bold px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-3 mx-auto">
              Ver todos los proyectos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Proceso Creativo */}
      <div className="px-6 md:px-12 lg:px-24 py-24 bg-[#f9fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl h-full min-h-[400px]">
                <img 
                  src="/images/process-display.jpg" 
                  alt="Proceso creativo Spaceline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b36d1]/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-syne-bold text-3xl text-white mb-3">Nuestra magia creativa</h3>
                  <p className="font-jakarta text-[#e0e7ff]">Desde el concepto hasta la implementación</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="font-syne-bold text-4xl text-[#0a0a36] mb-8">
                Metodología que <span className="text-[#3b36d1]">garantiza resultados</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-[#3b36d1] text-white font-syne-bold w-12 h-12 rounded-full flex items-center justify-center text-xl">1</div>
                  </div>
                  <div>
                    <h3 className="font-syne-bold text-xl text-[#0a0a36] mb-2">Briefing estratégico</h3>
                    <p className="font-jakarta text-[#1c1b5a]/80">Entendemos tus objetivos, audiencia y KPIs clave</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-[#3b36d1] text-white font-syne-bold w-12 h-12 rounded-full flex items-center justify-center text-xl">2</div>
                  </div>
                  <div>
                    <h3 className="font-syne-bold text-xl text-[#0a0a36] mb-2">Prototipado interactivo</h3>
                    <p className="font-jakarta text-[#1c1b5a]/80">Diseñamos flujos de usuario y interfaces de alta fidelidad</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-[#3b36d1] text-white font-syne-bold w-12 h-12 rounded-full flex items-center justify-center text-xl">3</div>
                  </div>
                  <div>
                    <h3 className="font-syne-bold text-xl text-[#0a0a36] mb-2">Desarrollo ágil</h3>
                    <p className="font-jakarta text-[#1c1b5a]/80">Implementamos en sprints con entregables funcionales cada 2 semanas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b36d1] to-[#818cf8] transform -skew-y-3 origin-top-left z-0"></div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-syne-bold text-4xl md:text-5xl text-white mb-8">
              ¿Listo para crear algo increíble juntos?
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

export default Portfolio;