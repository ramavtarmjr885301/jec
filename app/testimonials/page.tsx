import Testimonials from "@/components/sections/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Student Reviews | Jay English Classes",
    description: "Read what students say about Jay English Classes. Real success stories from UP Board and CBSE students.",
};

export default function TestimonialsPage() {
    return (
        <>
            <section className="pt-20 pb-10 bg-gradient-to-b from-gold-pale to-transparent">
                <div className="container-custom text-center">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-4">Student <em className="text-gold not-italic">Success Stories</em></h1>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Hear from students who transformed their English scores with our guidance
                    </p>
                </div>
            </section>
            <Testimonials />
        </>
    );
}