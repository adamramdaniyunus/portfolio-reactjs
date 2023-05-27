import './App.css';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Project from './components/Project'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="bg-primary flex lg:justify-around justify-between lg:p-4 pt-3 pb-2 px-2 sticky top-0 z-50">
        < Navbar />
      </div>
      {/* <hr className="text-third" /> */}
      <div id='home' className="px-6 h-screen">
        < Home />
      </div>
      <div id='about' className='h-screen'>
        < About />
      </div>
      <div id='project' className='h-screen'>
        <Project />
      </div>
      <div id="contact" className='h-screen'>
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;
