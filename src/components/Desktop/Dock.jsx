import './desktop.css'
import finder from '/images/finder-icon.svg'
import launchPad from '/images/launch-pad.svg'
import safari from '/images/safari-icon.svg'
import mensagens from '/images/messages-icon.svg'
import email from '/images/email-icon.svg'
import mapas from '/images/maps-icon.svg'
import fotos from '/images/fotos-icon.svg'
import faceTime from '/images/fecetime-icon.svg'
import github from '/public/images/github-icon.png'
import linkedln from '/public/images/linkedln-icon.svg'
import gsap from 'gsap'
import { createRef, useContext, useEffect, useRef } from 'react'
import { AppsContext } from '@/AppsContext'
import { Timeline } from 'gsap/gsap-core'

const apps = [
    { id: 'finder',   url: finder },
    { id: 'launchPad',url: launchPad },
    { id: 'safari',   url: safari },
    { id: 'mensagens',url: mensagens },
    { id: 'email',    url: email },
    { id: 'mapas',    url: mapas },
    { id: 'fotos',    url: fotos },
    { id: 'faceTime', url: faceTime },
    { id: 'github',   url: github },
    { id: 'linkedln', url: linkedln },
];

const Dock = () => {
    const { data, setData } = useContext(AppsContext);
    const container = useRef();
    gsap.registerPlugin(Timeline);

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline().to(container.current, { bottom: '0', duration: 0.8, ease: 'none' });
        }, 1200);
    }, []);

    function handleClick({ target }) {
        const appName = target.id;
        setData(data =>
            data.map(app => app.id === appName ? { ...app, close: !app.close } : app)
        );

        if (appName === 'github')  window.open('//github.com/ojpbraga', '_blank');
        if (appName === 'linkedln') window.open('//linkedin.com/in/ojpbraga/', '_blank');
        if (appName === 'email')   window.location.assign('mailto:ojpbraga@gmail.com');

        openAppAnimation(target);
    }

    function openAppAnimation(appTarget) {
        gsap.to(appTarget, {
            bottom: '16px', duration: 0.18,
            onComplete: () => gsap.to(appTarget, { bottom: '0', delay: 0.25 }),
        });
    }

    return (
        <div className='w-full h-20 sm:h-28 absolute overflow-hidden bottom-0 grid items-end justify-items-center z-[999999]'>
            <div
                ref={container}
                className="glassmorphism relative flex p-1 pb-0 rounded-xl sm:rounded-2xl shadow-md mb-1 sm:mb-2 bottom-[-100px] gap-0.5 sm:gap-0"
            >
                {apps.map((app, index) => (
                    app.id === 'github' || app.id === 'safari' || app.id === 'linkedln' || app.id === 'email'
                        ? <img
                            key={'img_' + index}
                            src={app.url}
                            id={app.id}
                            className='w-9 sm:w-11 xl:w-14 h-full cursor-pointer relative transition-none'
                            onClick={handleClick}
                            alt=""
                          />
                        : <img
                            key={'img_' + index}
                            src={app.url}
                            id={app.id}
                            className='w-9 sm:w-11 xl:w-14 h-full cursor-not-allowed relative opacity-50'
                            alt=""
                          />
                ))}
            </div>
        </div>
    );
};
export default Dock;
