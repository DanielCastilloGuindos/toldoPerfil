export const prerender = false;

import { db, Analytics } from "astro:db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const { type, data } = await request.json();

        if (!type) {
            return new Response("Missing type", { status: 400 });
        }

        await db.insert(Analytics).values({
            type,
            data,
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
