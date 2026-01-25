/* empty css                                  */
import { a as createComponent, m as maybeRenderHead, f as renderScript, b as renderTemplate, c as createAstro, e as addAttribute, r as renderComponent } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../chunks/AdminLayout_BDTdkdy6.mjs';
import 'clsx';
import { d as db, C as Customers, A as Analytics } from '../chunks/_astro_db_Cb5B9jDV.mjs';
import { desc } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen relative overflow-hidden bg-neutral-900"> <!-- Dynamic Background --> <div class="absolute inset-0 bg-[url('/img/carousel/protrait01.webp')] bg-cover bg-center opacity-30 blur-sm scale-105"></div> <div class="absolute inset-0 bg-neutral-900/60 mix-blend-multiply"></div> <!-- Login Card --> <div class="relative w-full max-w-md p-8 mx-4 z-10"> <!-- Glassmorphism Container --> <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div> <div class="relative flex flex-col items-center"> <!-- Icon/Logo Placeholder --> <div class="w-16 h-16 mb-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)]"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h2 class="text-3xl font-bold text-white mb-2 tracking-tight">
Bienvenido
</h2> <p class="text-indigo-200 mb-8 text-sm">
Panel de Administración ToldoPerfil
</p> <form action="/api/auth/login" method="POST" class="w-full flex flex-col gap-5"> <div class="group"> <label for="username" class="block text-xs font-medium text-indigo-300 mb-1 ml-1 uppercase tracking-wider group-focus-within:text-white transition-colors">Usuario</label> <div class="relative"> <input type="text" id="username" name="username" required class="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Admin" value="admin"> </div> </div> <div class="group"> <label for="password" class="block text-xs font-medium text-indigo-300 mb-1 ml-1 uppercase tracking-wider group-focus-within:text-white transition-colors">Contraseña</label> <div class="relative"> <input type="password" id="password" name="password" required class="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="••••••••" value="!toldoPERFIL2024"> <button type="button" id="togglePassword" class="absolute inset-y-0 right-0 px-3 flex items-center text-indigo-300 hover:text-white transition-colors focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </button> </div> </div> <button type="submit" class="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none">
Iniciar Sesión
</button> </form> <div class="mt-8 text-center"> <a href="/" class="text-indigo-300 hover:text-white text-sm transition-colors flex items-center justify-center gap-2 group"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Volver a la página principal
</a> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/LoginForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/LoginForm.astro", void 0);

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

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const customersData = await db.select().from(Customers).orderBy(desc(Customers.published));
  const analyticsData = await db.select().from(Analytics);
  const totalViews = analyticsData.filter((a) => a.type === "page_view").length;
  const contactClicks = analyticsData.filter(
    (a) => a.type === "contact_click"
  ).length;
  analyticsData.filter(
    (a) => a.type === "whatsapp_click"
  ).length;
  const enterprisesData = customersData.filter(
    (c) => c.category === "enterprise"
  );
  const privateCustomersData = customersData.filter(
    (c) => c.category === "privateCustomer"
  );
  return renderTemplate`<!-- Background -->${maybeRenderHead()}<div class="fixed inset-0 -z-10 bg-neutral-900"> <div class="absolute inset-0 bg-[url('/img/carousel/protrait02.webp')] bg-cover bg-center opacity-20 blur-sm scale-105"></div> <div class="absolute inset-0 bg-neutral-900/80 mix-blend-multiply"></div> </div> <div class="min-h-screen font-sans text-white p-6"> <!-- Navbar --> <header class="sticky top-4 z-50 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-6 py-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4"> <div class="flex items-center gap-4"> <div class="p-2 bg-indigo-600/20 rounded-lg border border-indigo-500/30"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path> </svg> </div> <div> <h1 class="text-xl font-bold tracking-tight">
Dashboard & Analítica
</h1> <p class="text-xs text-indigo-200">
Visión general del negocio
</p> </div> </div> <nav class="flex items-center gap-3"> <a href="/" class="px-4 py-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 border border-white/5 text-sm font-medium transition-all hover:text-indigo-300 flex items-center gap-2">
Ir a Inicio
</a> <form action="/api/auth/logout" method="POST"> <button type="submit" class="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 text-sm font-medium transition-all flex items-center gap-2">
Cerrar Sesión
</button> </form> </nav> </header> <!-- Analytics Cards --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-7xl mx-auto"> <!-- Views --> <div class="bg-indigo-900/40 border border-indigo-500/20 rounded-xl p-6 flex flex-col relative overflow-hidden group"> <div class="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all"></div> <p class="text-indigo-200 text-xs font-medium uppercase tracking-wider mb-2">
Visitas Totales
</p> <div class="flex items-baseline gap-2"> <p class="text-4xl font-bold text-white">${totalViews}</p> <span class="text-xs text-indigo-300">páginas vistas</span> </div> </div> <!-- Contact Clicks --> <div class="bg-green-900/40 border border-green-500/20 rounded-xl p-6 flex flex-col relative overflow-hidden group"> <div class="absolute -right-6 -top-6 w-24 h-24 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all"></div> <p class="text-green-200 text-xs font-medium uppercase tracking-wider mb-2">
Interés de Contacto
</p> <div class="flex items-baseline gap-2"> <p class="text-4xl font-bold text-white">${contactClicks}</p> <span class="text-xs text-green-300">clics en forms</span> </div> </div> <!-- Inventory Stats --> <div class="bg-purple-900/40 border border-purple-500/20 rounded-xl p-6 flex flex-col relative overflow-hidden group"> <div class="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div> <p class="text-purple-200 text-xs font-medium uppercase tracking-wider mb-2">
Total Proyectos
</p> <div class="flex items-baseline gap-2"> <p class="text-4xl font-bold text-white"> ${customersData.length} </p> <span class="text-xs text-purple-300">activos</span> </div> <div class="mt-auto pt-2 flex gap-2 text-xs text-white/50"> <span>${enterprisesData.length} Empresas</span> <span>•</span> <span>${privateCustomersData.length} Particulares</span> </div> </div> </div> <!-- Data Table Section --> <main class="max-w-7xl mx-auto space-y-6"> <div class="flex justify-between items-center"> <h2 class="text-2xl font-bold text-white">Gestión de Contenido</h2> <div class="flex gap-2"> <a href="/admin/create?category=enterprise" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
Añadir Empresa
</a> <a href="/admin/create?category=privateCustomer" class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium shadow-lg shadow-purple-500/20 transition-all flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
Añadir Particular
</a> </div> </div> <div class="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl"> <div class="overflow-x-auto"> <table class="w-full text-left text-sm text-indigo-100"> <thead class="bg-white/5 text-xs uppercase text-indigo-300 font-bold tracking-wider"> <tr> <th class="px-6 py-4">Imagen</th> <th class="px-6 py-4">Título / ID</th> <th class="px-6 py-4">Categoría</th> <th class="px-6 py-4 text-center">Estado</th> <th class="px-6 py-4">Fecha</th> <th class="px-6 py-4 text-right">Acciones</th> </tr> </thead> <tbody class="divide-y divide-white/5"> ${customersData.map((customer) => renderTemplate`<tr class="hover:bg-white/5 transition-colors group"> <td class="px-6 py-4 whitespace-nowrap"> <div class="h-10 w-16 relative rounded overflow-hidden border border-white/10 bg-neutral-800"> <img${addAttribute(
    (customer.images || [])[0] || "/img/placeholder.webp",
    "src"
  )} class="w-full h-full object-cover" loading="lazy"> <span class="absolute bottom-0 right-0 bg-black/60 text-[10px] text-white px-1 leading-none rounded-tl"> ${(customer.images || []).length} </span> </div> </td> <td class="px-6 py-4"> <div class="font-medium text-white"> ${customer.title} </div> <div class="text-xs text-indigo-300/50">
ID: ${customer.customer_id} </div> </td> <td class="px-6 py-4"> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${customer.category === "enterprise" ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" : "bg-purple-500/10 text-purple-300 border border-purple-500/20"}`, "class")}> ${customer.category === "enterprise" ? "Empresa" : "Particular"} </span> </td> <td class="px-6 py-4 text-center"> <form action="/api/customers/toggle-visibility" method="POST" class="inline-block"> <input type="hidden" name="id"${addAttribute(customer.customer_id, "value")}> <button type="submit"${addAttribute(`px-2 py-1 rounded text-[0.65rem] font-bold uppercase tracking-wider border transition-all ${customer.isVisible ? "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20" : "bg-neutral-500/10 text-neutral-500 border-neutral-500/20 hover:bg-neutral-500/20"}`, "class")}> ${customer.isVisible ? "Visible" : "Oculto"} </button> </form> </td> <td class="px-6 py-4 whitespace-nowrap text-indigo-200/50"> ${new Date(
    customer.published
  ).toLocaleDateString()} </td> <td class="px-6 py-4 text-right whitespace-nowrap"> <div class="flex justify-end gap-2"> <a${addAttribute(`/productsDB/${customer.customer_id}`, "href")} target="_blank" class="p-1.5 rounded-lg hover:bg-white/10 text-indigo-300 hover:text-white transition-colors" title="Ver"> ${renderComponent($$result, "EyeIcon", $$Eye, { "class": "w-4 h-4" })} </a> <a${addAttribute(`/admin/edit/${customer.customer_id}`, "href")} class="p-1.5 rounded-lg hover:bg-blue-500/20 text-blue-300 hover:text-blue-100 transition-colors" title="Editar"> ${renderComponent($$result, "EditIcon", $$Edit, { "class": "w-4 h-4" })} </a> <button${addAttribute(customer.customer_id, "data-id")} class="delete-btn p-1.5 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-100 transition-colors" title="Eliminar"> ${renderComponent($$result, "TrashIcon", $$Trash, { "class": "w-4 h-4" })} </button> </div> </td> </tr>`)} </tbody> </table> </div> </div> </main> <!-- Delete Dialog --> <dialog id="removeDialog" class="fixed inset-0 m-auto bg-neutral-900/90 backdrop-blur-sm border border-white/10 text-white rounded-2xl p-0 shadow-2xl max-w-sm w-full overflow-hidden"> <div class="p-6 text-center"> <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result, "TrashIcon", $$Trash, { "class": "w-8 h-8 text-red-500" })} </div> <h3 class="text-xl font-bold mb-2">¿Eliminar elemento?</h3> <p class="text-neutral-400 text-sm mb-6">
Esta acción no se puede deshacer.
</p> <footer class="flex gap-3 justify-center"> <button id="confirmNo" class="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors">Cancelar</button> <form action="/api/customers/delete" method="POST"> <input type="hidden" name="id" id="deleteInputId" value=""> <button type="submit" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-lg shadow-red-500/20 transition-colors">Sí, eliminar</button> </form> </footer> </div> </dialog> </div> ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/Dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/Dashboard.astro", void 0);

const $$Astro = createAstro("https://toldoperfil.es");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cookie = Astro2.cookies.get("admin_session");
  const isAuthenticated = cookie?.value === "authenticated";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "description": "Toldo Perfil: Especialistas en toldos personalizados de alta calidad. Desde toldos retr\xE1ctiles para terrazas hasta p\xE9rgolas elegantes para jardines, ofrecemos soluciones adaptadas a tus necesidades. \xA1Transforma tu espacio al aire libre con estilo y protecci\xF3n con Toldo Perfil!", "title": "Toldo Perfil - Especialistas en toldos personalizados de alta calidad", "canonical": "https://toldoperfil.es", "canonical": "https://toldoperfil.es" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-sans"> ${isAuthenticated ? renderTemplate`${renderComponent($$result2, "Dashboard", $$Dashboard, {})}` : renderTemplate`${renderComponent($$result2, "LoginForm", $$LoginForm, {})}`} </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
