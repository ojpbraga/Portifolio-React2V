import Header from "./Header";
import '../window/window.css'

// Pensar em parametros que torne o componente reutilizavel a outros apps
const Window = ({children}) => {
    return (
        <div className="rounded-xl bg-black shadow-lg w-[95vw] h-[80dvh] flex flex-col overflow-hidden">
            <Header/>
            <div className="window-scroll grow overflow-x-hidden overflow-visible">
                {children}
            </div>
        </div>
    )
}
export default Window;