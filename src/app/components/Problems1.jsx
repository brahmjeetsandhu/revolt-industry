
import ProblemImage4 from "../../assets/problem-image1.png";
import ProblemImage1 from "../../assets/problem-image2.png";
import ProblemImage2 from "../../assets/problem-image3.png";
import Image from "next/image";
import SectionHeading from "./SectionHeader";

export default function PublishingProblems() {

    return (
        <section className="publishingProblems">
            <div className="publishingContainer">
                <h2 className="publishingTitle apple-reveal delay-2">
                    The Problem With Traditional Publishing
                </h2>
                <SectionHeading                    
                    subtitle=""                   
                />
                <div className="problemGrid">
                    {/* Monetisation */}
                    <div className="problemCard monetisation apple-reveal delay-4">
                        <div className="cardContent ">
                            <h3>Monetisation</h3>

                            <p>
                                Creators dedicate thousands of hours to developing their
                                stories, often sacrificing their personal time and wellbeing,
                                yet many struggle to receive fair compensation for their work.
                            </p>

                            <p>
                                Creators deserve to benefit the most from the success those
                                stories achieve!
                            </p>
                        </div>

                        <Image
                            src={ProblemImage2}
                            alt="Monetisation"
                            width={120}
                            height={120}
                            className="sideImage"
                        />
                    </div>

                    {/* Working Conditions */}
                    <div className="problemCard working apple-reveal delay-4">
                        <h3>Working Conditions</h3>

                        <p>
                            Most creators face intense pressure, unrealistic deadlines, and
                            demanding schedules from their publishers; however, creativity
                            requires time, care, and passion. Great stories should not be
                            limited by burnout.
                        </p>
                    </div>

                    {/* Support */}
                    <div className="problemCard support apple-reveal delay-4">
                        <h3>Lack of Support</h3>

                        <p style={{ lineHeight: "145%" }}>
                            Many creators are left without enough support when it comes to
                            drawing, editing, publishing, marketing, growing an audience,
                            building connections, and navigating the industry.
                        </p>
                    </div>

                    {/* Creative Freedom */}
                    <div className="problemCard freedom apple-reveal delay-4">
                        <Image
                            src={ProblemImage4}
                            alt="Creative Freedom"
                            width={180}
                            height={180}
                            className="topImage"
                        />

                        <h3>Lack of Creative Freedom</h3>

                        <p>
                            Creators are often pressured to follow existing formulas, trends,
                            or market expectations.
                        </p>

                        <p>
                            We believe the next generation of stories should not be
                            restricted by what has already been successful.
                        </p>
                    </div>

                    {/* Intellectual Property */}
                    <div className="problemCard rights apple-reveal delay-4">
                        <h3>Intellectual Property Rights</h3>

                        <p>
                            In traditional publishing, creators can sometimes lose control
                            over the worlds, characters, and stories they have created.
                        </p>

                        <p >
                            We believe creators should have greater ownership, transparency,
                            and opportunities with their intellectual property.
                        </p>
                        <div className="image-wrapper">
                            <Image
                                src={ProblemImage1}
                                alt="Rights"

                                className="bottomImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}