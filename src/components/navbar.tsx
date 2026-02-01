"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, User, Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'MAĞAZA', href: '/boutique' },
        { name: 'AKADEMİ', href: '/academy' },
        { name: 'DİAGNOZ', href: '/diagnosis' },
        { name: 'GÜNLÜK', href: '/journal' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
                isScrolled ? "h-16 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-2" : "h-24 bg-transparent py-4"
            )}
        >
            <div className="container mx-auto h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                        <Leaf size={20} />
                    </div>
                    <span className={cn(
                        "font-serif text-2xl font-extrabold tracking-tighter transition-colors",
                        isScrolled ? "text-primary-950" : "text-primary-900"
                    )}>
                        NATURA CARE
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-xs font-extrabold tracking-[0.2em] transition-all hover:text-accent-500",
                                isScrolled ? "text-primary-900/60" : "text-primary-900/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-1 mr-4">
                        <Button variant="ghost" size="icon" className="rounded-full text-primary-900/70 hover:text-primary-950">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full text-primary-900/70 hover:text-primary-950">
                            <User className="h-5 w-5" />
                        </Button>
                    </div>

                    <Button
                        variant="default"
                        size="sm"
                        className="relative rounded-full h-10 px-5 bg-primary-900 text-white hover:bg-primary-800 transition-transform active:scale-95"
                    >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        <span className="text-xs font-extrabold uppercase tracking-wider">SEPET</span>
                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent-500 text-[10px] text-white flex items-center justify-center border-2 border-white shadow-sm font-extrabold">0</span>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-8 flex flex-col items-center gap-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-extrabold tracking-[0.2em] text-primary-900 hover:text-accent-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
