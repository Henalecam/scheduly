import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { AnimatedBackground } from "./components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scheduly - Agendamento Inteligente",
  description: "Agende compromissos de forma natural e eficiente com IA",
  openGraph: {
    title: "Scheduly - Agendamento Inteligente",
    description: "Agende compromissos de forma natural e eficiente com IA",
    url: "https://scheduly-eta.vercel.app/",
    siteName: "Scheduly",
    images: [
      {
        url: "/Scheduly.png",
        width: 1200,
        height: 630,
        alt: "Scheduly logo and calendar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AnimatedBackground />
          <div className="min-h-screen flex flex-col">
            <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    Scheduly
                  </Link>
                  <nav className="flex items-center gap-6">
                    <Link href="/schedule" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      Agendar
                    </Link>
                    <Link href="/admin" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      Admin
                    </Link>
                    <ThemeToggle />
                  </nav>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-600 dark:text-gray-400">
                  © 2024 Scheduly. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
