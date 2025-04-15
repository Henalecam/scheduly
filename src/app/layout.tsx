import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timewise - Agendamento Inteligente com IA",
  description: "Agende compromissos de forma natural com nossa IA. Diga o que precisa e nossa inteligência artificial entende.",
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
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <header className="container mx-auto px-4 py-6">
              <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Timewise
                </Link>
                <div className="flex items-center gap-6">
                  <Link href="/schedule" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                    Agendar
                  </Link>
                  <Link href="/admin" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                    Admin
                  </Link>
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="container mx-auto px-4 py-8 mt-auto">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
                <p>© 2025 Timewise. Todos os direitos reservados.</p>
                <p className="text-sm mt-2">Agendamento inteligente para uma vida mais organizada</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
