import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    const { url, cookies, redirect } = context;

    // Check if the request is for the admin section
    if (url.pathname.startsWith("/admin")) {
        // Whitelist: Allow access to the login page (which now handles dashboard rendering)
        if (url.pathname === "/admin") {
            return next();
        }

        // Protection: Redirect unauthenticated users to login
        if (cookies.get("admin_session")?.value !== "authenticated") {
            return redirect("/admin");
        }
    }

    return next();
});
