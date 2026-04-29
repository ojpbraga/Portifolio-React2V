import { useEffect } from 'react';
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
      <main className='grid gap-16 justify-center bg-black xmax-w-lg min-w-full md:max-w-sm mx-auto my-0 '>
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
