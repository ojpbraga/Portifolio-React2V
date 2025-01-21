import { useEffect } from 'react';
import Particles from './components/ui/particles';
import LocomotiveScroll from "locomotive-scroll";
import { AboutMe } from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Frameworks from './components/Frameworks/Frameworks.jsx';
import Projects from './components/Projects/Projects';
import Loader from './components/Loader/Loader';


function App() {

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

    <main className='grid gap-32 justify-center'>

      <Loader/>
      <Particles />
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Frameworks/>
      <Contact/>
    
    </main>
  )
}

export default App
