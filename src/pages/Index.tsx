import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import HumanoidSection from "@/components/HumanoidSection";
import Features from "@/components/Features";
import DetailsSection from "@/components/DetailsSection";
import HowItWorks from "@/components/HowItWorks";
import SpecsSection from "@/components/SpecsSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MyWorks from "@/components/MyWorks";

import Resume from "@/components/Extra";
import Stats from "@/components/Stats";
import Mydream from "@/components/Mydream";
import Experience from "@/components/Experience";
import AnimatedFooter from "@/components/AnimatedFooter";

const Index = () => {
  // Functional component
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href")?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      });
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // JSX structure for the page
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Added flex and min-h-screen for full height */}
      <Navbar /> {/* Assuming Navbar is still desired */}
      <main className="flex-grow">
        {" "}
        {/* Added flex-grow to main for layout */}
        <Hero />
        <HumanoidSection />
        <Mydream />
        <Experience />
        <Stats />
        <Features />
        <DetailsSection />
        <HowItWorks />
        <SpecsSection />
        <MyWorks />
        <Testimonials />
        <Newsletter /> {/* Assuming Newsletter is still desired */}
        <Resume />
      </main>
      <Footer /> {/* Assuming Footer is still desired */}
      <AnimatedFooter />
    </div> // Closing div for the page container
  ); // End of return statement
}; // End of functional component definition

export default Index;
