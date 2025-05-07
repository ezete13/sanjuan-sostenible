import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_Wd48Dooj.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Drcc1QnZ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/","cacheDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/node_modules/.astro/","outDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/dist/","srcDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/","publicDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/","buildClientDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/dist/client/","buildServerDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DZv0pnwc.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_hqEpd7hd.mjs","\u0000@astrojs-manifest":"manifest_D-5bdmfO.mjs","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionInicio":"_astro/SectionInicio.C2phVCBP.js","@astrojs/react/client.js":"_astro/client.BxCTEn3I.js","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavegacionEscritorio.astro?astro&type=script&index=0&lang.ts":"_astro/SectionNavegacionEscritorio.astro_astro_type_script_index_0_lang.8uyZZS-9.js","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementNavegacionItem.astro?astro&type=script&index=0&lang.ts":"_astro/ElementNavegacionItem.astro_astro_type_script_index_0_lang.CD8TlXpg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavegacionEscritorio.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const n=document.querySelectorAll(\".navbar-burger\"),e=document.querySelectorAll(\".navbar-menu\");n.length&&e.length&&n.forEach(t=>{t.addEventListener(\"click\",function(){e.forEach(c=>{s(c)})})});const o=document.querySelectorAll(\".navbar-close\"),r=document.querySelectorAll(\".navbar-backdrop\");o.forEach(t=>{t.addEventListener(\"click\",function(){e.forEach(c=>{a(c)})})}),r.forEach(t=>{t.addEventListener(\"click\",function(){e.forEach(c=>{a(c)})})})});function s(n){const e=n.querySelector(\"nav\");n.classList.remove(\"hidden\"),requestAnimationFrame(()=>{e.classList.remove(\"-translate-x-full\"),e.classList.add(\"translate-x-0\")})}function a(n){const e=n.querySelector(\"nav\");e.classList.remove(\"translate-x-0\"),e.classList.add(\"-translate-x-full\"),setTimeout(()=>{n.classList.add(\"hidden\")},300)}"],["C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementNavegacionItem.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\"[data-toggle-submenu]\").forEach(e=>{e.addEventListener(\"click\",()=>{const n=e.getAttribute(\"data-toggle-submenu\"),d=e.getAttribute(\"data-icon-id\");if(n){const t=document.getElementById(n);t&&t.classList.toggle(\"hidden\")}if(d){const t=document.getElementById(d);t&&t.classList.toggle(\"rotate-180\")}})})});"]],"assets":["/_astro/anchipurac.C0PbkbAt.png","/_astro/logo.CD8QnA64.png","/_astro/bg-acent.BZb0hR_w.webp","/_astro/index.DZv0pnwc.css","/favicon.svg","/images/anchipurac.png","/images/bg-acent.webp","/images/title_pattern.svg","/_astro/client.BxCTEn3I.js","/_astro/index.BJfUAbRs.js","/_astro/index.CHnJsdj7.css","/_astro/SectionInicio.C2phVCBP.js","/images/countries/ar.svg","/images/countries/br.svg","/images/countries/cl.svg","/images/countries/cn.svg","/images/countries/es.svg","/images/countries/fr.svg","/images/countries/lx.svg","/images/countries/mx.svg","/images/countries/pe.svg","/images/brand/logo.png","/images/hero/hero-image-1.webp","/images/hero/hero-image-2.webp","/images/hero/hero-image-3.webp","/images/objetives/conexion.svg","/images/objetives/educacion.svg","/images/objetives/innovacion.svg","/images/objetives/inspirar.svg","/images/objetives/modelo.svg","/images/objetives/sectores.svg","/images/organizers/ambiente.png","/images/organizers/catolica.png","/images/organizers/economicas.png","/images/organizers/ids.png","/images/organizers/mineria.png","/images/SeccionAcercaDeIntroduccion/introduccion.jpg","/images/SectionNavegacionIcons/acerca_de.svg","/images/SectionNavegacionIcons/agenda.svg","/images/SectionNavegacionIcons/contacto.svg","/images/SectionNavegacionIcons/edicion.svg","/images/SectionNavegacionIcons/inicio.svg","/images/SectionNavegacionIcons/menu.svg","/images/SectionNavegacionIcons/patrocinios.svg","/images/SectionPatrociniosDestacados/clinica_el_castanio.png","/images/SectionPatrociniosDestacados/huarpe_seguridad_integral.png","/images/SectionPatrociniosDestacados/lg.png","/images/SectionPatrociniosDestacados/los_azules.png","/images/SectionPatrociniosDestacados/minas_argentinas.png","/images/SectionPatrociniosDestacados/vicunia.png","/images/SectionPatrociniosInstitucionales/faud.png","/images/SectionPatrociniosInstitucionales/federacion_economica_sanjuan.png","/images/SectionPatrociniosInstitucionales/fundacion_h_a_barcelo.png","/images/SectionPatrociniosInstitucionales/union_industrial.png","/images/SectionPatrociniosOficiales/20_de_junio.png","/images/SectionPatrociniosOficiales/bolsa_comercio_san_juan.png","/images/SectionPatrociniosOficiales/dream_srl.png","/images/SectionPatrociniosOficiales/finca_sierras_azules.png","/images/SectionPatrociniosOficiales/merced_del_estero.png","/images/SectionPatrociniosOficiales/sjb_finanzas_expertas.png","/images/topics/documento.png","/images/topics/educacion.png","/images/topics/empresas.png","/images/topics/gestion.png","/images/topics/medicion.png","/images/topics/politicas.png","/images/topics/sectores.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"gewFGNhQ8MqJUIlfk9ADbnl63plEO/l6uyC8vsNXYlY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
