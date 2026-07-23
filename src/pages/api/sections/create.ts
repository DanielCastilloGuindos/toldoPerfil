export const prerender = false;

import { db } from "@/db/client";
import { PageSections } from "@/db/schema";
import { sql } from "drizzle-orm";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { type } = body;

        const allowedTypes = ["flexible", "gallery", "faq_block", "form", "carousel_slide", "faq"];
        if (!type || !allowedTypes.includes(type)) {
            return new Response(JSON.stringify({ error: "Tipo de componente inválido" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Get max order to place it at the end
        const maxOrderResult = await db.select({ maxOrder: sql<number>`max(${PageSections.order})` }).from(PageSections);
        const nextOrder = (maxOrderResult[0]?.maxOrder || 0) + 1;

        let insertData: any = {};
        const timestamp = Date.now();
        let finalType = type;

        if (type === "flexible") {
            finalType = `flexible_${timestamp}`;
            insertData = {
                title: "Nueva Sección Personalizada",
                heading: "Descripción o subtítulo de la sección.",
                text: "### Título en Markdown\n\nEscribe aquí el contenido principal de tu nueva sección flexible. Puedes usar **negrita**, *cursiva*, listas y más.",
                image: "",
                checklist: [],
                button: null,
                faqs: [],
                stats: [],
                desktopLayout: "right-left",
                mobileLayout: "stacked"
            };
        } else if (type === "gallery") {
            finalType = `gallery_${timestamp}`;
            insertData = {
                title: "Galería de Trabajos",
                heading: "Algunos de nuestros proyectos más destacados",
                category: "enterprise", // 'enterprise' o 'privateCustomer'
                linkText: "Ver Todos los Proyectos",
                linkHref: "/proyectos/empresas"
            };
        } else if (type === "faq_block") {
            finalType = `faq_block_${timestamp}`;
            insertData = {
                title: "Preguntas Frecuentes",
                heading: "Resolvemos tus dudas principales"
            };
        } else if (type === "form") {
            finalType = `form_${timestamp}`;
            insertData = {
                title: "Solicita tu Presupuesto Gratis",
                heading: "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible"
            };
        } else if (type === "carousel_slide") {
            insertData = {
                title: "Nueva Diapositiva",
                subtitle: "Subtítulo de la diapositiva",
                alt: "Alt de la imagen",
                cloudinaryUrl: "",
                localFallback: "/img/placeholder.webp",
                cta: null
            };
        } else if (type === "faq") {
            insertData = {
                question: "Nueva Pregunta",
                answer: "Respuesta de ejemplo."
            };
        }

        const result = await db.insert(PageSections).values({
            type: finalType,
            order: nextOrder,
            isEnabled: true,
            data: insertData
        }).returning({ insertedId: PageSections.id });

        const insertedId = result[0]?.insertedId;

        return new Response(JSON.stringify({ success: true, id: insertedId, type: finalType }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        console.error("Error al crear sección:", e);
        return new Response(JSON.stringify({ error: "Error interno del servidor", details: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
