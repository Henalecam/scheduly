'use client';

import { useTheme } from '../ThemeProvider';

export default function AdminPage() {
   
  const { theme } = useTheme();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card mb-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Painel Administrativo
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Gerencie seus agendamentos e configurações
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`card ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Agendamentos Hoje
            </h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">12</p>
          </div>

          <div className={`card ${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'}`}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Agendamentos Semana
            </h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">45</p>
          </div>

          <div className={`card ${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Taxa de Confirmação
            </h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">92%</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Próximos Agendamentos
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`flex items-center justify-between p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  Reunião com Cliente {item}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Hoje, {item}:00 PM
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="button-secondary text-sm">
                  Detalhes
                </button>
                <button className="button-primary text-sm">
                  Confirmar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 