'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from '../ThemeProvider';

export default function Success() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className={`card ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
          theme === 'dark' ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-600'
        } transition-colors duration-300`}>
          <span className="text-4xl" role="img" aria-label="check">✅</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white transition-colors duration-300">
          Agendamento Confirmado!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          Seu compromisso foi agendado com sucesso.
        </p>
        <div className="space-y-4 mb-8">
          <div className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
          } transition-colors duration-300`}>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Reunião de Negócios
            </p>
            <p className="text-gray-800 dark:text-white font-semibold transition-colors duration-300">
              Segunda-feira, 08:00 - 09:00
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push('/')}
          className={`button-primary ${
            theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          } transition-all duration-300 px-6 py-2 rounded-lg font-medium`}
        >
          Voltar para o início
        </button>
      </div>
    </div>
  );
} 