"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeader";

const faqData = [
  {
    question: "Do I keep the rights to my work?",
    answer:
      "Yes, creators retain full ownership and rights to their original work.\n\nWhere appropriate, Revolt Industry may explore alternative IP arrangements, but our goal is to create partnerships that benefit both creators and the platform.",
  },
  {
    question: "How do creators make money?",
    answer:
      "Creators will have access to multiple monetisation opportunities, including revenue sharing, subscriptions, premium content, publishing opportunities, ad revenue, merchandise, and future adaptations.",
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
      "We are looking for passionate creators with original ideas, unique worlds, and stories that subvert traditional tropes. Whether you are an established creator or creating your first project, we want to hear from you.\n\nPlease note that we will not be accepting reincarnation series.",
  },
];

export default function FAQ() {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  return (
    <section
      style={{
        background: "#efefef",
        padding: "80px 20px",
      }}
    >

      <div

        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          className="faq-title apple-reveal delay-2"
          style={{
            textAlign: "center",
            fontSize: "60px",
            fontWeight: "700",
            marginBottom: "60px",
          }}
        >
          FAQ
        </h2>
        <div className="faq-wrapper">

          {/*Creator Faq*/}
          <div className="faq-content">
            <>
              <SectionHeading
                title="Creator"
                textcolor={"#000000"} />
            </>

            {faqData.map((faq, index) => (
              <div
                key={index}
                className="apple-reveal delay-4"
                onClick={() => setSelectedFAQ(faq)}
                style={{
                  borderBottom: "1px solid #000",
                  padding: "22px 0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
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

                  <span
                    style={{
                      fontSize: "24px",
                      transition: "0.3s ease",
                    }}
                  >
                    ⌄
                  </span>
                </div>
              </div>
            ))}

          </div>

          {/*Reader Faq*/}
          <div className="faq-content">
            <>
              <SectionHeading
                title="Reader"
                textcolor={"#000000"} />
            </>

            {faqData.map((faq, index) => (
              <div
                key={index}
                className="apple-reveal delay-4"
                onClick={() => setSelectedFAQ(faq)}
                style={{
                  borderBottom: "1px solid #000",
                  padding: "22px 0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
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

                  <span
                    style={{
                      fontSize: "24px",
                      transition: "0.3s ease",
                    }}
                  >
                    ⌄
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>






      {/* FAQ POPUP */}

      {selectedFAQ && (
        <div
          onClick={() => setSelectedFAQ(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 99999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "850px",
              background: "#111",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "24px",
              padding: "60px",
              color: "#fff",
              position: "relative",
              animation: "faqPopup .45s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <button
              onClick={() => setSelectedFAQ(null)}
              style={{
                position: "absolute",
                top: "25px",
                right: "25px",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "36px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h1
              style={{
                fontSize: "64px",
                fontWeight: "400",
                marginBottom: "40px",
              }}
            >
              FAQ
            </h1>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "500",
                lineHeight: "140%",
                marginBottom: "25px",
              }}
            >
              {selectedFAQ.question}
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "180%",
                color: "#d1d1d1",
                whiteSpace: "pre-line",
              }}
            >
              {selectedFAQ.answer}
            </p>
          </div>
        </div>
      )}


    </section>
  );
}