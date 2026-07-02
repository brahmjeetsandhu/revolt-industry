"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeader";

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export default function JoinSection() {

    // =========================
    // STATES
    // =========================

    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [wishlistEmail, setWishlistEmail] = useState("");
    const [suggestionText, setSuggestionText] = useState("");

    const [isWishlistLoading, setIsWishlistLoading] = useState(false);
    const [isSuggestionLoading, setIsSuggestionLoading] = useState(false);
    const [isApplicationLoading, setIsApplicationLoading] = useState(false);

    const [wishlistError, setWishlistError] = useState("");
    const [suggestionError, setSuggestionError] = useState("");
    const [applicationError, setApplicationError] = useState("");

    const [errorMessage, setErrorMessage] = useState("");


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
        if (!wishlistEmail.trim()) {
            setWishlistError("Please enter your email address.");
            return;
        }

        if (!isValidEmail(wishlistEmail)) {
            setWishlistError("Please enter a valid email address.");
            return;
        }

        setWishlistError("");

        setIsWishlistLoading(true);
        setErrorMessage("");

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

            if (!res.ok || !data.success) {
                throw new Error(data.error || "Unable to join the wishlist.");
            }

            setWishlistEmail("");
            setSuccessMessage("Successfully joined the wishlist!");
            setShowSuccess(true);

        } catch (err) {

            setErrorMessage(
                err instanceof Error
                    ? err.message
                    : "Something went wrong."
            );

        } finally {

            setIsWishlistLoading(false);

        }
    };

    // =========================
    // SUGGESTION SUBMIT
    // =========================

    const handleSuggestion = async () => {

        if (!suggestionText.trim()) {
            setSuggestionError("Please enter your suggestion.");
            return;
        }

        setIsSuggestionLoading(true);
        setSuggestionError("");

        try {

            const res = await fetch("/api/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "Suggestion",
                    suggestion: suggestionText,
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(
                    data.error || "Unable to submit your suggestion."
                );
            }

            setSuggestionText("");

            setSuccessMessage("Thank you! Your suggestion has been submitted.");
            setShowSuccess(true);

        } catch (err) {

            setErrorMessage(
                err instanceof Error
                    ? err.message
                    : "Something went wrong."
            );

        } finally {

            setIsSuggestionLoading(false);

        }

    };
    // =========================
    // FORM SUBMIT
    // =========================

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        if (!formData.name.trim()) {
            setApplicationError("Please enter your full name.");
            return;
        }

        if (!formData.email.trim()) {
            setApplicationError("Please enter your email address.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            setApplicationError("Please enter a valid email address.");
            return;
        }

        if (!formData.description.trim()) {
            setApplicationError("Please enter a project description.");
            return;
        }

        setIsApplicationLoading(true);
        setApplicationError("");

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

            if (!res.ok || !data.success) {
                throw new Error(
                    data.error || "Unable to submit your application."
                );
            }

            setSuccessMessage("Application submitted successfully!");
            setShowSuccess(true);

            setFormData({
                name: "",
                email: "",
                portfolio: "",
                description: "",
            });

        } catch (err) {

            setApplicationError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong."
            );

        } finally {

            setIsApplicationLoading(false);

        }

    };

    return (
        <section className="join-us">

            <h1 className="apple-reveal delay-2">Join Revolt Industry</h1>

            <div className="join-us-content">

                {/* Wishlist */}

                <div className="join-wishlist apple-reveal delay-4">

                    <SectionHeading
                        title="For Readers"
                        subtitle="Joining early secures you a discounted lifetime subscription available exclusively to
                         our early supporters though, spaces are limited, 
                        so don’t miss your chance to be part of the journey from the very beginning.
                         We will keep you updated on platform development."
                        textcolor="#ffffff"
                        style={{

                            marginBottom: -20,
                        }}
                    />

                    <input
                        disabled={isWishlistLoading}
                        type="email"
                        placeholder="Enter your Email"
                        value={wishlistEmail}
                        onChange={(e) =>
                            setWishlistEmail(e.target.value)
                        }
                    />

                    {wishlistError && <p className="form-error">{wishlistError}</p>}


                    <button
                        type="button"
                        disabled={isWishlistLoading}
                        onClick={handleWishlist}
                    >
                        {isWishlistLoading ? "Joining..." : "Join the waitlist"}
                    </button>


                    <SectionHeading

                        subtitle="Help shape the future of Revolt Industry, If you have a story suggestion, feature idea or feedback that you would like to see on Revolt we would be keen to hear from you"
                        textcolor="#ffffff"
                        style={{
                            marginTop: 30,
                            marginBottom: -20,
                        }}
                    />

                    <input
                        disabled={isSuggestionLoading}
                        placeholder="Share your suggestion..."
                        value={suggestionText}
                        onChange={(e) => setSuggestionText(e.target.value)}
                    />

                    <button
                        type="button"
                        disabled={isSuggestionLoading}
                        onClick={handleSuggestion}
                        style={{ cursor: isSuggestionLoading ? "not-allowed" : "pointer" }}
                    >
                        {isSuggestionLoading ? "Submitting..." : "Submit"}
                    </button>

                    {suggestionError && <p className="form-error">{suggestionError}</p>}

                </div>


                {/* Main Form */}

                <div className="join-form  apple-reveal delay-4">

                    <SectionHeading
                        title="For Creators"
                        subtitle="Have a story to share? Submit your work and join a new generation 
                         of creators building original worlds without boundaries."
                        textcolor={"#ffffff"}
                        style={{

                            marginBottom: 60,
                        }}

                    />

                    <form
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

                        <button
                            type="submit" disabled={isApplicationLoading}
                        >
                            {isApplicationLoading ? "Submitting..." : "Join Now"}
                        </button>

                        {applicationError && <p className="form-error">{applicationError}</p>}

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