// import codeScreen from '../assets/images/code.jpg';
import { CellphoneLottie } from './HeroLottie';

export const AboutUs = () => {
    return (
        <>

            <div className="about-container flex flex-col lg:flex-row items-center justify-between pl-4 lg:pl-8">
                <p className="font-jakarta text-4xl lg:mb-0 lg:w-[60%] tracking-tighter bg-gradient-to-r from-black via-[#2f2f4f] to-[#7D88FF] bg-clip-text text-transparent">
                    En Spaceline Agency creemos que cada marca merece una solución única.
                    No usamos plantillas: creamos a la medida de tu visión.
                </p>


                < CellphoneLottie />
            </div>
                    
        </>
    )
}