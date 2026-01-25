/* empty css                                  */
import { a as createComponent, m as maybeRenderHead, f as renderScript, b as renderTemplate, c as createAstro, e as addAttribute, r as renderComponent } from '../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../chunks/AdminLayout_2uX_sDBs.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_BP655fp3.mjs';
import { d as db, C as Customers } from '../chunks/_astro_db_ChF5lYrH.mjs';
/* empty css                                 */
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
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

const $$Astro$4 = createAstro("https://toldoperfil.es");
const $$Eye = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Eye;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Icono Eliminar"> <path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path> <path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path> </svg>`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/icons/admin/eye.astro", void 0);

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
const $$CostumerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CostumerCard;
  const { customer_id, title, category, images, isVisible, published } = Astro2.props;
  const portair_image = images[0];
  return renderTemplate`${maybeRenderHead()}<figure class="flex flex-row gap-2 relative overflow-hidden rounded-lg p-3 border border-indigo-900/80"> ${renderComponent($$result, "Image", $$Image, { "alt": `Imagen de ${title}`, "src": portair_image, "width": "200", "height": "200", "decoding": "async", "loading": "lazy", "class:list": ["object-cover rounded-lg bg-indigo-900"] })} <figcaption class="py-4 px-4 w-full h-full flex flex-col justify-between items-start bg-neutral-900/60 backdrop-blur-sm text-left"> <div class="flex items-center gap-2 mb-1"> <span class="text-indigo-200 text-xs"> Estado </span> ${isVisible ? renderTemplate`<span class="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[0.65rem] font-bold uppercase tracking-wider border border-green-500/20">
Visible
</span>` : renderTemplate`<span class="px-2 py-0.5 rounded-full bg-neutral-500/20 text-neutral-400 text-[0.65rem] font-bold uppercase tracking-wider border border-neutral-500/20">
Oculto
</span>`} </div> <div class="mb-4"> <span class="text-indigo-200 text-xs"> Título </span> <p class="text-[1.65rem] leading-none tracking-wider font-bold uppercase text-white mb-2"> ${title} </p> </div> ${Astro2.props.description && renderTemplate`<div class="mb-4"> <span class="text-indigo-200 text-xs"> Descripción </span> <p class="text-sm text-indigo-100/70 line-clamp-2"${addAttribute(Astro2.props.description, "title")}> ${Astro2.props.description} </p> </div>`} <div class="hidden"> <span class="text-indigo-200 text-xs"> Categoria </span> <p class="text-[1rem] leading-9 tracking-wider font-bold"> ${category} </p> </div> <div> <span class="text-indigo-200 text-xs"> Acciones </span> <div class="flex flex-row gap-2 justify-center items-center"> <a${addAttribute(`/productsDB/${customer_id}`, "href")}${addAttribute(`Enlace para ver los toldos montados para ${title}`, "aria-label")}> ${renderComponent($$result, "EyeIcon", $$Eye, { "class:list": ["cursor-pointer"] })} </a> <a${addAttribute(`/admin/edit/${customer_id}`, "href")}${addAttribute(`Editar ${title}`, "aria-label")}> ${renderComponent($$result, "EditIcon", $$Edit, { "class:list": ["cursor-pointer"] })} </a> <button id="removeButton"${addAttribute(customer_id, "data-id")}> ${renderComponent($$result, "TrashIcon", $$Trash, { "class:list": ["cursor-pointer"] })} </button> </div> </div> </figcaption> </figure> ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/CostumerCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/CostumerCard.astro", void 0);

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const enterprisesData = await db.select().from(Customers).where(eq(Customers.category, "enterprise"));
  const privateCustomersData = await db.select().from(Customers).where(eq(Customers.category, "privateCustomer"));
  const totalEnterprise = enterprisesData.length;
  const totalPrivate = privateCustomersData.length;
  return renderTemplate`<!-- Background similar to Login -->${maybeRenderHead()}<div class="fixed inset-0 -z-10 bg-neutral-900" data-astro-cid-sauublm2> <div class="absolute inset-0 bg-[url('/img/carousel/protrait02.webp')] bg-cover bg-center opacity-20 blur-sm scale-105" data-astro-cid-sauublm2></div> <div class="absolute inset-0 bg-neutral-900/80 mix-blend-multiply" data-astro-cid-sauublm2></div> </div> <div class="min-h-screen font-sans text-white p-6" data-astro-cid-sauublm2> <!-- Navbar / HUD --> <header class="sticky top-4 z-50 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-6 py-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4" data-astro-cid-sauublm2> <div class="flex items-center gap-4" data-astro-cid-sauublm2> <div class="p-2 bg-indigo-600/20 rounded-lg border border-indigo-500/30" data-astro-cid-sauublm2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sauublm2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-sauublm2></path> </svg> </div> <div data-astro-cid-sauublm2> <h1 class="text-xl font-bold tracking-tight" data-astro-cid-sauublm2>
Panel de Control
</h1> <p class="text-xs text-indigo-200" data-astro-cid-sauublm2>Gestión de ToldoPerfil</p> </div> </div> <nav class="flex items-center gap-3" data-astro-cid-sauublm2> <a href="/" class="px-4 py-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 border border-white/5 text-sm font-medium transition-all hover:text-indigo-300 flex items-center gap-2" data-astro-cid-sauublm2> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sauublm2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-sauublm2></path> </svg>
Ir a Inicio
</a> <form action="/api/auth/logout" method="POST" data-astro-cid-sauublm2> <button type="submit" class="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-300 text-sm font-medium transition-all flex items-center gap-2" data-astro-cid-sauublm2> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sauublm2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-sauublm2></path> </svg>
Cerrar Sesión
</button> </form> </nav> </header> <!-- Stats Review (Optional HUD Element) --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-7xl mx-auto" data-astro-cid-sauublm2> <div class="bg-indigo-900/40 border border-indigo-500/20 rounded-xl p-6 flex items-center justify-between" data-astro-cid-sauublm2> <div data-astro-cid-sauublm2> <p class="text-indigo-200 text-sm font-medium uppercase tracking-wider" data-astro-cid-sauublm2>
Primeras Marcas
</p> <p class="text-3xl font-bold text-white mt-1" data-astro-cid-sauublm2> ${totalEnterprise} </p> </div> <a href="/admin/create?category=enterprise" class="p-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white shadow-lg shadow-indigo-500/20 transition-all" data-astro-cid-sauublm2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sauublm2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-sauublm2></path> </svg> </a> </div> <div class="bg-purple-900/40 border border-purple-500/20 rounded-xl p-6 flex items-center justify-between" data-astro-cid-sauublm2> <div data-astro-cid-sauublm2> <p class="text-purple-200 text-sm font-medium uppercase tracking-wider" data-astro-cid-sauublm2>
Particulares
</p> <p class="text-3xl font-bold text-white mt-1" data-astro-cid-sauublm2>${totalPrivate}</p> </div> <a href="/admin/create?category=privateCustomer" class="p-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white shadow-lg shadow-purple-500/20 transition-all" data-astro-cid-sauublm2> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sauublm2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-sauublm2></path> </svg> </a> </div> </div> <!-- Content Sections --> <main class="max-w-7xl mx-auto space-y-12" data-astro-cid-sauublm2> <!-- Enterprise Section --> <section data-astro-cid-sauublm2> <div class="flex items-center gap-4 mb-6" data-astro-cid-sauublm2> <h2 class="text-2xl font-bold text-white" data-astro-cid-sauublm2>Primeras Marcas</h2> <div class="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" data-astro-cid-sauublm2></div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-astro-cid-sauublm2> ${enterprisesData.length > 0 ? enterprisesData.map((info) => renderTemplate`${renderComponent($$result, "CostumerCard", $$CostumerCard, { ...info, "data-astro-cid-sauublm2": true })}`) : renderTemplate`<div class="col-span-full py-12 text-center text-white/30 border-2 border-dashed border-white/5 rounded-xl" data-astro-cid-sauublm2>
No hay elementos en esta categoría
</div>`} </div> </section> <!-- Private Customer Section --> <section data-astro-cid-sauublm2> <div class="flex items-center gap-4 mb-6" data-astro-cid-sauublm2> <h2 class="text-2xl font-bold text-white" data-astro-cid-sauublm2>Particulares</h2> <div class="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" data-astro-cid-sauublm2></div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-astro-cid-sauublm2> ${privateCustomersData.length > 0 ? privateCustomersData.map((info) => renderTemplate`${renderComponent($$result, "CostumerCard", $$CostumerCard, { ...info, "data-astro-cid-sauublm2": true })}`) : renderTemplate`<div class="col-span-full py-12 text-center text-white/30 border-2 border-dashed border-white/5 rounded-xl" data-astro-cid-sauublm2>
No hay elementos en esta categoría
</div>`} </div> </section> </main> <!-- Delete Confirmation Dialog --> <dialog id="removeDialog" class="fixed inset-0 m-auto bg-neutral-900/90 backdrop-blur-sm border border-white/10 text-white rounded-2xl p-0 shadow-2xl max-w-sm w-full overflow-hidden open:animate-fade-in" data-astro-cid-sauublm2> <div class="p-6 text-center" data-astro-cid-sauublm2> <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-sauublm2> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sauublm2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-sauublm2></path> </svg> </div> <h3 class="text-xl font-bold mb-2" data-astro-cid-sauublm2>¿Eliminar elemento?</h3> <p class="text-neutral-400 text-sm mb-6" data-astro-cid-sauublm2>
Esta acción no se puede deshacer. ¿Estás seguro de que quieres
                continuar?
</p> <footer class="flex gap-3 justify-center" data-astro-cid-sauublm2> <button id="confirmNo" class="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors" data-astro-cid-sauublm2>
Cancelar
</button> <form action="/api/customers/delete" method="POST" data-astro-cid-sauublm2> <input type="hidden" name="id" id="deleteInputId" value="" data-astro-cid-sauublm2> <button type="submit" id="confirmYes" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-lg shadow-red-500/20 transition-colors" data-astro-cid-sauublm2>
Sí, eliminar
</button> </form> </footer> </div> </dialog> </div>  ${renderScript($$result, "C:/Users/Daniel/Desktop/ToldoPerfil/src/components/admin/Dashboard.astro?astro&type=script&index=0&lang.ts")}`;
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
