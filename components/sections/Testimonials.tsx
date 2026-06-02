"use client";

const testimonials = [
    {
        name: "Anjali Nishad",
        class: "Class 10, UP Board",
        initials: "AN",
        text: "Sir explains each chapter in such simple Hindi that even difficult poems feel easy. My English marks went from 60 to 82 after following Jay English Classes!",
        rating: 5,
    },
    {
        name: "Rahul Shukla",
        class: "Class 12, CBSE Board",
        initials: "RS",
        text: "Grammar was my biggest fear before I found this channel. The way JK sir teaches Active-Passive and Tenses is so clear, I can now solve any question confidently.",
        rating: 5,
    },
    {
        name: "Priya Gupta",
        class: "Class 12, UP Board",
        initials: "PG",
        text: "Best free English channel for board students. Sir covers the entire syllabus step by step. I scored 88/100 in my boards. Thank you Jay English Classes!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section section-alt" id="testimonials">
            <div className="container-custom">
                <div className="section-header fade-up">
                    <div className="section-tag">Student Reviews</div>
                    <h2 className="section-title">What <em>Students</em> Say</h2>
                    <p className="section-desc">Real feedback from students who have improved their English and board exam scores.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="fade-up bg-white border border-gold/20 rounded-xl p-7 hover:border-gold hover:shadow-lg transition">
                            <div className="text-gold text-base mb-3">★★★★★</div>
                            <p className="text-ink leading-relaxed italic mb-5">{testimonial.text}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gold-pale text-rust flex items-center justify-center font-bold text-sm">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-ink">{testimonial.name}</div>
                                    <div className="text-xs text-text-muted">{testimonial.class}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}