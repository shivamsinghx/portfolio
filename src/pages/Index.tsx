
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import { Github, Linkedin, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-neo-cream dark:bg-neo-mint">
      <NavBar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      
      <footer className="bg-neo-mint text-white py-12 border-t-4 border-neo-lime">
        <div className="neo-container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-2 font-mono">
                <span className="text-neo-lime">&lt;/&gt;</span>
              </h2>
              <p className="max-w-md text-white/80">
                Shivam Singh
              </p>
            </div>
            
            <div className="flex space-x-4" data-aos="fade-left">
              <a 
                href="https://github.com/shivamsinghx" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neo-mint border-2 border-white rounded-full flex items-center justify-center hover:bg-neo-lime hover:text-neo-mint transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shivam-singh74/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neo-mint border-2 border-white rounded-full flex items-center justify-center hover:bg-neo-lime hover:text-neo-mint transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:shivamsingx@gmail.com" 
                className="w-12 h-12 bg-neo-mint border-2 border-white rounded-full flex items-center justify-center hover:bg-neo-lime hover:text-neo-mint transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
