import airpod from '/images/airpod.svg';
import fullscreen from '/images/fullscreen-icon.svg'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';

const Loader = ({isVideoLoaded, setExpandScreen}) => {
    const [alert, setAlert] = useState(false);
    const loaderBar = useRef();
    gsap.registerPlugin(Timeline);

    function handleClick() {
        document.documentElement.requestFullscreen();
        document.documentElement.webkitRequestFullscreen();
        setExpandScreen(true);
    }

    useEffect(() => {
        function preloaderAnimation() {
            gsap.timeline()
            .from(loaderBar.current, {width:'0%', duration: 1.2, ease:'none'})
            .from(loaderBar.current, {width:'20%'})
            .to(loaderBar.current, {width:'70%'})
            if(isVideoLoaded === true) {
                gsap.timeline().to(loaderBar.current, {width:'100%'});
                setAlert(true);
            }
        }
        preloaderAnimation();
    }, [isVideoLoaded]);

    return (
        <section className='grid place-items-center h-[100vh] w-full bg-black '>
            <div className='grid gap-7'>
        
                <div className='grid place-items-center grid-cols-2 w-40 xl:w-[10vw]'>
                    <img src={airpod} alt=""/>
                    <img src={airpod} alt="" className=' scale-x-[-1]' />
                </div>

                <div className='w-full h-[1vh] bg-[#2a2a2a] rounded-full'>
                    <div ref={loaderBar} className='bg-white w-0 h-full rounded-full animate-bar'>
                    </div>
                </div>   
                
            </div>

            {alert && <div className='absolute self-center  bg-white rounded-2xl w-64 h-72 grid place-items-center'>
                {/* Acredito que usar margin desta forma é errado, mas ok */}
                <img className='w-28 mt-5' src={fullscreen} alt="" />
                <h1 className='font-semibold text-black text-center p-5'>Expanda a tela para uma melhor experiência</h1>
                <a className='underline text-blue-500 cursor-pointer' onClick={handleClick}>Ok</a>
            </div>
            }

        </section>
    )
}
export default Loader;