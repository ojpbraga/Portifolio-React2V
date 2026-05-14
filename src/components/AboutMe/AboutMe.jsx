import Description from "./Description";
import { useState, useEffect } from "react";
import joaoPicture from '/public/images/me.png';
import { BorderBeam } from "../BorderBeam";
import location from '/public/images/Location.png';
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

export const AboutMe = () => {
    const [profileDetails, setProfileDetails] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(null);

    useEffect(() => {
        const check = () => setIsMobileScreen(window.innerWidth <= 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <section className='min-h-[77dvh] w-[90%] flex flex-col items-center justify-center gap-8 xl:flex-row xl:gap-[6vw] my-0 mx-auto'>

            {/* ===== Modal ===== */}
            {profileDetails && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center p-4'
                    style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(12px)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) setProfileDetails(false); }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        className='relative w-full max-w-4xl rounded-[20px] flex flex-col xl:flex-row overflow-hidden'
                        style={{
                            height: 'min(85dvh, 640px)',
                            background: 'rgba(10, 12, 28, 0.97)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.08)',
                        }}
                    >
                        {/* Botão Fechar */}
                        <button
                            onClick={() => setProfileDetails(false)}
                            className='absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 active:scale-[0.92]'
                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                            aria-label="Fechar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* ---- Mobile: header compacto horizontal ---- */}
                        <div
                            className='flex xl:hidden items-center gap-4 px-5 py-4 flex-shrink-0'
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            <div className='relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0'>
                                <img className='w-full h-full object-cover object-top' src={joaoPicture} alt="João Pedro" />
                                <BorderBeam colorTo='#818CF8' colorFrom='#60A5FA' size={60} duration={6} />
                            </div>
                            <div className='min-w-0'>
                                <h2 className='font-bold text-sm text-white leading-tight'>João Pedro O. Braga</h2>
                                <p className='text-[11px] text-white/40 mt-0.5'>Fullstack Developer · 19 anos</p>
                                <div className='flex items-center gap-1 mt-1'>
                                    <img className='h-3 opacity-40' src={location} alt="" />
                                    <span className='text-[11px] text-white/35'>Belo Horizonte, MG</span>
                                </div>
                            </div>
                            <div className='flex gap-2 ml-auto flex-shrink-0'>
                                <a href="https://github.com/ojpbraga" target='_blank' rel='noreferrer'
                                    className='flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 active:scale-[0.92]'
                                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                    <img src='/images/github.svg' className='h-4 w-4 invert opacity-70' alt='GitHub' />
                                </a>
                                <a href="https://www.linkedin.com/in/ojpbraga" target='_blank' rel='noreferrer'
                                    className='flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 active:scale-[0.92]'
                                    style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.25)' }}>
                                    <img src='/images/linkedln-icon.svg' className='h-4 w-4' alt='LinkedIn' />
                                </a>
                            </div>
                        </div>

                        {/* ---- Desktop: sidebar vertical ---- */}
                        <div className='hidden xl:flex flex-col gap-5 p-6 w-[240px] flex-shrink-0'
                            style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            <div className='self-center relative w-36 h-36 rounded-2xl overflow-hidden'>
                                <img className='w-full h-full object-cover object-top' src={joaoPicture} alt="João Pedro" />
                                <BorderBeam colorTo='#818CF8' colorFrom='#60A5FA' size={80} duration={6} />
                            </div>

                            <div className='grid gap-2.5'>
                                <div>
                                    <h2 className='font-bold text-base text-white leading-tight'>João Pedro O. Braga</h2>
                                    <p className='text-xs text-white/40 mt-0.5'>Fullstack Developer</p>
                                </div>
                                <div className='flex items-center gap-1.5 text-xs text-white/50'>
                                    <img className='h-3.5 opacity-50' src={location} alt="" />
                                    <span>Belo Horizonte, MG</span>
                                </div>
                                <p className='text-xs text-white/40'>19 anos</p>
                                <div className='flex gap-2 flex-wrap'>
                                    <a href="https://github.com/ojpbraga" target='_blank' rel='noreferrer'
                                        className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-[0.96]'
                                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                        <img src='/images/github.svg' className='h-3 w-3 invert' alt='GitHub' />
                                        GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/ojpbraga" target='_blank' rel='noreferrer'
                                        className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-[0.96]'
                                        style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.25)', color: '#93c5fd' }}>
                                        <img src='/images/linkedln-icon.svg' className='h-3 w-3' alt='LinkedIn' />
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo — descrição */}
                        <Description isScreenMobile={isMobileScreen} />
                    </motion.div>
                </div>
            )}

            {/* ===== Foto — card ===== */}
            <motion.div {...fadeUp(0.05)} className='relative w-36 sm:w-44 xl:w-72 flex-shrink-0'>
                <div className='relative rounded-[24px] overflow-hidden aspect-[3/4]'>
                    <img
                        className='w-full h-full object-cover object-top'
                        src={joaoPicture}
                        alt="João Pedro"
                    />
                    <div className='absolute inset-0' style={{ background: 'linear-gradient(to top, rgba(8,9,26,0.6) 0%, transparent 50%)' }} />
                    <BorderBeam colorTo='#818CF8' colorFrom='#60A5FA' size={120} duration={8} />
                </div>
            </motion.div>

            {/* ===== Texto ===== */}
            <div className='xl:max-w-[48%] grid gap-5 text-center xl:text-left'>
                <motion.div {...fadeUp(0.1)} className='flex flex-col gap-1'>
                    <span className='text-xs font-semibold tracking-[0.3em] uppercase text-white/30'>
                        Sobre mim
                    </span>
                    <h1 className='font-black text-4xl sm:text-5xl xl:text-6xl leading-[1.05] tracking-tight'>
                        Eu sou{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#818CF8]'>
                            João.
                        </span>
                    </h1>
                </motion.div>

                <motion.div {...fadeUp(0.18)} className='text-sm sm:text-base xl:text-lg text-white/45 font-medium leading-relaxed max-w-sm mx-auto xl:mx-0'>
                    Estudante de{' '}
                    <span className='text-white/80'>Sistemas de Informação</span>
                    {', '}com experiência em{' '}
                    <span className='text-white/80'>desenvolvimento web</span>
                    {' '}(React.js e Laravel) e interesse em projetos{' '}
                    <span className='text-white/80'>Fullstack</span>.
                </motion.div>

                <motion.div {...fadeUp(0.25)}>
                    <button
                        onClick={() => setProfileDetails(true)}
                        className='group inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white/90 transition-all duration-300 active:scale-[0.97]'
                        style={{ transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}
                    >
                        <span
                            className='w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110'
                            style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.25)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        Ver perfil completo
                    </button>
                </motion.div>
            </div>

        </section>
    );
};
