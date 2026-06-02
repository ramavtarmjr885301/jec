"use client";

const topics = [
    "Prose Explanations", "Poetry Analysis", "Supplementary Reader", "Tenses (All Types)",
    "Active & Passive Voice", "Direct & Indirect Speech", "Editing & Omission", "Gap Filling Exercises",
    "Letter & Essay Writing", "Notice & Message Writing", "Reading Comprehension", "Vocabulary Building",
    "Word Meanings & Synonyms", "Previous Year Papers", "Last Minute Revision", "Board Paper Tips & Strategy"
];

export default function Topics() {
    return (
        <section className="section" id="topics">
            <div className="container-custom">
                <div className="section-header fade-up">
                    <div className="section-tag">Curriculum</div>
                    <h2 className="section-title">Everything You <em>Need</em> to Score High</h2>
                    <p className="section-desc">A complete list of topics covered across the Jay English Classes curriculum.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 fade-up">
                    {topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-3 bg-white border border-gold/20 rounded-lg p-3.5 hover:border-gold hover:bg-gold-pale transition">
                            <span className="text-green-mid font-bold text-lg">✓</span>
                            <span className="text-sm font-medium text-ink">{topic}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}