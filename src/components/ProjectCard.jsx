import { FiExternalLink, FiGithub, FiFigma } from "react-icons/fi";

export const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#e0e7ff] hover:border-[#c7d2fe]">
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a36]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="font-jakarta text-white text-lg">{project.description}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="font-syne-bold text-2xl text-[#0a0a36] mb-3">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-[#f0f2ff] text-[#3b36d1] px-3 py-1 rounded-full text-sm font-jakarta">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6 flex gap-3">
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#f6f7ff] flex items-center justify-center text-[#3b36d1] hover:bg-[#3b36d1] hover:text-white transition-colors duration-300"
            aria-label="Ver proyecto"
          >
            <FiExternalLink className="w-5 h-5" />
          </a>
        )}
        
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#f6f7ff] flex items-center justify-center text-[#3b36d1] hover:bg-[#3b36d1] hover:text-white transition-colors duration-300"
            aria-label="Código en GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        
        {project.figma && (
          <a 
            href={project.figma} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#f6f7ff] flex items-center justify-center text-[#3b36d1] hover:bg-[#3b36d1] hover:text-white transition-colors duration-300"
            aria-label="Diseño en Figma"
          >
            <FiFigma className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};