import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderScript, b as renderTemplate, i as createTransitionScope, r as renderComponent, F as Fragment, d as renderSlot, s as spreadAttributes, g as renderTransition, h as renderHead } from './astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$SEO, a as $$ClientRouter } from './SEO_CiMFjyN4.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_BP655fp3.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro$7 = createAstro("https://toldoperfil.es");
const $$HamburgerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HamburgerButton;
  return renderTemplate`${maybeRenderHead()}<button id="HamburgerButton" aria-label="Boton del menu desplegable de la cabecera" type="button"${addAttribute(["group relative w-10 h-10 block sm:hidden focus:outline-none bg-red-700-button z-10", Astro2.props.class], "class:list")}> <span class="absolute top-[35%] left-2/4 -translate-x-2/4 translate-y-2/4 block w-6 h-[2.5px] bg-indigo-900 rounded-sm group-[.open]:animate-topbarx"></span> <span class="absolute top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4 block w-6 h-[2.5px] bg-indigo-900 rounded-sm group-[.open]:animate-middlebarx"></span> <span class="absolute top-[65%] left-2/4 -translate-x-2/4 translate-y-2/4 block w-6 h-[2.5px] bg-indigo-900 rounded-sm group-[.open]:animate-bottombarx"></span> </button> ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/HamburgerButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/HamburgerButton.astro", void 0);

const $$Astro$6 = createAstro("https://toldoperfil.es");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const pages = [
    { name: "Nosotros ", href: "#about-us" },
    { name: "Marcas y Franquiciados", href: "#brandsAndFranchises" },
    { name: "Comunidades", href: "#communities" },
    { name: "Particulares", href: "#privatecustomers" },
    { name: "FAQ", href: "#faq" },
    {
      name: "Tu presupuesto",
      href: "#contact-us",
      buttonStyles: true,
      disabled: false
    }
  ].map((page) => ({
    ...page,
    active: Astro2.url.pathname === page.href
  }));
  const { isVisibleNav } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="menu" class="group py-2 px-4 sm:py-5 sm:px-8 flex justify-between items-center align-middle font-bold leading-tight text-sx font-sans sticky top-0 left-0 z-20 bg-white border-0 border-b"${addAttribute(createTransitionScope($$result, "kcdzbpm2"), "data-astro-transition-persist")}> <a href="/" class="py-3 text-lg sm:text-base z-10" aria-label="Enlace a la página principal de Toldo Perfil"> <span class="hidden" aria-hidden="true">Toldo Perfil</span> ${renderComponent($$result, "Image", $$Image, { "src": "/img/logo.png", "alt": "Logo de ToldoPerfil", "width": "128", "height": "100" })} </a> <nav${addAttribute([
    "inset-0 sm:relative hidden sm:flex flex-col sm:flex-row justify-center items-center gap-6 text-[14px] bg-white sm:bg-transparent group-[.open]:fixed group-[.open]:sm:relative group-[.open]:flex z-10",
    {
      "hidden sm:hidden group-[.open]:hidden": !isVisibleNav
    }
  ], "class:list")}> ${pages.map(({ disabled, name, href, active, buttonStyles }, key) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(href, "href")}${addAttribute(`Enlace a la secci\xF3n "${name}"`, "aria-label")}${addAttribute([
    "py-3 px-5 opacity-0 sm:opacity-100 [transition-property: opacity] sm:[transition-property: translate] duration-1000 sm:duration-200 ease-linear group-[.open]:opacity-100 delay-1000 sm:delay-0  sm:hover:-translate-y-0.5",
    { button: buttonStyles },
    { "pointer-events-none": disabled },
    { "current-page": active }
  ], "class:list")}${addAttribute(`nav-link-${key}`, "id")}> ${name} </a> ` })}`)} </nav> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "class:list": [
    {
      "hidden sm:hidden group-[.open]:hidden": !isVisibleNav
    }
  ] })} </header>  ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Header.astro", "self");

const $$Astro$5 = createAstro("https://toldoperfil.es");
const $$Typography = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Typography;
  const { as: Tag, class: className, variant, color, ...props } = Astro2.props;
  const variantClasses = {
    "h2": "text-lg font-medium uppercase lg:text-2xl",
    "h3": "text-2xl font-semibold uppercase",
    "atomic-title": "text-5xl font-atomic",
    "boxer-title": "text-6xl md:text-8xl font-atomic",
    "body": "text-xl",
    "medium": "text-md",
    "big": "text-6xl uppercase",
    "bigger": "text-4xl sm:text-5xl md:text-7xl uppercase"
  };
  const colorClasses = {
    white: "text-white",
    black: "text-black",
    primary: "text-accent",
    neutral: "text-neutral-300"
  };
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    className
  ];
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/Typography.astro", void 0);

const $$Astro$4 = createAstro("https://toldoperfil.es");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="40" viewBox="0 0 35 32"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de X"> <g id="surface1"> <path fill="currentColor" style=" stroke:none;fill-rule:nonzero;fill:currentColor;fill-opacity:1;" d="M 27.535156 0 L 32.898438 0 L 21.117188 13.578125 L 34.882812 32 L 24.078125 32 L 15.621094 20.804688 L 5.9375 32 L 0.570312 32 L 13.054688 17.476562 L -0.128906 0 L 10.941406 0 L 18.585938 10.226562 Z M 25.65625 28.8125 L 28.628906 28.8125 L 9.378906 3.070312 L 6.183594 3.070312 Z M 25.65625 28.8125 "></path> </g> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/x.astro", void 0);

const $$Astro$3 = createAstro("https://toldoperfil.es");
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de WhatsApp"> <path fill="currentColor" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/whatsapp.astro", void 0);

const $$Astro$2 = createAstro("https://toldoperfil.es");
const $$SocialButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialButtons;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`${Astro2.props.class}`, "class:list")}> <ul class="flex flex-row items-center gap-x-6" aria-label="Redes sociales"> <!-- <li>
			<a
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram de Toldo Perfil, se abrirá en una nueva pestaña"
				href="https://www.instagram.com/toldoperfil"
				class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"
			>
				<InstagramIcon
					class="text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0"
				/>
			</a>
		</li> --> <li> <a target="_blank" rel="noopener noreferer" aria-label="WhatsApp de Toldo Perfil, se abrirá en una nueva pestaña" href="https://wa.me/+34628404370" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "WhatsappIcon", $$Whatsapp, { "class": "text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0" })} </a> </li> <li> <a target="_blank" rel="noopener noreferrer" aria-label="X de Toldo Perfil, se abrirá en una nueva pestaña" href="https://x.com/toldoperfil" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "XIcon", $$X, { "class": "text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0" })} </a> </li> <!-- <li>
			<a
				target="_blank"
				rel="noopener noreferer"
				aria-label="TikTok de Toldo Perfil, se abrirá en una nueva pestaña"
				href="https://tiktok.com/toldoperfil"
				class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"
			>
				<TiktokIcon class="text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0" />
			</a>
		</li> --> </ul> </nav>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/SocialButtons.astro", void 0);

const $$Astro$1 = createAstro("https://toldoperfil.es");
const $$Lock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Lock;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/lock.astro", void 0);

const $$FooterContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col justify-center items-center"> <div class="w-full px-20 grid sm:grid-cols-3 md:grid-cols-5 gap-y-7"> <div class="w-60"> <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
Enlaces
</h2> <ul class="text-gray-500 dark:text-gray-400 leading-3"> <li class="mb-4"> <a href="#brandsAndFranchises" class="hover:underline" aria-label="Enlace a la sección &quot;Productos&quot;">Productos</a> </li> <li class="mb-4"> <a href="#services" class="hover:underline" aria-label="Enlace a la sección &quot;Servicios&quot;">Servicios</a> </li> <li class="mb-4"> <a href="#about-us" class="hover:underline" aria-label="Enlace a la sección &quot;Nosotros&quot;">Nosotros</a> </li> <li class="mb-4"> <a href="#get-a-quote" class="hover:underline" aria-label="Enlace a la sección &quot;Tu prespuesto&quot;">Tu prespuesto</a> </li> </ul> </div> <div class="w-60"> <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
Legal
</h2> <ul class="text-gray-500 dark:text-gray-400 leading-3"> <li class="mb-4"> <a href="/privacy-policy" class="hover:underline" aria-label="Enlace a la página &quot;Política de privacidad&quot;">Política de privacidad</a> </li> <li class="mb-4"> <a href="/legal-advice" class="hover:underline" aria-label="Enlace a la sección &quot;Aviso Legal&quot;">Aviso Legal</a> </li> </ul> </div> </div> <hr class="my-12 h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center block" aria-hidden="true"> <div class="w-full px-20 flex justify-between flex-col sm:flex-row gap-y-4 items-center text-gray-500 sm:text-center dark:text-gray-400"> ${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "body", "color": "neutral", "class:list": "text-center text-sm" }, { "default": ($$result2) => renderTemplate`
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}
Toldo Perfil
<span aria-hidden="true" class="hidden md:inline">| </span> <br aria-hidden="true" class="block md:hidden">
Todos los derechos reservados.
<a href="/admin" aria-label="Area privada" class="inline-block ml-2 opacity-30 hover:opacity-100 transition-opacity duration-300 align-middle"> ${renderComponent($$result2, "Lock", $$Lock, { "class": "w-4 h-4" })} </a> ` })} ${renderComponent($$result, "SocialButtons", $$SocialButtons, {})} </div> </div>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/FooterContent.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-auto mb-0 flex w-full flex-col place-items-center bg-neutral-800 py-14 md:justify-between md:pt-16"> ${renderComponent($$result, "FooterContent", $$FooterContent, {})} </footer>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Footer.astro", void 0);

const $$Astro = createAstro("https://toldoperfil.es");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    preload,
    image,
    canonical = "https://toldoperfil.es"
  } = Astro2.props;
  return renderTemplate`<html lang="es"${addAttribute(renderTransition($$result, "smooz4hq", "none", ""), "data-astro-transition-scope")}> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(renderTransition($$result, "yxpohs6f", "", "body"), "data-astro-transition-scope")}> ${renderComponent($$result, "Header", $$Header, { "isVisibleNav": Astro2.props.isVisibleNav || false })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/layouts/Layout.astro", "self");

export { $$Typography as $, $$Layout as a, $$SocialButtons as b };
