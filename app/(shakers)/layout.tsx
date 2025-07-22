// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar Proyectos',
  description: 'Listado de proyectos freelance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
