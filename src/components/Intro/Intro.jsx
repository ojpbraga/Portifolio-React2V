import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Intro() {
  return (
    <section className="relative flex flex-col xl:flex-row items-center justify-center xl:justify-between min-h-[77dvh] py-16 xl:py-20 w-full overflow-hidden px-8 md:px-16 xl:px-24 gap-10 xl:gap-0">

      {/* Glow bg */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#405CD9] rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* ===== LEFT — Texto ===== */}
      <div className="z-10 flex flex-col gap-6 xl:max-w-[55%] text-center xl:text-left">



        {/* Headline */}
        <motion.h1 {...fadeUp(0.1)} className="font-black text-[10vw] md:text-[7vw] xl:text-[5vw] leading-[1.05] tracking-tight text-white">
          Seu próximo<br />
          dev{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#607DFF] to-[#405CD9]">
            Fullstack
          </span>
          <span className="text-[#405CD9]">.</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p {...fadeUp(0.2)} className="text-[#666] text-sm xl:text-base font-medium max-w-md mx-auto xl:mx-0 leading-relaxed">
          Construindo interfaces que impressionam e experiências digitais memoráveis.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex items-center gap-3 justify-center xl:justify-start">
          <a
            href="https://www.linkedin.com/in/ojpbraga"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#405CD9] text-white text-xs font-bold hover:opacity-85 hover:scale-105 transition-all duration-200"
          >
            <img src="/images/linkedln-icon.svg" className="w-4 h-4" alt="LinkedIn" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ojpbraga"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 hover:scale-105 transition-all duration-200"
          >
            <img src="/images/github.svg" className="w-4 h-4" alt="GitHub" />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* ===== RIGHT — Vídeo ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[55%] sm:w-[45%] md:w-[35%] xl:w-[28%] shrink-0"
      >
        {/* Glow atrás */}
        <div className="absolute inset-[-10%] bg-[#405CD9] rounded-full blur-3xl opacity-20 animate-pulse" />
        {/* Decorativo - borda externa */}
        <div className="absolute inset-[-4px] rounded-[36px] border border-[#405CD9]/20" />
        
        <video
          src="/images/avatar.mp4"
          className="relative w-full rounded-[30px] border border-white/10 shadow-[0_0_60px_rgba(64,92,217,0.15)] object-cover"
          loop
          autoPlay
          muted
          playsInline
        />
      </motion.div>

    </section>
  );
}