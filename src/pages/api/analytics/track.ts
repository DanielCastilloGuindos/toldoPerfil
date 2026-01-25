export const prerender = false;

import { db, Analytics } from "astro:db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        let body;
        try {
            body = await request.json();
        } catch (e) {
            return new Response("Invalid JSON body", { status: 400 });
        }

        const { type, data } = body;

        if (!type) {
            return new Response("Missing type", { status: 400 });
        }

        // Safe Header Access
        const getHeader = (key: string) => request.headers.get(key) || "Unknown";

        const ip = getHeader("x-forwarded-for") || getHeader("x-real-ip");
        const city = getHeader("x-vercel-ip-city");
        const country = getHeader("x-vercel-ip-country");
        const userAgent = getHeader("user-agent");

        // Basic device detection (server-side)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const device = isMobile ? 'Mobile' : 'Desktop';

        const payloadData = (typeof data === 'object' && data !== null) ? data : {};

        await db.insert(Analytics).values({
            type,
            data: {
                ...payloadData,
                ip,
                city,
                country,
                userAgent,
                device
            }
            // created_at handled by default: NOW
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        console.error("Analytics Error Full Details:", e);
        // Return a generic error but log the specific one
        return new Response(JSON.stringify({ error: "Internal Server Error", details: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
