import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light';
  const imageUrl = currentTheme === 'dark' 
    ? "/images/dark.jpg"
    : "/images/light.jpg";

  return (
    <section className="min-h-screen flex items-center pt-20 dark:bg-neo-navy dark:text-white">
      <div className="neo-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <span className="inline-block py-1 px-3 bg-neo-yellow border-2 border-neo-black rounded-full text-sm font-medium mb-4 shadow-neo-sm dark:bg-neo-lime/20 dark:border-neo-lime/60 dark:text-neo-lime">
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up opacity-0 dark:text-white" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <span 
                className="text-neo-blue dark:text-neo-lime transition-colors duration-300 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? "シヴァム・シン" : "Shivam Singh"}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up dark:text-neo-softpurple" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              I build beautiful, functional, and accessible websites and applications.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <a href="#projects" className="neo-button dark:bg-neo-darkblue dark:text-white dark:border-neo-lime/60">
                View My Work
              </a>
              <a href="#contact" className="neo-button dark:bg-neo-darkblue dark:text-white dark:border-neo-lime/60">
                Get In Touch
              </a>
              <a href="https://drive.google.com/file/d/1L2t6a4GtEXOY2076o11stid6k7LfPi6i/view?usp=sharing" className="neo-button dark:bg-neo-darkblue dark:text-white dark:border-neo-lime/60" target="_blank">
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="absolute top-2 left-2 w-full h-full bg-neo-pink dark:bg-neo-lime/40 border-2 border-neo-black dark:border-neo-lime/60 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-neo-navy border-2 border-neo-black dark:border-neo-lime/60 rounded-lg overflow-hidden">
                {mounted && (
                  <img 
                    src={imageUrl}
                    alt="Sushi themed developer illustration" 
                    className="w-full h-full object-contain p-4 opacity-100 dark:opacity-90 transition-opacity duration-300"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
