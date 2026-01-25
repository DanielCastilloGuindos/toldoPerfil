export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const username = data.get("username")?.toString();
  const password = data.get("password")?.toString();
  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "!toldoPERFIL2024";
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    cookies.set("admin_session", "authenticated", {
      path: "/",
      httpOnly: true,
      // Not accessible via client-side JS
      secure: true,
      // Only secure in production
      sameSite: "strict",
      maxAge: 60 * 60 * 24
      // 1 day
    });
    return redirect("/admin");
  }
  return new Response("Unauthorized", { status: 401 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
