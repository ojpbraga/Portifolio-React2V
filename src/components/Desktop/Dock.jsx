import './desktop.css'
import finder from '/public/images/finder-icon.svg'
import launchPad from '/public/images/launch-pad.svg'
import safari from '/public/images/safari-icon.svg'
import mensagens from '/public/images/messages-icon.svg'
import email from '/public/images/email-icon.svg'
import mapas from '/public/images/maps-icon.svg'
import fotos from '/public/images/fotos-icon.svg'
import faceTime from '/public/images/fecetime-icon.svg'

const Dock = () => {
    return (
        <div className="glassmorphism flex p-1 pb-0 mb-2 rounded-2xl justify-self-center shadow-md">
            {[finder, launchPad, safari, mensagens, email, mapas, fotos, faceTime].map(apps => (
                <img src={apps} className='w-14' alt="" />
            ))}
        </div>
    )
}
export default Dock;