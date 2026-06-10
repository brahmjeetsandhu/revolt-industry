"use client";

import { useEffect, useState } from "react";

import heroBg from "../../assets/hero-bg.png";

import { heroSlides } from "../../data/heroSlides";

import "./hero2.css";

export default function Hero3() {

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

        const first = updated.shift();

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
      id="hero"
      className={sliding ? "is-sliding" : ""}
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

      {/* =====================================
          DESKTOP SOCIALS
      ===================================== */}

      <div className="social-icons">

        <a href="/">f</a>
        <a href="/">◎</a>
        <a href="/">▶</a>

      </div>

      {/* =====================================
          DESKTOP CONTENT
      ===================================== */}

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

      {/* =====================================
          DESKTOP SLIDER
      ===================================== */}

      <div className="hero-cinematic-slider desktop-slider">

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

        {/* UPCOMING */}

        <div
          className={`hero-upcoming-image ${sliding ? "slide-upcoming" : ""
            }`}
        >

          <img
            src={slides[2].image.src}
            alt=""
          />

        </div>

      </div>

      {/* =====================================
          TABLET SLIDER
      ===================================== */}

      <div className="tablet-hero-wrapper">

        <div className="tablet-hero-content">

          <h1>
            {slides[0].titleTop}
          </h1>

          <h2>
            {slides[0].titleMain}
          </h2>

        </div>

        <div className="tablet-slider-area">

          {/* ACTIVE */}

          <div
            className={`tablet-active-image ${sliding ? "tablet-slide-active" : ""
              }`}
          >

            <img
              src={slides[0].image.src}
              alt=""
            />

          </div>

          {/* NEXT */}

          <div
            className={`tablet-next-image ${sliding ? "tablet-slide-next" : ""
              }`}
          >

            <img
              src={slides[1].image.src}
              alt=""
            />

          </div>

          {/* UPCOMING */}

          <div
            className={`tablet-upcoming-image ${sliding ? "tablet-slide-upcoming" : ""
              }`}
          >

            <img
              src={slides[2].image.src}
              alt=""
            />

          </div>

        </div>

      </div>

      {/* =====================================
          MOBILE SLIDER
      ===================================== */}

      <div className="mobile-hero-wrapper">

        <div className="mobile-hero-content">

          <h1>
            {slides[0].titleTop}
          </h1>

          <h2>
            {slides[0].titleMain}
          </h2>

        </div>

        <div className="mobile-slider-area">

          {/* ACTIVE */}

          <div
            className={`mobile-active-image ${sliding ? "mobile-slide-active" : ""
              }`}
          >

            <img
              src={slides[0].image.src}
              alt=""
            />

          </div>

          {/* NEXT */}

          <div
            className={`mobile-next-image ${sliding ? "mobile-slide-next" : ""
              }`}
          >

            <img
              src={slides[1].image.src}
              alt=""
            />

          </div>

          {/* UPCOMING */}

          <div
            className={`mobile-upcoming-image ${sliding ? "mobile-slide-upcoming" : ""
              }`}
          >

            <img
              src={slides[2].image.src}
              alt=""
            />

          </div>

        </div>

      </div>

      {/* =====================================
          BUTTON
      ===================================== */}

      <button
        onClick={goNext}
        className="next-slide-btn"
      >
        ›
      </button>

    </section>
  );
}