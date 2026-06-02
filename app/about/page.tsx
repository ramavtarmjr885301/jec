import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Jaykaran Nayak | Jay English Classes",
    description: "Learn about Jaykaran Nayak, the dedicated English educator helping students master English for UP Board and CBSE exams.",
};

export default function AboutPage() {
    return (
        <>
            <section className="pt-20 pb-10 bg-gradient-to-b from-gold-pale to-transparent">
                <div className="container-custom text-center">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-4">About <em className="text-gold not-italic">Jaykaran Nayak</em></h1>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Meet the passionate educator behind Jay English Classes
                    </p>
                </div>
            </section>
            <About />
        </>
    );
}