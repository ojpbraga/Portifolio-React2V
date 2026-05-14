import shareIcon from '/public/images/share-icon.svg';
import sidebarIcon from '/public/images/sidebar-icon.svg';
import arrowIcon from '/public/images/arrow-icon.svg';
import lockIcon from '/public/images/lock-icon.svg';
import plusIcon from '/public/images/plus-icon.svg';
import reloadIcon from '/public/images/reload-icon.svg';
import downloadIcon from '/public/images/download-icon.svg';
import macClose from '/public/images/mac-close.svg';
import macMinimize from '/public/images/mac-minimize.svg';
import macMaximize from '/public/images/mac-maximize.svg';
import { useContext } from 'react';
import { AppsContext } from '@/AppsContext';

const Header = ({ app }) => {
    const { data, setData } = useContext(AppsContext);

    function handleCloseScreen() {
        setData(data =>
            data.map(appObj => appObj.id === app ? { ...appObj, close: !appObj.close } : appObj)
        );
    }

    function handleMaximize() {
        setData(data =>
            data.map(appObj => appObj.id === app ? { ...appObj, maximize: !appObj.maximize } : appObj)
        );
    }

    function handleMinimize() {
        setData(data =>
            data.map(appObj => appObj.id === app ? { ...appObj, close: !appObj.close } : appObj)
        );
    }

    if (app === 'safari')
        return (
            <header className="w-full h-10 bg-black/80 sticky top-0 flex items-center justify-between px-3 gap-2 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
                {/* Esquerda — traffic lights + sidebar */}
                <div className='flex items-center gap-3 flex-shrink-0'>
                    <div className="flex items-center gap-1.5">
                        {data && <>
                            <img onClick={handleCloseScreen} src={macClose} className="h-3.5 w-3.5 cursor-pointer hover:scale-110 transition-transform active:scale-95" alt="close" />
                            <img onClick={handleMinimize} src={macMinimize} className="h-3.5 w-3.5 cursor-pointer hover:scale-110 transition-transform active:scale-95" alt="minimize" />
                            <img onClick={handleMaximize} src={macMaximize} className="h-3.5 w-3.5 cursor-pointer hover:scale-110 transition-transform active:scale-95" alt="maximize" />
                        </>}
                    </div>

                    {/* Sidebar toggle — oculto no mobile */}
                    <div className='hidden sm:flex items-center gap-[2px]'>
                        <img src={sidebarIcon} className='w-4 opacity-60' alt="" />
                        <img src={arrowIcon} className='w-[6px] rotate-90 scale-x-[-1] opacity-60' alt="" />
                    </div>
                </div>

                {/* Centro — barra de endereço */}
                <div className="flex-1 flex justify-center px-2 min-w-0">
                    <div
                        className='rounded-md h-6 px-2 flex items-center gap-1.5 w-full max-w-[200px] sm:max-w-xs'
                        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                        <img src={lockIcon} className='w-2 opacity-40 flex-shrink-0' alt="" />
                        <p className='text-[11px] text-white/50 truncate flex-1 text-center'>
                            JoaoPortifolio.com
                        </p>
                        <img src={reloadIcon} className='w-2.5 opacity-40 flex-shrink-0' alt="" />
                    </div>
                </div>

                {/* Direita — ações — ocultas no mobile */}
                <div className='hidden sm:flex items-center gap-2 flex-shrink-0'>
                    <img src={downloadIcon} className='w-4 opacity-50' alt="" />
                    <img src={shareIcon} className='w-7 opacity-50' alt="" />
                    <img src={plusIcon} className='w-3.5 opacity-50' alt="" />
                </div>
            </header>
        );
};
export default Header;
