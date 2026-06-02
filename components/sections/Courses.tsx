"use client";

import { BookOpen, BookMarked, PenTool, Target } from "lucide-react";

const courses = [
    {
        icon: BookOpen,
        iconBg: "gold",
        title: "Class 10 English",
        description: "Full coverage of UP Board & CBSE Class 10 English — First Flight, Footprints Without Feet, and grammar sections explained in simple Hindi.",
        tags: ["Prose", "Poetry", "Supplementary", "Grammar"],
        color: "gold",
    },
    {
        icon: BookMarked,
        iconBg: "green",
        title: "Class 12 English",
        description: "Detailed chapter-wise explanations of Flamingo and Vistas textbooks, along with board writing skills and grammar for Class 12 students.",
        tags: ["Flamingo", "Vistas", "Writing", "Grammar"],
        color: "green",
    },
    {
        icon: PenTool,
        iconBg: "rust",
        title: "English Grammar",
        description: "Zero to advanced English grammar — tenses, voices, narration, clauses, editing, gap-filling — everything you need to score full marks.",
        tags: ["Tenses", "Voice", "Narration", "Editing"],
        color: "rust",
    },
    {
        icon: Target,
        iconBg: "saffron",
        title: "Board Exam Strategy",
        description: "How to attempt the board paper smartly — time management, answer presentation, scoring techniques, and last-minute revision tips.",
        tags: ["Paper Solving", "Tips & Tricks", "Revision"],
        color: "saffron",
    },
];

const colorMap = {
    gold: { bg: "bg-gold-pale", top: "bg-gold" },
    green: { bg: "bg-green-light", top: "bg-green-mid" },
    rust: { bg: "bg-[#FDEEE7]", top: "bg-rust" },
    saffron: { bg: "bg-[#FEF0E0]", top: "bg-saffron" },
};

export default function Courses() {
    return (
        <section className="section" id="courses">
            <div className="container-custom">
                <div className="section-header fade-up">
                    <div className="section-tag">What We Teach</div>
                    <h2 className="section-title">Our <em>Core</em> Courses</h2>
                    <p className="section-desc">Complete curriculum crafted for UP Board and CBSE students who want to score maximum marks in English.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => {
                        const Icon = course.icon;
                        const colors = colorMap[course.color as keyof typeof colorMap];
                        return (
                            <div key={index} className="fade-up bg-white rounded-xl border border-gold/20 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                                <div className={`h-1.5 ${colors.top}`} />
                                <div className="p-6">
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl mb-4`}>
                                        <Icon size={24} className="text-gold" />
                                    </div>
                                    <h3 className="font-bold text-lg text-ink mb-2">{course.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed mb-4">{course.description}</p>
                                    <div className="flex gap-1.5 flex-wrap">
                                        {course.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 rounded text-[11px] font-semibold bg-gold-pale text-rust">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}