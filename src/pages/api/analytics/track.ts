export const prerender = false;

import { db, Analytics } from "astro:db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const { type, data } = await request.json();

        if (!type) {
            return new Response("Missing type", { status: 400 });
        }

        const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown";
        const city = request.headers.get("x-vercel-ip-city") || "Unknown";
        const country = request.headers.get("x-vercel-ip-country") || "Unknown";
        const userAgent = request.headers.get("user-agent") || "Unknown";

        // Basic device detection (server-side)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const device = isMobile ? 'Mobile' : 'Desktop';

        await db.insert(Analytics).values({
            type,
            data: {
                ...data, // Preserve existing data (like referrer, page path)
                ip,
                city,
                country,
                userAgent,
                device
            },
            created_at: new Date(),
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        console.error("Analytics Error:", e);
        return new Response("Internal Server Error", { status: 500 });
    }
};
