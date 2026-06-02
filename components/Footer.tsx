import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-ink text-white/70 pt-16 pb-8">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="w-11 h-11 rounded-lg bg-gold flex items-center justify-center font-playfair font-black text-white text-xl mb-3">
                            J
                        </div>
                        <div className="font-semibold text-white text-lg">Jay English Classes</div>
                        <div className="text-sm text-white/60 mb-3">by Jaykaran Nayak</div>
                        <p className="text-sm leading-relaxed">
                            Dedicated to students of Class 10th &amp; 12th who want to strengthen their English skills and score higher in board exams.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Courses</h4>
                        <ul className="space-y-2">
                            <li><Link href="/courses#class10" className="text-sm hover:text-gold transition">Class 10 English</Link></li>
                            <li><Link href="/courses#class12" className="text-sm hover:text-gold transition">Class 12 English</Link></li>
                            <li><Link href="/courses#grammar" className="text-sm hover:text-gold transition">English Grammar</Link></li>
                            <li><Link href="/courses#strategy" className="text-sm hover:text-gold transition">Board Exam Strategy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Topics</h4>
                        <ul className="space-y-2">
                            <li><Link href="/topics" className="text-sm hover:text-gold transition">Prose &amp; Poetry</Link></li>
                            <li><Link href="/topics" className="text-sm hover:text-gold transition">Tenses</Link></li>
                            <li><Link href="/topics" className="text-sm hover:text-gold transition">Voice &amp; Narration</Link></li>
                            <li><Link href="/topics" className="text-sm hover:text-gold transition">Letter Writing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Boards</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm hover:text-gold transition">UP Board</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-gold transition">CBSE Board</Link></li>
                            <li><Link href="/courses" className="text-sm hover:text-gold transition">Class 10 &amp; 12</Link></li>
                            <li><a href="https://www.youtube.com/@jayenglishclasses" target="_blank" className="text-sm hover:text-gold transition">YouTube Channel ↗</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">© 2025 Jay English Classes · Jaykaran Nayak · Mahoba, UP</p>
                    <p className="text-xs">Made with ❤️ for board exam students across India</p>
                </div>
            </div>
        </footer>
    );
}