export const prerender = false;

import { db } from "@/db/client";
import { PageSections } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { ids, types } = body;

        if (ids && Array.isArray(ids)) {
            // Actualizar el campo order para cada ID de sección recibido (reordenación detallada)
            for (let i = 0; i < ids.length; i++) {
                const sectionId = Number(ids[i]);
                await db.update(PageSections)
                    .set({ order: i + 1 })
                    .where(eq(PageSections.id, sectionId));
            }
        } else if (types && Array.isArray(types)) {
            // Actualizar el orden por tipo de sección (reordenación global de la página)
            let currentOrder = 1;
            for (const type of types) {
                // Obtener todas las secciones de este tipo
                const sections = await db.select().from(PageSections).where(eq(PageSections.type, type));
                for (const section of sections) {
                    await db.update(PageSections)
                        .set({ order: currentOrder })
                        .where(eq(PageSections.id, section.id));
                    currentOrder++;
                }
            }
        } else {
            return new Response(JSON.stringify({ error: "El cuerpo debe contener un array 'ids' o 'types'" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ success: true, message: "Orden actualizado correctamente" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        console.error("Error al reordenar secciones:", e);
        return new Response(JSON.stringify({ error: "Error interno del servidor", details: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
