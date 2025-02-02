import avatar from '/public/images/avatar.mp4';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';


const Intro = () => {

    return (
        <section  className="flex flex-col justify-between h-[77dvh] items-center">

        <div className="h-[40dvh] grid place-items-center w-full text-center">
          <h1 className="text-6xl md:text-8xl text-center font-bold">Your next Frontend<br/>Developer<span className="text-[#405CD9]">.</span></h1>
        </div>

        <div className='relative w-full flex justify-center mb-5'>
          <div className='w-[60%] xl:w-[20%] z-10 '>
            <video className='rounded-[10%]' loop autoPlay muted>
              <source src={avatar} />
            </video>
          </div>

          {/* <div className=' h-[20vh] self-end'>
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
            
          </div> */}
        </div>

      </section>
    )
}
export default Intro;