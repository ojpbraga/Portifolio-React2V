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
import { Timeline } from 'gsap/gsap-core'
import gsap from 'gsap'
import { createRef, useContext, useRef } from 'react'
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
    { id: 'calendario', url: calendario },
    { id: 'contatos', url: contatos },
    { id: 'notas', url: notas },
    { id: 'musica', url: musica },
    { id: 'appletv', url: appletv },
    { id: 'podcasts', url: podcasts },
    { id: 'noticias', url: noticias },
    { id: 'configuracao', url: configuracao },
    { id: 'pasta', url: pasta },
    { id: 'trash', url: trash },
];

const Dock = () => {
    const {data, setData} = useContext(AppsContext);

    // Abre ou fecha componente, quando clicado no item
    function handleClick({target}) {
        const appName = target.id;
        setData(data => 
            data.map(app => app.id === appName ? {...app, close:!app.close} : app )
        )
    };

    return (
        <div className='w-[100%] h-20 overflow-hidden flex justify-center relative'>
            <div className="glassmorphism dock flex p-1 pb-0 mb-2 rounded-2xl absolute shadow-md">
                {apps.map((app, index) => (
                    <img key={'img_desktop_'+index} src={app.url} id={app.id} className='w-14' onClick={handleClick} alt="" />
                ))}
            </div>
        </div>
    )
}
export default Dock;