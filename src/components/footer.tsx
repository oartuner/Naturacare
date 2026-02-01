import Link from 'next/link';
import { Leaf, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary-950 text-white pt-24 pb-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8 group">
                            <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-primary-900 transition-transform group-hover:scale-110">
                                <Leaf size={20} />
                            </div>
                            <span className="font-serif text-2xl font-extrabold tracking-tighter">
                                NATURA CARE
                            </span>
                        </Link>
                        <p className="text-primary-100/70 text-sm font-normal leading-relaxed mb-8">
                            Modern eczacılık ile kadim şifayı harmanlayan, bütüncül esenlik merkeziniz.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] mb-8 text-accent-500">Keşfet</h4>
                        <ul className="space-y-4 text-primary-100/80 text-sm font-normal">
                            <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="/boutique" className="hover:text-white transition-colors">Butik</Link></li>
                            <li><Link href="/academy" className="hover:text-white transition-colors">Akademi</Link></li>
                            <li><Link href="/journal" className="hover:text-white transition-colors">Şifa Günlüğü</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] mb-8 text-accent-500">Müşteri Destek</h4>
                        <ul className="space-y-4 text-primary-100/80 text-sm font-normal">
                            <li><Link href="/faq" className="hover:text-white transition-colors">Sıkça Sorulan Sorular</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Kargo ve Teslimat</Link></li>
                            <li><Link href="/returns" className="hover:text-white transition-colors">İade Politikası</Link></li>
                            <li><Link href="/wholesale" className="hover:text-white transition-colors">Toptan Satış</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] mb-8 text-accent-500">İletişim</h4>
                        <ul className="space-y-6 text-primary-100/80 text-sm font-normal">
                            <li className="flex gap-4">
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-400">Adres</span>
                                <p>Moda, Kadıköy / İstanbul</p>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={18} className="text-accent-500 flex-shrink-0" />
                                <span>info@naturacare.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={18} className="text-accent-500 flex-shrink-0" />
                                <span>+90 (212) 123 45 67</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                    <p className="text-primary-100/30 text-[10px] font-extrabold uppercase tracking-widest">
                        © 2026 NATURA CARE. TÜM HAKLARI SAKLIDIR.
                    </p>
                    <div className="flex gap-8 text-primary-100/30 text-[10px] font-extrabold uppercase tracking-widest">
                        <Link href="#" className="hover:text-white transition-colors">GİZLİLİK</Link>
                        <Link href="#" className="hover:text-white transition-colors">ŞARTLAR</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
