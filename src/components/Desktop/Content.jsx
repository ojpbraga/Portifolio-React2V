import Header from './Header';
import Dock from './Dock';
import Safari from './Safari/Safari';
import { useState } from 'react';

const Content = () => {
    const [isSafariOpen, setIsSafariOpen] = useState(false);

    return (
        <>
            <main className='h-[100dvh] w-[100dvw] flex flex-col justify-between items-center overflow-hidden'>
                <Header/>
                    {isSafariOpen && <Safari/>}
                <Dock setIsSafariOpen={setIsSafariOpen}/>
            </main>
        </>
    )
};
export default Content;