// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards'

import mouseCursor from '../images/mouse-cursor.png'
import mouseCursorLogo from '../images/mouse.png'
import github from '../images/github.svg'
import figma from '../images/figma.svg'
import share from '../images/share.svg'

export default function Slides() {
  return (
    <Swiper
      modules={[EffectCards]} effect='cards'
      slidesPerView={1}
      pagination={{clickable: true}}
      className='w-full h-full'
    >
      <SwiperSlide className='bg-[#30193E] rounded-3xl pr-4 pl-4 justify-between flex flex-col h-full pt-[5vh] pb-[2vh]'>
        <div className=''>
          <img src={mouseCursor} alt="" />
        </div>

        <div className='flex flex-col justify-between h-[45vh]'>
          {/* Div text */}
          <div className='grid gap-2'>
            {/* title */}
            <div className='flex items-center gap-2 justify-center'>
              <img src={mouseCursorLogo} alt="" />
              <h1 className='uppercase text-[8vw] font-bold justify-self-center'>Mouse Cursor</h1>
            </div>
            {/* end title */}
            <p className='font-semibold text-[5vw]'>Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.</p>
          </div>
          {/* End div text */}

          {/* Div links */}
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <a href="github" className='bg-[#24292E] w-14 h-10 rounded-l-3xl grid place-items-center'><img className='w-7' src={github} alt="" /></a>
              <a href="figma" className='bg-[#fff] w-14 h-10 rounded-r-3xl grid place-items-center'><img className='w-4' src={figma} alt="" /></a>
            </div>

            <a href="visit" className='flex gap-1 uppercase text-[3.5vw] font-bold bg-[#190D21] w-28 rounded-3xl h-11 items-center justify-center'>
              <img src={share} className='w-4' alt="" />
              Visitar
            </a>
          </div>
          {/* End div links */}
        </div>
      </SwiperSlide>

      <SwiperSlide className='bg-[#fbff1e] rounded-3xl pr-4 pl-4 justify-between flex flex-col h-full pt-[5vh] pb-[2vh]'>
        <div className=''>
          <img src={mouseCursor} alt="" />
        </div>

        <div className='flex flex-col justify-between h-[45vh]'>
          {/* Div text */}
          <div className='grid gap-2'>
            {/* title */}
            <div className='flex items-center gap-2 justify-center'>
              <img src={mouseCursorLogo} alt="" />
              <h1 className='uppercase text-[8vw] font-bold justify-self-center'>Mouse Cursor</h1>
            </div>
            {/* end title */}
            <p className='font-semibold text-[5vw]'>Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.</p>
          </div>
          {/* End div text */}

          {/* Div links */}
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <a href="github" className='bg-[#24292E] w-14 h-10 rounded-l-3xl grid place-items-center'><img className='w-7' src={github} alt="" /></a>
              <a href="figma" className='bg-[#fff] w-14 h-10 rounded-r-3xl grid place-items-center'><img className='w-4' src={figma} alt="" /></a>
            </div>

            <a href="visit" className='flex gap-1 uppercase text-[3.5vw] font-bold bg-[#190D21] w-28 rounded-3xl h-11 items-center justify-center'>
              <img src={share} className='w-4' alt="" />
              Visitar
            </a>
          </div>
          {/* End div links */}
        </div>
      </SwiperSlide>

      <SwiperSlide className='bg-[#ff50d9] rounded-3xl pr-4 pl-4 justify-between flex flex-col h-full pt-[5vh] pb-[2vh]'>
        <div className=''>
          <img src={mouseCursor} alt="" />
        </div>

        <div className='flex flex-col justify-between h-[45vh]'>
          {/* Div text */}
          <div className='grid gap-2'>
            {/* title */}
            <div className='flex items-center gap-2 justify-center'>
              <img src={mouseCursorLogo} alt="" />
              <h1 className='uppercase text-[8vw] font-bold justify-self-center'>Mouse Cursor</h1>
            </div>
            {/* end title */}
            <p className='font-semibold text-[5vw]'>Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.</p>
          </div>
          {/* End div text */}

          {/* Div links */}
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <a href="github" className='bg-[#24292E] w-14 h-10 rounded-l-3xl grid place-items-center'><img className='w-7' src={github} alt="" /></a>
              <a href="figma" className='bg-[#fff] w-14 h-10 rounded-r-3xl grid place-items-center'><img className='w-4' src={figma} alt="" /></a>
            </div>

            <a href="visit" className='flex gap-1 uppercase text-[3.5vw] font-bold bg-[#190D21] w-28 rounded-3xl h-11 items-center justify-center'>
              <img src={share} className='w-4' alt="" />
              Visitar
            </a>
          </div>
          {/* End div links */}
        </div>
      </SwiperSlide>

      
    </Swiper>
  );
};