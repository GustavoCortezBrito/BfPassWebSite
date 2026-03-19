import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalar App',
  description: 'Aprenda a instalar o BF-Pass no seu iPhone ou Android como um app nativo, sem precisar da App Store ou Google Play.',
  openGraph: {
    title: 'Instalar o BF-Pass — Tutorial passo a passo',
    description: 'Veja como adicionar o BF-Pass à tela inicial do seu iPhone ou Android em menos de 1 minuto.',
  },
};

export default function InstalarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
