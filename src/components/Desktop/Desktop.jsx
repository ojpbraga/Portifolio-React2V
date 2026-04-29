import { useEffect, useRef, useState } from 'react';
import Login from '../Login/Login';
import Content from './Content';
import Loader from './Loader';

const Desktop = () => {
    const [videoWallpaper, setVideoWallpaper] = useState('');

    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isVideoPause, setVideoPause] = useState(false);
    const video = useRef();
    
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [expandScreen, setExpandScreen] = useState(false);

    const [page, setPage] = useState();

    const [progress, setProgress] = useState(0);

    // Pré-carregamento real de assets
    useEffect(() => {
        const assetsToPreload = [
            { type: 'video', src: './images/macOS.mp4' },
            { type: 'image', src: './images/SequoiaDark.png' },
            { type: 'image', src: './images/me.png' },
            { type: 'image', src: './images/tsa_image.svg' },
            { type: 'image', src: './images/roadmap_image.svg' },
            { type: 'image', src: './images/paciente_critico_image.svg' },
            { type: 'image', src: './images/unisus_image.svg' }
        ];

        let loadedCount = 0;
        const total = assetsToPreload.length;

        const updateProgress = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / total) * 100));
            if (loadedCount === total) {
                setIsVideoLoaded(true);
            }
        };

        assetsToPreload.forEach(asset => {
            if (asset.type === 'image') {
                const img = new Image();
                img.src = asset.src;
                img.onload = updateProgress;
                img.onerror = updateProgress; // Avança mesmo se falhar
            } else if (asset.type === 'video') {
                const vid = document.createElement('video');
                vid.src = asset.src;
                vid.oncanplaythrough = updateProgress;
                vid.onerror = updateProgress;
                vid.load();
            }
        });

        setVideoWallpaper('./images/macOS.mp4');
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
                setPage(<Login isUnlocked={isUnlocked} setIsUnlocked={setIsUnlocked} setVideoPause={setVideoPause}/>);
            } else {
                setPage(<Loader progress={progress} isVideoLoaded={isVideoLoaded} expandScreen={expandScreen} setExpandScreen={setExpandScreen}/>);
            }
            
            if (expandScreen && isUnlocked && isVideoLoaded) {
                setPage(<Content/>);
            } 
        }
        handleChangePage();
    }, [expandScreen, isUnlocked, isVideoLoaded]);

    return (
        <>
            <video src={videoWallpaper} ref={video} autoPlay muted loop className='absolute h-[100dvh] w-[100vw] object-cover z-[-1]' onLoad={() => console.log('Carregado')} alt="" />
            
            {page}
                
        </>

    )

 
}
export default Desktop;