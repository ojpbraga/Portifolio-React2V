import { RainbowButton } from "../ui/rainbow-button";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-end h-[77dvh]">
      <div className="w-[90%] xl:w-[80%] bg-[#1B1B1B] rounded-t-[30px] flex flex-col items-center justify-center p-10 xl:p-16 gap-8 text-center h-[88%]">

        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#666]">
            Disponível para oportunidades
          </span>

          <h1 className="font-bold text-[12vw] md:text-[8vw] xl:text-[5vw] leading-tight">
            Vamos<br />
            <span className="text-white">
              conversar?
            </span>
          </h1>

          <p className="text-[#888] text-sm xl:text-base font-medium max-w-md leading-relaxed">
            Estou em busca de estágio em <span className="text-[#E1E1E1]">Front-End e UI Design</span>. Se tiver uma oportunidade ou quiser trocar uma ideia, me manda uma mensagem!
          </p>
        </div>

        <a href="mailto:ojpbraga@gmail.com">
          <RainbowButton>Entrar em contato</RainbowButton>
        </a>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/ojpbraga" target="_blank" rel="noreferrer"
            className="text-xs text-[#555] hover:text-white transition-colors duration-200 font-medium tracking-wide">
            LinkedIn
          </a>
          <span className="text-[#333]">·</span>
          <a href="https://github.com/ojpbraga" target="_blank" rel="noreferrer"
            className="text-xs text-[#555] hover:text-white transition-colors duration-200 font-medium tracking-wide">
            GitHub
          </a>
          <span className="text-[#333]">·</span>
          <a href="mailto:ojpbraga@gmail.com"
            className="text-xs text-[#555] hover:text-white transition-colors duration-200 font-medium tracking-wide">
            ojpbraga@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}