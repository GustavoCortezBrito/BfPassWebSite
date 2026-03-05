import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border mt-auto">
            <div className="container mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-black tracking-tight text-white">
                                BF<span className="text-accent">pass</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                            Mais saúde, mais economia, mais você. O seu clube de benefícios completo.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Plataforma</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#recursos" className="text-text-secondary hover:text-accent text-sm transition-colors">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link href="/#app" className="text-text-secondary hover:text-accent text-sm transition-colors">
                                    Como funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="/#download" className="text-text-secondary hover:text-accent text-sm transition-colors">
                                    Baixar App
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Contacts */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Suporte</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacidade" className="text-text-secondary hover:text-accent text-sm transition-colors">
                                    Política de Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/exclusao-conta" className="text-text-secondary hover:text-red-400 text-sm transition-colors">
                                    Exclusão de Conta (LGPD)
                                </Link>
                            </li>
                            <li className="flex items-center gap-2 text-text-secondary text-sm">
                                <Mail size={16} className="shrink-0" />
                                <a href="mailto:viniciuscardosonutribarretos@gmail.com" className="hover:text-accent transition-colors break-words text-xs sm:text-sm">
                                    viniciuscardosonutribarretos@gmail.com
                                </a>
                            </li>
                            {/* Optional Social */}
                            <li className="flex items-center gap-2 text-text-secondary text-sm mt-4">
                                <a href="#" className="p-2 bg-background border border-border rounded-full hover:bg-primary hover:border-primary transition-all text-white">
                                    <Instagram size={18} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-light text-xs text-center md:text-left">
                        &copy; {currentYear} BF-Pass. Todos os direitos reservados.
                    </p>
                    <p className="text-text-light text-xs">
                        CNPJ: —
                    </p>
                </div>
            </div>
        </footer>
    );
}
