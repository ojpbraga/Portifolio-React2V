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
        <section data-scroll-container className='h-[77dvh] w-[90%] flex flex-col items-center justify-center gap-2 xl:flex-row xl:gap-[5vw] overflow-hidden my-0 mx-auto'>

        {
        profileDetails && 
          <div className='absolute z-20 w-[80%] h-[80%] bg-[#1B1B1B] rounded-[30px] flex flex-col p-5 gap-[2vh] overflow-scroll xl:overflow-hidden xl:flex-row xl:p-0'>

            {/* Picture and data*/}
            <div className='flex flex-col xl:overflow-hidden gap-5 xl:w-[23vw] xl:m-5'>
              <div className='self-center relative w-[50vw] md:w-[40vw] xl:w-[15vw] xl:h-[35vh] bg-white/10 rounded-[30px] place-items-center overflow-hidden'>
                <img className='rounded-[30px] xl:rounded-[5px] xl:h-[41.5vh]' src={joaoPicture} alt=""/>
                <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
              </div>

              {/* Profile */}
              <div className='grid gap-2'>
                <h1 className='font-bold text-[6vw] xl:text-[1.6vw]'>João Pedro O. Braga</h1>
                <div className='grid'>
                  <div className='grid grid-cols-2 gap-2'>
                    <p className='text-sm text-[#B5B5B5] w-full flex items-center gap-1'><img className='h-4' src={location}/>
                    Belo Horizonte</p>
                    <p className='text-sm text-[#B5B5B5] '>22/12/2005</p>
                    <a href="/" className='text-sm text-[#B5B5B5] '>Github</a>
                    <a href="/" className='text-sm text-[#B5B5B5] '>Linkedln</a>
                  </div>
                </div>
                <p className='text-sm text-[#B5B5B5] '>Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca<br/>ou em comunidades.</p>
              </div>
            </div>

            {/* Texts about me and graduation here */}
            <Description isScreenMobile={isMobileScreen}/>

            {/*  */}
            <div className="sticky w-0 h-12  xl:top-6 right-20 cursor-pointer" onClick={() => { setProfileDetails(state => !state);
            setScroll(state => !state);
            setIsMobileScreen(stete => !stete);
            }}>
              <div className='bg-slate-600 rounded-[100px] grid place-items-center w-12 h-12'>
                <div className='h-2 w-7 rounded-full bg-white'></div>
              </div>
            </div>

          </div>
        }

        <div className=' relative w-44 xl:w-60 bg-white/10 rounded-[30px]'>
          <img className='rounded-[30px]' src={joaoPicture} alt=""/>
          <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
        </div>

        <div className='xl:w-[40%] grid gap-6'>
          <h1 className='text-5xl xl:text-7xl xl:text-start font-bold text-center'>Eu sou João.</h1>
          <p className='text-3xl xl:text-4xl text-[#A1A1A1] font-bold'>Um estudante de <span className='text-[#E1E1E1]'>Sistemas de Informção</span>. Eu moro em Belo Horizonte - MG <span className='cursor-pointer' onClick={() => setProfileDetails(state => !state)}><SparklesText className={'text-3xl xl:text-4xl'}  text='Mais detalhes...👈'/></span></p>
        </div>
        
      </section>
    );
}