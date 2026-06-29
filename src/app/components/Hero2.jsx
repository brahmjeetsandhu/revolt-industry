"use client";

import { useEffect, useRef, useState } from "react";
import "./hero2.css";

import Img1 from "../../assets/hero-1.png";
import Img2 from "../../assets/hero-2.png";
import Img3 from "../../assets/hero-3.png";

const slides = [
  {
    image: Img1.src,
    title1: "Create",
    title2: "Your Universe",
  },
  {
    image: Img2.src,
    title1: "Publish",
    title2: "Without Limits",
  },
  {
    image: Img3.src,
    title1: "Build",
    title2: "Your Audience",
  },
];

export default function Hero2() {

  const [indexes, setIndexes] = useState({
    active: 0,
    next: 1,
    incoming: 2,
  });

  const [animating, setAnimating] = useState(false);

  const activeRef = useRef(null);
  const nextRef = useRef(null);
  const incomingRef = useRef(null);

  const handleNext = () => {

    if (animating) return;

    setAnimating(true);

    const activeEl = activeRef.current;
    const nextEl = nextRef.current;
    const incomingEl = incomingRef.current;

    if (!activeEl || !nextEl || !incomingEl) return;

    const activeRect =  
      activeEl.getBoundingClientRect();

    const nextRect =
      nextEl.getBoundingClientRect();

    /* =========================================
       ACTIVE FLY OUT
    ========================================= */

    const flyingOut =
      activeEl.cloneNode(true);

    flyingOut.style.position = "fixed";
    flyingOut.style.left = `${activeRect.left}px`;
    flyingOut.style.top = `${activeRect.top}px`;
    flyingOut.style.width = `${activeRect.width}px`;
    flyingOut.style.height = `${activeRect.height}px`;

    flyingOut.style.transition =
      "all 1s cubic-bezier(.77,0,.18,1)";

    flyingOut.style.zIndex = "999";
    flyingOut.style.pointerEvents = "none";

    document.body.appendChild(flyingOut);

    /* =========================================
       NEXT FLY INTO ACTIVE
    ========================================= */

    const flyingIn =
      nextEl.cloneNode(true);

    flyingIn.style.position = "fixed";
    flyingIn.style.left = `${nextRect.left}px`;
    flyingIn.style.top = `${nextRect.top}px`;
    flyingIn.style.width = `${nextRect.width}px`;
    flyingIn.style.height = `${nextRect.height}px`;

    flyingIn.style.transition =
      "all 1s cubic-bezier(.77,0,.18,1)";

    flyingIn.style.zIndex = "1000";
    flyingIn.style.pointerEvents = "none";

    document.body.appendChild(flyingIn);

    /* =========================================
       HIDE REAL ELEMENTS
    ========================================= */

    activeEl.style.opacity = "0";
    nextEl.style.opacity = "0";

    /* =========================================
       INCOMING SLIDES INTO NEXT SLOT
    ========================================= */

    requestAnimationFrame(() => {

      /* ACTIVE LEAVES */

      flyingOut.style.transform =
        "translateX(-220px) scale(0.72)";

      flyingOut.style.opacity = "0";

      /* NEXT ENTERS ACTIVE */

      flyingIn.style.left =
        `${activeRect.left}px`;

      flyingIn.style.top =
        `${activeRect.top}px`;

      flyingIn.style.width =
        `${activeRect.width}px`;

      flyingIn.style.height =
        `${activeRect.height}px`;

      /* INCOMING SLIDES INTO NEXT */

      incomingEl.style.right = "-10px";
    });

    setTimeout(() => {

      document.body.removeChild(flyingOut);
      document.body.removeChild(flyingIn);

      incomingEl.style.transition = "none";
      incomingEl.style.right = "-220px";

      setIndexes((prev) => ({
        active: prev.next,
        next: prev.incoming,
        incoming:
          (prev.incoming + 1) % slides.length,
      }));

      requestAnimationFrame(() => {
        incomingEl.style.transition =
          "right 1s cubic-bezier(.77,0,.18,1)";
      });

      activeEl.style.opacity = "1";
      nextEl.style.opacity = "1";

      setAnimating(false);

    }, 1000);
  };

  useEffect(() => {

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);

  }, [indexes, animating]);

  return (

    <section className="hero2">

      {/* SOCIALS */}

      <div className="social-icons">

        <a >f</a>
        <a >◎</a>
        <a>▶</a>

      </div>

      {/* CONTENT */}

      <div className="hero2-content">

        <h1>
          {slides[indexes.active].title1}
        </h1>

        <h2>
          {slides[indexes.active].title2}
        </h2>

      </div>

      {/* ACTIVE */}

      <div
        ref={activeRef}
        className="hero2-active"
      >
        <img
          src={
            slides[indexes.active].image
          }
          alt=""
        />
      </div>

      {/* NEXT */}

      <div
        ref={nextRef}
        className="hero2-next"
      >
        <img
          src={
            slides[indexes.next].image
          }
          alt=""
        />
      </div>

      {/* INCOMING */}

      <div
        ref={incomingRef}
        className="hero2-incoming"
      >
        <img
          src={
            slides[indexes.incoming].image
          }
          alt=""
        />
      </div>

      {/* BUTTON */}

      <button
        className="hero2-btn"
        onClick={handleNext}
      >
        →
      </button>

    </section>
  );
}