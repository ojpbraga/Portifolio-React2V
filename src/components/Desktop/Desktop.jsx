import { useEffect, useRef, useState } from 'react';
import Login from '../Login/Login';
import videoWallpaper from '/public/images/macOS.mp4'
import Content from './Content';

const Desktop = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isVideoPause, setVideoPause] = useState(false);
    const video = useRef();

    useEffect(() => {
        if(isVideoPause) setTimeout(() => {
            video.current.pause();
        }, 2500);

    }, [isUnlocked]);

    return (
        <>
            <video src={videoWallpaper} ref={video} autoPlay muted className='absolute h-[100dvh] w-[100vw] object-cover z-[-1]' alt="" />

            {isUnlocked ? <Content/> : <Login setVideoPause={setVideoPause} setIsUnlocked={setIsUnlocked}/>}
        </>

    )

 
}
export default Desktop;