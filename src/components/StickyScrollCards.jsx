import { StickyScroll } from "./ui/sticky-scroll-cards";

import contactImg from "../assets/images/contact.png";
import prototypeImg from "../assets/images/prototype.png";
import developmentImg from "../assets/images/development.png";
import deliveryImg from "../assets/images/delivery.png";

const processContent = [
  {
    title: "Contacto",
    description: "Conectamos contigo para entender tus metas, visión y el impacto que querés lograr.",
    imageUrl: contactImg, // Usa la referencia importada
    imageTitle: "Fase Desarrollo",
  },
  {
    title: "Prototipado",
    description: "Diseñamos interfaces interactivas para validar tu idea antes del desarrollo.",
    imageUrl: prototypeImg,
    imageTitle: "Título opcional",
  },
  {
    title: "Desarrollo",
    description: "Construimos tu producto con tecnologías modernas, eficiencia y calidad.",
    imageUrl: developmentImg,
    imageTitle: "Título opcional",
  },
  {
    title: "Entrega Final",
    description: "Hacemos el lanzamiento, asegurando que todo esté pulido y funcional.",
    imageUrl: deliveryImg,
    imageTitle: "Título opcional",
  },
];

export const StickyScrollCards = () => {
  return (
    <div className="w-full">
      <StickyScroll content={processContent} />
    </div>
  );
}