import TextRevealByWord from "./ui/text-reveal";
import { NeonGradientCard } from "./ui/neon-gradient-card";

export default function Contact () {

    return (
        <section className="h-[160vh] flex flex-col">
            
            <TextRevealByWord  text='Faça parte do meu futuro.'/>
            <div className=" grid place-items-center w-full h-[35vh] xl:h-[50vh]">
                <NeonGradientCard className="max-w-sm items-center justify-center h-[20vh] text-center rounded-full">
                    <span className="pointer-events-none z-10 h-full grid place-items-center whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-white text-5xl">
                    Contato
                    </span>
                </NeonGradientCard>
            </div>

        </section>
    )
}