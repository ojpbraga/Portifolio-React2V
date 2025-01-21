import airpod from '/public/images/airpod.svg';
import './animate-bar.css';

const Loader = () => {
    
    setTimeout(() => {
        window.location.href = '/Login';
    }, 2500);

    return (
        <section className='grid place-items-center h-[100vh] w-full bg-black '>
            <div className='grid gap-7'>
        
                <div className='grid place-items-center grid-cols-2 w-[35vw] xl:w-[10vw]'>
                    <img src={airpod} alt=""/>
                    <img src={airpod} alt="" className=' scale-x-[-1]' />
                </div>

                <div className='w-full h-[1vh] bg-[#2a2a2a] rounded-full'>
                    <div className='bg-white w-0 h-full rounded-full animate-bar'>
                    </div>
                </div>
                
            </div>

        </section>
    )
}
export default Loader;