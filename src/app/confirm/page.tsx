'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../ThemeProvider';

export default function Confirm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de processamento
    setTimeout(() => {
      router.push('/success');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card mb-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Confirme seus dados
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Por favor, preencha seus dados para confirmar o agendamento
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
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
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Voltar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary flex-1"
            >
              {isSubmitting ? 'Confirmando...' : 'Confirmar Agendamento'}
            </button>
          </div>
        </form>
      </div>

      {isSubmitting && (
        <div className="card text-center">
          <div className="animate-pulse-slow text-4xl mb-4">⏳</div>
          <p className="text-gray-600 dark:text-gray-300">
            Processando sua confirmação...
          </p>
        </div>
      )}
    </div>
  );
} 