import gsap from "gsap";
import Header from "./Header";
import './window.css';
import { Draggable } from "gsap/all";
import { useEffect, useRef } from "react";

// Pensar em parametros que torne o componente reutilizavel a outros apps
const Window = ({children, app}) => {

    gsap.registerPlugin(Draggable);
    const container = useRef();

    useEffect(() => {
        Draggable.create(container.current, {dragResistance:true, bounds:[container.current.parentElement]});
    },[container]);

    return (
        <div ref={container} className="rounded-xl bg-black shadow-lg w-[95vw] h-[80dvh] flex flex-col overflow-hidden z-0">
            <Header app={app}/>
            <div className="window-scroll grow overflow-x-hidden overflow-visible">
                {children}
            </div>
        </div>
    )
}
export default Window;