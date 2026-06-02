"use client";

const features = [
    { num: "01", title: "Simple Language", desc: "Complex grammar rules explained in easy, relatable Hindi for quick understanding." },
    { num: "02", title: "Exam Focused", desc: "Every lesson is tailored to what comes in board exams — no fluff, just score." },
    { num: "03", title: "Free Content", desc: "All videos, explanations, and notes available completely free on YouTube." },
    { num: "04", title: "Chapter-Wise", desc: "Structured chapter-by-chapter videos for systematic, stress-free study." },
    { num: "05", title: "Both Boards", desc: "UP Board and CBSE students both get dedicated content tailored to their syllabus." },
    { num: "06", title: "Vocabulary", desc: "Word meanings, synonyms, and usage to boost comprehension and writing." },
];

export default function About() {
    return (
        <section className="section section-alt" id="about">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="fade-up">
                        <div className="section-tag text-left">About the Teacher</div>
                        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5">
                            Teaching with <em className="text-gold not-italic">Clarity</em> &amp; Purpose
                        </h2>
                        <p className="text-text-muted leading-relaxed mb-5">
                            Jaykaran Nayak (JK Nayak) is a dedicated English educator from Mahoba, Uttar Pradesh. With a deep passion for making English accessible to every student, he has built Jay English Classes into a trusted name for board exam preparation across UP and CBSE boards.
                        </p>
                        <p className="text-text-muted leading-relaxed mb-8">
                            His teaching philosophy — <strong className="text-ink">"Zero to Infinity"</strong> — reflects his belief that any student, regardless of their starting point, can master English with the right guidance.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <div className="flex items-center gap-3 bg-white border border-gold/20 px-5 py-3 rounded-full">
                                <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                                <div>
                                    <div className="font-semibold text-sm">UP Board</div>
                                    <div className="text-xs text-text-muted">Uttar Pradesh</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white border border-gold/20 px-5 py-3 rounded-full">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-mid" />
                                <div>
                                    <div className="font-semibold text-sm">CBSE Board</div>
                                    <div className="text-xs text-text-muted">Central Board</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white border border-gold/20 px-5 py-3 rounded-full">
                                <div className="w-2.5 h-2.5 rounded-full bg-saffron" />
                                <div>
                                    <div className="font-semibold text-sm">Class 10 &amp; 12</div>
                                    <div className="text-xs text-text-muted">Full Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/20 rounded-xl overflow-hidden">
                            {features.map((feature) => (
                                <div key={feature.num} className="bg-cream p-6 hover:bg-gold-pale transition">
                                    <div className="font-playfair text-4xl font-black text-gold/40 mb-3">{feature.num}</div>
                                    <h4 className="font-bold text-ink mb-1.5">{feature.title}</h4>
                                    <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}