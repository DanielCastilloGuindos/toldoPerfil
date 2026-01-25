import { c as createAstro, a as createComponent, e as addAttribute, f as renderScript, b as renderTemplate, v as unescapeHTML, r as renderComponent } from './astro/server_ZnJZev0u.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro$1 = createAstro("https://toldoperfil.es");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const FAQs = [
  {
    question: "\xBFQu\xE9 tipo de tela utilizan en sus toldos y qu\xE9 ventajas ofrece?",
    answer: "En nuestra tienda, utilizamos lona acr\xEDlica de alta calidad para nuestros toldos. Esta tela es duradera, resistente a la intemperie, resistente al desvanecimiento y est\xE1 disponible en una amplia gama de colores y dise\xF1os. Adem\xE1s, la lona acr\xEDlica ofrece una excelente protecci\xF3n contra los rayos UV, lo que ayuda a mantener frescos los espacios exteriores y a proteger los muebles y pisos de la decoloraci\xF3n."
  },
  {
    question: "\xBFCu\xE1les son las caracter\xEDsticas de sus estructuras de toldos?",
    answer: "Nuestros toldos est\xE1n dise\xF1ados con estructuras robustas y duraderas que garantizan una instalaci\xF3n segura y estable. Utilizamos materiales resistentes como el aluminio y el acero galvanizado que ofrecen una excelente resistencia a la corrosi\xF3n y una larga vida \xFAtil. Adem\xE1s, nuestras estructuras est\xE1n dise\xF1adas para soportar cargas de viento y nieve, lo que garantiza su rendimiento incluso en condiciones clim\xE1ticas adversas."
  },
  {
    question: "\xBFOfrecen garant\xEDa en sus toldos?",
    answer: "S\xED, ofrecemos una garant\xEDa integral en todos nuestros toldos para brindar a nuestros clientes tranquilidad y confianza en su compra. Nuestra garant\xEDa cubre defectos de fabricaci\xF3n y mano de obra, as\xED como el rendimiento y la durabilidad del producto. Estamos comprometidos a garantizar la satisfacci\xF3n de nuestros clientes y a brindar un servicio excepcional en todo momento."
  },
  {
    question: "\xBFQu\xE9 servicios de instalaci\xF3n ofrecen y qu\xE9 experiencia tienen sus instaladores?",
    answer: "Ofrecemos servicios profesionales de instalaci\xF3n realizados por nuestro equipo altamente capacitado de instaladores certificados. Nuestros instaladores tienen una amplia experiencia en la instalaci\xF3n de toldos y est\xE1n comprometidos con los m\xE1s altos est\xE1ndares de calidad y seguridad. Nos aseguramos de que cada instalaci\xF3n se realice de manera profesional y eficiente, garantizando la satisfacci\xF3n del cliente en todo momento."
  }
];
const $$RichResults = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://toldoperfil.es",
    image: "/img/og.jpg",
    sameAs: [
      "https://www.instagram.com/toldoperfil",
      "https://x.com/toldoperfil",
      "https://www.facebook.com/toldoperfil"
    ],
    logo: "/img/logo.png",
    name: "Toldo Perfil",
    alternateName: "ToldoPerfil",
    description: "Toldo Perfil: Especialistas en toldos personalizados de alta calidad. Desde toldos retr\xE1ctiles para terrazas hasta p\xE9rgolas elegantes para jardines, ofrecemos soluciones adaptadas a tus necesidades. \xA1Transforma tu espacio al aire libre con estilo y protecci\xF3n con Toldo Perfil!",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Velilla de San Antonio",
      addressRegion: "Madrid",
      addressCountry: "ES"
    },
    areaServed: "Madrid"
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Toldo Perfil",
    image: "https://toldoperfil.es/img/og-seo.png",
    url: "https://toldoperfil.es",
    telephone: "+34628404370",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Velilla de San Antonio",
      addressRegion: "Madrid",
      postalCode: "28891",
      addressCountry: "ES"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.366,
      longitude: -3.488
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    areaServed: [
      "Velilla de San Antonio",
      "Madrid",
      "Mejorada del Campo",
      "Rivas-Vaciamadrid"
    ],
    priceRange: "$$"
  };
  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      FAQs.map(({ answer, question }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    ]
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(localBusinessSchema)), unescapeHTML(JSON.stringify(FAQSchema)));
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/RichResults.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://toldoperfil.es");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, preload, canonical, image = "/img/og.jpeg" } = Astro2.props;
  const canonicalURL = canonical ? new URL(canonical, Astro2.site) : new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(["<title>", '</title><meta charset="UTF-8"><meta name="description"', '><!-- <link rel="preload" href={atomic} as="font" type="font/woff2" crossorigin />\n<link rel="preload" href={jost} as="font" type="font/woff2" crossorigin /> -->', '<link rel="canonical"', '><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#f5f4ff"><meta name="keywords" content="toldos, toldos a medida, toldos brazo extensible, toldos punto recto, toldo perfil"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@toldoPerfil"><meta name="twitter:creator" content="@toldoPerfil"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="og:image"', '><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:site_name" content="Toldo Perfil"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <script is:inline src="/registerSW.js"><\/script> --><link rel="manifest" href="/manifest.webmanifest">', ""])), title, addAttribute(description, "content"), preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), renderComponent($$result, "RichResults", $$RichResults, {}));
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/SEO.astro", void 0);

export { $$SEO as $, FAQs as F, $$ClientRouter as a };
