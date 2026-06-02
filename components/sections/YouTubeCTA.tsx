"use client";

import Link from "next/link";

export default function YouTubeCTA() {
    return (
        <section className="relative bg-ink py-20 md:py-24 text-center overflow-hidden">
            <div className="absolute text-8xl md:text-9xl font-black text-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ▶
            </div>

            <div className="container-custom relative z-10">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Start Learning for <span className="text-gold-light">Free Today</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg mb-9 max-w-md mx-auto">
                    Join thousands of students watching Jay English Classes on YouTube — no fees, no sign-ups.
                </p>
                <Link
                    href="https://www.youtube.com/@jayenglishclasses"
                    target="_blank"
                    className="inline-flex items-center gap-4 bg-red-600 text-white px-8 py-4 md:px-10 md:py-4.5 rounded-xl text-base md:text-lg font-bold hover:bg-red-700 hover:scale-105 transition-all"
                >
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[9px] border-l-red-600 ml-0.5" />
                    </div>
                    Visit YouTube Channel
                </Link>
            </div>
        </section>
    );
}