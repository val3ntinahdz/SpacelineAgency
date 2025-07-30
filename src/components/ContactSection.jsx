export const ContactSection = () => {
  return (
    <section id="contact-section" className="relative bg-[#0a0a36] py-32 overflow-hidden font-jakarta">
      {/* Efecto de constelación */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-[#c7d2fe] rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: Math.random() * 0.7 + 0.1
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Título con Syne y gradiente de tu paleta */}
        <h1 className="font-syne-bold text-5xl md:text-6xl font-bold text-start mb-20 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b36d1] via-[#818cf8] to-[#c7d2fe] animate-gradient-shift">
            ¿Tienes un proyecto en mente? <br /> Nos encantaría escucharte
          </span>
        </h1>

        {/* Sección con forma de nebulosa */}
        <div className="relative">
          {/* Fondo orgánico con tus colores */}
          <div className="absolute -inset-8 rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%] bg-gradient-to-tr from-[#1c1b5a] to-[#3b36d150] blur-xl opacity-20 animate-morph"></div>
          
          {/* Grid asimétrico */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Formulario con bordes curvos */}
            <div className="p-10 backdrop-blur-sm bg-[#0a0a36]/80 rounded-3xl border border-[#818cf820] shadow-2xl">
              <form className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder=" "
                    className="w-full px-4 py-3 bg-transparent border-0 border-b-2 border-[#818cf830] text-white focus:border-[#3b36d1] focus:outline-none peer transition-all font-jakarta"
                  />
                  <label className="absolute left-4 top-3 text-[#c7d2fe80] peer-focus:text-[#3b36d1] peer-focus:-top-4 peer-focus:text-sm transition-all pointer-events-none font-jakarta">
                    Nombre
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder=" "
                    className="w-full px-4 py-3 bg-transparent border-0 border-b-2 border-[#818cf830] text-white focus:border-[#818cf8] focus:outline-none peer transition-all font-jakarta"
                  />
                  <label className="absolute left-4 top-3 text-[#c7d2fe80] peer-focus:text-[#818cf8] peer-focus:-top-4 peer-focus:text-sm transition-all pointer-events-none font-jakarta">
                    Email
                  </label>
                </div>
                
                <div className="relative">
                  <textarea 
                    placeholder=" "
                    rows="4"
                    className="w-full px-4 py-3 bg-transparent border-0 border-b-2 border-[#818cf830] text-white focus:border-[#c7d2fe] focus:outline-none peer transition-all resize-none font-jakarta"
                  ></textarea>
                  <label className="absolute left-4 top-3 text-[#c7d2fe80] peer-focus:text-[#c7d2fe] peer-focus:-top-4 peer-focus:text-sm transition-all pointer-events-none font-jakarta">
                    Mensaje
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-[#3b36d1] to-[#818cf8] text-white font-syne-bold rounded-full hover:shadow-[0_0_30px_5px_rgba(59,54,209,0.3)] transition-all duration-500 hover:scale-[1.02] font-syne tracking-wide"
                >
                  Enviar
                </button>
              </form>
            </div>

            {/* Info de contacto con iconos */}
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#3b36d110] rounded-2xl group-hover:bg-[#3b36d130] transition-all">
                  <MailIcon className="h-8 w-8 text-[#3b36d1]" />
                </div>
                <div>
                  <h3 className="text-[#c7d2fe80] text-sm uppercase tracking-widest font-syne">Correo</h3>
                  <a href="mailto:hola@spaceline.com" className="text-2xl text-white hover:text-[#3b36d1] transition-colors font-jakarta">
                    agencyspaceline@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#818cf810] rounded-2xl group-hover:bg-[#818cf830] transition-all">
                  <PhoneIcon className="h-8 w-8 text-[#818cf8]" />
                </div>
                <div>
                  <h3 className="text-[#c7d2fe80] text-sm uppercase tracking-widest font-syne">Número de contacto</h3>
                  <a href="tel:+529515792953" className="text-2xl text-white hover:text-[#818cf8] transition-colors font-jakarta">
                    +52 951 579 2953
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[#c7d2fe10] rounded-2xl group-hover:bg-[#c7d2fe30] transition-all">
                  <MapPinIcon className="h-8 w-8 text-[#c7d2fe]" />
                </div>
                <div>
                  <h3 className="text-[#c7d2fe80] text-sm uppercase tracking-widest font-syne">Ubicación</h3>
                  <p className="text-2xl text-white font-jakarta">México</p>
                </div>
              </div>

              {/* Redes sociales con hover de tu paleta */}
              <div className="flex space-x-4 pt-6">
                {['Twitter', 'Github', 'Linkedin', 'Instagram'].map((red) => (
                  <a 
                    key={red} 
                    href="#"
                    className="p-3 bg-[#1c1b5a] rounded-full hover:bg-gradient-to-br from-[#3b36d1] to-[#818cf8] transition-all duration-500"
                  >
                    <SocialIcon network={red.toLowerCase()} className="h-5 w-5 text-[#c7d2fe]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[40vh] flex items-end justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a36] to-transparent"></div>
        <h2 className="font-syne-bold text-[23vw] leading-none tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3b36d1] via-[#818cf8] to-[#c7d2fe] animate-gradient-shift-slow tracking-tight">
          spaceline
        </h2>
      </div>

      <div className="container mx-auto px-6 text-center mt-10">
        <p className="text-white font-jakarta text-lg opacity-80">
          © {new Date().getFullYear()} Spaceline Agency. Todos los derechos reservados.
        </p>
      </div>

      {/* Animaciones personalizadas */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-shift-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%; }
          50% { border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-gradient-shift-slow {
          background-size: 200% 200%;
          animation: gradient-shift-slow 16s ease infinite;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-morph {
          animation: morph 14s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Iconos personalizados con tus colores
const MailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5"/>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.3036L15.5311 13.0571C14.5295 12.655 13.345 13.5295 13.0571 14.5311L12.8036 15.1429L11 18.25H8.25C6.86929 18.25 5.75 17.1307 5.75 15.75V13L8.85714 11.1964L9.46886 10.9429C10.4705 10.545 11.455 9.52948 11.0571 8.53114L10.8036 7.85714L9 4.75Z" strokeWidth="1.5"/>
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" strokeWidth="1.5"/>
    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" strokeWidth="1.5"/>
  </svg>
);

const SocialIcon = ({ network, className }) => {
  const icons = {
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    ),
    github: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    ),
    linkedin: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    )
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {icons[network] || <circle cx="12" cy="12" r="10"/>}
    </svg>
  );
};