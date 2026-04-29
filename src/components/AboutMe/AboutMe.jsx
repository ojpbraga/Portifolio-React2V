import Description from "./Description";
import { useState, useEffect } from "react";
import joaoPicture from '/public/images/me.png';
import { BorderBeam } from "../BorderBeam";
import location from '/public/images/Location.png';
import SparklesText from "../ui/sparkles-text";


export const AboutMe = () => {
    // About me
    const [profileDetails, setProfileDetails] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(null);
    useEffect(() => {
        console.log(window.innerWidth)
        if(window.innerWidth > '1024') {
        setIsMobileScreen(false);
        } else {
        setIsMobileScreen(true);
        }

    }, [isMobileScreen]);

    return (
        <section className='h-[77dvh] w-[90%] flex flex-col items-center justify-center gap-2 xl:flex-row xl:gap-[5vw] overflow-hidden my-0 mx-auto'>

        {
        profileDetails && 
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'><div className='w-[80%] h-[80%] bg-[#1B1B1B] rounded-[30px] flex flex-col p-5 gap-[2vh] overflow-scroll xl:overflow-hidden xl:flex-row xl:p-0'>

            {/* Picture and data*/}
            <div className='flex flex-col xl:overflow-hidden gap-5 xl:w-[23vw] xl:m-5'>
              <div className='self-center relative w-[55vw] aspect-square md:w-[32vw] xl:w-[13vw] bg-white/10 rounded-[30px] overflow-hidden'>
                <img className='w-full h-full object-cover object-top' src={joaoPicture} alt="João Pedro"/>
                <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
              </div>

              {/* Profile */}
              <div className='grid gap-2'>
                <h1 className='font-bold text-[6vw] xl:text-[1.6vw]'>João Pedro O. Braga</h1>
                <div className='grid'>
                  <div className='grid grid-cols-2 gap-2'>
                    <p className='text-sm text-[#B5B5B5] w-full flex items-center gap-1'><img className='h-4' src={location}/>
                    Belo Horizonte</p>
                    <p className='text-sm text-[#B5B5B5]'>19 anos · Solteiro</p>
                    <a href="https://github.com/ojpbraga" target='_blank' rel='noreferrer'
                      className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#24292e] text-white border border-white/10 hover:bg-[#3a3f44] hover:scale-105 transition-all duration-200 w-fit'>
                      <img src='/images/github.svg' className='h-3.5 w-3.5' alt='GitHub'/>
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ojpbraga" target='_blank' rel='noreferrer'
                      className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0A66C2] text-white border border-[#0A66C2]/40 hover:bg-[#0958a8] hover:scale-105 transition-all duration-200 w-fit'>
                      <img src='/images/linkedln-icon.svg' className='h-3.5 w-3.5' alt='LinkedIn'/>
                      LinkedIn
                    </a>
                  </div>
                </div>
                <p className='text-sm text-[#B5B5B5]'>Estudante de Sistemas de Informação buscando estágio em <span className='text-[#E1E1E1]'>Front-End e UI Design</span>.<br/>Atualmente estagiário na PRODEMGE.</p>
              </div>
            </div>

            {/* Texts about me and graduation here */}
            <Description isScreenMobile={isMobileScreen}/>

            {/* Botão Fechar */}
            <div className="sticky w-10 h-10 xl:top-6 right-6 xl:right-20 cursor-pointer self-end xl:self-auto" onClick={() => setProfileDetails(false)}>
              <div className='bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-full grid place-items-center w-10 h-10'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

          </div></div>
        }

        <div className=' relative w-56 xl:w-80 bg-white/10 rounded-[30px]'>
          <img className='rounded-[30px] w-full h-full object-cover' src={joaoPicture} alt=""/>
          <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
        </div>

        <div className='xl:w-[45%] grid gap-5'>
          <h1 className='text-5xl xl:text-6xl xl:text-start font-bold text-center'>Eu sou João.</h1>
          <div className='text-xl xl:text-2xl text-[#A1A1A1] font-bold leading-snug'>
            Estudante de <span className='text-[#E1E1E1]'>Sistemas de Informação</span>, com experiência em <span className='text-[#E1E1E1]'>desenvolvimento web (React.js e Laravel)</span> e interesse em desenvolver projetos na área <span className='text-[#E1E1E1]'>Fullstack</span>. <br/><br/><span className='cursor-pointer inline-block mt-1 hover:text-white transition-colors' onClick={() => setProfileDetails(true)}><SparklesText className={'text-xl xl:text-2xl'}  text='Mais detalhes...👈'/></span>
          </div>
        </div>
        
      </section>
    );
}