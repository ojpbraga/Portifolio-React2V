import avatar from '/public/images/avatar.mp4';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';


const Intro = () => {

    return (
        <section data-scroll-container className="flex flex-col justify-between h-full w-full items-center">

        <div className="h-full grid place-items-center w-[70vw] md:w-[60vw] xl:w-full">
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
    )
}
export default Intro;