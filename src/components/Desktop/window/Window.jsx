import gsap from "gsap";
import Header from "./Header";
import './window.css';
import { Draggable } from "gsap/all";
import { useEffect, useRef, useContext } from "react";
import { AppsContext } from "@/AppsContext";

const Window = ({ children, app }) => {
    gsap.registerPlugin(Draggable);
    const container = useRef();
    const { data } = useContext(AppsContext);

    const appObj = data?.find(a => a.id === app);
    const isMaximized = appObj?.maximize ?? false;

    useEffect(() => {
        // Só ativa drag em telas maiores
        if (!isMaximized && window.innerWidth >= 768) {
            Draggable.create(container.current, {
                dragResistance: true,
                bounds: [container.current.parentElement],
            });
        }
    }, [container, isMaximized]);

    return (
        <div
            ref={container}
            className={`shadow-2xl flex flex-col overflow-hidden transition-all duration-300
                ${isMaximized
                    ? 'fixed inset-0 z-50 rounded-none w-screen h-screen'
                    : 'rounded-none sm:rounded-xl w-screen sm:w-[95vw] z-0 h-[calc(100dvh-136px)] sm:h-[80dvh]'
                }`}
            style={{ background: '#08091a', border: '1px solid rgba(255,255,255,0.07)' }}
        >
            <Header app={app} />
            <div className="window-scroll grow overflow-x-hidden overflow-y-auto">
                {children}
            </div>
        </div>
    );
};
export default Window;
