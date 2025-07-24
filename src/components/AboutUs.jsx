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

                    {/* Tarjetas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                    {/* Card 1 */}
                        <div className="rounded-2xl bg-[#0a0a36] p-6 shadow-md hover:shadow-xl transition-all border border-[#1f1d72]/30">
                            <div className="text-3xl mb-3 text-[#818cf8]">🚀</div>
                            <h3 className="text-lg font-syne-bold text-white mb-1">A medida</h3>
                            <p className="text-sm font-jakarta text-gray-400">Creamos soluciones únicas sin plantillas prehechas.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl bg-[#0a0a36] p-6 shadow-md hover:shadow-xl transition-all border border-[#1f1d72]/30">
                            <div className="text-3xl mb-3 text-[#818cf8]">🎨</div>
                            <h3 className="text-lg font-syne-bold text-white mb-1">Diseño con intención</h3>
                            <p className="text-sm font-jakarta text-gray-400">Cada línea, cada color, cada detalle tiene propósito.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl bg-[#0a0a36] p-6 shadow-md hover:shadow-xl transition-all border border-[#1f1d72]/30">
                            <div className="text-3xl mb-3 text-[#818cf8]">🤝</div>
                            <h3 className="text-lg font-syne-bold text-white mb-1">Acompañamiento real</h3>
                            <p className="text-sm font-jakarta text-gray-400">Estás con un equipo humano y presente, siempre.</p>
                        </div>
                    </div>

                    {/* Botón */}
                    <button
                        className="relative z-10 mt-6 flex items-center justify-start gap-3 px-6 py-3 text-lg font-medium text-white transition-all duration-300 ease-in-out rounded-full shadow-lg group backdrop-blur-md overflow-hidden border border-white/20 bg-gradient-to-r from-[#1c1b5a]/60 via-[#3b36d1]/50 to-[#818cf8]/40 hover:from-[#3b36d1]/70 hover:to-[#c7d2fe]/50 hover:shadow-xl"
                        type="button"
                        >
                        <span className="relative z-10 font-syne">Conoce nuestros servicios</span>
                        
                        <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/10 transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:rotate-90">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 19"
                            className="w-4 h-4 fill-white/70 group-hover:fill-white"
                            >
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            />
                            </svg>
                        </span>
                    </button>


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