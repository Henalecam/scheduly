'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent dark:from-gray-900/80 dark:to-transparent" />
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white leading-tight animate-fade-in">
              Agendamento Inteligente com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                IA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Diga o que precisa e nossa IA entende. Agende compromissos de forma natural e eficiente.
            </p>
            
            <div className="card max-w-2xl mx-auto mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shadow-lg animate-bounce-slow">
                  <span className="text-3xl">🤖</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                  &ldquo;Quero marcar uma reunião para segunda de manhã&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center shadow-lg animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <span className="text-3xl">✅</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  → Nossa IA entende e sugere os melhores horários disponíveis
                </p>
              </div>
            </div>

            <Link 
              href="/schedule" 
              className="button-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Experimente agora
              <span className="text-xl animate-bounce-horizontal">→</span>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white animate-fade-in">
            Recursos que fazem a diferença
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? `ring-2 ring-${feature.color}-500 scale-105 shadow-soft${theme === 'dark' ? '-dark' : ''}`
                    : 'hover:shadow-soft hover:scale-[1.02]'
                }`}
                onClick={() => setActiveFeature(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-5xl mb-6 text-${feature.color}-500 animate-float`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="card">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white animate-fade-in">
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1️⃣', text: 'Digite sua solicitação', description: 'De forma natural, como se estivesse conversando' },
                { step: '2️⃣', text: 'IA analisa e sugere', description: 'Nossa IA processa e encontra os melhores horários' },
                { step: '3️⃣', text: 'Escolha o horário', description: 'Selecione o horário que melhor se encaixa' },
                { step: '4️⃣', text: 'Confirme e pronto!', description: 'Receba a confirmação e os detalhes do agendamento' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4 animate-float">{item.step}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Pronto para simplificar seus agendamentos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Experimente agora e descubra como a IA pode transformar a forma como você agenda compromissos.
            </p>
            <Link 
              href="/schedule" 
              className="button-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Começar agora
              <span className="text-xl animate-bounce-horizontal">→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
