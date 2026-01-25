import { d as db, A as Analytics } from '../../../chunks/_astro_db_Cb5B9jDV.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { type, data } = await request.json();
    if (!type) {
      return new Response("Missing type", { status: 400 });
    }
    await db.insert(Analytics).values({
      type,
      data,
      created_at: /* @__PURE__ */ new Date()
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("Analytics Error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
