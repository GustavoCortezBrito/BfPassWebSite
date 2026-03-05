import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade | BF-Pass',
    description: 'Saiba como coletamos, usamos e protegemos seus dados no aplicativo BF-Pass.',
};

export default function PrivacyPolicy() {
    const sections = [
        {
            id: 's1',
            title: '1. Informações que Coletamos',
            content: (
                <>
                    <p>Coletamos as seguintes informações quando você utiliza o BF-Pass:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 mb-4 text-text-secondary">
                        <li>Nome completo e endereço de e-mail;</li>
                        <li>Senha (armazenada de forma criptografada);</li>
                        <li>Dados de perfil, como foto e plano de assinatura;</li>
                        <li>Localização geográfica aproximada (para exibir parceiros próximos), mediante permissão;</li>
                        <li>Histórico de cupons resgatados e pontos de cashback;</li>
                        <li>Informações de uso e preferências dentro do aplicativo.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 's2',
            title: '2. Como Usamos suas Informações',
            content: (
                <>
                    <p>Utilizamos seus dados exclusivamente para:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 mb-4 text-text-secondary">
                        <li>Autenticar seu acesso e gerenciar sua conta;</li>
                        <li>Exibir cupons, treinos, e-books e conteúdos personalizados;</li>
                        <li>Calcular e exibir seu saldo de cashback;</li>
                        <li>Mostrar estabelecimentos parceiros próximos à sua localização;</li>
                        <li>Enviar notificações relevantes sobre benefícios do seu plano;</li>
                        <li>Melhorar continuamente a experiência do aplicativo.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 's3',
            title: '3. Compartilhamento de Dados',
            content: (
                <>
                    <p>Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros, exceto:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 mb-4 text-text-secondary">
                        <li>Com parceiros necessários para a operação do serviço (ex.: validação de cupons);</li>
                        <li>Quando exigido por lei ou por ordem judicial;</li>
                        <li>Com prestadores de serviço técnico que auxiliam na operação, sob acordo de confidencialidade.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 's4',
            title: '4. Permissões do Dispositivo',
            content: (
                <>
                    <p>O aplicativo pode solicitar as seguintes permissões:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 mb-4 text-text-secondary">
                        <li><strong className="text-white">Localização:</strong> para mostrar parceiros próximos. O acesso é solicitado apenas quando necessário;</li>
                        <li><strong className="text-white">Câmera:</strong> para leitura de QR codes no resgate de cupons;</li>
                        <li><strong className="text-white">Galeria de fotos:</strong> para alteração da foto de perfil;</li>
                        <li><strong className="text-white">Armazenamento:</strong> para salvar e acessar arquivos (e-books em PDF).</li>
                    </ul>
                    <div className="bg-primary/20 border-l-4 border-accent p-4 rounded-r-lg mt-4 text-text-secondary text-sm">
                        Você pode revogar essas permissões a qualquer momento nas configurações do seu dispositivo.
                    </div>
                </>
            ),
        },
        {
            id: 's5',
            title: '5. Armazenamento e Segurança',
            content: (
                <p className="text-text-secondary">
                    Seus dados são armazenados em servidores seguros. Utilizamos criptografia para proteger informações sensíveis, como senhas. Adotamos boas práticas de segurança da informação para prevenir acesso não autorizado, alteração ou divulgação.
                </p>
            ),
        },
        {
            id: 's6',
            title: '6. Retenção de Dados',
            content: (
                <p className="text-text-secondary">
                    Mantemos seus dados enquanto sua conta estiver ativa. Caso solicite a exclusão da conta, removeremos seus dados pessoais no prazo de até 30 dias, exceto quando a retenção for exigida por obrigações legais.
                </p>
            ),
        },
        {
            id: 's7',
            title: '7. Direitos do Usuário (LGPD)',
            content: (
                <>
                    <p>Em conformidade com a Lei Geral de Proteção de Dados, você tem direito a:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 mb-4 text-text-secondary">
                        <li>Confirmar a existência de tratamento de seus dados;</li>
                        <li>Acessar seus dados;</li>
                        <li>Corrigir dados incompletos ou desatualizados;</li>
                        <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                        <li>Revogar o consentimento a qualquer momento;</li>
                        <li>Solicitar a portabilidade dos dados.</li>
                    </ul>
                    <div className="bg-primary/20 border-l-4 border-accent p-4 rounded-r-lg mt-4 text-text-secondary text-sm">
                        Para exercer qualquer um desses direitos, entre em contato pelo e-mail disponibilizado na seção de Contato.
                    </div>
                </>
            ),
        },
        {
            id: 's8',
            title: '8. Dados de Menores',
            content: (
                <p className="text-text-secondary">
                    O app não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes. Se identificarmos que dados de menores foram coletados sem consentimento, os removeremos imediatamente.
                </p>
            ),
        },
        {
            id: 's9',
            title: '9. Alterações nesta Política',
            content: (
                <>
                    <p className="mb-2 text-text-secondary">
                        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas por meio do aplicativo. Recomendamos que você revise esta página regularmente.
                    </p>
                    <p className="text-text-secondary">O uso continuado do aplicativo após alterações constitui aceitação da política atualizada.</p>
                </>
            ),
        },
        {
            id: 's10',
            title: '10. Contato',
            content: (
                <>
                    <p className="text-text-secondary mb-4">Em caso de dúvidas ou solicitações relacionadas à privacidade dos seus dados, entre em contato conosco:</p>
                    <div className="bg-surface border border-border p-4 rounded-xl inline-block">
                        <p className="text-white font-mono">contato@bfpass.com.br</p>
                        <p className="text-sm text-text-light mt-1">Respondemos em até 5 dias úteis.</p>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background glow for aesthetics */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary text-accent-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <span>🔒</span> Política de Privacidade
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Como cuidamos dos <span className="text-accent">seus dados</span>.
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Esta Política de Privacidade descreve como o BF-Pass coleta, usa e protege as informações dos usuários.
                    </p>
                    <p className="text-sm text-text-light mt-6 font-mono">
                        Última atualização: Março de 2026
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-surface border border-border p-6 md:p-8 rounded-2xl mb-12">
                    <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Índice</h2>
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="text-text-secondary hover:text-accent transition-colors text-sm font-medium flex items-center gap-2"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                                {section.title.replace(/^[0-9]+\.\s/, '')}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Content */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <section key={section.id} id={section.id} className="scroll-mt-32 border-b border-border/50 pb-12 last:border-0">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-accent/50 font-mono text-xl">{section.title.split('.')[0]}.</span>
                                {section.title.split('.')[1]}
                            </h2>
                            <div className="text-base leading-relaxed text-text-secondary">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
}
