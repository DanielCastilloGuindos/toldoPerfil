import { db } from "@/db/client";
import { Customers } from "@/db/schema";
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
	try {
		const { title, description, category, images, isVisible = true } = await request.json();

		if (!title || !category || !images) {
			return new Response(JSON.stringify({ error: 'Titulo, categoria e imagenes son requeridas' }));
		}

		await db.insert(Customers).values({
			title: title,
			description: description,
			category: category,
			images: images
		});
	} catch (e) {
		return new Response(`No se puede insertar \n\n${e}`, { status: 400 });
		return new Response('Se ha producido un error inesperado', { status: 500 });
	}
	return new Response(JSON.stringify({ msg: 'Everything is correct' }))
}