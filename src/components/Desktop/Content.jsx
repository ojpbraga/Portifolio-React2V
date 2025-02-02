import Header from './Header';
import Dock from './Dock';
import Safari from './Safari/Safari';
import { useContext, useState } from 'react';
import { AppsContext, AppsStorange } from '../../AppsContext';
// import gsap, {Draggable, InertiaPlugin} from 'gsap';

// objeto com os componentes para retorno caso close = true
const appsComponents = {
    safari:<Safari/>,
}

const Content = () => {
    const {data, setData} = useContext(AppsContext);

    // gsap.registerPlugin(Draggable, InertiaPlugin);
    // Draggable.create(".flair--4b", {
    //     bounds: ".container",
    //     inertia: true
    //   });

    return (
        <>
            <main className='h-[100dvh] w-[100dvw] flex flex-col justify-between items-center overflow-hidden'>
                <Header/>

                    {/* Retorna componentes que estão abertos, possibilitando multitarefas */}
                    {data && data.map(appObj => appObj.close ? appsComponents[appObj.id] : null)}
                  
                <Dock/>
            </main>
        </>
    )
};
export default Content;