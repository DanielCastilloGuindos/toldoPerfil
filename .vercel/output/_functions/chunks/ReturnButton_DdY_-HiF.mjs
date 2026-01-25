import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_ZnJZev0u.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://toldoperfil.es");
const $$ReturnButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReturnButton;
  const { href = "/", label = "Enlace a la pagina principal de Toldo Perfil" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(label, "aria-label")} class="absolute top-1/2 right-6 sm:right-16 -translate-y-1/2 w-6 sm:w-12 h-6 sm:h-12 border-2 border-white hover:border-indigo-500 -rotate-45 hover:rotate-45 transition-all rounded-full group"> <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-indigo-500 transition-all"></span> <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[.1rem] bg-white group-hover:bg-indigo-500 rotate-90 transition-all" < span></span></a>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/clients/ReturnButton.astro", void 0);

export { $$ReturnButton as $ };
