import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import github from '/images/github.svg';
import figma from '/images/figma.svg';
import share from '/images/share.svg';

const LinkButton = ({ href, icon, label, accent }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className='flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 active:scale-[0.95]'
        style={{
            background: accent ? `${accent}18` : 'rgba(255,255,255,0.07)',
            border: `1px solid ${accent ? `${accent}35` : 'rgba(255,255,255,0.12)'}`,
            color: accent ? accent : 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(8px)',
            transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)',
        }}
    >
        <img src={icon} alt={label} className="w-3.5 h-3.5 object-contain" style={{ filter: accent ? 'none' : 'invert(1) brightness(0.8)' }} />
        {label}
    </a>
);

const ArrowIcon = ({ direction }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
    >
        {direction === 'prev'
            ? <path d="M15 18l-6-6 6-6" />
            : <path d="M9 18l6-6-6-6" />
        }
    </svg>
);

export default function Slides({ slides }) {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <div className="relative">
            <Swiper
                modules={[EffectCards, Navigation]}
                effect="cards"
                slidesPerView={1}
                navigation={{ prevEl, nextEl }}
                className="w-[85vw] xl:w-full h-full"
            >
                {slides.map(({ bgColor, imgNotebook, title, description, githubLink, figmaLink, siteLink, tags }, index) => (
                    <SwiperSlide
                        key={title + '_' + index}
                        className="rounded-2xl overflow-hidden cursor-grab select-none"
                        style={{
                            background: '#0d0f1f',
                            border: '1px solid rgba(255,255,255,0.07)',
                        }}
                    >
                        {/* Accent bar topo */}
                        <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, ${bgColor}, ${bgColor}88)` }} />

                        <div className="flex flex-col xl:flex-row h-full">

                            {/* Conteúdo — esquerda */}
                            <div className="flex flex-col justify-between flex-1 p-6 xl:p-8 gap-5">

                                {/* Título + descrição */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-8 rounded-full flex-shrink-0"
                                            style={{ background: bgColor }}
                                        />
                                        <h1 className="text-xl xl:text-2xl font-bold text-white tracking-tight">
                                            {title}
                                        </h1>
                                    </div>
                                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                                        {description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-[10px] font-semibold rounded-full uppercase tracking-widest"
                                            style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                color: 'rgba(255,255,255,0.4)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-2 flex-wrap">
                                    {githubLink && (
                                        <LinkButton href={githubLink} icon={github} label="GitHub" />
                                    )}
                                    {figmaLink && (
                                        <LinkButton href={figmaLink} icon={figma} label="Figma" accent={bgColor} />
                                    )}
                                    {siteLink && (
                                        <LinkButton href={siteLink} icon={share} label="Visitar" accent={bgColor} />
                                    )}
                                </div>

                            </div>

                            {/* Imagem — direita */}
                            <div className="grid place-items-center xl:w-[55%] overflow-hidden">
                                <img
                                    src={imgNotebook}
                                    alt={title}
                                    className="md:w-[70vw] xl:w-[100vw] object-contain"
                                />
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navegação */}
            <div className="flex justify-center gap-3 mt-3">
                <button
                    ref={setPrevEl}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white/60
                        transition-all duration-200 active:scale-[0.92] hover:text-white/90"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)',
                    }}
                    aria-label="Slide anterior"
                >
                    <ArrowIcon direction="prev" />
                </button>

                <button
                    ref={setNextEl}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white/60
                        transition-all duration-200 active:scale-[0.92] hover:text-white/90"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)',
                    }}
                    aria-label="Próximo slide"
                >
                    <ArrowIcon direction="next" />
                </button>
            </div>
        </div>
    );
}
