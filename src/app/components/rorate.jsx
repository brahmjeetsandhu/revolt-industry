"use client";
import heroGif from "../../assets/r-image.gif";
import heroGifMob from "../../assets/r-image-mob.gif";
//import RotatingBadge from "../../assets/Frame 9.png";
import VectorIcon from "../../assets/Vector.png";
import Instagram from "../../assets/Instagram.png";
import Youtube from "../../assets/Youtube.png";
import { heroSlides } from "../../data/headingSlider";



export default function RorateGif() {

    return (
        <section className="hero-gif apple-reveal delay-2">
            <img className="gif-desktop"
                src={heroGif.src}
                alt=""
            />
            <img className="gif-mobile"
                src={heroGifMob.src}
                alt=""
            />

            <div className="hero-overlay">

                <div className="hero-social social-icons">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={VectorIcon.src}
                            alt="Facebook"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/revolt_industry?igsh=bGRmZTVtazlycnBl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Instagram.src}
                            alt="Facebook"
                        />
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Youtube.src}
                            alt="Facebook"
                        />
                    </a>
                </div>

                <div className="hero-text-slider">
                    {heroSlides.map((slide, index) => (
                        <h1
                            key={slide.id}
                            style={{
                                animationDelay: `${index * 3}s`,
                            }}
                        >
                            {slide.titleTop}
                        </h1>
                    ))}
                </div>

            </div>
        </section>
    );
}   