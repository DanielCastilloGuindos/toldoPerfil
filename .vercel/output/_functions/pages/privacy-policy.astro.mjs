/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { a as $$Layout } from '../chunks/Layout_CxQaALMe.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Pol\xEDtica de privacidad de Toldo Perfil", "title": "Toldo Perfil - Pol\xEDtica de privacidad" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/privacy-policy.astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PrivacyPolicy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
