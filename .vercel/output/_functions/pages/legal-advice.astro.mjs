/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { a as $$Layout } from '../chunks/Layout_DViE92D5.mjs';
export { renderers } from '../renderers.mjs';

const $$LegalAdvice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Aviso Legal de Toldo Perfil", "title": "Toldo Perfil - Aviso Legal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/legal-advice.astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/legal-advice.astro";
const $$url = "/legal-advice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LegalAdvice,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
