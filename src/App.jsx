// import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
// import * as reactSpring from '@react-spring/three'
// import * as drei from '@react-three/drei'
// import * as fiber from '@react-three/fiber'
import avatar from './images/avatar.mp4'
import Particles from './components/Particles.tsx';
import joaoPicture from './images/me.png'
import { BorderBeam } from './components/BorderBeam.tsx'
import Slides from './components/Slide.jsx';
import { useEffect, useState } from 'react';


const slidesObj = [
  {
    bgColor:"#30193E",
    imgNotebook: '../images/mouse-cursor.png', 
    imgLogo: '../images/mouse.png',
    title: "Mouse Cursor", 
    description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
    githubLink: "www.github.com", 
    figmaLink: "www.figma.com", 
    siteLink: "www.teste.com",
  },
  {
    bgColor:"#f6ff71",
    imgNotebook: '../images/mouse-cursor.png', 
    imgLogo: '../images/mouse.png',
    title: "Mouse Cursor", 
    description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
    githubLink: "www.github.com", 
    figmaLink: "www.figma.com", 
    siteLink: "www.teste.com",
  },
]

function App() {

  const [profileDetails, setProfileDetails] = useState(false);

  return (
    <main className='grid gap-32 justify-center'>
      {/* Desativar por enquanto */}
      <Particles className='fixed z-[-1] h-[100vh] w-[100%]'/>

      <section className="flex flex-col justify-between h-[105vh] items-center">

        <div className="h-[70dvh] grid place-items-center w-[70vw] md:w-[60vw] xl:w-full">
          <h1 className="text-[15vw] md:text-[12vw] xl:text-[6rem] xl:text-center font-bold leading-[15vw] md:leading-[12vw] xl:leading-[100px]">Your next Frontend<br/>Developer<span className="text-[#405CD9]">.</span></h1>
        </div>

        <div className='relative flex justify-center h-[40vh]'>
          <div className='w-[60vw] md:w-[35vw] xl:w-[16vw] z-10 top-0 absolute'>
            <video className='rounded-[30px]' loop autoPlay muted>
              <source src={avatar} />
            </video>

          </div>

          <div className='w-[95vw] xl:w-[85vw] h-[20vh] self-end'>
            {/* <ShaderGradientCanvas
              importedFiber={{ ...fiber, ...drei, ...reactSpring }}
              style={{borderRadius: '30px'}}
            >
              <ShaderGradient color1='#000055' color2='#0000BF' color3='#0000BF' animate='on' type='plane' cDistance={2} cAzimuthAngle={0} cPolarAngle={90} brightness={4} uDensity={0.5} positionX={4}/>
            </ShaderGradientCanvas> */}
          </div>
        </div>

      </section>

      <section className='h-screen flex flex-col items-center justify-center gap-2 xl:flex-row xl:w-[85vw] xl:gap-[5vw] overflow-hidden my-0 mx-auto'>

        {
        profileDetails && 
          <div className='absolute z-10 w-[90vw] h-[90vh] bg-[#1B1B1B] rounded-[30px] flex flex-col p-5 gap-[2vh] overflow-scroll xl:overflow-hidden xl:flex-row xl:p-0'>

            <div className="absolute w-12 h-12 bg-slate-600 right-5 rounded-[100px] grid place-items-center xl:top-5" onClick={() => setProfileDetails(state => !state)}>
              <div className='h-2 w-7 rounded-full bg-white'></div>
            </div>

            {/* Picture and data*/}
            <div className='flex flex-col gap-5 xl:w-[25vw] xl:m-5'>
              <div className='self-center relative w-[50vw] md:w-[40vw] xl:w-[15vw] xl:h-[35vh] bg-white/10 rounded-[30px] place-items-center '>
                <img className='rounded-[30px] xl:h-[35vh]' src={joaoPicture} alt=""/>
                <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
              </div>

              {/* Profile */}
              <div className='grid gap-2'>
                <h1 className='font-bold text-[6vw] xl:text-[1.6vw]'>João Pedro O. Braga</h1>
                <div className='grid'>
                  <div className='grid grid-cols-2 gap-1'>
                    <p className='text-sm'>
                    Belo Horizonte</p>
                    <p className='text-sm'>22/12/2005</p>
                    <a href="/" className='text-sm'>Github</a>
                    <a href="/" className='text-sm'>Linkedln</a>
                  </div>
                </div>
                <p className='text-sm'>Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.</p>
              </div>
            </div>

            {/* Texts about me and graduation here */}
            <div id='profile-div-scroll' className='gap-1 xl:overflow-y-scroll  w-full h-full'>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
              <h1 className='text-3xl'>Academico</h1>
            </div>

          </div>
        }

        <div className=' relative w-[60vw] md:w-[40vw] xl:w-[25vw] bg-white/10 rounded-[30px]'>
          <img className='rounded-[30px]' src={joaoPicture} alt=""/>
          <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
        </div>

        <div className='w-[80vw] xl:w-[40vw]'>
          <h1 className='text-[18vw] md:text-[14vw] xl:text-[8vw] xl:text-start font-bold text-center'>I'm João.</h1>
          <p className='text-[9vw] md:text-[6vw] xl:text-[3vw] text-[#A1A1A1] font-bold'>A student of <span className='text-[#E1E1E1]'>software engineer</span>. I live in Belo Horizonte - MG <span onClick={() => setProfileDetails(state => !state)}>and...</span>👈</p>
        </div>
        
      </section>

      <section className='grid place-items-center'>
        <div className='h-[90vh] w-[90vw] bg-[#1B1B1B] rounded-[30px] p-10 xl:pt-5'>
          <h1 className='font-bold text-[11vw] md:text-[8vw] xl:text-[5vw]'>Frameworks</h1>

          <div>
            
          </div>

        </div>
      </section>

      <section className='h-[100vh] flex flex-col items-center overflow-hidden'>
        <h1 className='text-[18vw] md:text-[16vw] font-bold xl:text-[6vw]'>Projects</h1>
        <div className='w-[80vw] h-[80vh] xl:w-[70vw] xl:h-[70vh]'>
          <Slides slides={slidesObj}/>

        </div>
      </section>

      
    </main>
  )
}

export default App
