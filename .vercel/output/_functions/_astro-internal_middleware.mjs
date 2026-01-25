import { d as defineMiddleware, s as sequence } from './chunks/index_CxdPvHO5.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DRML8krR.mjs';
import 'piccolore';
import './chunks/astro/server_ZnJZev0u.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
  const { url, cookies, redirect } = context;
  if (url.pathname.startsWith("/admin")) {
    if (url.pathname === "/admin") {
      return next();
    }
    if (cookies.get("admin_session")?.value !== "authenticated") {
      return redirect("/admin");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
