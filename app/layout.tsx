import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HyperDrive Hub',
  description: 'Гараж и Конфигуратор Суперкаров',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
