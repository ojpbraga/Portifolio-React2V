import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import avatar from './images/avatar.mp4'
import Particles from './components/Particles.tsx';
import joaoPicture from './images/me.png'
import { BorderBeam } from './components/BorderBeam.tsx'

function App() {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <main className='grid gap-32 justify-center'>
      <Particles className='fixed z-[-1] h-[100dvh] w-[100%]'/>

      <section className="flex flex-col justify-between h-[105dvh] items-center">

        <div className="h-[70dvh] grid place-items-center w-[70vw] md:w-[60vw] xl:w-full">
          <h1 className="text-[15vw] md:text-[12vw] xl:text-[6rem] xl:text-center font-bold leading-[15vw] md:leading-[12vw] xl:leading-[100px]">Your next Frontend<br/>Developer<span className="text-[#405CD9]">.</span></h1>
        </div>

        <div className='relative flex justify-center h-[40dvh]'>
          <div className='w-[60vw] md:w-[35vw] xl:w-[16vw] z-10 top-0 absolute'>
            <video className='rounded-[30px]' loop autoPlay muted>
              <source src={avatar} />
            </video>

          </div>

          <div className='w-[95vw] xl:w-[85vw] h-[20dvh] self-end'>
            <ShaderGradientCanvas
              importedFiber={{ ...fiber, ...drei, ...reactSpring }}
              style={{borderRadius: '30px'}}
            >
              <ShaderGradient color1='#000055' color2='#0000BF' color3='#0000BF' animate='on' type='plane' cDistance={2} cAzimuthAngle={0} cPolarAngle={90} brightness={4} uDensity={0.5} positionX={4}/>
            </ShaderGradientCanvas>
          </div>
        </div>

      </section>

      <section className='h-screen w-full flex flex-col items-center justify-center gap-2 xl:flex-row xl:w-[85vw] xl:gap-[5vw]'>

        <div className=' relative w-[60vw] md:w-[40vw] xl:w-[25vw] bg-white/10 rounded-[30px]'>
          <img className='rounded-[30px]' src={joaoPicture} alt=""/>
          <BorderBeam colorTo='#d9d9d9' colorFrom='#fff'/>
        </div>

        <div className='w-[80vw]'>
          <h1 className='text-[18vw] md:text-[14vw] xl:text-[8vw] xl:text-start font-bold text-center'>I'm João.</h1>
          <p className='text-[9vw] md:text-[6vw] xl:text-[3vw] text-[#A1A1A1] font-bold'>A student of <span className='text-[#E1E1E1]'>software engineer</span>. I live in Belo Horizonte - MG <span>and...</span>👈</p>
        </div>
        
      </section>
    </main>
  )
}

export default App
