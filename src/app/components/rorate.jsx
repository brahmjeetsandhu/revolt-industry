"use client";
import heroGif from "../../assets/r-image.gif";
import heroGifMob from "../../assets/r-image-mob.gif";
import discord from "../../assets/discord.png";
import Instagram from "../../assets/Instagram.png";
import TikTok from "../../assets/tiktok.png";
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
                        href="https://discord.gg/nRRhSf94f"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={discord.src}
                            alt="Discord"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/revolt_industry?igsh=bGRmZTVtazlycnBl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Instagram.src}
                            alt="Instagram"
                        />
                    </a>

                    <a
                        href="https://tiktok.com/@revolt.industry"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={TikTok.src}
                            alt="TikTok"
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