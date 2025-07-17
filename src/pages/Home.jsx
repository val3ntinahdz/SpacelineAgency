import { Navbar } from "../components/Navbar";

const Home = () => {
    return (
    <div>
      <section className="banner-section min-h-screen text-white flex flex-col items-center justify-center bg-banner px-8 pt-30 pb-16">
        <div className="header w-full max-w-4xl">
          <h1 className="font-urbanist text-big tracking-tight leading-none text-center">
            No solo desarrollamos <span className="block mt-0 italic gradient-text">software. </span>
            <br />
            Creamos <span className="block mt-0 italic gradient-text">experiencias.</span>
          </h1>


          <p className="text-tiny font-manrope tracking-tight text-center">
            Combinamos estrategia, diseño y tecnología a la medida para<br />
            llevar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>

      {/* Navbar */}
      < Navbar />
    </div>
  );
}

export default Home;