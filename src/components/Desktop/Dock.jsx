import './desktop.css'
import finder from '/public/images/finder-icon.svg'
import launchPad from '/public/images/launch-pad.svg'
import safari from '/public/images/safari-icon.svg'
import mensagens from '/public/images/messages-icon.svg'
import email from '/public/images/email-icon.svg'
import mapas from '/public/images/maps-icon.svg'
import fotos from '/public/images/fotos-icon.svg'
import faceTime from '/public/images/fecetime-icon.svg'
import calendario from '/public/images/calendario-icon.svg'
import contatos from '/public/images/contatos-icon.svg'
import notas from '/public/images/notas-icon.svg'
import musica from '/public/images/musica-icon.svg'
import appletv from '/public/images/appletv-icon.svg'
import podcasts from '/public/images/podcasts-icon.svg'
import noticias from '/public/images/noticias-icon.svg'
import configuracao from '/public/images/configuracao-icon.svg'
import pasta from '/public/images/pasta-icon.svg'
import trash from '/public/images/lixo-icon.svg'

const Dock = () => {
    return (
        <div className='w-[100%] h-20 overflow-hidden flex justify-center relative '>
            <div className="glassmorphism dock flex p-1 pb-0 mb-2 rounded-2xl absolute shadow-md">
                {[finder, launchPad, safari, mensagens, email, mapas, fotos, faceTime, calendario, contatos, notas, musica, appletv, podcasts, noticias, configuracao, pasta, trash].map((apps, index) => (
                    <img key={'img_desktop_'+index} src={apps} className='w-14' alt="" />
                ))}
            </div>

        </div>
    )
}
export default Dock;