export default function Marquee() {
    const items = [
        "English Grammar", "Board Exam Prep", "Class 10 English", "Class 12 English",
        "UP Board", "CBSE Board", "Zero to Infinity", "Prose & Poetry",
        "Vocabulary", "Chapter Explanations"
    ];

    return (
        <div className="bg-gold py-3 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
                {[...items, ...items].map((item, index) => (
                    <span key={index} className="inline-block">
                        <span className="text-white text-xs font-semibold uppercase tracking-wide px-8">
                            {item}
                        </span>
                        <span className="text-white/50">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}