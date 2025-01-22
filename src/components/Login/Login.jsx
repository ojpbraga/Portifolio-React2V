import WifiIcon from '/public/images/wifi-icon.svg'
import BatteryIcon from '/public/images/battery-icon.svg'
import './Login'
import Alien from '/public/images/memoji-alien.gif'

const Login = ({setIsUnlocked, setVideoPause}) => {

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
                        <h1 className='text-center text-2xl font-bold opacity-[0.8] text-blur'>Terça Feira, 12 de Fevereiro</h1>
                        <h1 className='text-center text-8xl font-semibold opacity-[0.8] text-blur'>00:99</h1>
                    </div>
                </div>

                {/* Login */}
                <div className='h-36 z-10 grid place-items-center'>

                    <div className='grid justify-items-center gap-2'>
                        <div className='rounded-[100px] h-12 w-12'>
                            <img src={Alien} className='rounded-full w-full h-full object-cover' alt="" />
                        </div>
                        <p>João's Portifolio</p>
                    </div>

                    <button onClick={handleClick} className='bg-slate-50 rounded-full h-9 w-28'>Portifolio</button>

                </div>

            </div>


        </main>
       
    )
};
export default Login;