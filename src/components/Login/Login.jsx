import WifiIcon from '/public/images/wifi-icon-white.svg'
import BatteryIcon from '/public/images/battery-icon-white.svg'
import './Login.css'
import Alien from '/public/images/memoji-alien.gif'
import { useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR'
import { formatDate } from 'date-fns';

const Login = ({setIsUnlocked, setVideoPause}) => {
    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 100);

    const dayWeek = formatDate(date, `eeee`,{locale: ptBR,});
    const dayMonth = formatDate(date, `dd`,{locale: ptBR,});
    const month = formatDate(date, `MMMM`,{locale: ptBR,});

    function handleClick() {
        setIsUnlocked(true);
        setVideoPause(true);
    }

    return (
        <main className="flex flex-col h-[100dvh] w-full items-center">

            <header className='w-full justify-end p-1 px-2 flex z-10'>
                <img className='w-10' src={WifiIcon} alt="" />
                <img src={BatteryIcon} className='w-6 ' alt="" />
            </header>

            {/* Resolver problema zindex */}
            <div className='z-10 flex flex-col h-full justify-between'>

                {/* Relogio */}
                <div className='mt-10'>
                    {/* dia / mes */}
                    <div>
                        <h1 className='text-center text-2xl font-bold opacity-[0.8] text-blur'>{`${dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1)}, ${dayMonth} de ${month.charAt(0).toUpperCase() + month.slice(1)}`}</h1>
                        <h1 className='text-center text-8xl font-semibold opacity-[0.8] text-blur'>
                        {
                            formatDate(date, `H:mm`, {
                                locale: ptBR,
                            })
                        }
                        </h1>
                    </div>
                </div>

                {/* Login */}
                <div className='h-36 z-10 grid place-items-center mb-6'>

                    <div className='grid justify-items-center gap-2'>
                        <div className='rounded-[100px] h-12 w-12'>
                            <img src={Alien} className='rounded-full w-full h-full object-cover' alt="" />
                        </div>
                        <p className='text-sm'>João's Portifolio</p>
                    </div>

                    <button onClick={handleClick} className=' glassmorphism rounded-full h-8 w-24 text-sm text-white'>Portifolio</button>

                </div>

            </div>


        </main>
       
    )
};
export default Login;