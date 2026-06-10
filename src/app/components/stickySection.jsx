"use client";

import { useEffect, useRef, useState } from "react";
import "./stickySection.css";

import StickyImage from "../../assets/stickyImage.png";

const featuresLeft = [
  {
    title: "Creator Ownership",
    text: "Artists retain intellectual property rights to their work",
  },
  {
    title: "Fair Compensation",
    text: "Revenue-sharing model where creators receive a majority percentage of earnings.",
  },
  {
    title: "Flexible Production Model",
    text: "No enforced weekly deadlines. Creators set sustainable schedules.",
  },
  {
    title: "Creative Freedom",
    text: "No forced editorial changes to follow trends or tropes",
  },
  {
    title: "Global Reach",
    text: "Future translation and localisation support to expand international audiences.",
  },
];

const featuresRight = [
  {
    title: "Creator Ownership",
    text: "Artists retain intellectual property rights to their work",
  },
  {
    title: "Fair Compensation",
    text: "Revenue-sharing model where creators receive a majority percentage of earnings.",
  },
  {
    title: "Flexible Production Model",
    text: "No enforced weekly deadlines. Creators set sustainable schedules.",
  },
  {
    title: "Creative Freedom",
    text: "No forced editorial changes to follow trends or tropes",
  },
  {
    title: "Global Reach",
    text: "Future translation and localisation support to expand international audiences.",
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

      <h1 className="sticky-heading">
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

                <h3>{item.title}</h3>

                <p>{item.text}</p>

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

                <h3>{item.title}</h3>

                <p>{item.text}</p>

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
