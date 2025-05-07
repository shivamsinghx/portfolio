
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { useTheme } from 'next-themes';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // After mounting, we can safely show the theme-dependent UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const isDarkMode = mounted && (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark'));

  const toggleTheme = () => {
    // Force theme to be specifically 'light' or 'dark', not 'system'
    const newTheme = isDarkMode ? 'light' : 'dark';
    console.log(`Switching theme from ${theme} to ${newTheme}`);
    setTheme(newTheme);
  };

  // Don't render anything until client-side hydration is complete
  if (!mounted) return null;

  return (
    <Toggle 
      pressed={isDarkMode} 
      onPressedChange={toggleTheme}
      className="w-10 h-10 rounded-full border-2 border-neo-black neo-card"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
    </Toggle>
  );
};

export default ThemeSwitcher;
