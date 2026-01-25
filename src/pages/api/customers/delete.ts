import type { APIRoute } from "astro";
import { db, Customers, eq } from "astro:db";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const id = formData.get("id");

    if (!id) {
        return new Response("Missing ID", { status: 400 });
    }

    try {
        await db.delete(Customers).where(eq(Customers.customer_id, Number(id)));
        return redirect("/admin");
    } catch (error) {
        return new Response("Error deleting customer", { status: 500 });
    }
};
