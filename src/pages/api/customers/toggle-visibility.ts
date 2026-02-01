export const prerender = false;

import { db } from "@/db/client";
import { Customers } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const id = formData.get("id");

    if (!id) {
        return new Response("ID requerido", { status: 400 });
    }

    try {
        // We cannot easily "toggle" in one query with simple SQL builders sometimes, 
        // but with Astro DB (Drizzle) we can fetch and update or use sql operators.
        // Let's fetch first to be safe and simple.

        const customers = await db.select().from(Customers).where(eq(Customers.customer_id, Number(id)));
        const customer = customers[0];

        if (!customer) {
            return new Response("Cliente no encontrado", { status: 404 });
        }

        await db.update(Customers)
            .set({ isVisible: !customer.isVisible })
            .where(eq(Customers.customer_id, Number(id)));

        // Redirect back to admin dashboard
        return redirect("/admin");

    } catch (e) {
        console.error("Error toggling visibility:", e);
        return new Response("Error del servidor", { status: 500 });
    }
};
