// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { getImageURL } from '../utils/image-util';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';


import github from '../images/github.svg'
import figma from '../images/figma.svg'
import share from '../images/share.svg'

export default function Slides({slides}) {

  return (
    <Swiper
      modules={[EffectCards]} effect='cards'
      slidesPerView={1}
      pagination={{clickable: true}}
      className='w-full h-full'
    >
      {slides.map(({bgColor, imgNotebook, imgLogo, title, description, githubLink, figmaLink, siteLink}) => (
        <SwiperSlide key={title} style={{background: bgColor}} className='rounded-3xl pr-4 pl-4 justify-between flex flex-col h-full pt-[5vh] pb-[2vh]'>
          <div className=''>
            <img src={getImageURL(imgNotebook)} alt="" />
          </div>

          <div className='flex flex-col justify-between h-[45vh]'>
            {/* Div text */}
            <div className='grid gap-2'>
              {/* title */}
              <div className='flex items-center gap-2 justify-center'>
                <img src={getImageURL(imgLogo)} alt="" />
                <h1 className='uppercase text-[8vw] font-bold justify-self-center'>{title}</h1>
              </div>
              {/* end title */}
              <p className='font-semibold text-[5vw]'>{description}</p>
            </div>
            {/* End div text */}

            {/* Div links */}
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <a href={githubLink} className='bg-[#24292E] w-14 h-10 rounded-l-3xl grid place-items-center'><img className='w-7' src={github} alt="" /></a>
                <a href={figmaLink} className='bg-[#fff] w-14 h-10 rounded-r-3xl grid place-items-center'><img className='w-4' src={figma} alt="" /></a>
              </div>

              <a href={siteLink} className='flex gap-1 uppercase text-[3.5vw] font-bold bg-[#190D21] w-28 rounded-3xl h-11 items-center justify-center'>
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