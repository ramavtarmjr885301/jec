// "use client";

// import { useEffect } from "react";

// export default function ScrollAnimation() {
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("visible");
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );

//         document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

//         return () => observer.disconnect();
//     }, []);

//     return null;
// }

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            const fadeElements = document.querySelectorAll(".fade-up");

            fadeElements.forEach((el) => {
                // Check if element is in viewport
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight - 100) {
                    el.classList.add("visible");
                } else {
                    // Remove class so animation can trigger when scrolled to
                    el.classList.remove("visible");
                }
            });
        }, 100);

        // Add scroll listener
        const handleScroll = () => {
            const fadeElements = document.querySelectorAll(".fade-up");
            fadeElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight - 100) {
                    el.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]); // Re-run when route changes

    return null;
}