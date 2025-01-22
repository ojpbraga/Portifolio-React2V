import Header from './Header';
import Dock from './Dock';

const Content = () => {
    return (
        <>
            <main className='h-[100dvh] w-full grid content-between overflow-hidden'>

                <Header/>
                <Dock/>
            </main>
        </>
    )
};
export default Content;