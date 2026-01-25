import { d as db, C as Customers } from '../../../chunks/_astro_db_ChF5lYrH.mjs';
import { isDbError } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params, request }) => {
  try {
    const { title, description, category, images, isVisible = true } = await request.json();
    if (!title || !category || !images) {
      return new Response(JSON.stringify({ error: "Titulo, categoria e imagenes son requeridas" }));
    }
    await db.insert(Customers).values({
      title,
      description,
      category,
      images
    });
  } catch (e) {
    if (isDbError(e)) {
      return new Response(`No se puede insertar 

${e.message}`, { status: 400 });
    }
    return new Response("Se ha producido un error inesperado", { status: 500 });
  }
  return new Response(JSON.stringify({ msg: "Everything is correct" }));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
