"use client";

import { MapPin, Youtube, BookOpen, GraduationCap } from "lucide-react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! Visit our YouTube channel for quick help: youtube.com/@jayenglishclasses");
    };

    const contactInfo = [
        { icon: MapPin, label: "Location", value: "Mahoba, Uttar Pradesh, India" },
        { icon: Youtube, label: "YouTube Channel", value: "@JayEnglishClasses" },
        { icon: BookOpen, label: "Boards Covered", value: "UP Board & CBSE Board" },
        { icon: GraduationCap, label: "Classes Covered", value: "Class 10th & Class 12th" },
    ];

    return (
        <section className="section" id="contact">
            <div className="container-custom">
                <div className="section-header fade-up">
                    <div className="section-tag">Get in Touch</div>
                    <h2 className="section-title">Have a <em>Question?</em></h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 fade-up">
                    <div className="space-y-6">
                        {contactInfo.map((info) => {
                            const Icon = info.icon;
                            return (
                                <div key={info.label} className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-lg bg-gold-pale flex items-center justify-center flex-shrink-0">
                                        <Icon size={20} className="text-gold" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-text-muted uppercase tracking-wide">{info.label}</div>
                                        <div className="text-ink font-medium mt-0.5">{info.value}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">Your Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Rahul Kumar"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gold/20 focus:border-gold outline-none transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">Your Class</label>
                            <select className="w-full px-4 py-3 rounded-lg border-2 border-gold/20 focus:border-gold outline-none transition">
                                <option value="">Select your class</option>
                                <option>Class 10 — UP Board</option>
                                <option>Class 10 — CBSE</option>
                                <option>Class 12 — UP Board</option>
                                <option>Class 12 — CBSE</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">Your Message or Question</label>
                            <textarea
                                placeholder="Ask anything about English grammar, chapters, exam tips..."
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gold/20 focus:border-gold outline-none transition resize-vertical"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-gold text-white py-3.5 rounded-lg font-bold hover:bg-saffron hover:-translate-y-0.5 transition-all">
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}