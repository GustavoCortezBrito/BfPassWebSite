'use client';

import { motion } from 'framer-motion';
import { Download, CheckCircle2, QrCode, BookOpen, Dumbbell, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <QrCode className="w-8 h-8 text-accent" />,
      title: 'Descontos Exclusivos',
      description: 'Acesse lojas parceiras, escaneie o QR Code e garanta descontos e cashback em suas compras diárias.',
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-accent" />,
      title: 'Treinos Personalizados',
      description: 'Tenha seus treinos sempre à mão. Acompanhe execuções em vídeo e marque os concluídos.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: 'E-books e Nutrição',
      description: 'Receba materiais educativos dos seus nutricionistas diretamente no app, disponíveis offline.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: 'Segurança Total',
      description: 'Cupons validados em tempo real com controle antfraude. Cashback garantido direto na conta.',
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8 shadow-lg shadow-black/20"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-accent relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            </span>
            <span className="text-sm font-medium text-text-secondary">O seu app definitivo de benefícios</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto"
          >
            Seu passaporte para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">bem-estar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Cupons de desconto, treinos interativos, e-books nutricionais e muito mais. Tudo integrado em uma única plataforma revolucionária.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/instalar" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
              <Download size={20} />
              Baixar Agora
            </Link>
            <Link href="#recursos" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface hover:bg-white/5 border border-border text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Conheça os Recursos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-24 bg-surface/30 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Tudo o que você precisa em um só lugar
            </motion.h2>
            <p className="text-text-secondary text-lg">
              Oferecemos uma suite completa de ferramentas para melhorar sua qualidade de vida física e financeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-text-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Display Section */}
      <section id="app" className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white"
              >
                Design pensado para a <span className="text-accent">sua rotina</span>.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                Desenvolvemos uma interface escura (Dark Mode) de altíssimo nível, garantindo conforto visual, economia de bateria no seu smartphone e um visual extremamente moderno e fluido.
              </motion.p>

              <ul className="space-y-4 mt-4">
                {['Navegação intuitiva por abas', 'Tempos de carregamento ultra-rápidos', 'Vídeos embutidos (YouTube) para treinos', 'Interface para parceiros e admin'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-text-primary"
                  >
                    <CheckCircle2 className="text-accent" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end gap-4 sm:gap-6">
              {[
                { src: '/WhatsApp Image 2026-03-19 at 03.19.26.jpeg', delay: 0, offset: false },
                { src: '/WhatsApp Image 2026-03-19 at 03.19.33.jpeg', delay: 0.2, offset: true },
                { src: '/WhatsApp Image 2026-03-19 at 03.19.40.jpeg', delay: 0.4, offset: false },
              ].map((screen, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: screen.offset ? 30 : 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: screen.delay, duration: 0.6 }}
                  className={`relative w-[120px] sm:w-[150px] rounded-[2rem] border-[4px] border-border shadow-2xl overflow-hidden shrink-0 ${screen.offset ? 'mt-12' : ''}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={screen.src}
                    alt={`BF-Pass screenshot ${idx + 1}`}
                    className="w-full h-auto block"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/80"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-surface/50 backdrop-blur-xl p-8 md:p-16 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para começar?</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Baixe o aplicativo BF-Pass agora e faça seu cadastro gratuito.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Link
                href="/instalar"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
              >
                <Download size={20} />
                Ver como instalar
              </Link>
              <p className="text-text-light text-sm">
                Disponível para iPhone e Android — sem App Store ou Google Play.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-border opacity-60 cursor-not-allowed select-none">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-xs text-text-light">App Store — em breve</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-border opacity-60 cursor-not-allowed select-none">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.523 15.341 14.63 10.5l2.893-4.841a.5.5 0 0 0-.863-.5L13.767 10H10.23L7.34 5.159a.5.5 0 0 0-.863.5L9.37 10.5l-2.893 4.841a.5.5 0 0 0 .863.5L10.233 11h3.534l2.893 4.841a.5.5 0 0 0 .863-.5zM8.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                  </svg>
                  <span className="text-xs text-text-light">Google Play — em breve</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
