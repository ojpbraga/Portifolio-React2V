import './desktop.css'
import Logo from '/public/images/logo.svg'
import wifi from '/public/images/wifi-icon.svg'
import search from '/public/images/search.svg'
import person from '/public/images/person.svg'
import control from '/public/images/control.svg'
import BatteryIcon from '/public/images/battery-icon.svg'

const Header = () => {
    // Talvez refazer p/ versão branco com vídeo de fundo
    return (
        <header className="w-full h-6 relative" >
            <div className='header absolute h-6 w-full glassmorphism flex items-center px-4 justify-between'>
                {/* Initial */}
                <div className='gap-4 h-full flex items-center'>
                    <img className='w-4' src={Logo} alt="" />
                    <p className='text-sm font-semibold mb-[0.8px] text-black'>Finder</p>
                </div>

                {/* Status/Config */}
                <div className='flex items-center'>
                    <img src={BatteryIcon} className='pr-2' alt="" />
                    <img src={wifi} alt="" />
                    <img src={search} alt="" />
                    <img src={person} alt="" />
                    <img src={control} alt="" />
                    <p className='text-sm font-semibold mb-[0.8px] text-black'>Mon Jan 10 12:00 AM</p>
                </div>
            </div>
            
        </header>
    )
}
export default Header;