import gsap from "gsap";
import Header from "./Header";
import './window.css';
import { Draggable } from "gsap/all";
import { useContext, useEffect, useRef, useState } from "react";
import { AppsContext } from "@/AppsContext";

// Pensar em parametros que torne o componente reutilizavel a outros apps
const Window = ({children, app}) => {
    const { data } = useContext(AppsContext);
    gsap.registerPlugin(Draggable);
    const container = useRef();
    const [maximize, setMaximize] = useState(false);

    useEffect(() => {
        if(data) data.map(({maximize, id}) => {
            if(maximize && id == app) {
                console.log("aumentou a tela")
                setMaximize(true)
                
            } else {
                console.log("diminuiu a tela")
                setMaximize(false)
              
            }
        });
    }, [data]);

    useEffect(() => {
        Draggable.create(container.current, {dragResistance:true, bounds:[container.current.parentElement]});
    },[container]);

    return (
        <div ref={container} className={"rounded-xl bg-black shadow-lg h-[80dvh] flex flex-col overflow-hidden z-0"} style={{width: `${maximize ? '100vw' : '80vw'}`}}>
            <Header app={app}/>
            <div className="window-scroll grow overflow-x-hidden overflow-visible">
                {children}
            </div>
        </div>
    )
}
export default Window;