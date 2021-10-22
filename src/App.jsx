import './App.css';
import Card from './components/Card';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
   Aos.init({
     once: true,
   })
  })

  return (
    <div className = 'min-h=screen py-10 px-3 sm:px-5 bg-gray-100'>
      <div data-aos='fade-down' data-aos-duration='1200' data-aos-easing='ease-in-sine'>
        <Card />
      </div>
      <div data-aos='fade-up' data-aos-delay='600' data-aos-easing='ease-in-sine'>
        <About />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
