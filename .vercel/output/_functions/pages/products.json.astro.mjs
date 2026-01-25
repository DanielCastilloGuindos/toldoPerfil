import { d as db, C as Customers } from '../chunks/_astro_db_ChF5lYrH.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const products = await db.select().from(Customers);
  return new Response(
    JSON.stringify(products),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
