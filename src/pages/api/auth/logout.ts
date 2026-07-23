export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies }) => {
    const secureFlag = import.meta.env.PROD ? "; Secure" : "";
    const cookieValue = `admin_session=; Path=/; HttpOnly${secureFlag}; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;

    return new Response(null, {
        status: 302,
        headers: {
            "Location": "/",
            "Set-Cookie": cookieValue,
        },
    });
};
