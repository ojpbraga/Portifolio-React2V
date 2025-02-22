import './desktop.css'
import Logo from '/images/logo.svg'
import wifi from '/images/wifi-icon.svg'
import search from '/images/search.svg'
import person from '/images/person.svg'
import control from '/images/control.svg'
import BatteryIcon from '/images/battery-icon.svg'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { formatDate } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const Header = () => {
    const container = useRef();
    gsap.registerPlugin(Timeline);
    const [date, setDate] = useState(new Date());
    
        setInterval(() => {
            setDate(new Date());
        }, 100);
    
        const dayWeek = formatDate(date, `EEEE`,{locale: ptBR,});
        const dayMonth = formatDate(date, `dd`,{locale: ptBR,});
        const month = formatDate(date, `MMM`,{locale: ptBR,});
        const hour = formatDate(date, `H:mm`,{locale: ptBR,});

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline()
            
                .to(container.current, {top:'0', duration: 0.8, ease:'none'})
        }, 2000)
    }, []);
    // Talvez refazer p/ versão branco com vídeo de fundo
    return (
        <header className="w-full h-6 relative" >
            <div ref={container} className='absolute h-6 w-full glassmorphism flex items-center px-4 justify-between top-[-100px]'>
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
                    <p className='text-sm font-semibold mb-[0.8px] text-black'>{`${dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1,3)}., ${dayMonth} de ${month.charAt(0).toUpperCase() + month.slice(1)}. ${hour}`}</p>
                </div>
            </div>
            
        </header>
    )
}
export default Header;