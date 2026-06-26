
import BgImage from "../../assets/Intro-bg.png";
export default function Introduction() {
    return (
        <section className="introduction apple-reveal" style={{
            backgroundImage: `url(${BgImage.src})`, backgroundSize: "cover",
            backgroundPosition: "center", height: "100vh"
        }}>
            <div className="introduction apple-reveal delay-4">
                <h1>Who is Revolt Industry for</h1>
                <p> Revolt Industry is a next-generation publishing and entertainment platform built to discover, develop,
                    and connect the next generation of storytellers with audiences worldwide.
                    Focused on manga-inspired storytelling, webcomics, light novels, and comics,
                    Revolt creates a new ecosystem where creators can build original worlds, readers can discover new experiences,
                    and future entertainment franchises can be born.
                </p>
            </div>
        </section>
    );
};