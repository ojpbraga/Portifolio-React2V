import { RainbowButton } from "../ui/rainbow-button";
import TextRevealByWord from "../ui/text-reveal";

export default function Contact () {

    return (
        <section className="h-[160vh] flex flex-col">
            
            <TextRevealByWord  text='Faça parte do meu futuro.'/>
            <div className=" grid place-items-center w-full h-[35vh] xl:h-[50vh]">
                <RainbowButton>Contact</RainbowButton>
            </div>

        </section>
    )
}