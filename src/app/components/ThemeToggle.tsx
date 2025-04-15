'use client';

import { useTheme } from '../ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
      }`}
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <span className="block w-6 h-6 transition-transform duration-300">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
} 