import Hero from "@/components/sections/Hero";
import Marquee from "@/components/Marquee";
import ImageSlider from "@/components/ImageSlider";
import Courses from "@/components/sections/Courses";
import About from "@/components/sections/About";
import Topics from "@/components/sections/Topics";
import Testimonials from "@/components/sections/Testimonials";
import YouTubeCTA from "@/components/sections/YouTubeCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />


      {/* Image Slider Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold-pale/30 to-transparent">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="section-tag">Our Journey</div>
            <h2 className="section-title">Transforming <em>Lives</em> Through Education</h2>
            <p className="section-desc">Join thousands of successful students who achieved their dreams with us</p>
          </div>
          <ImageSlider />
        </div>
      </section>
      <Marquee />
      <Courses />
      <About />
      <Topics />
      <Testimonials />
      <YouTubeCTA />
      <Contact />
    </>
  );
}