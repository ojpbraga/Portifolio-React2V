import './desktop.css'
import finder from '/images/finder-icon.svg'
import launchPad from '/images/launch-pad.svg'
import safari from '/images/safari-icon.svg'
import mensagens from '/images/messages-icon.svg'
import email from '/images/email-icon.svg'
import mapas from '/images/maps-icon.svg'
import fotos from '/images/fotos-icon.svg'
import faceTime from '/images/fecetime-icon.svg'
import calendario from '/images/calendario-icon.svg'
import contatos from '/images/contatos-icon.svg'
import notas from '/images/notas-icon.svg'
import musica from '/images/musica-icon.svg'
import appletv from '/images/appletv-icon.svg'
import podcasts from '/images/podcasts-icon.svg'
import noticias from '/images/noticias-icon.svg'
import configuracao from '/images/configuracao-icon.svg'
import pasta from '/images/pasta-icon.svg'
import trash from '/images/lixo-icon.svg'
import github from '/public/images/github-icon.png'
import linkedln from '/public/images/linkedln-icon.svg'
import gsap from 'gsap'
import { createRef, useContext, useEffect, useRef } from 'react'
import { AppsContext } from '@/AppsContext'
import { toggle } from '@heroui/theme'

const apps = [
    { id: 'finder', url: finder },
    { id: 'launchPad', url: launchPad },
    { id: 'safari', url: safari },
    { id: 'mensagens', url: mensagens },
    { id: 'email', url: email },
    { id: 'mapas', url: mapas },
    { id: 'fotos', url: fotos },
    { id: 'faceTime', url: faceTime },
    // { id: 'calendario', url: calendario },
    // { id: 'contatos', url: contatos },
    { id: 'github', url: github },
    { id: 'linkedln', url: linkedln },
    // { id: 'notas', url: notas },
    // { id: 'musica', url: musica },
    // { id: 'appletv', url: appletv },
    // { id: 'podcasts', url: podcasts },
    // { id: 'noticias', url: noticias },
    // { id: 'configuracao', url: configuracao },
    // { id: 'pasta', url: pasta },
    // { id: 'trash', url: trash },
];

const Dock = () => {
    const {data, setData} = useContext(AppsContext);

    // Abre ou fecha componente, quando clicado no item
    function handleClick({target}) {
        const appName = target.id;
        setData(data => 
            data.map(app => app.id === appName ? {...app, close:!app.close} : app )
        )

        if(appName === 'github') window.location.assign('//github.com/ojpbraga');
        if(appName === 'linkedln') window.location.assign('//linkedin.com/in/ojpbraga/');
        if(appName === 'email') window.location.assign('//mailto:ojpbraga@gmail.com');

        openAnimation(target);
    };

    function openAnimation(appTarget) {
        gsap.to(appTarget, {bottom:'20px', width:'4rem', duration: 0.2, ease:'none', onComplete: () => {
            gsap.to(appTarget, {bottom:'0', width:'3.5rem',  delay: 0.3 });
        }, });
    }
  

    return (
        <div className='w-[100%] h-28 absolute overflow-hidden bottom-0 grid items-end justify-items-center z-[999999]'>

            <div className="glassmorphism flex p-1 pb-0 rounded-2xl shadow-md mb-2">
                {apps.map((app, index) => (
                    app.id === 'github' || app.id === 'safari' || app.id === 'linkedln' || app.id === 'email' ? <img key={'img_desktop_'+index} src={app.url} id={app.id} className='w-14  cursor-pointer h-full relative' onClick={handleClick} alt="" /> 
                    : <img key={'img_desktop_'+index} src={app.url} id={app.id} className='w-14 h-full cursor-not-allowed relative' onClick={handleClick} alt="" />
                ))}
            </div>
        </div>
    )
}
export default Dock;