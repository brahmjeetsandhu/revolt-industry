import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Future:
        // await db.query("SELECT 1");
        // await smtp.verify();

        return NextResponse.json(
            {
                status: "Healthy",
                service: "Revolt Industry",
                version: "1.0.0",
                timestamp: new Date().toISOString(),
            },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            {
                status: "Unhealthy",
                timestamp: new Date().toISOString(),
            },
            { status: 500 }
        );
    }
}