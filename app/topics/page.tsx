import Topics from "@/components/sections/Topics";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Curriculum Topics | Jay English Classes",
    description: "Complete list of English topics covered including grammar, prose, poetry, writing skills, and board exam preparation.",
};

export default function TopicsPage() {
    return (
        <>
            <section className="pt-20 pb-10 bg-gradient-to-b from-gold-pale to-transparent">
                <div className="container-custom text-center">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-4">Complete <em className="text-gold not-italic">Curriculum</em></h1>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Everything you need to master English and excel in your board exams
                    </p>
                </div>
            </section>
            <Topics />
        </>
    );
}