import { ThumbsUp, Youtube } from "lucide-react";
import CustomButton from "../../_components/CustomButton";
import Link from "next/link";
import LearningLanding from "../../_components/LearningLanding";
import CourseHero from "../../_components/CourseHero";
import TestimonialsSection from "../../_components/testimonial/testimonial-section";
import TablaTanpura from "../../_components/TablaTanpura";
import LearningStyle from "../../_components/courses/learningStyle";
import { HeroSection } from "../../_components/HeroSectionProps";
import OnlineCourseSection from "../../_components/courses/OnlineCourseSection";

export default function OnlineCourses() {

  return (
    <>
      <HeroSection
        title="Online Courses"
        description="At Bansuri Vidya Mandir, we believe in making quality education accessible to everyone, anytime, anywhere. Our Online Courses are designed to provide a flexible and engaging learning experience, ensuring that students receive the best education from the comfort of their homes."
        variant="home"
        image={{
          src: "/online-course-banner.png",
          alt: "Hero image",
        }}
        scale={125}
        buttons={
          <>
            <CustomButton
              primaryText="Get Started"
              secondaryText="Learn More"
              icon={<ThumbsUp size={20} />}
              className="!px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors w-[200px]"
            />
            <Link
              href="/about"
              className="group flex items-center justify-center text-white gap-1
              hover:text-white/90 transition-all duration-300 relative
              hover:-translate-x-2"
            >
              <Youtube
                size={20}
                className="transform transition-all duration-300 
                group-hover:translate-x-[-2px]"
              />
              <span>How it works</span>
            </Link>
          </>
        }
        stats={[
          { number: "1200+", label: "Students Enrolled", endValue: 1200 },
          { number: "240+", label: "5 Star Google Reviews", endValue: 240 },
          { number: "20", label: "Years of Experience", endValue: 20 }
        ]}
      />
      {/* <LearningLanding /> */}
      <main className="min-h-screen bg-[#F3F8F8] px-5 pb-6">
        <OnlineCourseSection/>
      </main>
      {/* <CoursesSection/> */}
      <CourseHero />
      <TestimonialsSection />
      <TablaTanpura />
    </>
  );
}
