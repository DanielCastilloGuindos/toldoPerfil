import { d as db, C as Customers } from '../../../chunks/_astro_db_Cb5B9jDV.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params, request }) => {
  const customers = await db.select().from(Customers);
  return new Response(JSON.stringify(customers));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
