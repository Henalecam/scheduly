'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../ThemeProvider';

interface TimeSlot {
  id: string;
  time: string;
}

export default function Schedule() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de processamento da IA
    setTimeout(() => {
      setSuggestions([
        { id: '1', time: 'Segunda-feira, 10:00 - 11:00' },
        { id: '2', time: 'Terça-feira, 14:00 - 15:00' },
        { id: '3', time: 'Quarta-feira, 16:00 - 17:00' }
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectTime = () => {
    router.push('/confirm');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card mb-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Agende seu compromisso
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Digite sua solicitação de forma natural. Por exemplo: &ldquo;Quero marcar uma reunião para segunda de manhã&rdquo;
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua solicitação aqui..."
              className="input w-full h-32 resize-none"
              required
            />
            <div className="absolute right-4 top-4 text-gray-400">
              {isLoading ? (
                <div className="animate-spin-slow">🔄</div>
              ) : (
                <button type="submit" className="button-primary">
                  Enviar
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {suggestions.length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Sugestões de horários
          </h2>
          <div className="space-y-3">
            {suggestions.map((timeSlot) => (
              <button
                key={timeSlot.id}
                onClick={() => handleSelectTime()}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{timeSlot.time}</span>
                  <span className="text-blue-500">Selecionar</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="card text-center">
          <div className="animate-pulse-slow text-4xl mb-4">🤔</div>
          <p className="text-gray-600 dark:text-gray-300">
            Nossa IA está analisando sua solicitação...
          </p>
        </div>
      )}
    </div>
  );
} 