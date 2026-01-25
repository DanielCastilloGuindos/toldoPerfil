/* empty css                                   */
import { a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../chunks/AdminLayout_DeYbIL2Q.mjs';
import { $ as $$LoginForm } from '../chunks/LoginForm_BJ2TrMvC.mjs';
import 'clsx';
import { d as db, A as Analytics, C as Customers } from '../chunks/_astro_db_Cb5B9jDV.mjs';
export { renderers } from '../renderers.mjs';

const $$DashboardHub = createComponent(async ($$result, $$props, $$slots) => {
  const analyticsData = await db.select().from(Analytics);
  const totalViews = analyticsData.filter((a) => a.type === "page_view").length;
  const contactClicks = analyticsData.filter(
    (a) => a.type === "contact_click"
  ).length;
  const pageViews = analyticsData.filter(
    (a) => a.type === "page_view" && a.data && a.data.path?.startsWith("/productsDB/")
  );
  const viewCounts = {};
  pageViews.forEach((view) => {
    const path = view.data.path;
    const id = path.split("/").pop();
    if (id && !isNaN(Number(id))) {
      viewCounts[id] = (viewCounts[id] || 0) + 1;
    }
  });
  const sortedIds = Object.entries(viewCounts).sort(([, a], [, b]) => b - a).slice(0, 5).map(([id]) => Number(id));
  let topVisitedCustomers = [];
  if (sortedIds.length > 0) {
    const allCustomers = await db.select().from(Customers);
    topVisitedCustomers = sortedIds.map((id) => {
      const customer = allCustomers.find((c) => c.customer_id === id);
      return customer ? { ...customer, views: viewCounts[id] } : null;
    }).filter(Boolean);
  }
  const customersData = await db.select().from(Customers);
  const totalEnterprises = customersData.filter(
    (c) => c.category === "enterprise"
  ).length;
  const totalPrivate = customersData.filter(
    (c) => c.category === "privateCustomer"
  ).length;
  return renderTemplate`<!-- Background -->${maybeRenderHead()}<div class="fixed inset-0 -z-10 bg-neutral-900"> <div class="absolute inset-0 bg-[url('/img/carousel/protrait02.webp')] bg-cover bg-center opacity-20 blur-sm scale-105"></div> <div class="absolute inset-0 bg-neutral-900/80 mix-blend-multiply"></div> </div> <div class="min-h-screen font-sans text-white p-6"> <!-- Navbar --> <header class="sticky top-4 z-50 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-6 py-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4"> <div class="flex items-center gap-4"> <div class="p-2 bg-indigo-600/20 rounded-lg border border-indigo-500/30"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div> <h1 class="text-xl font-bold tracking-tight">
Panel de Control
</h1> <p class="text-xs text-indigo-200">Bienvenido de nuevo</p> </div> </div> <nav class="flex items-center gap-3"> <a href="/" class="px-4 py-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 border border-white/5 text-sm font-medium transition-all hover:text-indigo-300 flex items-center gap-2">
Ir a Inicio
</a> <form action="/api/auth/logout" method="POST"> <button type="submit" class="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 text-sm font-medium transition-all flex items-center gap-2">
Cerrar Sesión
</button> </form> </nav> </header> <main class="max-w-7xl mx-auto space-y-6"> <!-- Top Stats Row --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> <div class="bg-indigo-900/30 border border-indigo-500/20 rounded-xl p-5 flex flex-col"> <span class="text-indigo-200 text-xs uppercase font-bold tracking-wider">Visitas Totales</span> <span class="text-3xl font-bold text-white mt-1">${totalViews}</span> <div class="mt-auto pt-2 text-[10px] text-indigo-300/50">
Interacciones de página
</div> </div> <div class="bg-green-900/30 border border-green-500/20 rounded-xl p-5 flex flex-col"> <span class="text-green-200 text-xs uppercase font-bold tracking-wider">Contactos</span> <span class="text-3xl font-bold text-white mt-1">${contactClicks}</span> <div class="mt-auto pt-2 text-[10px] text-green-300/50">
Clics en formulario
</div> </div> <div class="bg-blue-900/30 border border-blue-500/20 rounded-xl p-5 flex flex-col"> <span class="text-blue-200 text-xs uppercase font-bold tracking-wider">Empresas</span> <span class="text-3xl font-bold text-white mt-1">${totalEnterprises}</span> <div class="mt-auto pt-2 text-[10px] text-blue-300/50">
Proyectos activos
</div> </div> <div class="bg-purple-900/30 border border-purple-500/20 rounded-xl p-5 flex flex-col"> <span class="text-purple-200 text-xs uppercase font-bold tracking-wider">Particulares</span> <span class="text-3xl font-bold text-white mt-1">${totalPrivate}</span> <div class="mt-auto pt-2 text-[10px] text-purple-300/50">
Proyectos activos
</div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <!-- Quick Actions --> <div class="lg:col-span-1 space-y-6"> <div class="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6"> <h2 class="text-lg font-bold text-white mb-4">
Acciones Rápidas
</h2> <div class="space-y-3"> <a href="/admin/content" class="block w-full p-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-between group"> <span class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
Gestionar Contenido
</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </a> <div class="grid grid-cols-2 gap-3"> <a href="/admin/create?category=enterprise" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-indigo-300 hover:text-white text-sm font-medium transition-all text-center">
+ Empresa
</a> <a href="/admin/create?category=privateCustomer" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-purple-300 hover:text-white text-sm font-medium transition-all text-center">
+ Particular
</a> </div> </div> </div> <!-- Recent Activity or Tips could go here --> <div class="bg-indigo-900/20 border border-indigo-500/10 rounded-2xl p-6"> <h3 class="text-indigo-200 font-bold mb-2 text-sm">
¿Cómo mejorar tu SEO?
</h3> <p class="text-xs text-indigo-300/70 leading-relaxed">
Asegúrate de que cada proyecto tenga un título
                        descriptivo y una descripción detallada que incluya la
                        ubicación del trabajo (ej. "Toldo en Velilla").
</p> </div> </div> <!-- Top Visited Customers --> <div class="lg:col-span-2"> <div class="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full"> <div class="p-6 border-b border-white/5 flex justify-between items-center"> <h2 class="text-lg font-bold text-white">
Más Visitados
</h2> <span class="text-xs text-indigo-200 bg-indigo-500/10 px-2 py-1 rounded-full">Top 5</span> </div> <div class="flex-1 overflow-y-auto"> ${topVisitedCustomers.length > 0 ? renderTemplate`<div class="divide-y divide-white/5"> ${topVisitedCustomers.map(
    (customer, index) => renderTemplate`<div class="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors"> <div class="font-mono text-2xl font-bold text-white/10 w-8 text-center">
#${index + 1} </div> <div class="h-12 w-20 rounded bg-neutral-800 border border-white/10 overflow-hidden relative"> <img${addAttribute(
      customer.images[0] || "/img/placeholder.webp",
      "src"
    )} class="w-full h-full object-cover"> </div> <div class="flex-1 min-w-0"> <h4 class="text-white font-medium truncate"> ${customer.title} </h4> <p class="text-xs text-indigo-300/50 capitalize"> ${customer.category === "enterprise" ? "Empresa" : "Particular"} </p> </div> <div class="text-right"> <span class="block text-xl font-bold text-white"> ${customer.views} </span> <span class="text-[10px] text-white/30 uppercase tracking-widest">
Vistas
</span> </div> <a${addAttribute(`/productsDB/${customer.customer_id}`, "href")} target="_blank" class="p-2 text-white/20 hover:text-white transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div>`
  )} </div>` : renderTemplate`<div class="p-12 text-center text-white/20"> <p>
No hay datos de visitas suficientes aún.
</p> </div>`} </div> </div> </div> </div> </main> </div>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/DashboardHub.astro", void 0);

const $$Astro = createAstro("https://toldoperfil.es");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cookie = Astro2.cookies.get("admin_session");
  const isAuthenticated = cookie?.value === "authenticated";
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "description": "Toldo Perfil: Especialistas en toldos personalizados de alta calidad. Desde toldos retr\xE1ctiles para terrazas hasta p\xE9rgolas elegantes para jardines, ofrecemos soluciones adaptadas a tus necesidades. \xA1Transforma tu espacio al aire libre con estilo y protecci\xF3n con Toldo Perfil!", "title": "Toldo Perfil - Especialistas en toldos personalizados de alta calidad", "canonical": "https://toldoperfil.es", "canonical": "https://toldoperfil.es" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-sans"> ${isAuthenticated ? renderTemplate`${renderComponent($$result2, "DashboardHub", $$DashboardHub, {})}` : renderTemplate`${renderComponent($$result2, "LoginForm", $$LoginForm, {})}`} </main> ` })}`;
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
