/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BhIen7rj.mjs';
import 'piccolore';
import { $ as $$ClientLayout, a as $$Header, b as $$InfoGalery } from '../../chunks/Info_Galery_DfhjVjPf.mjs';
export { renderers } from '../../renderers.mjs';

const getStaticProductsPaths = () => {
  let staticProductsPaths = [];
  brandsAndFranchisesCustomers.map((client) => {
    staticProductsPaths.push(
      { params: { clientId: client.id } }
    );
  });
  return staticProductsPaths;
};
const brandsAndFranchisesCustomers = [
  {
    id: "AlainAfflelou",
    title: "Alain Afflelou",
    isVisible: true,
    images: [
      "AlainAfflelou01.webp",
      "AlainAfflelou02.webp",
      "AlainAfflelou03.webp",
      "AlainAfflelou04.webp",
      "AlainAfflelou05.webp",
      "AlainAfflelou06.webp",
      "AlainAfflelou07.webp",
      "AlainAfflelou08.webp",
      "AlainAfflelou09.webp"
    ]
  },
  {
    id: "AnaquelArmarios",
    title: "Anaquel Armarios",
    isVisible: false,
    images: [
      "AnaquelArmarios01.webp"
    ]
  },
  {
    id: "CantinaCanalla",
    title: "Cantina Canalla",
    isVisible: true,
    images: [
      "CantinaCanalla01.webp",
      "CantinaCanalla02.webp",
      "CantinaCanalla03.webp",
      "CantinaCanalla04.webp",
      "CantinaCanalla05.webp",
      "CantinaCanalla06.webp",
      "CantinaCanalla07.webp",
      "CantinaCanalla08.webp"
    ]
  },
  {
    id: "CodereApuestas",
    title: "Codere Apuestas",
    isVisible: false,
    images: [
      "CodereApuestas01.webp"
    ]
  },
  {
    id: "GredosRestaurante",
    title: "Gredos Restaurante",
    isVisible: true,
    images: [
      "GredosRestaurante01.webp",
      "GredosRestaurante02.webp",
      "GredosRestaurante03.webp"
    ]
  },
  {
    id: "IsabellaBeauty",
    title: "Isabella Beauty",
    isVisible: false,
    images: [
      "IsabellaBeauty01.webp"
    ]
  },
  {
    id: "LeonardoBoutiqueHotel",
    title: "Leonardo Boutique Hotel",
    isVisible: true,
    images: [
      "LeonardoBoutiqueHotel01.webp",
      "LeonardoBoutiqueHotel02.webp",
      "LeonardoBoutiqueHotel03.webp",
      "LeonardoBoutiqueHotel04.webp",
      "LeonardoBoutiqueHotel05.webp",
      "LeonardoBoutiqueHotel06.webp",
      "LeonardoBoutiqueHotel07.webp",
      "LeonardoBoutiqueHotel08.webp"
    ]
  },
  {
    id: "Por303Motivos",
    title: "Por303Motivos",
    isVisible: true,
    images: [
      "Por303Motivos01.webp",
      "Por303Motivos02.webp",
      "Por303Motivos03.webp"
    ]
  },
  {
    id: "Shifu",
    title: "Shifu",
    isVisible: true,
    images: [
      "Shifu01.webp",
      "Shifu02.webp",
      "Shifu03.webp",
      "Shifu04.webp"
    ]
  }
];

const $$Astro = createAstro("https://toldoperfil.es");
function getStaticPaths() {
  return getStaticProductsPaths();
}
const $$clientId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$clientId;
  const { clientId } = Astro2.params;
  const selectedClient = brandsAndFranchisesCustomers.find((client) => client.id === clientId);
  return renderTemplate`${renderComponent($$result, "ClientLayout", $$ClientLayout, { "description": "Toldo Perfil: Especialistas en toldos personalizados de alta calidad. Desde toldos retr\xE1ctiles para terrazas hasta p\xE9rgolas elegantes para jardines, ofrecemos soluciones adaptadas a tus necesidades. \xA1Transforma tu espacio al aire libre con estilo y protecci\xF3n con Toldo Perfil!", "title": `Toldo Perfil - ${selectedClient.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-sans"> ${renderComponent($$result2, "Header", $$Header, { "title": selectedClient.title, "transitionName": "title_" + selectedClient.id })} ${renderComponent($$result2, "InfoGalery", $$InfoGalery, { "data": selectedClient })} </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/products/[clientId].astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/products/[clientId].astro";
const $$url = "/products/[clientId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$clientId,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
