"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/topics", label: "Topics" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20">
            <nav className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-playfair font-black text-white text-lg">
                            J
                        </div>
                        <div>
                            <div className="font-semibold text-ink">Jay English Classes</div>
                            <div className="text-xs text-text-muted">by Jaykaran Nayak</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-text-muted font-medium hover:text-gold transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://www.youtube.com/@jayenglishclasses"
                            target="_blank"
                            className="bg-gold text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-saffron transition-all hover:-translate-y-0.5"
                        >
                            ▶ Watch on YouTube
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-sm text-text-muted font-medium hover:text-gold transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://www.youtube.com/@jayenglishclasses"
                            target="_blank"
                            className="block bg-gold text-white px-5 py-2 rounded-lg text-sm font-semibold text-center hover:bg-saffron transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            ▶ Watch on YouTube
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}