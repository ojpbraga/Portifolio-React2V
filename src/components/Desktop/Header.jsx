import './desktop.css'
import Logo from '/images/logo.svg'
import wifi from '/images/wifi-icon.svg'
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

    setInterval(() => setDate(new Date()), 1000);

    const dayWeek  = formatDate(date, `EEE`, { locale: ptBR });
    const dayMonth = formatDate(date, `dd`,  { locale: ptBR });
    const month    = formatDate(date, `MMM`, { locale: ptBR });
    const hour     = formatDate(date, `H:mm`,{ locale: ptBR });

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline().to(container.current, { top: '0', duration: 0.8, ease: 'none' });
        }, 2000);
    }, []);

    return (
        <header className="w-full h-6 relative">
            <div
                ref={container}
                className='absolute h-6 w-full glassmorphism flex items-center px-3 justify-between top-[-100px]'
            >
                {/* Esquerda */}
                <div className='flex items-center gap-3 h-full'>
                    <img className='w-4' src={Logo} alt="" />
                    <p className='text-xs font-semibold text-black hidden sm:block'>Finder</p>
                </div>

                {/* Direita */}
                <div className='flex items-center gap-1'>
                    <img src={BatteryIcon} className='h-3 opacity-80' alt="" />
                    <img src={wifi} className='h-3 opacity-80' alt="" />
                    {/* Data completa — só em telas maiores */}
                    <p className='text-xs font-semibold text-black hidden sm:block ml-1'>
                        {`${dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1)}. ${dayMonth} ${month.charAt(0).toUpperCase() + month.slice(1)}. `}
                    </p>
                    {/* Sempre visível: hora */}
                    <p className='text-xs font-semibold text-black ml-1'>{hour}</p>
                </div>
            </div>
        </header>
    );
};
export default Header;
