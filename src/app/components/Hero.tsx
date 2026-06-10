"use client";

import { useEffect, useState } from "react";

import heroBg from "../../assets/hero-bg.png";

import { heroSlides } from "../../data/heroSlides";

export default function Hero() {

  const [slides, setSlides] =
    useState(heroSlides);

  const [sliding, setSliding] =
    useState(false);

  const goNext = () => {

    if (sliding) return;

    setSliding(true);

    setTimeout(() => {

      setSlides((prev) => {

        const updated = [...prev];

        const first =
          updated.shift();

        if (first) {
          updated.push(first);
        }

        return updated;
      });

      setSliding(false);

    }, 1000);
  };

  useEffect(() => {

    const interval =
      setInterval(goNext, 5000);

    return () =>
      clearInterval(interval);

  }, [sliding]);

  return (

    <section
      id="hero" className={sliding ? "is-sliding" : ""}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.85)
          ),
          url(${heroBg.src})
        `,
      }}
    >

      {/* SOCIALS */}

      <div className="social-icons">

        <a href="/">f</a>
        <a href="/">◎</a>
        <a href="/">▶</a>

      </div>

      {/* TEXT */}

      <div
        className={`hero-content ${sliding ? "slide-text" : ""
          }`}
      >

        <h1>
          {slides[0].titleTop}
        </h1>

        <h2>
          {slides[0].titleMain}
        </h2>

      </div>

      {/* SLIDER */}

      <div className="hero-cinematic-slider">

        {/* ACTIVE */}

        <div
          className={`hero-active-image ${sliding ? "slide-active" : ""
            }`}
        >

          <img
            src={slides[0].image.src}
            alt=""
          />

        </div>

        {/* NEXT */}

        <div
          className={`hero-next-image ${sliding ? "slide-next" : ""
            }`}
        >

          <img
            src={slides[1].image.src}
            alt=""
          />

        </div>

        

        {/* BUTTON */}

        <button
          onClick={goNext}
          className="next-slide-btn"
        >
          ›
        </button>

      </div>

    </section>
  );
}