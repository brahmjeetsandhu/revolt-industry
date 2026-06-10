
import ProblemImage1 from "../../assets/hero-1.png";
import ProblemImage2 from "../../assets/hero-2.png";
import ProblemImage3 from "../../assets/hero-3.png";
import ProblemImage4 from "../../assets/hero-4.png";    

export default function Problems() {
    return (
        <section className="problems cinematic-section">
            <h1>The Problem With Traditional Publishing</h1>
            <div className="problems-images">
                <img src={ProblemImage1.src} alt="Problem 1" className="problem-image" />
                <img src={ProblemImage2.src} alt="Problem 2" className="problem-image" />
                <img src={ProblemImage3.src} alt="Problem 3" className="problem-image" />
                <img src={ProblemImage4.src} alt="Problem 4" className="problem-image" />
            </div>
        </section>
    );
}; 