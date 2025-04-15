'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { theme } = useTheme();

  const features = [
    {
      title: 'Agendamento Natural',
      description: 'Fale como preferir, nossa IA entende',
      icon: '🗓️',
      color: 'blue'
    },
    {
      title: 'Horários Otimizados',
      description: 'Sugestões inteligentes baseadas em sua agenda',
      icon: '⏰',
      color: 'green'
    },
    {
      title: 'Lembretes Automáticos',
      description: 'Nunca mais perca um compromisso',
      icon: '🔔',
      color: 'purple'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          Agendamento Inteligente com IA
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Diga o que precisa e nossa IA entende. Agende compromissos de forma natural e eficiente.
        </p>
        
        <div className="card max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              &ldquo;Quero marcar uma reunião para segunda de manhã&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              → Nossa IA entende e sugere os melhores horários disponíveis
            </p>
          </div>
        </div>

        <Link 
          href="/schedule" 
          className="button-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          Experimente agora
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`card cursor-pointer transition-all ${
              activeFeature === index 
                ? `ring-2 ring-${feature.color}-500 scale-105 shadow-soft${theme === 'dark' ? '-dark' : ''}`
                : 'hover:shadow-soft hover:scale-[1.02]'
            }`}
            onClick={() => setActiveFeature(index)}
          >
            <div className={`text-4xl mb-4 text-${feature.color}-500`}>{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="card mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Como Funciona
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '1️⃣', text: 'Digite sua solicitação' },
            { step: '2️⃣', text: 'IA analisa e sugere' },
            { step: '3️⃣', text: 'Escolha o horário' },
            { step: '4️⃣', text: 'Confirme e pronto!' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">{item.step}</span>
              </div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Pronto para começar?
        </h2>
        <Link 
          href="/schedule" 
          className="button-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          Agende seu primeiro compromisso
        </Link>
      </section>
    </div>
  );
}
