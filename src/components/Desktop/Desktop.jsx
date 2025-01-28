import { useEffect, useRef, useState } from 'react';
import Login from '../Login/Login';
import Content from './Content';
import Loader from './Loader';

const Desktop = () => {
    const [videoWallpaper, setVideoWallpaper] = useState(null);

    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isVideoPause, setVideoPause] = useState(false);
    const video = useRef();
    
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [expandScreen, setExpandScreen] = useState(false);

    const [page, setPage] = useState();

    // Função que me retorna quando o vídeo foi carregado, pois é muito pesado (é possível melhorar?)
    useEffect(() => {
        async function videoLoaded() {
            const url = '/public/images/macOS.mp4';
            let response = await fetch(url);
            response = await response.blob();
            setVideoWallpaper(url);
            setIsVideoLoaded(true);
            console.log("Vídeo Carregou");
        }
        videoLoaded();
    }, []);

    // Dá pause assim que a tela é "desbloqueada", para fim de interatividade
    useEffect(() => {
        if(isVideoPause) setTimeout(() => {
            video.current.pause();
        }, 10500);
    }, [isUnlocked]);

    // Troca de página mantendo o vídeo em todas (Verificar)
    useEffect(() => {
        function handleChangePage() {
            if(expandScreen) {
                setPage(<Login setIsUnlocked={setIsUnlocked} setVideoPause={setVideoPause}/>);
            } else {
                setPage(<Loader isVideoLoaded={isVideoLoaded} expandScreen={expandScreen} setExpandScreen={setExpandScreen}/>);
            }
            
            if (expandScreen && isUnlocked && isVideoLoaded) {
                setPage(<Content/>);
            } 
        }
        handleChangePage();
    }, [expandScreen, isUnlocked, isVideoLoaded]);

    return (
        <>
            <video src={videoWallpaper} ref={video} autoPlay muted loop className='absolute h-[100dvh] w-[100vw] object-cover z-[-1]' alt="" />
            
            {page}
                
        </>

    )

 
}
export default Desktop;