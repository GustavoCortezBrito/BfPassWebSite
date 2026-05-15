'use client';

import { motion } from 'framer-motion';
import { Share2, PlusSquare, CheckCircle2, Smartphone, Chrome, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const iosSteps = [
  {
    icon: Share2,
    step: '01',
    title: 'Abra no Safari',
    description: 'Acesse o site do CoreClub pelo Safari (não funciona no Chrome ou Firefox no iPhone). Toque no ícone de compartilhar — o quadrado com a seta para cima na barra inferior.',
  },
  {
    icon: PlusSquare,
    step: '02',
    title: 'Adicionar à Tela de Início',
    description: 'Role a lista de opções para baixo e toque em "Adicionar à Tela de Início". Se não aparecer, role mais para baixo na lista de ações.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Confirme e pronto',
    description: 'Toque em "Adicionar" no canto superior direito. O ícone do CoreClub vai aparecer na sua tela inicial como um app nativo.',
  },
];

const androidSteps = [
  {
    icon: Chrome,
    step: '01',
    title: 'Abra no Chrome',
    description: 'Acesse o site do CoreClub pelo Google Chrome no seu Android.',
  },
  {
    icon: Share2,
    step: '02',
    title: 'Menu do navegador',
    description: 'Toque nos três pontos (⋮) no canto superior direito do Chrome.',
  },
  {
    icon: PlusSquare,
    step: '03',
    title: 'Adicionar à tela inicial',
    description: 'Toque em "Adicionar à tela inicial" e confirme. O app aparecerá na sua tela inicial.',
  },
];

export default function InstalarPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm mb-10 transition-colors">
          <ArrowLeft size={16} />
          Voltar ao início
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-border mb-6">
            <Smartphone className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Instale o CoreClub
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            O CoreClub é um PWA — funciona como app nativo sem precisar da App Store ou Google Play. Veja como instalar no seu celular.
          </p>
        </motion.div>

        {/* iOS Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-border">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">iPhone (iOS)</h2>
            <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">Usar o Safari</span>
          </div>

          <div className="space-y-4">
            {iosSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="flex gap-5 bg-surface border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs font-black text-accent">{item.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tutorial video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6"
          >
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider mb-3">Vídeo tutorial</p>
            <video
              src="/tutorial.mp4"
              controls
              playsInline
              className="w-full max-w-xs mx-auto block rounded-2xl border border-border bg-surface"
            />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-14" />

        {/* Android Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-border">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.523 15.341 14.63 10.5l2.893-4.841a.5.5 0 0 0-.863-.5L13.767 10H10.23L7.34 5.159a.5.5 0 0 0-.863.5L9.37 10.5l-2.893 4.841a.5.5 0 0 0 .863.5L10.233 11h3.534l2.893 4.841a.5.5 0 0 0 .863-.5zM8.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Android</h2>
            <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">Usar o Chrome</span>
          </div>

          <div className="space-y-4">
            {androidSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + idx * 0.1 }}
                className="flex gap-5 bg-surface border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs font-black text-accent">{item.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-14" />

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
          <h3 className="font-bold text-white mb-2">Por que não tem na App Store?</h3>
          <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
            O CoreClub é um PWA (Progressive Web App). Funciona como um app nativo — com ícone na tela inicial, sem barra de navegador — mas sem precisar passar pela App Store ou Google Play. Mais rápido, mais simples.
          </p>
        </motion.div>

        {/* Coming soon stores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-surface border border-border rounded-2xl p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-accent relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            </span>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Em breve</span>
          </div>
          <h3 className="font-bold text-white mb-2">Chegando na App Store e Google Play</h3>
          <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
            O CoreClub estará disponível em breve nas lojas oficiais. Por enquanto, instale pelo navegador usando o tutorial acima — é rápido e funciona igual.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-background border border-border opacity-60 cursor-not-allowed select-none">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-text-light leading-none">Em breve na</span>
                <span className="text-sm font-semibold text-white leading-tight">App Store</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-background border border-border opacity-60 cursor-not-allowed select-none">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.523 15.341 14.63 10.5l2.893-4.841a.5.5 0 0 0-.863-.5L13.767 10H10.23L7.34 5.159a.5.5 0 0 0-.863.5L9.37 10.5l-2.893 4.841a.5.5 0 0 0 .863.5L10.233 11h3.534l2.893 4.841a.5.5 0 0 0 .863-.5zM8.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-text-light leading-none">Em breve no</span>
                <span className="text-sm font-semibold text-white leading-tight">Google Play</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
