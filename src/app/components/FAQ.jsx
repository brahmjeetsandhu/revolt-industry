"use client";

import { useState } from "react";

const faqData = [
    {
        question: "Do I keep the rights to my work?",
        answer:
            "Yes, creators retain full ownership and rights to their original work.",
    },
    {
        question: "Can I publish manga and comics?",
        answer:
            "Absolutely. Revolt Industry supports manga, manhwa, comics and graphic stories.",
    },
    {
        question: "Is Revolt Industry free to use?",
        answer:
            "Yes, creators can join and publish content without upfront platform fees.",
    },
    {
        question: "Can I monetize my content?",
        answer:
            "Yes, monetization features are available for eligible creators.",
    },
    {
        question: "Do I need publishing experience?",
        answer:
            "No, the platform is built for both beginners and professional creators.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="cinematin-section"
            style={{
                background: "#efefef",
                padding: "80px 20px",
            }}
        >
            <div 
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <h2 className="faq-title "
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
                <div
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