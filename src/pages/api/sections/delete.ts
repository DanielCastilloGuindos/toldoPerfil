export const prerender = false;

import { db } from "@/db/client";
import { PageSections } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { id } = body;

        if (id === undefined) {
            return new Response(JSON.stringify({ error: "Falta parámetro 'id'" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Eliminar sección por ID
        await db.delete(PageSections).where(eq(PageSections.id, Number(id)));

        return new Response(JSON.stringify({ success: true, message: "Sección eliminada con éxito" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        console.error("Error al eliminar sección:", e);
        return new Response(JSON.stringify({ error: "Error interno del servidor", details: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
