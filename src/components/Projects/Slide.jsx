import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import github from '/images/github.svg';
import figma from '/images/figma.svg';
import share from '/images/share.svg';

const LinkButton = ({ href, icon, label, dark }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 hover:opacity-90
      ${dark ? 'bg-[#111] text-white border border-white/10' : 'bg-white text-black'}`}
  >
    <img src={icon} alt={label} className="w-4 h-4 object-contain" />
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
            className="rounded-3xl overflow-hidden cursor-grab select-none"
            style={{ background: '#1a1a1a' }}
          >
            {/* Accent bar topo */}
            <div className="h-1 w-full" style={{ background: bgColor }} />

            <div className="flex flex-col xl:flex-row h-full">

              {/* Conteúdo — esquerda */}
              <div className="flex flex-col justify-between flex-1 p-6 xl:p-8 gap-4">

                {/* Título + descrição */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 rounded-full" style={{ background: bgColor }} />
                    <h1 className="text-2xl xl:text-3xl font-bold text-white uppercase tracking-wide">
                      {title}
                    </h1>
                  </div>
                  <p className="text-sm xl:text-base text-[#999] leading-relaxed font-medium">
                    {description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] font-semibold rounded-full border border-white/10 text-[#888] uppercase tracking-widest">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 flex-wrap">
                  {githubLink && <LinkButton href={githubLink} icon={github} label="GitHub" dark />}
                  {figmaLink && <LinkButton href={figmaLink} icon={figma} label="Figma" dark={false} />}
                  {siteLink && (
                    <a
                      href={siteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white transition-all duration-200 hover:scale-105"
                      style={{ background: bgColor }}
                    >
                      <img src={share} alt="Visitar" className="w-4 h-4 object-contain" />
                      Visitar site
                    </a>
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

      {/* Botões de navegação customizados */}
      <div className="flex justify-center gap-3 mt-1">
        <button
          ref={setPrevEl}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/15 hover:border-white/25 hover:scale-105 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Slide anterior"
        >
          <ArrowIcon direction="prev" />
        </button>

        <button
          ref={setNextEl}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/15 hover:border-white/25 hover:scale-105 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Próximo slide"
        >
          <ArrowIcon direction="next" />
        </button>
      </div>
    </div>
  );
}