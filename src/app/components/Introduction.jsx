
import BgImage from "../../assets/Intro-bg.png";
export default function Introduction() {
  return (  
<section className="introduction cinematic-section" style={{ backgroundImage: `url(${BgImage.src})`,  backgroundSize: "cover",
        backgroundPosition: "center", height: "100vh" }}>
    <div className="introduction">
        <h1>Who is Revolt Industry for</h1>
        <p>Revolt Industry is a digital publishing platform built to support the next generation of manga, manhwa and comic creators.</p>
    </div>
</section>  
);};