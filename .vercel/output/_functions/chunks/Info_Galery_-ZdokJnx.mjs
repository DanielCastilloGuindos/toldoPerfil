import { c as createAstro, a as createComponent, e as addAttribute, g as renderTransition, r as renderComponent, h as renderHead, d as renderSlot, b as renderTemplate, m as maybeRenderHead } from './astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$SEO, a as $$ClientRouter } from './SEO_Bg2-mHPw.mjs';
/* empty css                              */
/* empty css                         */
import 'clsx';

const $$Astro$4 = createAstro("https://toldoperfil.es");
const $$ClientLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientLayout;
  const { title, description, preload, image, canonical = "https://toldoperfil.es" } = Astro2.props;
  return renderTemplate`<html lang="es"${addAttribute(renderTransition($$result, "ovtukfie", "none", ""), "data-astro-transition-scope")}> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(renderTransition($$result, "6ezvso5i", "", "body"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/layouts/ClientLayout.astro", "self");

const $$Astro$3 = createAstro("https://toldoperfil.es");
const $$ReturnButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ReturnButton;
  const { href = "/", label = "Enlace a la pagina principal de Toldo Perfil" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(label, "aria-label")} class="absolute top-1/2 right-6 sm:right-16 -translate-y-1/2 w-6 sm:w-12 h-6 sm:h-12 border-2 border-white hover:border-indigo-500 -rotate-45 hover:rotate-45 transition-all rounded-full group"> <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-indigo-500 transition-all"></span> <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-indigo-500 rotate-90 transition-all" < span></span></a>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/clients/ReturnButton.astro", void 0);

const $$Astro$2 = createAstro("https://toldoperfil.es");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, transitionName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="sticky inset-0 bg-indigo-950 flex justify-center items-center sm:h-32 z-10"> <h1 class="py-4 text-[1.65rem] leading-9 tracking-wider font-bold uppercase"${addAttribute(renderTransition($$result, "ueagcmjv", "", transitionName), "data-astro-transition-scope")}> ${title} </h1> ${renderComponent($$result, "ReturnButton", $$ReturnButton, {})} </header>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/clients/Header.astro", "self");

const $$Astro$1 = createAstro("https://toldoperfil.es");
const $$Galery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Galery;
  const { path, alt, images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute([
    "py-4 grid grid-cols-1  gap-2 sm:gap-6 px-2 sm:px-0 w-full sm:max-w-6xl",
    { "sm:grid-cols-2": images.length > 1 }
  ], "class:list")}> ${images.map((image) => {
    return renderTemplate`<img class="relative object-cover aspect-[1.82/1] overflow-hidden rounded-lg hover:-translate-y-0.5 sm:[transition-property: translate] duration-1000 sm:duration-200 ease-linear scroll-effect"${addAttribute(alt, "alt")}${addAttribute(path + image, "src")}${addAttribute(renderTransition($$result, "jbmi47fn", "", "image_" + image), "data-astro-transition-scope")}>`;
  })} </aside>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/clients/Galery.astro", "self");

const $$Astro = createAstro("https://toldoperfil.es");
const $$InfoGalery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoGalery;
  const { data, path = `/img/works/${data.id}/` } = Astro2.props;
  const { id, title, description, images } = data;
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-auto"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-start w-full md:max-w-5xl mx-auto"> ${renderComponent($$result, "Galery", $$Galery, { "alt": `Imagen de ${title}`, "path": path, "images": images })} <article> <p class="sm:pt-4 px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center sm:text-justify tracking-wider">Descubre nuestra amplia variedad de toldos diseñados para satisfacer las necesidades de nuestros clientes. Desde elegantes toldos retráctiles hasta robustas estructuras fijas, nuestra galería de imágenes presenta nuestras instalaciones en diversos entornos, garantizando calidad y estilo para cualquier espacio.</p> </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/clients/Info&Galery.astro", void 0);

export { $$ClientLayout as $, $$Header as a, $$InfoGalery as b };
