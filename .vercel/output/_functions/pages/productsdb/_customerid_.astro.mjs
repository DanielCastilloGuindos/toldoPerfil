/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { d as db, C as Customers } from '../../chunks/_astro_db_Cb5B9jDV.mjs';
import { $ as $$ClientLayout, a as $$Header, b as $$InfoGalery } from '../../chunks/Info_Galery_CZVJslWG.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://toldoperfil.es");
const $$customerId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$customerId;
  const { customerId } = Astro2.params;
  const customerQuery = await db.select().from(Customers).where(eq(Customers.customer_id, customerId));
  const customer = {
    id: customerId,
    title: customerQuery[0].title,
    description: customerQuery[0].description,
    images: customerQuery[0].images
  };
  return renderTemplate`${renderComponent($$result, "ClientLayout", $$ClientLayout, { "description": "Toldo Perfil: Especialistas en toldos personalizados de alta calidad. Desde toldos retr\xE1ctiles para terrazas hasta p\xE9rgolas elegantes para jardines, ofrecemos soluciones adaptadas a tus necesidades. \xA1Transforma tu espacio al aire libre con estilo y protecci\xF3n con Toldo Perfil!", "title": `Toldo Perfil - ${customer.title}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-sans"> ${renderComponent($$result2, "Header", $$Header, { "title": customer.title, "transitionName": "title_" + customer.id })} ${renderComponent($$result2, "InfoGalery", $$InfoGalery, { "data": customer, "path": "" })} </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/productsDB/[customerId].astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/productsDB/[customerId].astro";
const $$url = "/productsDB/[customerId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$customerId,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
