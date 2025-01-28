import shareIcon from '/public/images/share-icon.svg';
import sidebarIcon from '/public/images/sidebar-icon.svg'
import arrowIcon from '/public/images/arrow-icon.svg';
import lockIcon from '/public/images/lock-icon.svg';
import plusIcon from '/public/images/plus-icon.svg';
import reloadIcon from '/public/images/reload-icon.svg';
import downloadIcon from '/public/images/download-icon.svg';

const Header = () => {
    return (
        <header className="w-full h-10 bg-black sticky top-0 flex justify-between items-center px-3">
            {/* Window Controls */}
            <div className='flex items-center gap-4'>
                <div className="flex items-center gap-2">
                    {['#FF5F57', '#FEBC2E', '#28C840'].map((controlColor, index) => (
                        <div key={'controlColor_'+index} style={{background: controlColor}} className="h-4 w-4 rounded-full "></div>
                    ))}
                </div>
                {/* Sidebar */}
                <div className='flex items-center gap-[2px] w-8 justify-between'>
                    <img src={sidebarIcon} alt="" />
                    <img src={arrowIcon} className='w-[0.4rem] rotate-90 scale-x-[-1]' alt="" />
                </div>
            </div>

            {/* Pesquisa */}
            <div className="">
                <div className='bg-[#626262] rounded-lg w-80 h-6 p-1 px-2 flex items-center justify-between'>

                    <div className='flex grow items-center justify-center gap-1'>
                        <img src={lockIcon} className='w-2' alt="" /> 
                        <p className='text-xs'>JoaoPortifolio.com</p>
                    </div>
                    
                    <img src={reloadIcon} className='w-3' alt="" />
                </div>
            </div>

            {/* Share */}
            <div className='flex items-center justify-items-center gap-2'>
                <img src={downloadIcon} className='w-5' alt="" />
                <img src={shareIcon} className='w-9' alt="" />
                <img src={plusIcon} className='w-4' alt="" />
            </div>
        </header>
    )
}
export default Header;