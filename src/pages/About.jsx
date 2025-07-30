import { Navbar } from "@/components/Navbar";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const About = () => {
    return (
        <>
            <Navbar />

            <div className="pt-45 px-40">
                <div className="bg-[#0a0a1a] mt-0 rounded-b-[40px]">
                    <h1 className="font-syne-bold text-white text-6xl tracking-tight">
                        Tecnología que
                        <PointerHighlight
                            rectangleClassName="bg-[#5a67ff]/20 border-[#7d88ff]"
                            pointerClassName="text-[#7d88ff] h-3 w-3"
                            containerClassName="inline-block mx-1"
                        >
                            <span>
                                Impulsa
                            </span>
                        </PointerHighlight>

                        <br />Experiencias que<br />
                        <PointerHighlight
                            rectangleClassName="bg-[#5a67ff]/20 border-[#7d88ff]"
                            pointerClassName="text-[#7d88ff] h-3 w-3"
                            containerClassName="inline-block mx-1"
                        >
                            <span>
                                Conectan
                            </span>
                        </PointerHighlight>
                    </h1>
                </div>
            </div>


        </>
    )
}

export default About; 