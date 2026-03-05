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

  const appScreenshots = [
    { title: 'Painel Digital', color: 'from-primary-dark to-surface', delay: 0 },
    { title: 'Escâner QR Code', color: 'from-surface to-primary-dark', delay: 0.2 },
    { title: 'Treinos em Vídeo', color: 'from-primary-dark to-[#181818]', delay: 0.4 },
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
            <Link href="#download" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
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
              {appScreenshots.map((screen, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: idx % 2 === 0 ? 0 : 30 }}
                  viewport={{ once: true }}
                  transition={{ delay: screen.delay, duration: 0.6 }}
                  className={`relative w-[140px] h-[300px] sm:w-[180px] sm:h-[380px] rounded-[2rem] border-[6px] border-border bg-gradient-to-br ${screen.color} shadow-2xl overflow-hidden mt-${idx % 2 === 0 ? '0' : '12'}`}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-border rounded-full"></div>
                  <div className="w-full h-full p-4 flex flex-col justify-end">
                    <div className="w-full h-1/3 bg-background/50 backdrop-blur-md rounded-xl p-3 flex flex-col gap-2">
                      <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-full mt-auto h-8 bg-primary rounded-lg"></div>
                    </div>
                  </div>
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

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="flex items-center justify-center gap-4 bg-black text-white px-8 py-4 rounded-xl border border-border hover:border-white/20 hover:bg-[#111] transition-all">
                <div className="flex flex-col items-start translate-y-[-2px]">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">Descarregar na</span>
                  <span className="font-semibold text-lg leading-none">App Store</span>
                </div>
              </button>

              <button className="flex items-center justify-center gap-4 bg-black text-white px-8 py-4 rounded-xl border border-border hover:border-white/20 hover:bg-[#111] transition-all">
                <div className="flex flex-col items-start translate-y-[-2px]">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">Disponível no</span>
                  <span className="font-semibold text-lg leading-none">Google Play</span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
