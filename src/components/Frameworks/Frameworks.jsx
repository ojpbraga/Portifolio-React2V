import { AnimatedBeamDemo } from "../demo/AnimatedBeam";

const Frameworks = () => {

    return (
        <section data-scroll-container className='grid place-items-center h-[77dvh]'>
            <div className='w-[90%] h-[90%] xl:w-[80%] bg-[#1B1B1B] rounded-[30px] grid p-10 xl:pt-5'>

                <h1 className='font-bold text-[11vw] md:text-[8vw] xl:text-[5vw]'>Frameworks</h1>
    
                <div className='w-full justify-self-center'>
                    <AnimatedBeamDemo/>
                </div>
    
            </div>
        </section>
    )
}
export default Frameworks;