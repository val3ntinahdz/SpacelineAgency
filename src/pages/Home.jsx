import { Navbar } from "../components/Navbar";

const Home = () => {
    return (
      
    <div>
      {/* Navbar */}
      < Navbar />

      <section className="banner-section min-h-screen text-white flex flex-col items-start justify-start bg-banner px-14 pt-80 pb-10">
        <div className="header w-full max-w-4xl">
          <h1 className="font-urbanist text-big tracking-tight leading-none text-left">
            Desarrollamos <span className="block mt-0 italic gradient-text">Software. </span>
            <br />
            Creamos <span className="block mt-0 italic gradient-text">Experiencias.</span>
          </h1>


          <p className="text-tiny font-manrope tracking-tight text-left">
            Combinamos estrategia, diseño y tecnología a la medida para<br />
            llevar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;