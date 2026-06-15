"use client";

import { useEffect, useRef, useState } from "react";
import "./stickySection.css";

import StickyImage from "../../assets/stickyImage.png";

const featuresLeft = [
  {
    title: "No Series Cancellation Culture",
    text: "I am a creator too, and I understand the challenges of investing time, passion, and years into building a story. Far too often creators are forced to abandon projects before their stories have the chance to fully develop. At Revolt Industry, we believe stories deserve the time and space to grow.",
  },
  {
    title: "Working Conditions",
    text: "Most creators face intense pressure, unrealistic deadlines, and demanding schedules from their publishers; however, creativity requires time, care, and passion. Great stories should not be limited by burnout. ",
  },
  {
    title: "Global Reach",
    text: "Amazing stories should not be limited by language or location, and Revolt Industry aims to provide translation support to help creators reach readers around the world. We will not rely on AI translations. We want to support quality translation and help fuel the translation industry once again, ensuring creators’ work is adapted with care.",
  },
  {
    title: "Better Working Conditions",
    text: "Creators should be able to create without sacrificing their wellbeing. Revolt Industry aims to provide a more flexible environment where creators can work at a sustainable pace and focus on producing their best work. This will be achieved by the creator setting their own release schedule. ",
  },
  {
    title: "Publishing & Beyond",
    text: "Revolt Industry will provide digital publishing opportunities with ambitions to support physical print releases for successful works. Our vision goes beyond publishing comics. We want to help develop original intellectual properties that have the potential to expand into animation, gaming, merchandise, and other entertainment opportunities.",
  },

  
];

const featuresRight = [
  {
    title: "Creative Freedom",
    text: "We encourage creators to explore original ideas, take risks, and move beyond traditional formulas.There will be no unnecessary restrictions stopping creators from telling the stories they want to tell."
  },
  {
    title: "Intellectual Property & Fair Compensation",
    text: "Creators will retain ownership of their work. Where appropriate, Revolt Industry may explore opportunities to acquire intellectual property creating partnerships that benefit both the creator and the platform. Creators will receive a 65-80% share of revenue generated from their work depending on the creator contract. ",
  },
  {
    title: "Upfront Creator Payments",
    text: "Revolt Industry aims to support creators at different stages of their journey. We want to support creators throughout the journey towards success.",
  },
  {
    title: "Creator Support Network",
    text: "I understand how difficult it is to create manga independently. I personally spent one year drawing a single chapter. Creating a story is a huge undertaking, and creators should not feel like they have to do everything alone.",
  },
  {
    title: "Marketing & Promotion",
    text: "Creating a great comic is only half the journey as finding your audience is final push of the endeavour. Revolt Industry aims to provide marketing support by helping creators prepare promotional content, increase visibility, build communities, and connect with new readers.",
  },
];

const alternatingFeatures = featuresLeft.flatMap((leftItem, index) => {
  const rightItem = featuresRight[index];
  const items = [{ ...leftItem, side: "left", key: `left-${index}` }];

  if (rightItem) {
    items.push({ ...rightItem, side: "right", key: `right-${index}` });
  }

  return items;
});

export default function StickySection() {
  const sectionRef = useRef(null);
  const imageSlotRef = useRef(null);
  const [imageStyle, setImageStyle] = useState({});

  useEffect(() => {
    const updateImagePosition = () => {
      const section = sectionRef.current;
      const imageSlot = imageSlotRef.current;

      if (!section || !imageSlot || window.innerWidth <= 1024) {
        setImageStyle({});
        return;
      }

      const viewportHeight = window.innerHeight;
      const topOffset = viewportHeight * 0.11;
      const imageHeight = viewportHeight * 0.78;
      const slotRect = imageSlot.getBoundingClientRect();

      if (slotRect.top > topOffset) {
        setImageStyle({});
        return;
      }

      if (slotRect.bottom <= topOffset + imageHeight) {
        setImageStyle({
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: `${imageHeight}px`,
        });
        return;
      }

      setImageStyle({
        position: "fixed",
        top: `${topOffset}px`,
        left: `${slotRect.left}px`,
        width: `${slotRect.width}px`,
        height: `${imageHeight}px`,
        zIndex: 2,
      });
    };

    updateImagePosition();

    window.addEventListener("scroll", updateImagePosition, { passive: true });
    window.addEventListener("resize", updateImagePosition);

    return () => {
      window.removeEventListener("scroll", updateImagePosition);
      window.removeEventListener("resize", updateImagePosition);
    };
  }, []);

  return (

    <section className="sticky-section" ref={sectionRef}>

      <h1 className="sticky-heading apple-reveal delay-2">
        What Revolt Industry Provides
      </h1>

      <div className="sticky-layout">

        {/* LEFT TEXT */}

        <div className="sticky-features">

          {alternatingFeatures.map((item) =>
            item.side === "left" ? (
              <div
                key={item.key}
                className="sticky-feature-card"
              >

                <h3 className=" apple-reveal delay-2">{item.title}</h3>

                <p className=" apple-reveal delay-4" style={{ whiteSpace: "pre-line" }}>{item.text}</p>

              </div>
            ) : (
              <div
                key={item.key}
                className="sticky-feature-spacer"
                aria-hidden="true"
              />
            )
          )}

        </div>

        {/* STICKY IMAGE */}



        <div className="sticky-image-wrap" ref={imageSlotRef}>

          <div className="sticky-image" style={imageStyle}>

            <img
              src={StickyImage.src}
              alt=""
            />

          </div>

        </div>



        {/* RIGHT TEXT */}


        <div className="sticky-features">

          {alternatingFeatures.map((item) =>
            item.side === "right" ? (
              <div
                key={item.key}
                className="sticky-feature-card"
              >

                <h3 className=" apple-reveal delay-2">{item.title}</h3>

                <p className=" apple-reveal delay-4">{item.text}</p>

              </div>
            ) : (
              <div
                key={item.key}
                className="sticky-feature-spacer"
                aria-hidden="true"
              />
            )
          )}

        </div>

      </div>

    </section>
  );
}
