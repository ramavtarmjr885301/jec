import Link from "next/link";
import { Youtube, Instagram, Facebook, X, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-ink text-white/70 pt-16 pb-8">
            <div className="container-custom">
                {/* 4 Columns in 1 Row with equal gaps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 mb-12">

                    {/* Column 1: Jay English Classes Section */}
                    <div className="space-y-3">
                        <div className="font-semibold text-white text-lg">Jay English Classes</div>
                        <div className="text-sm text-white/60">by Jaykaran Nayak</div>
                        <p className="text-sm leading-relaxed">
                            Dedicated to students of Class 10th &amp; 12th who want to strengthen their English skills and score higher in board exams.
                        </p>
                    </div>

                    {/* Column 2: Contact Info Section */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-sm">Mahoba, Uttar Pradesh, India</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-sm">+91 12345 67890</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-sm">jayenglishclasses@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links Section */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm hover:text-gold transition block">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-gold transition block">Contact Us</Link></li>
                            <li><Link href="/courses" className="text-sm hover:text-gold transition block">Courses</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Social Connects - 2x2 Grid */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Social Connects</h4>
                        <div className="grid grid-cols-2 gap-4 max-w-[160px]">
                            <a
                                href="https://www.youtube.com/@jayenglishclasses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} className="text-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/jayenglishclasses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a
                                href="https://www.facebook.com/jayenglishclasses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a
                                href="https://twitter.com/jayenglish"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition-all hover:scale-110"
                                aria-label="Twitter"
                            >
                                <X size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">© 2026 Jay English Classes · Jaykaran Nayak · Mahoba, UP</p>
                    <p className="text-xs">Made with ❤️ for board exam students across India</p>
                </div>
            </div>
        </footer>
    );
}