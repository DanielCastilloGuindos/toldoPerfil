/* empty css                                   */
import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as createAstro, e as addAttribute, g as renderTransition, f as renderScript } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { b as $$SocialButtons, a as $$Layout } from '../chunks/Layout_Cs968HcG.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import 'clsx';
/* empty css                                 */
import { d as db, C as Customers } from '../chunks/_astro_db_Cb5B9jDV.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import { $ as $$Image } from '../chunks/_astro_assets_BP655fp3.mjs';
import { F as FAQs } from '../chunks/SEO_CiMFjyN4.mjs';
export { renderers } from '../renderers.mjs';

const CarouselSlide = ({ title, description, image, content, isActive = false }) => {
  let myOpacity = isActive ? "opacity-100" : "opacity-0";
  return /* @__PURE__ */ jsxs("figure", { className: `relative w-full h-full float-left -mr-[100%] !transform-none ${myOpacity} transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-full h-full max-h-screen object-cover aspect-[4:3]",
        src: image,
        alt: `Imagen de ${title}`,
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ jsx("figcaption", { className: "absolute inset-0 w-full h-full flex flex-col sm:gap-4 justify-center items-center bg-gray-900 bg-opacity-50 text-center sm:text-start sm:px-16", children: content })
  ] });
};

const Carousel = ({ intervalTime = 8e3 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  let intervalRef = useRef(null);
  const slides = [
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Bienvenido a ",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "ToldoPerfil" })
      ] }),
      description: "Su solución para toldos de alta calidad",
      image: "/img/carousel/protrait01.webp",
      content: /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center sm:items-start gap-4 px-4", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-5xl text-white font-bold", children: [
          "Bienvenido a ",
          /* @__PURE__ */ jsx("br", { "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: " font-extrabold", children: "ToldoPerfil" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] sm:text-xl font-light text-center tracking-wider text-white", children: "Su solución para toldos de alta calidad." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact-us",
            "aria-label": 'Enlace a la sección "Contactanos"',
            className: "py-3 px-5 bg-indigo-50 font-bold [transition-property: translate] duration-200 ease-linear delay-0 hover:-translate-y-0.5 secondary-button z-10",
            children: "Obtén tu presupuesto"
          }
        )
      ] })
    },
    {
      title: "Title 2",
      description: "Description 2",
      image: "/img/carousel/protrait02.webp",
      content: /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center gap-4 px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl text-white font-bold", children: "Soluciones para todos" }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] sm:text-xl font-light text-center tracking-wider text-white", children: "Desde primeras marcas como particulares" })
      ] })
    },
    {
      title: "Title 3",
      description: "Description 3",
      image: "/img/carousel/protrait03.webp",
      content: /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center gap-4 py-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl text-white font-bold", children: "Amplia gama de productos" }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] sm:text-xl font-light text-center tracking-wider text-white", children: "Las mejores calidades a tu servicio" })
      ] })
    },
    {
      title: "Title 4",
      description: "Description 4",
      image: "/img/carousel/protrait04.webp",
      content: /* @__PURE__ */ jsx("div", { className: "w-full h-full flex flex-col justify-center items-center gap-4 py-4", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-5xl text-white font-bold", children: "Obtén el control de tu día" }) })
    }
  ];
  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    resetTimer();
  };
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    resetTimer();
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleNextSlide, 3e3);
  };
  useEffect(() => {
    intervalRef.current = setInterval(handleNextSlide, 3e3);
    return () => clearInterval(intervalRef.current);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "h-fit", children: slides.map(({ title, description, image, content }, index) => {
      let isActive = index === activeSlide;
      return /* @__PURE__ */ jsx(
        CarouselSlide,
        {
          title,
          description,
          image,
          isActive,
          content
        },
        image + title
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full grid grid-flow-col", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "arrowLeft",
          "aria-label": "Flecha izquierda",
          onClick: handlePrevSlide,
          className: "cursor-[url(/img/carousel/arrow-left.png),_pointer] text-transparent",
          children: "arrowLeft"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "arrowRigth",
          "aria-label": "Flecha derecha",
          onClick: handleNextSlide,
          className: "cursor-[url(/img/carousel/arrow-right.png),_pointer] text-transparent",
          children: "arrowRigth"
        }
      )
    ] })
  ] });
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full overflow-hidden"> ${renderComponent($$result, "Carousel", Carousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Carousel.jsx", "client:component-export": "Carousel" })} </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Hero.astro", void 0);

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-us" class="flex justify-center items-center w-full p-0 md:p-16 md:pt-0 bg-transparent text-gray-900"> <div class="w-full md:max-w-4xl flex-row justify-center items-center"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl text-indigo-950 font-bold">Sobre Nosotros</h3> <h4 class="text-sm text-gray-600 max-w-xs text-center">
Pasión por la calidad y el servicio.
</h4> </header> <article class="w-full flex flex-col gap-4 md:max-w-4xl py-4"> <p class="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider"> <strong class="font-bold">TOLDOPERFIL</strong>, fue creada como marca de JCDESIGN ROTULOS, en 2014 para la fabricación de Toldos, Pérgolas, Capotas, Terrazas, Balaustradas de cristal para escaleras, piscinas y cerramientos.
</p> <p class="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider">
Nuestros clientes querían aprovechar desplazamientos y mano de obra de los programas de imagen corporativa que llevábamos a cabo a nivel nacional. Nos brindaron la oportunidad de establecer otra línea de negocio.
</p> <p class="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider">
Este fue el inicio y punto de partida para la fabricación y montaje de toldos.
</p> <p class="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider">
Después de 10 años, TOLDOPERFIL, es lider en la industria de toldos, se distingue por su compromiso con la excelencia y la satisfacción del cliente.
</p> <p class="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider">
Nuestro equipo es experto en proporcionar soluciones, desde la selección de materiales hasta la instalación.
</p> <p class="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider">
Unete a nuestra familia y transforma tu espacio exterior con estilo y funcionalidad incomparables.
</p> </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Info.astro", void 0);

const $$Astro$1 = createAstro("https://toldoperfil.es");
const $$ProductCardDB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductCardDB;
  const { id, title, description, image = "/img/example.jpg", linked = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group"${addAttribute(`/productsDB/${id}`, "href")}${addAttribute(`Enlace para ver los toldos montados para ${title}`, "aria-label")}> <figure class="relative overflow-hidden rounded-lg hover:-translate-y-0.5 sm:[transition-property: translate] duration-1000 sm:duration-200 ease-linear scroll-effect"> <img class="w-full object-cover aspect-[1.82/1]"${addAttribute(`Imagen de ${title}`, "alt")}${addAttribute(image, "src")} loading="lazy"${addAttribute(renderTransition($$result, "kyzh43ip", "", "image_" + image), "data-astro-transition-scope")}> <figcaption class="absolute top-0 left-0 py-10 px-8 w-full h-full flex flex-col justify-center sm:justify-start items-center sm:items-start bg-indigo-950 bg-opacity-50 sm:bg-opacity-0 sm:group-hover:bg-opacity-50 text-white text-center sm:text-left transition-all duration-500 group-hover:duration-200 delay-500 group-hover:delay-0 leading-[4rem]"> <h5 class="text-[1.65rem] leading-9 tracking-wider font-bold uppercase opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"${addAttribute(renderTransition($$result, "npemx7e4", "slide", "title_" + id), "data-astro-transition-scope")}> ${title} </h5> <span class="text-[0.95rem] font-[Helvetica] tracking-wider opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"> ${description} </span> </figcaption> </figure> </a>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/ProductCardDB.astro", "self");

const $$BrandsAndFranchises = createComponent(async ($$result, $$props, $$slots) => {
  const customersQuery = await db.select().from(Customers).where(eq(Customers.category, "enterprise"));
  return renderTemplate`${maybeRenderHead()}<section id="brandsAndFranchises" class="flex flex-col justify-center items-center w-full p-0 md:p-16 md:pt-0 bg-neutral-800 text-white"> <div class="w-full md:max-w-5xl"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl font-bold text-center">
Primeras Marcas y Franquicias
</h3> <h4 class="text-sm text-gray-100 max-w-xs text-center">
Trabajamos con primeras marcas a nivel nacional para cadenas
				hoteleras,restaurantes, ópticas, automoción, bancos, etc
</h4> </header> <article class="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 px-2 sm:px-0 w-full sm:max-w-6xl"> ${customersQuery.map(
    ({
      customer_id,
      title,
      description,
      images,
      isVisible
    }) => {
      if (!isVisible) return;
      let protrairPath = images[0];
      return renderTemplate`${renderComponent($$result, "ProductCardDB", $$ProductCardDB, { "id": customer_id, "title": title, "description": "Haz click para ver m\xE1s detalles", "image": protrairPath, "key": "d" + customer_id })}`;
    }
  )} </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/BrandsAndFranchises.astro", void 0);

const $$Communities = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="communities" class="flex flex-col justify-center items-center w-full p-0 md:p-16 bg-[url(/img/carousel/protrait02.webp)] bg-no-repeat bg-cover bg-center bg-fixed backdrop-contrast-150 before:w-full before:h-full before:bg-gradient-center before:bg-center before:bg-2em before:absolute before:top-0 before:left-0 before:-z-10 text-white"> <div class="w-full md:max-w-5xl"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl font-bold text-center">Comunidades</h3> <h4 class="text-sm text-gray-100 max-w-xs text-center">
Realizamos presupuestos a comunidades o a constructoras para nueva obra
</h4> </header> <article class="py-4 flex justify-center items-center px-2 sm:px-0 w-full sm:max-w-6xl"> <a href="#contact-us"${addAttribute(`Enlace a la secci\xF3n "Contactanos"`, "aria-label")} class="py-3 px-5 bg-indigo-50 font-bold [transition-property: translate] duration-200 ease-linear delay-0 hover:-translate-y-0.5 secondary-button">
Obtén tu presupuesto
</a> </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Communities.astro", void 0);

const $$PrivateCustomers = createComponent(async ($$result, $$props, $$slots) => {
  const customersQuery = await db.select().from(Customers).where(eq(Customers.category, "privateCustomer"));
  return renderTemplate`${maybeRenderHead()}<section id="privatecustomers" class="flex flex-col justify-center items-center w-full p-0 md:p-16 md:pt-0 bg-neutral-800 text-white"> <div class="w-full md:max-w-5xl"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl font-bold text-center">Particulares</h3> <h4 class="text-sm text-gray-100 max-w-xs text-center">
Asesoramos a nuestros clientes el tipo de toldo que le conviene
				en cada caso
</h4> </header> <article class="py-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 px-2 sm:px-0 w-full sm:max-w-6xl"> ${customersQuery.map(
    ({
      customer_id,
      title,
      description,
      images,
      isVisible
    }) => {
      if (!isVisible) return;
      let protrairPath = images[0];
      return renderTemplate`${renderComponent($$result, "ProductCardDB", $$ProductCardDB, { "id": customer_id, "title": title, "description": "Haz click para ver m\xE1s detalles", "image": protrairPath, "key": "db" + customer_id })}`;
    }
  )} </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/PrivateCustomers.astro", void 0);

const $$Astro = createAstro("https://toldoperfil.es");
const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Icono check"> <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/check.astro", void 0);

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const list = [
    "Sustituci\xF3n de lonas en mal estado de tu toldo",
    "Rotulaci\xF3n de faldones de toldos para tiendas, comercios, franquicias etc..",
    "Incorporaci\xF3n de iluminaci\xF3n de tecnolog\xEDa led en los toldos",
    "Faldones con logotipos luminosos",
    "Pergolas BIOCLIMATICAS",
    "Pergolas con paliller\xEDa y lona acr\xEDlica",
    "Cerramientos y Terrazas para Hosteler\xEDa",
    "Balaustradas de cristal para escaleras y separaci\xF3n de piscinas"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="flex flex-col justify-center items-center w-full p-0 md:p-16 md:pt-0 bg-transparent text-gray-900"> <div class="w-full md:max-w-4xl"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl text-indigo-950 font-bold">Amplia Gama de Productos</h3> <h4 class="text-sm text-gray-600 max-w-xs text-center"></h4> </header> <article class="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-6 "> <ul class="list-nonex"> ${list.map((item) => renderTemplate`<li class="flex justify-start items-center gap-2 px-4 py-2"> ${renderComponent($$result, "CheckIcon", $$Check, { "class": "text-indigo-900" })} <p class="text-sm flex-1">${item}</p> </li>`)} </ul> ${renderComponent($$result, "Image", $$Image, { "src": "/img/products/products.webp", "alt": "Dibujo de un toldo", "width": "512", "height": "512" })} </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Products.astro", void 0);

const $$FAQComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${FAQs.map(({ answer, question }, index) => {
    const open = index === 0 && "open";
    return renderTemplate`${maybeRenderHead()}<details class="py-2 group"${addAttribute(open, "open")}><summary class="list-none px-4 py-6 text-indigo-900 text-xl font-semibold cursor-pointer border-b group inline-flex justify-between w-full">${question}<div class="relative w-6 h-6 inline-flex items-center justify-center"><span class="absolute w-5 h-1 bg-indigo-900"></span><span class="absolute w-1 h-5 bg-indigo-900 group-open:bg-transparent"></span></div></summary><p class="px-4 py-2 font-light text-sm">${answer}</p></details>`;
  })}${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/FAQComponent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/FAQComponent.astro", void 0);

const $$FAQs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="flex flex-col justify-center items-center w-full p-0 md:p-16 md:pt-0 bg-transparent text-gray-900"> <div class="w-full md:max-w-4xl"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl text-indigo-950 font-bold">Preguntas Frecuentes</h3> <h4 class="text-sm text-gray-600 max-w-xs text-center">
¿Tienes una pregunta? Mándanos un mensaje a través de <a href="#contact-us" class="text-indigo-800 font-semibold" aria-label="Enlace a la sección &quot;Formulario&quot;">nuestro formulario</a> </h4> </header> <article> ${renderComponent($$result, "FAQComponent", $$FAQComponent, {})} </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/FAQs.astro", void 0);

const $$FormContact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="w-full" onsubmit="event => event.preventDefault();return false"> <fieldset class="flex flex-col gap-4 text-sm w-full"> <div class="relative"> <label for="fullname" class="text-indigo-950 text-sm cursor-pointer">
¡Hola! ¿Cómo te llamas?
</label> <input type="text" id="fullname" name="fullname" required placeholder="" class="relative w-full py-1 px-4 outline-none text-indigo-900 placeholder-indigo-400 border-0 border-b border-indigo-900 cursor-pointer bg-transparent"> </div> <div class="relative"> <label for="email" class="text-indigo-950 text-sm cursor-pointer">
¿Cuál es tu correo?
</label> <input type="email" id="email" name="email" required placeholder="" class="relative w-full py-1 px-4 outline-none text-indigo-900 placeholder-indigo-400 border-0 border-b border-indigo-900 cursor-pointer bg-transparent"> </div> <div class="relative"> <label for="phone" class="text-indigo-950 text-sm cursor-pointer">
¿A qué número podemos llamarte?
</label> <input type="tel" id="phone" name="phone" placeholder="" class="relative w-full py-1 px-4 outline-none text-indigo-900 placeholder-indigo-400 border-0 border-b border-indigo-900 cursor-pointer bg-transparent"> </div> <div class="relative"> <label for="category" class="text-indigo-950 text-sm cursor-pointer">
Lo que necesitas de nosotros es...
</label> <select name="category" id="category" class="relative w-full py-1 px-4 outline-none text-indigo-900 placeholder-indigo-400 border-0 border-b border-indigo-900 cursor-pointer bg-transparent"> <option value="">Selecciona una opción</option> <option value="Pedir presupuesto">Pedir presupuesto</option> <option value="Información">Información</option> </select> </div> <div class="relative"> <label for="description" class="text-indigo-950 text-sm cursor-pointer">
¡Escribenos! Estaremos encantados de leerte
</label> <textarea name="description" id="description" placeholder="" class="relative w-full py-1 px-4 outline-none text-indigo-900 placeholder-indigo-400 border-0 border-b border-indigo-900 cursor-pointer bg-transparent resize-none"></textarea> </div> <div class="flex justify-center sm:justify-end"> <button id="contactButton" aria-label="Contactar por WhatsApp" type="submit" class="w-auto py-3 px-5 opacity-100[transition-property: translate] duration-200 ease-linear hover:-translate-y-0.5 button flex items-center gap-2 bg-green-600 text-white border-green-700 shadow-md"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.894-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg>
Contactar por WhatsApp
</button> </div> </fieldset> </form> ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/FormContact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/FormContact.astro", void 0);

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact-us" class="flex flex-col justify-center items-center w-full p-0 sm:p-16 bg-indigo-950 text-indigo-950"> <div class="w-full md:max-w-4xl bg-[var(--background-color)] sm:rounded-lg px-8 py-6"> <header class="w-full py-4 flex flex-col gap-y-6 justify-center items-center"> <h3 class="text-3xl text-indigo-950 font-bold">¡Contáctanos Hoy!</h3> <h4 class="text-sm text-gray-600 max-w-xs text-center">
Transforma tu espacio exterior ahora
</h4> </header> <article class="flex sm:grid flex-col-reverse sm:grid-flow-col sm:grid-cols-2 gap-x-4 gap-y-12 justify-center items-center"> ${renderComponent($$result, "FormContact", $$FormContact, {})} <!-- <ContactForm /> --> <div class="flex flex-col justify-center items-center"> <p class="px-4 py-2 text-center">
Tambien puedes contactar a traves de nuestras redes sociales
</p> ${renderComponent($$result, "SocialButtons", $$SocialButtons, {})} <p class="px-4 py-2 text-center">
O mandarnos un correo a:
</p><ul class="list-none flex flex-col justify-center items-center gap-1"> <li> <a class="text-indigo-800 font-semibold" href="mailto:comercial@toldoperfil.es" aria-label="Enviar un correo a &quot;comercial@toldoperfil.es&quot;">
comercial@toldoperfil.es
</a> </li> <li> <a class="text-indigo-800 font-semibold" href="mailto:administracion@toldoperfil.es" aria-label="Enviar un correo a &quot;administracion@toldoperfil.es&quot;">
administracion@toldoperfil.es
</a> </li> <li> <a class="text-indigo-800 font-semibold" href="mailto:jfcabezas@toldoperfil.es" aria-label="Enviar un correo a &quot;jfcabezas@toldoperfil.es&quot;">
jfcabezas@toldoperfil.es
</a> </li> </ul>  </div> </article> </div> </section>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/sections/Form.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Expertos en instalaci\xF3n y reparaci\xF3n de toldos en Velilla de San Antonio y todo Madrid. Toldo Perfil ofrece p\xE9rgolas, capotas y cerramientos de alta calidad y precios competitivos.", "title": "Toldo Perfil - Toldos en Velilla de San Antonio y Madrid", "canonical": "https://toldoperfil.es", "image": "/img/og-seo.png", "isVisibleNav": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main class="font-sans"> ${renderComponent($$result2, "Info", $$Info, {})} ${renderComponent($$result2, "BrandsAndFranchises", $$BrandsAndFranchises, {})} ${renderComponent($$result2, "Communities", $$Communities, {})} ${renderComponent($$result2, "Individuals", $$PrivateCustomers, {})} ${renderComponent($$result2, "Products", $$Products, {})} ${renderComponent($$result2, "FAQs", $$FAQs, {})} ${renderComponent($$result2, "Form", $$Form, {})} </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/index.astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
