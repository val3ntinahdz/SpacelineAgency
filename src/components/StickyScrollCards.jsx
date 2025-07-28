import { StickyScroll } from "./ui/sticky-scroll-cards";

const processContent = [
  {
    title: "Contacto",
    description: "Conectamos contigo para entender tus metas, visión y el impacto que querés lograr.",
  },
  {
    title: "Prototipado",
    description: "Diseñamos interfaces interactivas para validar tu idea antes del desarrollo.",
  },
  {
    title: "Desarrollo",
    description: "Construimos tu producto con tecnologías modernas, eficiencia y calidad.",
  },
  {
    title: "Entrega Final",
    description: "Hacemos el lanzamiento, asegurando que todo esté pulido y funcional.",
  },
];


export const StickyScrollCards = () => {
  return (
    <div className="w-full">
      <StickyScroll content={processContent} />
    </div>
  );
}
