import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_Wd48Dooj.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  Astro2.response.status = 404;
  Astro2.response.statusText = "Not found";
  return renderTemplate`<template>${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6"><h1 class="text-9xl font-bold text-green-700">404</h1><h2 class="text-2xl font-semibold text-gray-800 mt-4">
Página no encontrada
</h2><p class="text-gray-600 mt-2 max-w-lg">
Lo sentimos, la página que buscas no existe o ha sido movida.
</p><a href="/" class="mt-6 px-6 py-3 bg-green-700 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-800 transition">
Volver al inicio
</a></div></template>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/pages/404.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
