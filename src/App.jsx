
import avatar from '../public/images/avatar.mp4';
import joaoPicture from '../public/images/me.png';
import { BorderBeam } from './components/BorderBeam.tsx'
import Slides from './components/Slide.jsx';
import { useEffect, useState } from 'react';
import location from '../public/images/Location.png';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
import { Button } from './components/ui/button';
import { AnimatedBeam } from './components/ui/animated-beam';
import { AnimatedBeamDemo } from './components/demo/AnimatedBeam';
import Description from './components/about_me/Description';
import { AboutMe } from './components/about_me/AboutMe';
import Particles from './components/ui/particles';

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
    bgColor:"#0ad978",
    imgNotebook: '../images/mouse-cursor.png',
    imgLogo: '../images/mouse.png',
    title: "Mouse Cursor", 
    description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
    githubLink: "www.github.com", 
    figmaLink: "www.figma.com", 
    siteLink: "www.teste.com",
  },
  {
    bgColor:"#950262",
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

 


  return (
    <main className='grid gap-32 justify-center'>
      <Particles />

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
            <ShaderGradientCanvas style={{borderRadius: '30px'}}>
              <ShaderGradient
              color1='#000055' 
              color2='#0000BF' 
              color3='#0000BF' 
              animate='on' 
              type='sphere' 
              cDistance={0.5} 
              cAzimuthAngle={270} 
              cPolarAngle={180} 
              brightness={0.8} 
              uDensity={0.8} 
              uFrequency={5.5} 
              uAmplitude={3.2} 
              uStrength={0.3} 
              uSpeed={0.3} 
              positionX={0.5} 
              positionY={0} 
              positionZ={0} 
              rotationX={0} 
              rotationY={130} 
              rotationZ={70} 
              reflection={0.4} 
              wireframe={false} 
              cameraZoom={38} 
              grain='on' 
              lightType='env' 
              envPreset='city' 
              zoomOut={false}
              hoverState='none'
              ></ShaderGradient>
            </ShaderGradientCanvas>
            
          </div>
        </div>

      </section>

      <AboutMe/>

      <section className='grid place-items-center'>
        <div className='h-[90vh] w-[90vw] bg-[#1B1B1B] rounded-[30px] grid p-10 xl:pt-5'>
          <h1 className='font-bold text-[11vw] md:text-[8vw] xl:text-[5vw]'>Frameworks</h1>

          <div className='w-full justify-self-center'>
            <AnimatedBeamDemo/>
          </div>

        </div>
      </section>

      <section className='h-[100vh] flex flex-col items-center overflow-hidden'>
        <h1 className='text-[18vw] md:text-[16vw] font-bold xl:text-[6vw]'>Projects</h1>
        <div className='w-[100vw] h-[80vh] xl:h-[70vh]'>
          <Slides slides={slidesObj}/>

        </div>
      </section>

      <section className='h-[100vh] flex flex-col'>
        <h1>Contact</h1>
        <div>Clique</div>
        <Button>OII</Button>
      </section>

      
    </main>
  )
}

export default App
