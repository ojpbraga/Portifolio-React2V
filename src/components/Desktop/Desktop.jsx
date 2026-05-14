import { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Content from './Content';
import Loader from './Loader';
import { ShaderBackground } from '../ui/shader-background';
import { GlassFilter } from '../ui/liquid-glass';

const Desktop = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [expandScreen, setExpandScreen] = useState(false);
    const [page, setPage] = useState();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const assetsToPreload = [
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
            if (loadedCount === total) setIsVideoLoaded(true);
        };

        assetsToPreload.forEach(asset => {
            const img = new Image();
            img.src = asset.src;
            img.onload = updateProgress;
            img.onerror = updateProgress;
        });
    }, []);

    useEffect(() => {
        function handleChangePage() {
            if (expandScreen) {
                setPage(<Login isUnlocked={isUnlocked} setIsUnlocked={setIsUnlocked} />);
            } else {
                setPage(<Loader progress={progress} isVideoLoaded={isVideoLoaded} expandScreen={expandScreen} setExpandScreen={setExpandScreen} />);
            }

            if (expandScreen && isUnlocked && isVideoLoaded) {
                setPage(<Content />);
            }
        }
        handleChangePage();
    }, [expandScreen, isUnlocked, isVideoLoaded]);

    return (
        <>
            <GlassFilter />
            <div className="absolute h-[100dvh] w-[100vw] z-[-1] overflow-hidden">
                <ShaderBackground />
            </div>
            {page}
        </>
    );
};

export default Desktop;
