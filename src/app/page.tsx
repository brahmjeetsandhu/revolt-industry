"use client";

import { useEffect } from "react";

import Introduction from "../app/components/Introduction";
import Problems from "../app/components/Problems";
import PublishingProblems from "../app/components/Problems1";
import JoinSection from "../app/components/JoinUs";
import StickySection from "./components/stickySection";
import Hero3 from "../app/components/Hero3";
import FAQ from "../app/components/FAQ1"

export default function LandingPage() {

  /*  useEffect(() => {
     
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
   }, []); */

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
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }
);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
  const elements = document.querySelectorAll(".apple-reveal");

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

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <>
      <Hero3 />
      <Introduction />
      <PublishingProblems/>
      <StickySection />      
      <FAQ />
      <JoinSection />
    </>
  );
}