
import BgImage from "../../assets/Intro-bg.png";
export default function Introduction() {
  return (  
<section className="introduction cinematic-section" style={{ backgroundImage: `url(${BgImage.src})`,  backgroundSize: "cover",
        backgroundPosition: "center", height: "100vh" }}>
    <div className="introduction">
        <h1>Who is Revolt Industry for</h1>
        <p>Revolt Industry is a publishing platform built to support the next generation of manga, webcomics, and comics creators.
Currently, there is an apparent shortage of creative and exciting stories. Many incredible stories already exist, but they are yet to be discovered and await the right platform, support, and opportunity to bring them into the spotlight.
Revolt Industry aims to be that spotlight as we want to help talented creators overcome the barriers of traditional publishing by providing the support, tools, and audience they need to share their stories with the world.
At the same time, we want to create a home for readers where they can return to knowing they will consistently discover new, original, and exciting manga and comics.
Our goal is simple: to help creators be discovered, and to help readers discover stories they will love.
</p>
    </div>
</section>  
);};