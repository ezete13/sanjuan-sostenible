import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_D25NinNs.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BmehAJSh.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/","cacheDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/node_modules/.astro/","outDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/dist/","srcDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/","publicDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/","buildClientDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/dist/client/","buildServerDir":"file:///C:/Users/Ezequiel/Desktop/sanjuan-sostenible/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html{scroll-behavior:smooth}\n"},{"type":"external","src":"/_astro/index.C11nGz2C.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_uw7X8oQ3.mjs","\u0000@astrojs-manifest":"manifest_BFHABNWV.mjs","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionHero.tsx":"_astro/SectionHero.BpH1o4Vl.js","@astrojs/react/client.js":"_astro/client.CBwL3ilQ.js","C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavBar.astro?astro&type=script&index=0&lang.ts":"_astro/SectionNavBar.astro_astro_type_script_index_0_lang.BRuiXfCw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavBar.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const r=document.querySelectorAll(\".navbar-burger\"),n=document.querySelectorAll(\".navbar-menu\");if(r.length&&n.length)for(var e=0;e<r.length;e++)r[e].addEventListener(\"click\",function(){for(var c=0;c<n.length;c++)n[c].classList.toggle(\"hidden\")});const l=document.querySelectorAll(\".navbar-close\"),o=document.querySelectorAll(\".navbar-backdrop\");if(l.length)for(var e=0;e<l.length;e++)l[e].addEventListener(\"click\",function(){for(var t=0;t<n.length;t++)n[t].classList.toggle(\"hidden\")});if(o.length)for(var e=0;e<o.length;e++)o[e].addEventListener(\"click\",function(){for(var t=0;t<n.length;t++)n[t].classList.toggle(\"hidden\")})});"]],"assets":["/_astro/anchipurac.C0PbkbAt.png","/_astro/img.D5x_J5c4.jpg","/_astro/logo.CD8QnA64.png","/_astro/bg-acent.BZb0hR_w.webp","/_astro/index.C11nGz2C.css","/favicon.svg","/images/anchipurac.png","/images/bg-acent.webp","/_astro/client.CBwL3ilQ.js","/_astro/index.ai7qpRr1.js","/_astro/index.CHnJsdj7.css","/_astro/SectionHero.BpH1o4Vl.js","/images/about/img.jpg","/images/brand/logo.png","/images/countries/ar.svg","/images/countries/cl.svg","/images/countries/cn.svg","/images/countries/es.svg","/images/countries/fr.svg","/images/countries/lx.svg","/images/countries/mx.svg","/images/countries/pe.svg","/images/hero/hero-image-1.webp","/images/hero/hero-image-2.webp","/images/hero/hero-image-3.webp","/images/objetives/conexion.svg","/images/objetives/educacion.svg","/images/objetives/innovacion.svg","/images/objetives/inspirar.svg","/images/objetives/modelo.svg","/images/objetives/sectores.svg","/images/organizers/ambiente.png","/images/organizers/catolica.png","/images/organizers/economicas.png","/images/organizers/ids.png","/images/organizers/mineria.png","/images/sponsors/lg.png","/images/topics/documento.png","/images/topics/educacion.png","/images/topics/empresas.png","/images/topics/gestion.png","/images/topics/medicion.png","/images/topics/politicas.png","/images/topics/sectores.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"3YZ0dF02vf3MPEExxUIvZQO+jEk26S6LEkji22nsnpI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
