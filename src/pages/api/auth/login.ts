export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const data = await request.formData();
        const username = data.get("username")?.toString();
        const password = data.get("password")?.toString();

        // TODO: Replace with environment variables or DB check in the future
        // For now, mirroring the previous logic but server-side
        const VALID_USERNAME = "admin";
        const VALID_PASSWORD = "!toldoPERFIL2024";

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            // Set cookie valid for 1 day
            const secureFlag = import.meta.env.PROD ? "; Secure" : "";
            const cookieValue = `admin_session=authenticated; Path=/; HttpOnly${secureFlag}; SameSite=Lax; Max-Age=${60 * 60 * 24}`;

            return new Response(null, {
                status: 302,
                headers: {
                    "Location": "/admin",
                    "Set-Cookie": cookieValue,
                },
            });
        }

        return new Response("Unauthorized", { status: 401 });
    } catch (e) {
        console.error("Error during login:", e);
        return new Response(JSON.stringify({ error: "Error interno del servidor", details: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
