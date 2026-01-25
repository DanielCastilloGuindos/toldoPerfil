import { d as db, C as Customers } from '../../../chunks/_astro_db_ChF5lYrH.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
