const Home = () => {
    return (
    <div>
      <section className="banner-section min-h-screen text-white flex flex-col items-start justify-center bg-banner px-8 py-16">
        <div className="w-full max-w-4xl">
          <h1 className="font-urbanist text-big tracking-tight leading-none text-left">
            Creamos y Construimos<br />
            <span className="block mt-0 italic gradient-text">Experiencias.</span>
          </h1>

          <p className="text-tiny font-manrope tracking-tight text-left mt-4">
            Estrategia, diseño y tecnología combinados<br />
            para llevar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>



      {/* Otras secciones abajo */}
      <section className="p-8">
        {/* contenido siguiente */}
      </section>
    </div>
  );
}

export default Home;