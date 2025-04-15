'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../ThemeProvider';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export default function Schedule() {
  const router = useRouter();
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [suggestions, setSuggestions] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de processamento
    setTimeout(() => {
      const mockSuggestions: TimeSlot[] = [
        { id: '1', time: '09:00', available: true },
        { id: '2', time: '10:30', available: true },
        { id: '3', time: '14:00', available: true },
        { id: '4', time: '15:30', available: true },
      ];
      setSuggestions(mockSuggestions);
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectTime = (timeSlot: TimeSlot) => {
    router.push('/success');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Agende sua Reunião
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Preencha os detalhes abaixo e escolha um horário disponível
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Descrição da Reunião
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input w-full min-h-[120px]"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="button-primary px-8 py-3 text-base"
                disabled={isLoading}
              >
                {isLoading ? 'Processando...' : 'Ver Horários Disponíveis'}
              </button>
            </div>
          </form>

          {suggestions.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Horários Disponíveis
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {suggestions.map((timeSlot) => (
                  <button
                    key={timeSlot.id}
                    onClick={() => handleSelectTime(timeSlot)}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors text-center"
                  >
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {timeSlot.time}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 