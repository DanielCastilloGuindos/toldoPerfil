/* empty css                                        */
import { c as createAstro, a as createComponent, m as maybeRenderHead, f as addAttribute, b as renderTemplate, r as renderComponent, g as renderScript } from '../../chunks/astro/server_BhIen7rj.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_C-Ngq-O0.mjs';
import { d as db, C as Customers } from '../../chunks/_astro_db_Cb5B9jDV.mjs';
import 'clsx';
import { desc } from '@astrojs/db/dist/runtime/virtual.js';
import { $ as $$LoginForm } from '../../chunks/LoginForm_Cu-mLwTT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://toldoperfil.es");
const $$Edit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Edit;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Icono Editar"> <path fill="currentColor" d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path> <path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/admin/edit.astro", void 0);

const $$Astro$2 = createAstro("https://toldoperfil.es");
const $$Trash = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Trash;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Icono Eliminar"> <path fill="currentColor" d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path> <path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/admin/trash.astro", void 0);

const $$Astro$1 = createAstro("https://toldoperfil.es");
const $$Eye = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Eye;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Icono Eliminar"> <path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path> <path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/admin/eye.astro", void 0);

const $$ContentTable = createComponent(async ($$result, $$props, $$slots) => {
  const customersData = await db.select().from(Customers).orderBy(desc(Customers.published));
  return renderTemplate`${maybeRenderHead()}<div class="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl"> <div class="overflow-x-auto"> <table class="w-full text-left text-sm text-indigo-100"> <thead class="bg-white/5 text-xs uppercase text-indigo-300 font-bold tracking-wider"> <tr> <th class="px-6 py-4">Imagen</th> <th class="px-6 py-4">Título / ID</th> <th class="px-6 py-4">Categoría</th> <th class="px-6 py-4 text-center">Estado</th> <th class="px-6 py-4">Fecha</th> <th class="px-6 py-4 text-right">Acciones</th> </tr> </thead> <tbody class="divide-y divide-white/5"> ${customersData.map((customer) => renderTemplate`<tr class="hover:bg-white/5 transition-colors group"> <td class="px-6 py-4 whitespace-nowrap"> <div class="h-10 w-16 relative rounded overflow-hidden border border-white/10 bg-neutral-800"> <img${addAttribute(
    (customer.images || [])[0] || "/img/placeholder.webp",
    "src"
  )} class="w-full h-full object-cover" loading="lazy"> <span class="absolute bottom-0 right-0 bg-black/60 text-[10px] text-white px-1 leading-none rounded-tl"> ${(customer.images || []).length} </span> </div> </td> <td class="px-6 py-4"> <div class="font-medium text-white"> ${customer.title} </div> <div class="text-xs text-indigo-300/50">
ID: ${customer.customer_id} </div> </td> <td class="px-6 py-4"> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${customer.category === "enterprise" ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" : "bg-purple-500/10 text-purple-300 border border-purple-500/20"}`, "class")}> ${customer.category === "enterprise" ? "Empresa" : "Particular"} </span> </td> <td class="px-6 py-4 text-center"> <form action="/api/customers/toggle-visibility" method="POST" class="inline-block"> <input type="hidden" name="id"${addAttribute(customer.customer_id, "value")}> <button type="submit"${addAttribute(`px-2 py-1 rounded text-[0.65rem] font-bold uppercase tracking-wider border transition-all ${customer.isVisible ? "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20" : "bg-neutral-500/10 text-neutral-500 border-neutral-500/20 hover:bg-neutral-500/20"}`, "class")}> ${customer.isVisible ? "Visible" : "Oculto"} </button> </form> </td> <td class="px-6 py-4 whitespace-nowrap text-indigo-200/50"> ${new Date(
    customer.published
  ).toLocaleDateString()} </td> <td class="px-6 py-4 text-right whitespace-nowrap"> <div class="flex justify-end gap-2"> <a${addAttribute(`/productsDB/${customer.customer_id}`, "href")} target="_blank" class="p-1.5 rounded-lg hover:bg-white/10 text-indigo-300 hover:text-white transition-colors" title="Ver"> ${renderComponent($$result, "EyeIcon", $$Eye, { "class": "w-4 h-4" })} </a> <a${addAttribute(`/admin/edit/${customer.customer_id}`, "href")} class="p-1.5 rounded-lg hover:bg-blue-500/20 text-blue-300 hover:text-blue-100 transition-colors" title="Editar"> ${renderComponent($$result, "EditIcon", $$Edit, { "class": "w-4 h-4" })} </a> <button${addAttribute(customer.customer_id, "data-id")} class="delete-btn p-1.5 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-100 transition-colors" title="Eliminar"> ${renderComponent($$result, "TrashIcon", $$Trash, { "class": "w-4 h-4" })} </button> </div> </td> </tr>`)} </tbody> </table> </div> </div> <!-- Delete Dialog --> <dialog id="removeDialog" class="fixed inset-0 m-auto bg-neutral-900/90 backdrop-blur-sm border border-white/10 text-white rounded-2xl p-0 shadow-2xl max-w-sm w-full overflow-hidden"> <div class="p-6 text-center"> <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result, "TrashIcon", $$Trash, { "class": "w-8 h-8 text-red-500" })} </div> <h3 class="text-xl font-bold mb-2">¿Eliminar elemento?</h3> <p class="text-neutral-400 text-sm mb-6">
Esta acción no se puede deshacer.
</p> <footer class="flex gap-3 justify-center"> <button id="confirmNo" class="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors">Cancelar</button> <form action="/api/customers/delete" method="POST"> <input type="hidden" name="id" id="deleteInputId" value=""> <button type="submit" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-lg shadow-red-500/20 transition-colors">Sí, eliminar</button> </form> </footer> </div> </dialog> ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/ContentTable.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/ContentTable.astro", void 0);

const $$Astro = createAstro("https://toldoperfil.es");
const $$Content = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  const cookie = Astro2.cookies.get("admin_session");
  const isAuthenticated = cookie?.value === "authenticated";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "description": "Gesti\xF3n de Contenido - Toldo Perfil", "title": "Gestionar Contenido - Toldo Perfil", "canonical": "https://toldoperfil.es" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-sans min-h-screen"> ${isAuthenticated ? renderTemplate`<div class="fixed inset-0 -z-10 bg-neutral-900"> <div class="absolute inset-0 bg-[url('/img/carousel/protrait02.webp')] bg-cover bg-center opacity-20 blur-sm scale-105"></div> <div class="absolute inset-0 bg-neutral-900/80 mix-blend-multiply"></div> </div>
            
            <div class="text-white p-6 max-w-7xl mx-auto space-y-8"> <header class="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-6 py-4"> <div class="flex items-center gap-4"> <a href="/admin" class="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a> <div> <h1 class="text-xl font-bold tracking-tight">Gestión de Contenido</h1> <p class="text-xs text-indigo-200">Base de datos de ToldoPerfil</p> </div> </div> <div class="flex gap-2"> <a href="/admin/create?category=enterprise" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
Empresa
</a> <a href="/admin/create?category=privateCustomer" class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium shadow-lg shadow-purple-500/20 transition-all flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
Particular
</a> </div> </header> ${renderComponent($$result2, "ContentTable", $$ContentTable, {})} </div>` : renderTemplate`${renderComponent($$result2, "LoginForm", $$LoginForm, {})}`} </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/admin/content.astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/admin/content.astro";
const $$url = "/admin/content";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Content,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
