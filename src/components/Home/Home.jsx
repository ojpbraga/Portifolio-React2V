import { useEffect } from 'react';
import Particles from '../ui/particles';
import LocomotiveScroll from "locomotive-scroll";
import { AboutMe } from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Frameworks from '../Frameworks/Frameworks';
import Projects from '../Projects/Projects';

function Home() {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.03, // Controle de velocidade do scroll
      multiplier: 1.2, // Ajuste da velocidade geral
    });

    return () => {
      scroll.destroy();
    };
  }, []);
 
  return (
    <>
      <Particles />
      <main className='grid gap-32 justify-center bg-black xmax-w-lg min-w-full md:max-w-sm mx-auto my-0 '>
          <Intro/>
          <AboutMe/>
          <Projects/>
          <Frameworks/>
          <Contact/>
      </main>
    </>
  )
}

export default Home;
