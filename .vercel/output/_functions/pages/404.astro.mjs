/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$Typography, a as $$Layout } from '../chunks/Layout_DViE92D5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://toldoperfil.es");
const $$Action = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Action;
  const { as: Tag, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "inline-block skew-x-[-21deg] cursor-pointer border-2 border-primary",
    "font-semibold uppercase",
    "px-5 py-2.5",
    "before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-primary",
    "hover:scale-110 hover:text-secondary hover:before:origin-left hover:before:scale-x-100",
    "aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111]",
    "ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out",
    className
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="inline-block skew-x-[21deg]">${renderSlot($$result2, $$slots["default"])}</span> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/Action.astro", void 0);

const $$Astro = createAstro("https://toldoperfil.es");
const $$Error = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  const { error, message, contextMessage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto flex w-full flex-wrap place-items-center items-center justify-center text-indigo-950"> <div class="m-5 mt-16 text-center"> ${renderComponent($$result, "Typography", $$Typography, { "as": "h1", "variant": "atomic-title", "color": "primary", "class:list": "mb-10 font-bold" }, { "default": ($$result2) => renderTemplate`
error ${error}` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "h2", "variant": "h2" }, { "default": ($$result2) => renderTemplate` <p>${message}</p> ` })} <p class="mt-5 max-w-80 text-xl">${contextMessage}</p> ${renderComponent($$result, "Action", $$Action, { "class": "mt-7 text-center", "href": "/", "aria-label": "volver a la p\xE1gina principal", "as": "a" }, { "default": ($$result2) => renderTemplate`
Ir al inicio
` })} </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Error.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Toldo Perfil: Especialistas en toldos personalizados de alta calidad. Desde toldos retr\xE1ctiles para terrazas hasta p\xE9rgolas elegantes para jardines, ofrecemos soluciones adaptadas a tus necesidades. \xA1Transforma tu espacio al aire libre con estilo y protecci\xF3n con Toldo Perfil!", "title": "Toldo Perfil - P\xE1gina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Error", $$Error, { "error": "404", "message": "P\xE1gina no encontrada", "contextMessage": "\xA1Hola! Lo sentimos, pero no pudimos encontrar lo que buscabas. Verifica que la direcci\xF3n URL sea correcta." })} </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/404.astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
