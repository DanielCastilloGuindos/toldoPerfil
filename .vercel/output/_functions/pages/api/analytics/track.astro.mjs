import { d as db, A as Analytics } from '../../../chunks/_astro_db_Cb5B9jDV.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { type, data } = await request.json();
    if (!type) {
      return new Response("Missing type", { status: 400 });
    }
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown";
    const city = request.headers.get("x-vercel-ip-city") || "Unknown";
    const country = request.headers.get("x-vercel-ip-country") || "Unknown";
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const device = isMobile ? "Mobile" : "Desktop";
    await db.insert(Analytics).values({
      type,
      data: {
        ...data,
        // Preserve existing data (like referrer, page path)
        ip,
        city,
        country,
        userAgent,
        device
      },
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
