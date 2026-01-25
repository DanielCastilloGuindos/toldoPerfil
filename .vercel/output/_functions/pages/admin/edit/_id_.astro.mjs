/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_ZnJZev0u.mjs';
import 'piccolore';
import { $ as $$ReturnButton } from '../../../chunks/ReturnButton_DdY_-HiF.mjs';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_2uX_sDBs.mjs';
import { d as db, C as Customers } from '../../../chunks/_astro_db_ChF5lYrH.mjs';
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
          folder
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
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "description": "Editar cliente", "title": "Toldo Perfil - Editar", "canonical": "https://toldoperfil.es" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="relative flex justify-between gap-8 items-center font-sans px-4 py-6"> ${renderComponent($$result2, "ReturnButton", $$ReturnButton, { "href": "/admin", "label": "Volver al panel" })} </header> <main class="font-sans grid grid-cols-3 gap-3"> <form class="" method="POST" enctype="multipart/form-data"> <fieldset class="fixed top-1/2 left-1/2 w-72 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 text-sm"> <h2 class="pb-4 text-2xl sm:text-3xl text-white font-bold">
Editar #${customer.customer_id} </h2> <div class="relative"> <label for="title" class="text-indigo-100 text-sm cursor-pointer">
Título
</label> <input type="text" id="title" name="title"${addAttribute(customer.title, "value")} class="relative w-full py-1 px-4 outline-none text-indigo-100 placeholder-indigo-100 border-0 border-b border-indigo-100 cursor-pointer bg-transparent"> </div> <div class="relative"> <label for="category" class="text-indigo-100 text-sm cursor-pointer">
Categoría
</label> <select name="category" id="category" class="relative w-full py-1 px-4 outline-none text-indigo-100 placeholder-indigo-100 border-0 border-b border-indigo-100 cursor-pointer bg-transparent">  <option value="enterprise"${addAttribute(customer.category === "enterprise", "selected")}>Enterprise</option> <option value="privateCustomer"${addAttribute(customer.category === "privateCustomer", "selected")}>Private customers</option> </select> </div> <div class="relative"> <label for="images" class="text-indigo-100 text-sm cursor-pointer">
Añadir Imágenes (opcional):
</label> <input type="file" name="images" id="images" class="relative w-full py-1 px-4 outline-none text-indigo-100 placeholder-indigo-100 cursor-pointer bg-transparent" multiple> </div> <div class="relative"> <label for="description" class="text-indigo-100 text-sm cursor-pointer">
Descripción
</label> <textarea name="description" id="description" class="relative w-full py-1 px-4 outline-none text-indigo-100 placeholder-indigo-400 border-0 border-b border-indigo-100 cursor-pointer bg-transparent resize-none">${customer.description}</textarea> </div> <div> <button type="submit" class="w-28 py-3 px-5 opacity-100[transition-property: translate] duration-200 ease-linear hover:-translate-y-0.5 button">
Guardar
</button> </div> </fieldset> </form> </main> ` })}`;
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
