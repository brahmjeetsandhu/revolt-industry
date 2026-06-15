
import BgImage from "../../assets/Intro-bg.png";
export default function Introduction() {
  return (  
<section className="introduction apple-reveal" style={{ backgroundImage: `url(${BgImage.src})`,  backgroundSize: "cover",
        backgroundPosition: "center", height: "100vh" }}>
    <div className="introduction apple-reveal delay-4">
        <h1>Who is Revolt Industry for</h1>
        <p>Revolt Industry is a publishing platform built to support the next generation of manga, webcomics, and comics creators.
Currently, there is an apparent shortage of creative and exciting stories. 
</p>
    </div>
</section>  
);};