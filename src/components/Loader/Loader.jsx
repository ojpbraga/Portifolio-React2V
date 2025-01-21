import airpod from '/public/images/airpod.svg';
import './animate-bar.css'

const Loader = () => {

    return (
        <section className='absolute grid place-items-center z-50 h-full w-full bg-black '>
            <div className='grid gap-7'>
        
                <div className='grid place-items-center grid-cols-2 w-[10vw]'>
                    <img src={airpod} alt="" className=' w-[5vw]' />
                    <img src={airpod} alt="" className=' w-[5vw] scale-x-[-1]' />
                </div>

                <div className='w-[10vw] h-[1vh] bg-[#2a2a2a] rounded-full'>
                    <div className='bg-white w-0 h-full rounded-full animate-bar'>
                    </div>
                </div>
                
            </div>

        </section>
    )
}
export default Loader;