const Home = () => {
    return (
    <div>
      <section className="banner-section min-h-screen text-white flex flex-col items-start justify-center bg-banner px-8 pt-45 pb-16">
        <div className="header w-full max-w-4xl">
          <h1 className="font-urbanist text-big tracking-tight leading-none text-left">
            No solo desarrollamos <span className="block mt-0 italic gradient-text">software. </span>
            <br />
            Creamos <span className="block mt-0 italic gradient-text">experiencias.</span>
          </h1>


          <p className="text-tiny font-manrope tracking-tight text-left">
            Combinamos estrategia, diseño y tecnología a la medida para<br />
            llevar tu negocio al siguiente nivel.
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