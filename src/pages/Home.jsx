import { AboutUs } from "../components/AboutUs";
import { HeroLottie } from "../components/HeroLottie";
import { Navbar } from "../components/Navbar";
import { ServicesBanner } from "../components/ServicesBanner";
import { ThreeDMarquee } from "../components/ThreeDMarquee";

const Home = () => {
    return (
    <>
      <div className="relative">
        <Navbar />

        <section className="bg-banner rounded-b-[35px] min-h-screen text-white flex flex-col lg:flex-row items-end justify-end px-10 pt-27 pb-40 relative overflow-hidden"> 

          {/* Contenido de texto */}
          <div className="relative z-30 px-8 md:px-20 max-w-5xl pt-32">
            <h1 className="font-urbanist text-big tracking-tight leading-none text-right">
              Desarrollamos <span className="block mt-0 italic gradient-text">software. </span>
              <br />
              Creamos <span className="block mt-0 italic gradient-text">experiencias.</span>
            </h1>

            <p className="text-tiny font-manrope tracking-tight text-right">
              Combinamos estrategia, diseño y tecnología para<br />
              llevar tu negocio al siguiente nivel.
            </p>
            
            <button
              className="relative font-manrope z-10 mt-10 flex items-center justify-end gap-2 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out border-2 border-white/30 rounded-full shadow-lg group backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-white overflow-hidden ml-auto"
              type="submit"
            >
              <span className="relative z-10">Contáctanos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 19"
                className="w-8 h-8 p-2 transition-transform duration-300 ease-in-out transform bg-white/10 border border-white/30 rounded-full group-hover:translate-x-1 group-hover:rotate-90"
              >
                <path
                  className="fill-white/80 group-hover:fill-white"
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:block absolute h-full left-0 top-0 z-0">
            <div className="relative h-full w-full">
              <HeroLottie className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#131315]/90 to-transparent"></div>
        </section>
      </div> 

      {/* <ThreeDMarquee /> PENDING FEATURE*/}
      <AboutUs />
      <ServicesBanner />
    </>
  );
}

export default Home;