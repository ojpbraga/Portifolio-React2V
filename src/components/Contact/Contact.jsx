import { motion } from "framer-motion";
import { GlassButton } from "../ui/liquid-glass";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-end min-h-[70dvh]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                className="w-[92%] xl:w-[80%] rounded-t-[20px] sm:rounded-t-[28px] flex flex-col items-center justify-center p-8 sm:p-12 xl:p-20 gap-8 xl:gap-10 text-center"
                style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, rgba(96,165,250,0.04) 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderBottom: 'none',
                    boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.06), 0 -24px 60px rgba(96,165,250,0.05)',
                }}
            >
                <div className="flex flex-col items-center gap-5 max-w-lg">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30">
                        Disponível para oportunidades
                    </span>

                    <h1 className="font-black text-[11vw] md:text-[8vw] xl:text-[5vw] leading-[1.05] tracking-tight">
                        Vamos{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#818CF8]">
                            conversar?
                        </span>
                    </h1>

                    <p className="text-white/35 text-sm xl:text-base font-medium leading-relaxed max-w-sm">
                        Se ficou interessado e quiser trocar uma ideia, me manda uma mensagem.
                    </p>
                </div>

                <GlassButton
                    href="mailto:ojpbraga@gmail.com"
                    target="_self"
                    className="text-sm font-semibold text-white"
                >
                    <span className="flex items-center gap-2 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Entrar em contato
                    </span>
                </GlassButton>

                <div className="flex items-center gap-6">
                    {[
                        { href: 'https://www.linkedin.com/in/ojpbraga', label: 'LinkedIn' },
                        { href: 'https://github.com/ojpbraga', label: 'GitHub' },
                        { href: 'mailto:ojpbraga@gmail.com', label: 'ojpbraga@gmail.com', mobileHide: true },
                    ].map(({ href, label, mobileHide }, i) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                            className={`text-xs text-white/25 hover:text-white/70 transition-colors duration-200 font-medium tracking-wide ${mobileHide ? 'hidden sm:block' : ''}`}
                        >
                            {label}
                        </a>
                    ))}
                </div>

            </motion.div>
        </section>
    );
}
