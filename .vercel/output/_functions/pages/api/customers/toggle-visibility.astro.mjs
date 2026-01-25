import { d as db, C as Customers } from '../../../chunks/_astro_db_Cb5B9jDV.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const id = formData.get("id");
  if (!id) {
    return new Response("ID requerido", { status: 400 });
  }
  try {
    const customer = await db.select().from(Customers).where(eq(Customers.customer_id, Number(id))).get();
    if (!customer) {
      return new Response("Cliente no encontrado", { status: 404 });
    }
    await db.update(Customers).set({ isVisible: !customer.isVisible }).where(eq(Customers.customer_id, Number(id)));
    return redirect("/admin");
  } catch (e) {
    console.error("Error toggling visibility:", e);
    return new Response("Error del servidor", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
