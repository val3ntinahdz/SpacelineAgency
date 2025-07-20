import { Navbar } from "../components/Navbar";
import { ServicesBanner } from "../components/ServicesBanner";
import { ThreeDMarquee } from "../components/ThreeDMarquee";

const Home = () => {
    return (
    <>
      <div className="relative">
        <Navbar />

        <section className="banner-section min-h-screen text-white flex flex-col items-start justify-start bg-banner px-40 pt-70 pb-80 py-10">
          <div className="header w-full max-w-4xl">
            <h1 className="font-urbanist text-big tracking-tight leading-none text-start">
              Desarrollamos <span className="block mt-0 italic gradient-text">software. </span>
              <br />
              Creamos <span className="block mt-0 italic gradient-text">experiencias.</span>
            </h1>


            <p className="text-tiny font-manrope tracking-tight text-start">
              Combinamos estrategia, diseño y tecnología a la medida para<br />
              llevar tu negocio al siguiente nivel.
            </p>
            
            <button
              class="relative font-manrope z-10 mt-6 flex items-start justify-start gap-2 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out border-2 border-white/30 rounded-full shadow-lg group backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-white overflow-hidden"
              type="submit"
            >
              <span class="relative z-10">Contáctanos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 19"
                class="w-8 h-8 p-2 transition-transform duration-300 ease-in-out transform bg-white/10 border border-white/30 rounded-full group-hover:translate-x-1 group-hover:rotate-90"
              >
                <path
                  class="fill-white/80 group-hover:fill-white"
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                ></path>
              </svg>
              <span class="absolute inset-0 w-full h-full transition-all duration-700 ease-out scale-0 bg-white/20 rounded-full group-hover:scale-150"></span>
            </button>


          </div>
        </section>
      </div>

      <ThreeDMarquee />
      <ServicesBanner />
    </>
  );
}

export default Home;