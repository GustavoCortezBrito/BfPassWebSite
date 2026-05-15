import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalar App',
  description: 'Aprenda a instalar o CoreClub no seu iPhone ou Android como um app nativo, sem precisar da App Store ou Google Play.',
  openGraph: {
    title: 'Instalar o CoreClub — Tutorial passo a passo',
    description: 'Veja como adicionar o CoreClub à tela inicial do seu iPhone ou Android em menos de 1 minuto.',
  },
};

export default function InstalarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
