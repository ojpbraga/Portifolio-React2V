import {ScrollShadow} from "@heroui/react";

export const Content = () => (
    <>
        <div>
            <h1 className='text-[10vw] md:text-[7vw] xl:text-[4vw] xl:text-start font-bold'>I'm João.</h1>
            <p className='text-[7vw] md:text-[5.5vw] xl:text-[2.5vw] text-[#A1A1A1] font-bold'>A student of <span className='text-[#E1E1E1]'>software engineer</span>. I live in Belo Horizonte - MG and I trying to <span className='text-[#E1E1E1]'>find a job</span> I live in Belo Horizonte - MG and. </p>
        </div>
        
        <div>
            <h1 className='text-[10vw] md:text-[7vw] xl:text-[4vw] xl:text-start font-bold'>About me</h1>
            <p className='text-[7vw] md:text-[5.5vw] xl:text-[2.5vw] text-[#A1A1A1] font-bold'>A student of <span className='text-[#E1E1E1]'>software engineer</span>. I live in Belo Horizonte - MG and I trying to MG and I trying<span className='text-[#E1E1E1]'>find I live in Belo Horizonte a job</span> I live in Belo Horizonte - MG and I wanna stay in other. </p>
        </div>
        
        <div>
            <h1 className='text-[10vw] md:text-[7vw] xl:text-[4vw] xl:text-start font-bold'>School</h1>
            <p className='text-[8.5vw] md:text-[5.5vw] xl:text-[2.5vw] text-[#A1A1A1] font-bold'>A student of <span className='text-[#E1E1E1]'>software engineer</span>. I live in <br/> Belo Horizonte - MG and I trying to <span className='text-[#E1E1E1]'>find a job</span> <br/> I live in Belo Horizonte - MG and. </p>
        </div>
        
        <div>
            <h1 className='text-[10vw] md:text-[7vw] xl:text-[4vw] xl:text-start font-bold'>School</h1>
            <p className='text-[8.5vw] md:text-[5.5vw] xl:text-[2.5vw] text-[#A1A1A1] font-bold'>A student of <span className='text-[#E1E1E1]'>software engineer</span>. I live in <br/> Belo Horizonte - MG and I trying to <span className='text-[#E1E1E1]'>find a job</span> <br/> I live in Belo Horizonte - MG and. </p>
        </div>
    </>
)

export default function Description({isScreenMobile}) {
    console.log("Aqui tbm "+isScreenMobile);

    if(isScreenMobile) {
        return (
            <div id='profile-div-scroll' className="gap-5 grid xl:overflow-y-scroll pt-5 w-full h-full">
                <Content/>
            </div>
        )
    } else if (isScreenMobile === false) {
        return (
            <ScrollShadow id='profile-div-scroll' className="gap-5 grid xl:overflow-y-scroll pt-5 w-full h-full" size={100}>
                <Content/>
            </ScrollShadow>
        )
    }
}
