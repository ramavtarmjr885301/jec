import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Jay English Classes",
    description: "Get in touch with Jay English Classes. Have questions about English grammar or board exam preparation? We're here to help.",
};

export default function ContactPage() {
    return (
        <>
            <section className="pt-20 pb-10 bg-gradient-to-b from-gold-pale to-transparent">
                <div className="container-custom text-center">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-4">Get in <em className="text-gold not-italic">Touch</em></h1>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Have questions? Reach out to us. We're here to help you succeed in English
                    </p>
                </div>
            </section>
            <Contact />
        </>
    );
}