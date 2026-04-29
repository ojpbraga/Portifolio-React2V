import gsap from "gsap";
import Header from "./Header";
import './window.css';
import { Draggable } from "gsap/all";
import { useEffect, useRef, useContext } from "react";
import { AppsContext } from "@/AppsContext";

const Window = ({children, app}) => {
    gsap.registerPlugin(Draggable);
    const container = useRef();
    const { data } = useContext(AppsContext);

    const appObj = data?.find(a => a.id === app);
    const isMaximized = appObj?.maximize ?? false;

    useEffect(() => {
        if (!isMaximized) {
            Draggable.create(container.current, {
                dragResistance: true,
                bounds: [container.current.parentElement],
            });
        }
    }, [container, isMaximized]);

    return (
        <div
            ref={container}
            className={`bg-black shadow-lg flex flex-col overflow-hidden transition-all duration-300
                ${isMaximized
                    ? 'fixed inset-0 z-50 rounded-none w-screen h-screen'
                    : 'rounded-xl w-[95vw] h-[80dvh] z-0'
                }`}
        >
            <Header app={app}/>
            <div className="window-scroll grow overflow-x-hidden overflow-visible">
                {children}
            </div>
        </div>
    );
}
export default Window;