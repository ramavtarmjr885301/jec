"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=400&fit=crop",
        title: "Master English with Jay Sir",
        description: "Learn from experienced educator Jaykaran Nayak",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=400&fit=crop",
        title: "Board Exam Preparation",
        description: "Class 10th & 12th - UP Board & CBSE",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=400&fit=crop",
        title: "Free YouTube Classes",
        description: "Subscribe now for quality education",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&h=400&fit=crop",
        title: "Complete Grammar Course",
        description: "Tenses, Voice, Narration & More",
    },
];

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
            {/* Slides Container - with smooth transition */}
            <div
                className="relative flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    width: '100%',
                }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 relative"
                        style={{ width: '100%' }}
                    >
                        {/* Image Container */}
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Dark Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-4 text-center">
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-bold text-ink mb-3">
                                        {slide.title}
                                    </h2>
                                    <p className="text-sm md:text-base lg:text-lg text-text-muted">
                                        {slide.description}
                                    </p>
                                    <button className="mt-4 md:mt-6 bg-gold text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-saffron transition-all hover:scale-105">
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-ink" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-ink" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                            ? "w-8 md:w-10 h-2 bg-gold"
                            : "w-2 h-2 bg-white/70 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}