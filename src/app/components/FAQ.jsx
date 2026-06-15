"use client";

import { useState } from "react";

const faqData = [
    {
        question: "Do I keep the rights to my work?",
        answer:
            "Yes, creators retain full ownership and rights to their original work. \n Where appropriate, Revolt Industry may explore alternative IP arrangements, but our goal is to create partnerships that benefit both creators and the platform.",
    },
    {
        question: "How do creators make money?",
        answer:   "Creators will have access to multiple monetisation opportunities, including revenue sharing, subscriptions, premium content, publishing opportunities, ad revenue, merchandise, and future adaptations.",
    },
    {
        question: "Is Revolt Industry free to use?",
        answer:
            "Yes, creators can join and publish content without upfront platform fees.",
    },
    {
        question: "Can I receive upfront payments?",
        answer:
            "Selected creators may receive upfront payments depending on the project, audience potential, quality, and partnership opportunities.",
    },
    {
        question: "What type of creators are you looking for?",
        answer:
            "We are looking for passionate creators with original ideas, unique worlds, and stories that subvert traditional tropes. Whether you are an established creator or creating your first project, we want to hear from you. Please note that, we will not be accepting reincarnation series!",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section 
            style={{
                background: "#efefef",
                padding: "80px 20px",
            }}
        >
            <div className="apple-reveal"
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <h2 className="faq-title apple-reveal delay-2"
                    style={{
                        textAlign: "center",
                        fontSize: "60px",
                        fontWeight: "700",
                        marginBottom: "60px",
                        
          }}
        >
                FAQ
            </h2>

            {faqData.map((faq, index) => (
                <div className="apple-reveal delay-4"
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    style={{
                        borderBottom: "1px solid #000",
                        padding: "18px 0",
                        cursor: "pointer",
                    }}
                >
                    <div
                        style={{                            
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "Lato, sans-serif",
                                fontSize: "20px",
                                fontWeight: "400",
                            }}
                        >
                            {faq.question}
                        </h3>

                        <span style={{ fontSize: "22px" }}>
                            {openIndex === index ? "−" : "⌄"}
                        </span>
                    </div>

                    {openIndex === index && (
                        <p 
                            style={{
                                fontFamily: "Lato, sans-serif",
                                marginTop: "15px",
                                color: "#555",
                                lineHeight: "1.7",
                            }}
                        >
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    </section >
  );
}