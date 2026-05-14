import WifiIcon from '/public/images/wifi-icon-white.svg'
import BatteryIcon from '/public/images/battery-icon-white.svg'
import './Login.css'
import Alien from '/public/images/memoji-alien.gif'
import { useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR'
import { formatDate } from 'date-fns';
import { GlassButton } from '../ui/liquid-glass';

const Login = ({ setIsUnlocked }) => {
    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 100);

    const dayWeek = formatDate(date, `eeee`, { locale: ptBR });
    const dayMonth = formatDate(date, `dd`, { locale: ptBR });
    const month = formatDate(date, `MMMM`, { locale: ptBR });

    function handleClick() {
        setIsUnlocked(true);
    }

    return (
        <main className="flex flex-col h-[100dvh] w-full items-center">

            <header className='w-full justify-end p-1 px-2 flex z-10'>
                <img className='w-10' src={WifiIcon} alt="" />
                <img src={BatteryIcon} className='w-6' alt="" />
            </header>

            <div className='z-10 flex flex-col h-full justify-between'>

                {/* Relógio */}
                <div className='mt-10'>
                    <div>
                        <h1 className='text-center text-2xl font-bold opacity-80 text-blur'>
                            {`${dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1)}, ${dayMonth} de ${month.charAt(0).toUpperCase() + month.slice(1)}`}
                        </h1>
                        <h1 className='text-center text-8xl font-semibold opacity-80 text-blur'>
                            {formatDate(date, `H:mm`, { locale: ptBR })}
                        </h1>
                    </div>
                </div>

                {/* Login */}
                <div className='h-36 z-10 grid place-items-center mb-6 gap-4'>

                    <div className='grid justify-items-center gap-2'>
                        <div className='rounded-full h-14 w-14 ring-2 ring-white/20 overflow-hidden'>
                            <img src={Alien} className='rounded-full w-full h-full object-cover' alt="" />
                        </div>
                        <p className='text-sm font-medium text-white/80'>João's Portfolio</p>
                    </div>

                    <GlassButton onClick={handleClick} className="text-sm font-semibold text-white">
                        Portfolio
                    </GlassButton>

                </div>

            </div>

        </main>
    )
};
export default Login;
