import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchPaper from './components/ResearchPaper';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FinalYearProject from './components/FinalYearProject';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'projects', 'fyp', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <ResearchPaper />
        <Skills />
        <Experience />
        <Projects />
        <FinalYearProject />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;