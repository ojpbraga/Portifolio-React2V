// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';


import github from '/images/github.svg';
import figma from '/images/figma.svg';
import share from '/images/share.svg';

export default function Slides({slides}) {

  return (
    <Swiper
      modules={[EffectCards]} effect='cards'
      slidesPerView={1}
      pagination={{clickable: true}}
      className='w-[80vw] xl:w-[70vw] h-full'
    >
      {slides.map(({bgColor, imgNotebook, imgLogo, title, description, githubLink, figmaLink, siteLink}, index) => (
        <SwiperSlide key={title+"_"+index} style={{background: bgColor}} className='rounded-3xl justify-between flex flex-col h-full pt-[5vh] pb-[2vh] xl:p-6 xl:flex-row-reverse cursor-grab'>
          <div className='grid place-items-center'>
            <img src={imgNotebook} className='md:w-[70vw] xl:w-[100vw]' alt="" />
          </div>

          <div className='flex flex-col justify-between h-[45vh] xl:h-full pr-4 pl-4 md:pr-10 md:pl-10 xl:p-0'>
            {/* Div text */}
            <div className='grid gap-2'>
              {/* title */}
              <div className='flex items-center gap-2 justify-center md:justify-start'>
                <img src={imgLogo} className='md:w-[3vw] xl:w-[2vw]' alt="" />
                <h1 className='uppercase text-[8vw] md:text-[6vw] xl:text-[3vw] font-bold justify-self-center'>{title}</h1>
              </div>
              {/* end title */}
              <p className='font-semibold text-[5vw] md:text-[4vw] xl:text-[2vw]'>{description}</p>
            </div>
            {/* End div text */}

            {/* Div links */}
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <a href={githubLink} className='bg-[#24292E] w-14 h-10 rounded-l-3xl grid place-items-center'><img className='w-7' src={github} alt="" /></a>
                <a href={figmaLink} className='bg-[#fff] w-14 h-10 rounded-r-3xl grid place-items-center'><img className='w-4' src={figma} alt="" /></a>
              </div>

              <a href={siteLink} className='flex gap-1 uppercase text-[3.5vw] md:text-[2vw] xl:text-[1vw] font-bold bg-[#190D21] w-28 rounded-3xl h-11 items-center justify-center'>
                <img src={share} className='w-4' alt="" />
                Visitar
              </a>
            </div>
            {/* End div links */}
          </div>
        </SwiperSlide>
      ))}

      
    </Swiper>
  );
};