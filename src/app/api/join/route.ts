import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

    try {

        const body = await req.json();

        console.log("SMTP_HOST =", process.env.SMTP_HOST);
        console.log("SMTP_PORT =", process.env.SMTP_PORT);
        console.log("SMTP_USER =", process.env.SMTP_USER);
        console.log("SMTP_PASS exists =", !!process.env.SMTP_PASS);

        // ADD TRANSPORTER HERE
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,

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
                <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:40px 20px;">
                <table style="max-width:600px;margin:auto;background:#fff;border:1px solid #e5e5e5;border-radius:10px;">
                    <tr>
                    <td style="background:#111;padding:24px; border-radius:10px 10px 0 0;">
                        <h2 style="margin:0;color:#fff;">New Wishlist Signup</h2>
                    </td>
                    </tr>
                    <tr>
                    <td style="padding:30px;">
                        <p style="margin:0 0 10px;"><strong>Email Address</strong></p>
                        <p style="font-size:18px;margin:0;">
                        <a href="mailto:${body.email}" style="color:#0066cc;text-decoration:none;">
                            ${body.email}
                        </a>
                        </p>
                        <hr style="margin:25px 0;border:none;border-top:1px solid #eee;">
                        <p style="font-size:13px;color:#777;margin:0;">
                        This wishlist signup was submitted through the
                        <strong>Revolt Industry</strong> website.
                        </p>
                    </td>
                    </tr>
                </table>
                </div>
                `;
        }

        // =====================
        // Suggestion
        // =====================

        if (body.type === "Suggestion") {

            subject = "New Suggestion Received";

            html = `
                <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:40px 20px;">
                <table style="max-width:650px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:10px;overflow:hidden;">

                    <tr>
                    <td style="background:#111111;padding:24px; border-radius:10px 10px 0 0;">
                        <h2 style="margin:0;color:#ffffff;font-size:26px;">
                        New Suggestion Received
                        </h2>
                    </td>
                    </tr>

                    <tr>
                    <td style="padding:30px;">

                        <p style="margin:0 0 12px;font-weight:bold;font-size:16px;">
                        Suggestion / Feedback
                        </p>

                        <div style="
                        background:#f8f8f8;
                        border-left:4px solid #111111;
                        padding:18px;
                        line-height:1.8;
                        color:#333333;
                        white-space:pre-wrap;
                        ">
                        ${body.suggestion}
                        </div>

                    </td>
                    </tr>

                    <tr>
                    <td style="
                        padding:18px 30px;
                        background:#fafafa;
                        border-top:1px solid #eeeeee;
                        font-size:13px;
                        color:#777777;
                    ">
                        This suggestion was submitted through the
                        <strong>Revolt Industry</strong> website.
                    </td>
                    </tr>

                </table>
                </div>
                `;
        }

        // =====================
        // APPLICATION
        // =====================

        if (body.type === "application") {

            subject = "New Application";

            html = `
                <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f5f5; padding:40px 20px;">
                <table style="max-width:650px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e5e5;">
                    
                    <tr>
                    <td style="background:#111111; padding:24px; border-radius:10px 10px 0 0;">
                        <h2 style="margin:0; color:#ffffff; font-size:26px;">
                        New Creator Application
                        </h2>
                    </td>
                    </tr>

                    <tr>
                    <td style="padding:30px;">

                        <table style="width:100%; border-collapse:collapse;">

                        <tr>
                            <td style="padding:12px 0; font-weight:bold; width:160px;">Full Name</td>
                            <td style="padding:12px 0;">${body.name}</td>
                        </tr>

                        <tr>
                            <td style="padding:12px 0; font-weight:bold;">Email</td>
                            <td style="padding:12px 0;">
                            <a href="mailto:${body.email}" style="color:#0066cc; text-decoration:none;">
                                ${body.email}
                            </a>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:12px 0; font-weight:bold;">Portfolio</td>
                            <td style="padding:12px 0;">
                            <a href="${body.portfolio}" target="_blank" style="color:#0066cc;">
                                ${body.portfolio}
                            </a>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:12px 0; font-weight:bold; vertical-align:top;">
                            Project Description
                            </td>
                            <td style="padding:12px 0; line-height:1.7;">
                            ${body.description}
                            </td>
                        </tr>

                        </table>

                    </td>
                    </tr>

                    <tr>
                    <td style="padding:18px 30px; background:#fafafa; border-top:1px solid #eeeeee; font-size:13px; color:#777777;">
                        This application was submitted through the <strong>Revolt Industry</strong> website.
                    </td>
                    </tr>

                </table>
                </div>
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