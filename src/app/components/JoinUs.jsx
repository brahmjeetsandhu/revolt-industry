"use client";

import { useState } from "react";

export default function JoinSection() {

    // =========================
    // STATES
    // =========================

    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [wishlistEmail, setWishlistEmail] = useState("");
    const [suggestionText, setSuggestionTest] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        portfolio: "",
        description: "",
    });

    // =========================
    // WISHLIST SUBMIT
    // =========================

    const handleWishlist = async () => {
        try {
            const res = await fetch("/api/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "wishlist",
                    email: wishlistEmail,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccessMessage("Successfully joined wishlist!");
                setShowSuccess(true);
                setWishlistEmail("");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // =========================
    // Suggestion SUBMIT
    // =========================

    const handleSuggestion = async () => {
        try {
            const res = await fetch("/api/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "Suggestion",
                    email: suggestionText,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccessMessage("Suggestion received Successfully!!!");
                setShowSuccess(true);
                setSuggestionTest("");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // =========================
    // FORM SUBMIT
    // =========================

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "application",
                    ...formData,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setSuccessMessage("Application submitted successfully!");
                setShowSuccess(true);

                setFormData({
                    name: "",
                    email: "",
                    portfolio: "",
                    description: "",
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="join-us cinematic-section">

            <h1>Join Revolt Industry</h1>

            <div className="join-us-content">

                {/* Wishlist */}

                <div className="join-wishlist">

                    <input
                        type="email"
                        placeholder="Enter your Email"
                        value={wishlistEmail}
                        onChange={(e) =>
                            setWishlistEmail(e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={handleWishlist}
                    >
                        Join the waitlist
                    </button>
                    

                     <input
                        type="email"
                        placeholder="Suggest for improvement"
                        value={suggestionText}
                        onChange={(e) =>
                            setSuggestionTest(e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={handleSuggestion}
                    >
                        Submit
                    </button>


                </div>
                
                

                {/* Main Form */}

                <div>

                    <form
                        className="join-form"
                        onSubmit={handleFormSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Portfolio / Website Link"
                            value={formData.portfolio}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    portfolio: e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Project Description"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                        />

                        <button type="submit">
                            Join Now
                        </button>

                    </form>

                </div>

            </div>

            {
                showSuccess && (
                    <div className="success-modal-overlay">

                        <div className="success-modal">

                            <h2>Success</h2>

                            <p>{successMessage}</p>

                            <button
                                onClick={() => setShowSuccess(false)}
                            >
                                Close
                            </button>

                        </div>

                    </div>
                )
            }

        </section>
    );
}