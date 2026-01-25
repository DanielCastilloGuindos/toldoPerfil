import { c as createAstro, a as createComponent, e as addAttribute, g as renderTransition, r as renderComponent, h as renderHead, d as renderSlot, b as renderTemplate } from './astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$SEO, a as $$ClientRouter } from './SEO_CiMFjyN4.mjs';
/* empty css                           */
/* empty css                         */

const $$Astro = createAstro("https://toldoperfil.es");
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title, description, preload, image, canonical = "https://toldoperfil.es" } = Astro2.props;
  return renderTemplate`<html lang="es"${addAttribute(renderTransition($$result, "qv4eas5o", "none", ""), "data-astro-transition-scope")}> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(renderTransition($$result, "ay2yikdr", "", "body"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/layouts/AdminLayout.astro", "self");

export { $$AdminLayout as $ };
