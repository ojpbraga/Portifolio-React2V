import { motion } from 'framer-motion';
import { GlassButton } from '../ui/liquid-glass';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function Intro() {
    return (
        <section className="relative flex flex-col xl:flex-row items-center justify-center xl:justify-between min-h-[70dvh] py-10 xl:py-20 w-full overflow-hidden px-6 sm:px-10 md:px-16 xl:px-24 gap-8 xl:gap-0">

            {/* Glow ambiente */}
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-blue-500 rounded-full blur-[120px] opacity-10 pointer-events-none" />
            <div className="absolute right-[10%] top-[30%] w-[20vw] h-[20vw] bg-indigo-500 rounded-full blur-[100px] opacity-8 pointer-events-none" />

            {/* LEFT — Texto */}
            <div className="z-10 flex flex-col gap-7 xl:max-w-[55%] text-center xl:text-left">

                {/* Headline */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="font-black text-[10vw] md:text-[7vw] xl:text-[5vw] leading-[1.05] tracking-tight text-white"
                >
                    Seu próximo<br />
                    dev{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#A78BFA]">
                        Fullstack
                    </span>
                    <span className="text-indigo-400">.</span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    {...fadeUp(0.18)}
                    className="text-white/40 text-sm xl:text-base font-medium max-w-md mx-auto xl:mx-0 leading-relaxed"
                >
                    Construindo interfaces que impressionam e experiências digitais memoráveis.
                </motion.p>

                {/* CTAs */}
                <motion.div {...fadeUp(0.26)} className="flex items-center gap-3 justify-center xl:justify-start">
                    <GlassButton
                        href="https://www.linkedin.com/in/ojpbraga"
                        target="_blank"
                        className="text-xs font-bold text-white"
                    >
                        <span className="flex items-center gap-2 px-1">
                            <img src="/images/linkedln-icon.svg" className="w-4 h-4" alt="LinkedIn" />
                            LinkedIn
                        </span>
                    </GlassButton>

                    <GlassButton
                        href="https://github.com/ojpbraga"
                        target="_blank"
                        className="text-xs font-bold text-white"
                    >
                        <span className="flex items-center gap-2 px-1">
                            <img src="/images/github.svg" className="w-4 h-4 invert opacity-80" alt="GitHub" />
                            GitHub
                        </span>
                    </GlassButton>
                </motion.div>
            </div>

            {/* RIGHT — Vídeo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 w-[52%] sm:w-[42%] md:w-[32%] xl:w-[26%] shrink-0"
            >
                {/* Glow atrás */}
                <div className="absolute inset-[-15%] bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />

                {/* Ring decorativo */}
                <div
                    className="absolute inset-[-6px] rounded-[34px]"
                    style={{ border: '1px solid rgba(129,140,248,0.2)' }}
                />

                <video
                    src="/images/avatar.mp4"
                    className="relative w-full rounded-[28px] object-cover"
                    style={{
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 0 60px rgba(99,102,241,0.18), 0 24px 48px rgba(0,0,0,0.4)',
                    }}
                    loop
                    autoPlay
                    muted
                    playsInline
                />
            </motion.div>

        </section>
    );
}
