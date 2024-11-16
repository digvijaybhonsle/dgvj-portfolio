import './index.css';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        educationRef={educationRef}
        contactRef={contactRef}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <Aboutme />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
