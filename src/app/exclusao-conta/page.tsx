import { Metadata } from 'next';
import { Mail, Shield, AlertTriangle, Fingerprint } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Exclusão de Conta | BF-Pass',
    description: 'Instruções oficiais sobre como solicitar a exclusão da sua conta e dados do aplicativo BF-Pass.',
};

export default function AccountDeletion() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background glow for aesthetics */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Shield size={16} /> Exclusão de Conta e Dados
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Gerencie sua <span className="text-red-500">Privacidade</span>.
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Nós levamos a sua privacidade a sério. Se você deseja excluir permanentemente sua conta e todos os dados associados do aplicativo BF-Pass, siga os passos abaixo.
                    </p>
                </div>

                {/* Instuctions Core */}
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 mb-10 shadow-lg relative overflow-hidden">
                    {/* subtle line top */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500"></div>

                    <h2 className="text-2xl font-bold text-white mb-6">Como solicitar a exclusão</h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                <span className="text-accent font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Envie um e-mail</h3>
                                <p className="text-text-secondary">
                                    Envie um e-mail a partir da <strong>mesma conta de e-mail</strong> que você usou para se cadastrar no aplicativo BF-Pass. O assunto do e-mail deve ser: <code className="bg-background px-2 py-0.5 rounded text-red-400">Solicitação de Exclusão de Conta</code>.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                <span className="text-accent font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Para onde enviar?</h3>
                                <p className="text-text-secondary mb-3">
                                    Direcione sua solicitação diretamente para o nosso responsável pelo tratamento de dados corporativos no endereço abaixo:
                                </p>
                                <a
                                    href="mailto:viniciuscardosonutribarretos@gmail.com?subject=Solicitação de Exclusão de Conta - BF-Pass"
                                    className="inline-flex items-center gap-2 bg-background border border-border px-4 py-3 rounded-xl text-white hover:border-red-500/50 hover:bg-white/5 transition-all group"
                                >
                                    <Mail className="text-text-light group-hover:text-red-400 transition-colors" size={20} />
                                    <span className="font-mono">viniciuscardosonutribarretos@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                <span className="text-accent font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Confirmação</h3>
                                <p className="text-text-secondary">
                                    Responderemos ao seu e-mail confirmando o recebimento. O processo de exclusão completa pode levar até <strong>30 dias</strong> de acordo com a LGPD.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional information */}
                <div className="space-y-6 mb-12">
                    <div className="flex gap-4 p-5 bg-background border border-border rounded-xl">
                        <Fingerprint className="text-accent shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-white mb-1">O que será excluído?</h4>
                            <p className="text-text-secondary text-sm">
                                Seu nome, endereço de e-mail, senha (hash), foto de perfil, histórico de treinos e vínculo com cupons serão removidos permanentemente de nossos bancos de dados ativos.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-5 bg-background border border-border rounded-xl">
                        <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-white mb-1">O que pode ser mantido?</h4>
                            <p className="text-text-secondary text-sm">
                                Dados de transações de cashback ou resgates numéricos em lojas (devolvidos ao modelo anônimo) poderão ser mantidos puramente para conformidade com obrigações legais, auditorias fiscais e relatórios financeiros agregados, onde sua identidade permanecerá totalmente inacessível.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Link */}
                <div className="text-center">
                    <Link href="/privacidade" className="text-accent hover:text-accent-light transition-colors font-medium">
                        Ver nossa Política de Privacidade Completa &rarr;
                    </Link>
                </div>

            </div>
        </div>
    );
}
