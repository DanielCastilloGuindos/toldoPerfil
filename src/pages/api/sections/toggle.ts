export const prerender = false;

import { db } from "@/db/client";
import { PageSections } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { id, type, isEnabled } = body;

        if (isEnabled === undefined) {
            return new Response(JSON.stringify({ error: "Falta parámetro 'isEnabled'" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        if (id !== undefined) {
            await db.update(PageSections)
                .set({ isEnabled: Boolean(isEnabled) })
                .where(eq(PageSections.id, Number(id)));
        } else if (type !== undefined) {
            await db.update(PageSections)
                .set({ isEnabled: Boolean(isEnabled) })
                .where(eq(PageSections.type, type));
        } else {
            return new Response(JSON.stringify({ error: "Debe proveer 'id' o 'type'" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ success: true, message: "Estado de la sección actualizado" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        console.error("Error al alternar estado de sección:", e);
        return new Response(JSON.stringify({ error: "Error interno del servidor", details: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
