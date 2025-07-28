import { Code2, Paintbrush, Brain, Cog } from "lucide-react";

export const ServicesBanner = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios rápidos, modernos y responsivos.",
      icon: <Code2 className="w-8 h-8 text-[#1c1b5a]" />,
      span: "col-span-2", // grande horizontal
    },
    {
      title: "Desarrollo de Software",
      description: "Optimiza tus procesos con tecnología y controla la lógica de tu negocio de manera más eficaz",
      icon: <Cog className="w-8 h-8 text-[#1c1b5a]" />,
      span: "row-span-2", // alta
    },
    {
      title: "Mantenimiento",
      description: "Decisiones técnicas con visión de negocio.",
      icon: <Brain className="w-8 h-8 text-[#1c1b5a]" />,
    },
    {
      title: "UI/UX Design",
      description: "Interfaces intuitivas y centradas en el usuario.",
      icon: <Paintbrush className="w-8 h-8 text-[#1c1b5a]" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#ffff] via-[#e3e1fa] to-[#e0e7ff] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-7xl font-syne-bold font-bold text-end text-[#1c1b5a] mb-16">
          Nuestros servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,_1fr)]">
          {services.map((service, i) => (
            <div
              key={i}
              className={`ring-1 ring-inset ring-[#7d88ff]/30 hover:ring-[#7d88ff]/60
 rounded-2xl p-6 border border-white/10 bg-white/40 backdrop-blur-md shadow-md hover:shadow-[0_0_20px_#918bfb] transition-all duration-300 flex flex-col justify-between ${service.span || ""}`}
            >
              <div>{service.icon}</div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[#1c1b5a] font-syne-bold">
                  {service.title}
                </h3>
                <p className="text-gray-700 mt-2 text-md font-jakarta">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
