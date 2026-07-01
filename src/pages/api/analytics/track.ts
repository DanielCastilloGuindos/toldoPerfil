export const prerender = false;

import { db } from "@/db/client";
import { Analytics } from "@/db/schema";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        // Safe Header Access
        const getHeader = (key: string) => request.headers.get(key) || "";

        // Check if analytics are disabled by environment variable (DISABLE_ANALYTICS)
        // or by cookies (disable_analytics=true, or any admin cookie like admin_session)
        const envVal = process.env.DISABLE_ANALYTICS || import.meta.env.DISABLE_ANALYTICS || process.env.disable_analytics || import.meta.env.disable_analytics;
        const isDisabledByEnv = envVal === true || String(envVal).toUpperCase() === "TRUE";

        const cookieHeader = getHeader("cookie");
        const isDisabledByCookie = cookieHeader.includes("disable_analytics=true") || cookieHeader.includes("admin");

        if (isDisabledByEnv || isDisabledByCookie) {
            return new Response(JSON.stringify({ success: true, ignored: true }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

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

        const ip = getHeader("x-forwarded-for") || getHeader("x-real-ip") || "Unknown";
        const rawCity = getHeader("x-vercel-ip-city");
        const city = rawCity ? decodeURIComponent(rawCity) : "Unknown";
        const rawCountry = getHeader("x-vercel-ip-country");
        const country = rawCountry ? decodeURIComponent(rawCountry) : "Unknown";
        const userAgent = getHeader("user-agent");

        // Basic device detection (server-side)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const device = isMobile ? 'Mobile' : 'Desktop';

        const payloadData = (typeof data === 'object' && data !== null) ? data : {};

        // Drizzle's text(..., { mode: 'json' }) expects the object directly
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
