import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-6 right-6 z-50
        p-3 rounded-full
        bg-white/10 hover:bg-white/20
        dark:bg-white/10 dark:hover:bg-white/20
        backdrop-blur-lg
        border border-white/20
        transition-all duration-300
        shadow-lg hover:shadow-xl
        group
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun
          className="w-6 h-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500"
        />
      ) : (
        <Moon
          className="w-6 h-6 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500"
        />
      )}
    </button>
  );
};  