import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const data = await request.formData();
    const username = data.get("username")?.toString();
    const password = data.get("password")?.toString();

    // TODO: Replace with environment variables or DB check in the future
    // For now, mirroring the previous logic but server-side
    const VALID_USERNAME = "admin";
    const VALID_PASSWORD = "!toldoPERFIL2024";

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Set cookie valid for 1 day
        cookies.set("admin_session", "authenticated", {
            path: "/",
            httpOnly: true, // Not accessible via client-side JS
            secure: import.meta.env.PROD, // Only secure in production
            sameSite: "strict",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return redirect("/admin");
    }

    return new Response("Unauthorized", { status: 401 });
};
