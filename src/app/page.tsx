"use client";

import { useEffect } from "react";

import Introduction from "../app/components/Introduction";
import Problems from "../app/components/Problems";
import FAQSection from "../app/components/FAQ";
import JoinSection from "../app/components/JoinUs";
import StickySection from "./components/stickySection";
import Hero3 from "../app/components/Hero3";

export default function LandingPage() {
  
  useEffect(() => {
    
    const sections = document.querySelectorAll(".cinematic-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero3 />
      <Introduction />
      <Problems />
      <StickySection />
      <FAQSection />
      <JoinSection />
    </>
  );
}