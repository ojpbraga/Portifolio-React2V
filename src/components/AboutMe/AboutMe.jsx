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

            {/*  */}
            <div className="sticky w-0 h-12 xl:top-6 right-20 cursor-pointer" onClick={() => setProfileDetails(false)}>
              <div className='bg-slate-600 rounded-[100px] grid place-items-center w-12 h-12'>
                <div className='h-2 w-7 rounded-full bg-white'></div>
              </div>
            </div>

          </div></div>
        }

        <div className=' relative w-44 xl:w-60 bg-white/10 rounded-[30px]'>
          <img className='rounded-[30px]' src={joaoPicture} alt=""/>
          <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
        </div>

        <div className='xl:w-[40%] grid gap-6'>
          <h1 className='text-5xl xl:text-7xl xl:text-start font-bold text-center'>Eu sou João.</h1>
          <div className='text-3xl xl:text-4xl text-[#A1A1A1] font-bold'>Um estudante de <span className='text-[#E1E1E1]'>Sistemas de Informção</span>. Eu moro em Belo Horizonte - MG <span className='cursor-pointer' onClick={() => setProfileDetails(state => !state)}><SparklesText className={'text-3xl xl:text-4xl'}  text='Mais detalhes...👈'/></span></div>
        </div>
        
      </section>
    );
}