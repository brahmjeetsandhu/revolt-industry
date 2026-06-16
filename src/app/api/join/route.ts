import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

    try {

        const body = await req.json();

        // ADD TRANSPORTER HERE
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,

            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        let subject = "";
        let html = "";

        // =====================
        // WISHLIST
        // =====================

        if (body.type === "wishlist") {

            subject = "New Wishlist Signup";

            html = `
                <h2>New Wishlist Signup</h2>
                <p>Email: ${body.email}</p>
            `;
        }

        // =====================
        // Suggest for improvement
        // =====================

        if (body.type === "Suggestion") {

            subject = "Suggestion for improvement";

            html = `
                <h2>Suggestion for improvement</h2>
                <p>Suggestion: ${body.email}</p>
            `;
        }

        // =====================
        // APPLICATION
        // =====================

        if (body.type === "application") {

            subject = "New Application";

            html = `
                <h2>New Application</h2>

                <p>Name: ${body.name}</p>
                <p>Email: ${body.email}</p>
                <p>Portfolio: ${body.portfolio}</p>
                <p>Description: ${body.description}</p>
            `;
        }

        // SEND EMAIL
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "support@bestechsols.co.uk",
            subject,
            html,
        });

        return NextResponse.json({
            success: true,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}