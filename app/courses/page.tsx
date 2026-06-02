import Courses from "@/components/sections/Courses";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Courses | Jay English Classes",
    description: "Explore our comprehensive English courses for Class 10 and Class 12 students. UP Board and CBSE curriculum covered.",
};

export default function CoursesPage() {
    return (
        <>
            <section className="pt-20 pb-10 bg-gradient-to-b from-gold-pale to-transparent">
                <div className="container-custom text-center">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ink mb-4">Our <em className="text-gold not-italic">Courses</em></h1>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Comprehensive English courses designed specifically for board exam success
                    </p>
                </div>
            </section>
            <Courses />
        </>
    );
}