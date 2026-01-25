/* empty css                                           */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../../chunks/astro/server_BhIen7rj.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_C-Ngq-O0.mjs';
import { d as db, C as Customers } from '../../../chunks/_astro_db_Cb5B9jDV.mjs';
import { v2 } from 'cloudinary';
import { eq, isDbError } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://toldoperfil.es");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/admin");
  }
  let customer;
  try {
    const result = await db.select().from(Customers).where(eq(Customers.customer_id, Number(id)));
    customer = result[0];
  } catch (e) {
    console.error(e);
  }
  if (!customer) {
    return Astro2.redirect("/admin");
  }
  const CATEGORIES = {
    PRIVATECUSTOMER: {
      value: "privateCustomer"
    }
  };
  v2.config({
    api_key: undefined                                  ,
    api_secret: undefined                                     ,
    cloud_name: undefined                                     
  });
  const uploadStream = async (buffer, options) => {
    return new Promise((resolve, reject) => {
      v2.uploader.upload_stream(options, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }).end(buffer);
    });
  };
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const title = data.get("title")?.toString();
    const description = data.get("description")?.toString();
    const category = data.get("category")?.toString();
    const files = data.getAll("images");
    let currentImages = customer.images || [];
    const folder = category === CATEGORIES.PRIVATECUSTOMER.value ? `toldoperfil/privatecostumer` : `toldoperfil/enterprise/${title}`;
    const images_urls = [...currentImages];
    for (const file of files) {
      if (file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const response = await uploadStream(uint8Array, {
          folder,
          transformation: [
            { quality: "auto:best", fetch_format: "auto" },
            { width: 1920, crop: "limit" }
          ]
        });
        images_urls.push(response.url);
      }
    }
    try {
      await db.update(Customers).set({
        title,
        description,
        category,
        images: images_urls
      }).where(eq(Customers.customer_id, Number(id)));
      return Astro2.redirect("/admin");
    } catch (e) {
      if (isDbError(e)) {
        console.error(e);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "description": "Editar cliente", "title": "Toldo Perfil - Editar", "canonical": "https://toldoperfil.es" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed inset-0 -z-10 bg-neutral-900"> <div class="absolute inset-0 bg-[url('/img/carousel/protrait02.webp')] bg-cover bg-center opacity-20 blur-sm scale-105"></div> <div class="absolute inset-0 bg-neutral-900/80 mix-blend-multiply"></div> </div> <main class="min-h-screen flex items-center justify-center p-4"> <!-- Glass Card --> <div class="relative w-full max-w-lg"> <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div> <div class="relative p-8"> <header class="flex justify-between items-center mb-8"> <div> <h2 class="text-2xl font-bold text-white tracking-tight">
Editar Elemento
</h2> <p class="text-indigo-200 text-sm">
ID: #${customer.customer_id} </p> </div> <a href="/admin" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-indigo-200 hover:text-white transition-colors" aria-label="Volver"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </a> </header> <form method="POST" enctype="multipart/form-data" class="space-y-6"> <!-- Title Input --> <div class="space-y-2"> <label for="title" class="text-xs font-medium text-indigo-300 uppercase tracking-wider ml-1">Título</label> <input type="text" id="title" name="title" required${addAttribute(customer.title, "value")} class="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Nombre del cliente o proyecto"> </div> <!-- Category Select --> <div class="space-y-2"> <label for="category" class="text-xs font-medium text-indigo-300 uppercase tracking-wider ml-1">Categoría</label> <div class="relative"> <select name="category" id="category" required class="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all appearance-none cursor-pointer"> <option value="enterprise" class="bg-neutral-900"${addAttribute(customer.category === "enterprise", "selected")}>Primeras Marcas</option> <option value="privateCustomer" class="bg-neutral-900"${addAttribute(customer.category === "privateCustomer", "selected")}>Particulares</option> </select> <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-indigo-400"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> </div> <!-- Image Upload --> <div class="space-y-2"> <label for="images" class="text-xs font-medium text-indigo-300 uppercase tracking-wider ml-1">Añadir Imágenes (opcional)</label> <div class="relative group"> <input type="file" name="images" id="images" multiple class="hidden"> <label for="images" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-white/5 transition-all cursor-pointer"> <div class="flex flex-col items-center justify-center pt-5 pb-6"> <svg class="w-8 h-8 mb-3 text-indigo-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="mb-2 text-sm text-indigo-200"> <span class="font-semibold text-white">Haz clic para subir nuevas</span> o arrastra
</p> <p class="text-xs text-indigo-400">
Se añadirán a las existentes
</p> </div> </label> </div> <!-- Current images preview could be added here --> <div class="flex gap-2 mt-2 overflow-x-auto pb-2"> ${customer.images?.slice(0, 3).map((img) => renderTemplate`<img${addAttribute(img, "src")} class="h-12 w-12 rounded object-cover border border-white/10">`)} ${customer.images?.length > 3 && renderTemplate`<div class="h-12 w-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs text-indigo-200">
+
${customer.images.length - 3} </div>`} </div> </div> <!-- Description --> <div class="space-y-2"> <label for="description" class="text-xs font-medium text-indigo-300 uppercase tracking-wider ml-1">Descripción</label> <textarea name="description" id="description" rows="3" class="w-full bg-neutral-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none" placeholder="Detalles...">${customer.description}</textarea> </div> <!-- Submit Button --> <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path> </svg>
Guardar Cambios
</button> </form> </div> </div> </main> ` })}`;
}, "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/admin/edit/[id].astro", void 0);
const $$file = "C:/Users/Daniel/Desktop/ToldoPerfil/src/pages/admin/edit/[id].astro";
const $$url = "/admin/edit/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
