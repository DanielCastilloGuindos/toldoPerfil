import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D__gUXyo.mjs';
import { manifest } from './manifest_yAt0VcpX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/create.astro.mjs');
const _page3 = () => import('./pages/admin/edit/_id_.astro.mjs');
const _page4 = () => import('./pages/admin/edit.astro.mjs');
const _page5 = () => import('./pages/admin.astro.mjs');
const _page6 = () => import('./pages/api/auth/login.astro.mjs');
const _page7 = () => import('./pages/api/auth/logout.astro.mjs');
const _page8 = () => import('./pages/api/customers/delete.astro.mjs');
const _page9 = () => import('./pages/api/customers/insert.json.astro.mjs');
const _page10 = () => import('./pages/api/customers/select.json.astro.mjs');
const _page11 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page12 = () => import('./pages/legal-advice.astro.mjs');
const _page13 = () => import('./pages/privacy-policy.astro.mjs');
const _page14 = () => import('./pages/products/_clientid_.astro.mjs');
const _page15 = () => import('./pages/products.json.astro.mjs');
const _page16 = () => import('./pages/productsdb/_customerid_.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/create.astro", _page2],
    ["src/pages/admin/edit/[id].astro", _page3],
    ["src/pages/admin/edit.astro", _page4],
    ["src/pages/admin/index.astro", _page5],
    ["src/pages/api/auth/login.ts", _page6],
    ["src/pages/api/auth/logout.ts", _page7],
    ["src/pages/api/customers/delete.ts", _page8],
    ["src/pages/api/customers/insert.json.ts", _page9],
    ["src/pages/api/customers/select.json.ts", _page10],
    ["src/pages/api/sendEmail.json.ts", _page11],
    ["src/pages/legal-advice.astro", _page12],
    ["src/pages/privacy-policy.astro", _page13],
    ["src/pages/products/[clientId].astro", _page14],
    ["src/pages/products.json.ts", _page15],
    ["src/pages/productsDB/[customerId].astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "fb6d70da-aa5a-4836-a019-8477d5c493ab",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
