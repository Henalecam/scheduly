'use client';

import { useTheme } from '../ThemeProvider';

interface Appointment {
  id: string;
  name: string;
  email: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export default function Admin() {
  const { theme } = useTheme();
  const appointments: Appointment[] = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@example.com',
      time: '09:00',
      status: 'confirmed'
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@example.com',
      time: '10:30',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Pedro Oliveira',
      email: 'pedro@example.com',
      time: '14:00',
      status: 'cancelled'
    }
  ];

  const stats = {
    today: 5,
    week: 15,
    confirmationRate: 85
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Painel Administrativo
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Gerencie agendamentos e visualize estatísticas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Agendamentos Hoje
            </h3>
            <p className="text-3xl font-bold text-primary">{stats.today}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Agendamentos Semana
            </h3>
            <p className="text-3xl font-bold text-primary">{stats.week}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Taxa de Confirmação
            </h3>
            <p className="text-3xl font-bold text-primary">{stats.confirmationRate}%</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Próximos Agendamentos
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Horário
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {appointment.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {appointment.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : appointment.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {appointment.status === 'confirmed' ? 'Confirmado' :
                         appointment.status === 'pending' ? 'Pendente' : 'Cancelado'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 