import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { InfiniteMovingProjectCards } from "@/components/ui/infinite-moving-cards";

// images
import cadeqImage from "../assets/images/portfolio/cadeq.png";
import zoovetImage from "../assets/images/portfolio/zoovet.png";
import michicoinImage from "../assets/images/portfolio/michicoin.png";
import conectaAmorImage from "../assets/images/portfolio/conecta-amor.png";
import pedigreePalcoImage from "../assets/images/portfolio/pedigree-palco.png";
import wisecostImage from "../assets/images/portfolio/wisecost.png";

export const OurWorksSection = () => {
  const projects = [
    {
      category: "Desarrollo Web",
      title: "CADEQ",
      description: "Breve descripción del proyecto y los resultados obtenidos.",
      image: cadeqImage,
    },
    {
      category: "Desarrollo Web",
      title: "ZooVetMX Landing Page",
      description: "Rediseño de interfaz que mejoró la experiencia de usuario.",
      image: zoovetImage,
    },
    {
      category: "UI/UX Design",
      title: "Michicoin.org",
      description: "Rediseño de interfaz que mejoró la experiencia de usuario.",
      image: michicoinImage,
    },
    {
      category: "UI/UX Design",
      title: "Conecta Amor",
      description: "Rediseño de interfaz que mejoró la experiencia de usuario.",
      image: conectaAmorImage,
    },
    {
      category: "Desarrollo de Software",
      title: "Pedigree Palco",
      description: "Solución personalizada para gestión de procesos internos.",
      image: pedigreePalcoImage,
    },
    {
      category: "Desarrollo de Software",
      title: "Wisecost",
      description: "Solución personalizada para gestión de procesos internos.",
      image: wisecostImage,
    },
  ];

  return (
    <section 
      id="portfolio"
      className="bg-[#0a0a1a] py-20 px-6 sm:px-10 lg:px-24 border-t border-[#1c1b5a]/30"
    >
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
        
        <div className="mt-20">
          <InfiniteMovingProjectCards 
            items={projects}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>

        {/* ... (resto del código del botón permanece igual) ... */}
      </div>
    </section>
  );
};