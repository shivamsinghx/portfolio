
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-neo-darkblue border-b-2 border-neo-black dark:border-neo-lime/40 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="neo-container flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold font-mono">
          <span className="text-neo-pink dark:text-neo-lime">&lt;/&gt;</span>
        </a>
        
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
