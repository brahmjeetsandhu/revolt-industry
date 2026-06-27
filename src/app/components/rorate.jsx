"use client";
import heroGif from "../../assets/r-image.gif";
import heroGifMob from "../../assets/r-image-mob.gif";
import RotatingBadge from "../../assets/Frame 9.png";


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
        </section>
    );
}   