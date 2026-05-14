import airpod from '/images/airpod.svg';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';

const isMobile = () => window.innerWidth < 768 || 'ontouchstart' in window;

const Loader = ({ progress, isVideoLoaded, setExpandScreen }) => {
    const loaderBar = useRef();
    gsap.registerPlugin(Timeline);

    function handleClick() {
        if (!isMobile()) {
            document.documentElement.requestFullscreen?.();
            document.documentElement.webkitRequestFullscreen?.();
        }
        setExpandScreen(true);
    }

    useEffect(() => {
        gsap.to(loaderBar.current, {
            width: `${progress}%`,
            duration: 0.5,
            ease: 'power2.out',
        });

        if (isVideoLoaded && progress === 100) {
            if (isMobile()) {
                // No mobile avança automaticamente
                const t = setTimeout(() => setExpandScreen(true), 500);
                return () => clearTimeout(t);
            }
        }
    }, [progress, isVideoLoaded]);

    return (
        <section className='grid place-items-center h-[100dvh] w-full bg-black'>
            <div className='grid gap-7 w-40 xl:w-[10vw]'>
                <div className='grid place-items-center grid-cols-2'>
                    <img src={airpod} alt="" />
                    <img src={airpod} alt="" className='scale-x-[-1]' />
                </div>

                <div className='w-full h-1.5 rounded-full' style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div ref={loaderBar} className='h-full rounded-full w-0' style={{ background: 'linear-gradient(to right, #60A5FA, #818CF8)' }} />
                </div>
            </div>

            {/* Alert desktop — tela cheia */}
            {isVideoLoaded && progress === 100 && !isMobile() && (
                <div
                    className='absolute inset-0 flex items-center justify-center'
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(16px)' }}
                >
                    <div
                        className='flex flex-col items-center gap-6 p-8 rounded-2xl w-72 text-center'
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.1)',
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                        <p className='text-sm font-medium text-white/70 leading-relaxed'>
                            Expanda a tela para uma melhor experiência
                        </p>
                        <button
                            onClick={handleClick}
                            className='px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 active:scale-[0.96]'
                            style={{ background: 'rgba(96,165,250,0.2)', border: '1px solid rgba(96,165,250,0.3)' }}
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Loader;
