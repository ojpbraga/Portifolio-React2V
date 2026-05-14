import Particles from '../ui/particles';
import { AboutMe } from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Frameworks from '../Frameworks/Frameworks';
import Projects from '../Projects/Projects';

function Home() {
  return (
    <>
      <Particles />
      <main className='grid gap-16 sm:gap-20 xl:gap-24 justify-center min-w-full mx-auto my-0 pb-0'>
        <Intro />
        <AboutMe />
        <Projects />
        <Frameworks />
        <Contact />
      </main>
    </>
  );
}

export default Home;
