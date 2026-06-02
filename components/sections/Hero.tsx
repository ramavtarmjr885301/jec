"use client";

import Link from "next/link";
import { Play, BookOpen } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gold-pale -z-0 hidden md:block" />

            <div className="container-custom relative z-10 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="fade-up">
                        <div className="inline-flex items-center gap-2 bg-green-light text-green-deep px-4 py-1.5 rounded-full text-xs font-semibold uppercase mb-6">
                            <span className="w-1.5 h-1.5 bg-green-mid rounded-full" />
                            UP Board &amp; CBSE English Expert
                        </div>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-ink mb-3">
                            Master English.<br />
                            <em className="text-gold not-italic">Ace Your</em><br />
                            Board Exams.
                        </h1>
                        <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-md my-6">
                            Learn English Grammar &amp; Board Exam Preparation for Class 10th &amp; 12th in the simplest, most effective way — straight from the classroom of Jaykaran Nayak.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="https://www.youtube.com/@jayenglishclasses" target="_blank" className="btn-primary">
                                <Play size={18} /> Start Learning Free
                            </Link>
                            <Link href="/courses" className="btn-secondary">
                                <BookOpen size={18} /> Explore Courses
                            </Link>
                        </div>

                        <div className="flex gap-8 mt-10 pt-8 border-t border-gold/20">
                            <div>
                                <div className="font-playfair text-2xl md:text-3xl font-bold text-ink">10th</div>
                                <div className="text-xs text-text-muted">Class Coverage</div>
                            </div>
                            <div>
                                <div className="font-playfair text-2xl md:text-3xl font-bold text-ink">12th</div>
                                <div className="text-xs text-text-muted">Class Coverage</div>
                            </div>
                            <div>
                                <div className="font-playfair text-2xl md:text-3xl font-bold text-ink">Free</div>
                                <div className="text-xs text-text-muted">All Content</div>
                            </div>
                            <div>
                                <div className="font-playfair text-2xl md:text-3xl font-bold text-ink">Hindi</div>
                                <div className="text-xs text-text-muted">Medium Teaching</div>
                            </div>
                        </div>
                    </div>

                    <div className="fade-up hidden md:block">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                            <div className="h-28 bg-gradient-to-r from-gold to-saffron relative">
                                <div className="text-6xl font-playfair font-black text-white/30 text-center pt-6">JEC</div>
                                <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full bg-green-deep border-4 border-white flex items-center justify-center font-playfair font-bold text-white text-2xl">
                                    JK
                                </div>
                            </div>
                            <div className="pt-14 pb-6 px-6">
                                <h3 className="font-bold text-lg text-ink">Jaykaran Nayak</h3>
                                <p className="text-sm text-text-muted">English Educator · Mahoba, UP</p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    <span className="px-2.5 py-1 rounded text-xs font-semibold bg-gold-pale text-rust">UP Board</span>
                                    <span className="px-2.5 py-1 rounded text-xs font-semibold bg-gold-pale text-rust">CBSE Board</span>
                                    <span className="px-2.5 py-1 rounded text-xs font-semibold bg-green-light text-green-deep">Class 10</span>
                                    <span className="px-2.5 py-1 rounded text-xs font-semibold bg-green-light text-green-deep">Class 12</span>
                                </div>
                                <Link href="https://www.youtube.com/@jayenglishclasses" target="_blank" className="flex items-center gap-3 bg-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold mt-5 hover:bg-red-700 transition">
                                    <div className="w-5 h-3.5 bg-white rounded-sm flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-red-600 ml-0.5" />
                                    </div>
                                    Subscribe on YouTube
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}