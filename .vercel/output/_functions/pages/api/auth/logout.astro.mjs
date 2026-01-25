export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies, redirect }) => {
  cookies.delete("admin_session", { path: "/" });
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
