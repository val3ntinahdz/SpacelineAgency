import abstract from '../assets/images/abstract.png';

export const AboutUs = () => {
    return (
        <>

            <div className="about-container flex flex-col lg:flex-row items-start gap-6 lg:gap-12 pl-4 lg:pl-8 m-10">
                {/* Columna Izquierda */}
                <div className="lg:w-[55%] flex flex-col gap-6">
                    <p className="font-jakarta text-4xl tracking-tight bg-gradient-to-r from-black via-[#2f2f4f] to-[#d6d6d6] bg-clip-text text-transparent">
                    En Spaceline Agency creemos que cada marca merece una solución única.
                    No usamos plantillas: creamos a la medida de tu visión.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                        {[1, 2, 3].map((_, i) => (
                            <div
                            key={i}
                            className="relative rounded-3xl p-6 bg-gradient-to-br from-[rgba(109,110,255,0.18)] to-[rgba(255,255,255,0.02)] backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300 group text-white overflow-hidden"
                            >
                            {/* Textura sutil */}
                            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle,#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />

                            <div className="relative z-10 text-7xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                                {i === 1 ? '🚀' : i === 2 ? '🎨' : '🤝'}
                            </div>

                           <h3 className="text-xl font-syne-bold mb-2 text-[#1c1b5a] bg-clip-text">
                                {i === 1
                                ? 'A medida'
                                : i === 2
                                ? 'Diseño con intención'
                                : 'Acompañamiento real'}
                            </h3>

                            <p className="relative z-10 text-sm font-jakarta text-[#1c1b5a]/80">
                                {i === 1
                                ? 'Creamos soluciones únicas sin plantillas prehechas.'
                                : i === 2
                                ? 'Cada línea, cada color, cada detalle tiene propósito.'
                                : 'Estás con un equipo humano y presente, siempre.'}
                            </p>
                        </div>
                        ))}
</div>


                </div>

                {/* Columna Derecha: Imagen */}
                <img
                    src={abstract}
                    className="w-[300px] md:w-[400px] lg:w-[720px] mr-[-150px]"
                    alt="abstract visual"
                />
            </div>

        </>
    )
}