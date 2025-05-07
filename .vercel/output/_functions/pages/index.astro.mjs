import { c as createComponent, a as createAstro, ai as renderHead, aj as renderSlot, r as renderTemplate, m as maybeRenderHead, ak as renderScript, l as addAttribute, w as renderComponent, al as Fragment } from '../chunks/astro/server_Wd48Dooj.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export { renderers } from '../renderers.mjs';

const $$Astro$i = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Meta Información SEO --><meta name="generator" content="{Astro.generator}"><meta name="description" content="Congreso internacional de desarrollo sostenible para académicos y empresarios enfocado a la innovación y sostenibilidad global."><meta name="keywords" content="congreso desarrollo sostenible, innovación, sostenibilidad, académicos, empresarios, conferencia internacional, tecnologías verdes, cambio climático"><meta name="robots" content="index, follow"><!-- Meta Open Graph para redes sociales --><meta property="og:title" content="Congreso Internacional de Desarrollo Sostenible"><meta property="og:description" content="Únete al Congreso Internacional de Desarrollo Sostenible: un evento que reúne a académicos, empresarios y expertos para discutir soluciones innovadoras en sostenibilidad."><meta property="og:image" content="/images/social-image.jpg"><!-- Cambia la ruta por la imagen adecuada --><meta property="og:url" content="https://tusitio.com"><meta property="og:type" content="website"><!-- Twitter Cards --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Congreso Internacional de Desarrollo Sostenible"><meta name="twitter:description" content="Acompáñanos en el Congreso Internacional de Desarrollo Sostenible para explorar las mejores prácticas y soluciones para un futuro más verde."><meta name="twitter:image" content="/images/social-image.jpg"><!-- Cambia la ruta por la imagen adecuada --><!-- Título de la página --><title>
			Congreso Internacional de Desarrollo Sostenible | San Juan +
			Sostenible
		</title><!-- Pre-conexión a fuentes externas --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Fuentes Google --><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"><!-- FontAwesome para iconos --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"><!-- Enlaces canónicos para evitar duplicados --><link rel="canonical" href="https://tusitio.com"><!-- Otras etiquetas SEO recomendadas --><meta name="author" content="Comité Organizador del Congreso Internacional de Desarrollo Sostenible"><meta name="language" content="es, en"><!-- Idiomas disponibles en la web -->${renderHead()}</head> <body class="bg-shark-50"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/layouts/Layout.astro", void 0);

const Data$f = [
	{
		text: "Inicio",
		icon: "inicio.svg",
		href: "#inicio",
		sub_items: [
		]
	},
	{
		text: "Edición 2025",
		icon: "edicion.svg",
		href: "#edicion2025",
		sub_items: [
		]
	},
	{
		text: "Sobre el Congreso",
		icon: "acerca_de.svg",
		href: "#introduccion",
		sub_items: [
			{
				text: "Introducción",
				href: "#introduccion"
			},
			{
				text: "Claves",
				href: "#claves"
			},
			{
				text: "Objetivos",
				href: "#objetivos"
			},
			{
				text: "Organizadores",
				href: "#organizadores"
			}
		]
	},
	{
		text: "Patrocinios",
		icon: "patrocinios.svg",
		href: "#destacados",
		sub_items: [
			{
				text: "Destacados",
				href: "#destacados"
			},
			{
				text: "Oficiales",
				href: "#oficiales"
			},
			{
				text: "Institucionales",
				href: "#institucionales"
			}
		]
	},
	{
		text: "Agenda",
		icon: "agenda.svg",
		href: "#tematicas",
		sub_items: [
			{
				text: "Ubicacion",
				href: "#ubicacion"
			},
			{
				text: "Temáticas",
				href: "#tematicas"
			},
			{
				text: "Expositores",
				href: "#expositores"
			},
			{
				text: "Programa",
				href: "#programa"
			},
			{
				text: "Cronograma",
				href: "#cronograma"
			}
		]
	},
	{
		text: "Contacto",
		icon: "contacto.svg",
		href: "#contacto",
		sub_items: [
		]
	}
];

const Logo = new Proxy({"src":"/_astro/logo.CD8QnA64.png","width":1090,"height":627,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/images/brand/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$h = createAstro();
const $$ElementNavegacionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ElementNavegacionItem;
  const { item, isMobile = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${isMobile ? renderTemplate`<li class="mb-4"> <div class="flex justify-between items-center"> <a${addAttribute(item.href, "href")} class="flex items-center gap-2 text-shark-950 font-semibold text-sm"> <img${addAttribute(`/images/SectionNavegacionIcons/${item.icon}`, "src")}${addAttribute(item.text, "alt")} class="w-5 h-5"> <span>${item.text}</span> </a> ${item.sub_items.length > 0 && renderTemplate`<button class="text-shark-700" type="button"${addAttribute(`submenu-${item.text.toLowerCase().replace(/\s+/g, "-")}`, "data-toggle-submenu")}${addAttribute(`icon-${item.text.toLowerCase().replace(/\s+/g, "-")}`, "data-icon-id")} aria-label="Toggle submenu"> <svg${addAttribute(`icon-${item.text.toLowerCase().replace(/\s+/g, "-")}`, "id")} xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"></path> </svg> </button>`} </div> ${item.sub_items.length > 0 && renderTemplate`<ul${addAttribute(`submenu-${item.text.toLowerCase().replace(/\s+/g, "-")}`, "id")} class="hidden mt-2 ml-6 space-y-2"> ${item.sub_items.map((sub) => renderTemplate`<li> <a${addAttribute(sub.href, "href")} class="block text-xs text-shark-800 hover:text-primary-500"> ${sub.text} </a> </li>`)} </ul>`} </li>` : renderTemplate`<!-- Tu código actual de Desktop va acá sin cambios -->
    <li class="relative group"> <a${addAttribute(item.href, "href")} class="px-2 py-1 text-shark-950 hover:text-primary-500 flex items-center gap-1 relative"> <img${addAttribute(`/images/SectionNavegacionIcons/${item.icon}`, "src")}${addAttribute(item.text, "alt")} class="w-5 h-5 inline-block align-middle"> <span>${item.text}</span> ${item.sub_items.length > 0 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 stroke-current text-shark-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="5"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"></path> </svg>`} <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span> </a> ${item.sub_items.length > 0 && renderTemplate`<ul${addAttribute(`absolute z-50 top-full left-0 bg-white shadow-md rounded mt-2 w-40 ${isMobile ? "static mt-1 shadow-none" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"}`, "class")}> ${item.sub_items.map((sub) => renderTemplate`<li> <a${addAttribute(sub.href, "href")} class="block px-4 py-2 text-xs text-shark-800 hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0"> ${sub.text} </a> </li>`)} </ul>`} </li>`} <!-- Este va al final del archivo Astro --> ${renderScript($$result, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementNavegacionItem.astro?astro&type=script&index=0&lang.ts")} </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementNavegacionItem.astro", void 0);

const $$Astro$g = createAstro();
const $$SectionNavegacionMovil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$SectionNavegacionMovil;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="navbar-menu relative z-50 hidden"> <div class="navbar-backdrop fixed inset-0 bg-aqua-950 opacity-60"></div> <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-shark-50 border-r overflow-y-auto font-heading sm:w-6/12 lg:w-3/12 transform transition-transform duration-300 -translate-x-full"> <div class="flex items-center mb-8"> <a class="mr-auto text-3xl font-bold leading-none" href="#"> <img src="/images/brand/logo.png" alt="Logo San Juan Sostenible" class="h-10 md:h-11"> </a> <button class="navbar-close"> <svg class="h-6 w-6 text-shark-950 cursor-pointer hover:text-shark-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div> <ul class="uppercase"> ${items.map((item) => renderTemplate`${renderComponent($$result, "ElementItem", $$ElementNavegacionItem, { "item": item, "isMobile": true })}`)} </ul> </div> </nav> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavegacionMovil.astro", void 0);

const $$SectionNavegacionEscritorio = createComponent(($$result, $$props, $$slots) => {
  const content = Data$f;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-cytm2wk6> <!-- Navbar Desktop --> <nav class="font-heading fixed top-0 left-0 w-full z-30 px-6 py-2 flex justify-between items-center bg-shark-50 shadow-md lg:px-5 xl:px-15 2xl:px-60" data-astro-cid-cytm2wk6> <div data-astro-cid-cytm2wk6> <a href="#" data-astro-cid-cytm2wk6> <img${addAttribute(Logo.src, "src")} alt="Logo San Juan Sostenible" class="h-10 md:h-11" data-astro-cid-cytm2wk6> </a> </div> <div class="lg:hidden" data-astro-cid-cytm2wk6> <button class="navbar-burger flex items-center text-shark-950 p-3 cursor-pointer" data-astro-cid-cytm2wk6> <img${addAttribute(`/images/SectionNavegacionIcons/menu.svg`, "src")} alt="Menu Dispositivo Movil" class="w-7 h-7 inline-block align-middle" data-astro-cid-cytm2wk6> <!-- 
                <svg class="block h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <title>Menu Dispositivo Movil</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    ></path>
                </svg>--> </button> </div> <ul class="whitespace-nowrap hidden absolute text-xs font-heading font-semibold uppercase top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-end lg:w-auto lg:space-x-6 xl:space-x-3 2xl:space-x-1" data-astro-cid-cytm2wk6> ${content.map((item) => renderTemplate`${renderComponent($$result, "ElementItem", $$ElementNavegacionItem, { "item": item, "data-astro-cid-cytm2wk6": true })}`)} </ul> </nav> <!-- Navbar Mobile --> ${renderComponent($$result, "SectionNavegacionMovil", $$SectionNavegacionMovil, { "items": content, "data-astro-cid-cytm2wk6": true })} ${renderScript($$result, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavegacionEscritorio.astro?astro&type=script&index=0&lang.ts")}  </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavegacionEscritorio.astro", void 0);

const ElementInicio = ({
  heroId,
  heroImg,
  heroHead,
  heroTitle,
  heroBody,
  heroBtn,
  heroAlt
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: heroId,
      className: "relative bg-cover bg-center bg-no-repeat pt-20",
      style: { backgroundImage: `url(images/hero/${heroImg})` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-shark-950/80 sm:bg-transparent sm:from-shark-950/90 sm:to-aqua-950/30 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-screen-xl px-7 sm:px-32 lg:flex min-h-[70vh] lg:px-32 flex items-center justify-left xl:px-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right", children: [
          /* @__PURE__ */ jsxs("h1", { className: " font-heading uppercase text-xl font-extrabold text-shark-50 sm:text-2xl md:text-3xl lg:text-5xl", children: [
            heroHead,
            /* @__PURE__ */ jsx("strong", { className: "block text-nature-600", children: heroTitle })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body mt-4 text-shark-50 text-md sm:text-lg md:text-xl lg:text-2xl", children: heroBody }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-4 text-center", children: heroBtn.enabled ? /* @__PURE__ */ jsx(
            "a",
            {
              href: heroBtn.link,
              className: "block w-full font-heading uppercase rounded-full bg-nature-600 px-8 py-4 text-sm sm:text-md font-semibold text-aqua-50 shadow-sm hover:bg-nature-700 focus:ring-3 focus:outline-hidden sm:w-auto",
              children: heroBtn.text
            }
          ) : /* @__PURE__ */ jsx(
            "span",
            {
              className: "block w-full font-heading uppercase rounded-full bg-gray-300 px-8 py-4 text-sm sm:text-md font-semibold text-gray-500 shadow-sm cursor-not-allowed sm:w-auto",
              children: "INSCRIPCIONES CERRADAS"
            }
          ) })
        ] }) })
      ]
    }
  );
};

const Data$e = [
	{
		heroId: "hero-1",
		heroImg: "hero-image-1.webp",
		heroHead: "III Congreso Internacional San Juan + Sostenible",
		heroTitle: "San Juan | 2025",
		heroBody: "San Juan se convierte en el epicentro de la sostenibilidad. Únete a este evento transformador donde se reunirán líderes, expertos y visionarios para abordar los desafíos del futuro. ¡Sé parte del cambio hacia un mundo más sostenible!",
		heroBtn: {
			text: "Preinscribirme",
			link: "https://forms.gle/MsBpcmmrxRXbpp1V7",
			enabled: false
		},
		heroAlt: "Imagen del Congreso de Desarrollo Sostenible en San Juan"
	},
	{
		heroId: "hero-2",
		heroImg: "hero-image-2.webp",
		heroHead: "Explora el cronograma completo del evento",
		heroTitle: "San Juan | 2025",
		heroBody: "El congreso contará con una serie de conferencias, paneles y talleres de alto impacto. Descubre las actividades que marcarán la diferencia en la construcción de un futuro sostenible para San Juan y la región.",
		heroBtn: {
			text: "Ver Programa",
			link: "#timeline",
			enabled: true
		},
		heroAlt: "Imagen del cronograma de conferencias"
	},
	{
		heroId: "hero-3",
		heroImg: "hero-image-3.webp",
		heroHead: "Convocatoria para ponentes",
		heroTitle: "San Juan | 2025",
		heroBody: "Si eres un experto en desarrollo sostenible, esta es tu oportunidad para compartir tus conocimientos. Presenta tu propuesta, inspira a otros y forma parte de un evento que impulsará el cambio en nuestra región.",
		heroBtn: {
			text: "Quiero Contactarme",
			link: "mailto:congreso.sostenibilidad@uccuyo.edu.ar",
			enabled: true
		},
		heroAlt: "Imagen sobre energía renovable y sostenibilidad"
	}
];

const SectionInicio = () => {
  return /* @__PURE__ */ jsx("section", { id: "inicio", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      navigation: true,
      pagination: { clickable: true },
      autoplay: {
        delay: 12e3,
        disableOnInteraction: false
      },
      children: Data$e.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
        ElementInicio,
        {
          heroId: item.heroId,
          heroImg: item.heroImg,
          heroHead: item.heroHead,
          heroTitle: item.heroTitle,
          heroBody: item.heroBody,
          heroBtn: {
            text: item.heroBtn.text,
            link: item.heroBtn.link
          },
          heroAlt: item.heroAlt
        }
      ) }, item.heroId))
    }
  ) });
};

const bigtitle1 = "El futuro no se espera, se construye.";
const bigtitle2 = "¡Sé parte de la transformación sostenible!";
const title = "Congreso internacional";
const subtitle = "San Juan + Sostenible";
const date = "15 y 16 | Mayo 2025";
const place = "Anchipurac | San Juan - Argentina";
const id_section = "edicion2025";
const btn_section = "Inscripciones Cerradas";
const btn_url = "https://forms.gle/MsBpcmmrxRXbpp1V7";
const Data$d = {
  bigtitle1,
  bigtitle2,
  title,
  subtitle,
  date,
  place,
  id_section,
  btn_section,
  btn_url};

const Img = new Proxy({"src":"/_astro/bg-acent.BZb0hR_w.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/images/bg-acent.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$f = createAstro();
const $$ElementBasicButtonDisable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ElementBasicButtonDisable;
  const { content, href, target, aling } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mt-15 gap-4 md:text-${aling} mb-10`, "class")}> <span class="font-heading uppercase rounded-full bg-gray-300 px-5 py-4 text-sm sm:text-md font-semibold text-gray-500 shadow-sm cursor-not-allowed w-auto inline-block"> ${content} </span> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementBasicButtonDisable.astro", void 0);

const $$SectionEdicion2025 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15"${addAttribute(Data$d.id_section, "id")}> <div class="relative w-full"> <!-- Imagen de fondo --> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"${addAttribute(`background-image: url(${Img.src});`, "style")}></div> <!-- Overlay degradado oscuro --> <div class="absolute inset-0 bg-gradient-to-b from-shark-950/90 to-aqua-950/80 z-10"></div> <!-- Contenido --> <div class="relative z-20 px-4 py-16 md:py-24 text-center max-w-6xl mx-auto"> <div class="font-heading font-semibold text-shark-100 text-md md:text-xl mb-10"> <p>${Data$d.bigtitle1}</p> <p>${Data$d.bigtitle2}</p> </div> <div class="w-24 h-1 bg-nature-600 mx-auto mb-3"></div> <h3 class="font-heading text-2xl font-semibold text-white md:text-3xl"> ${Data$d.title} </h3> <h2 class="font-heading text-3xl font-bold text-white uppercase md:text-4xl"> ${Data$d.subtitle} </h2> <div class="w-24 h-1 bg-nature-600 mx-auto my-3"></div> <p class="font-body font-semibold text-lg text-sun-300"> ${Data$d.date} </p> <p class="font-body font-semibold text-lg text-sun-300 mb-6"> ${Data$d.place} </p> <!-- 
            <Button
                content="INSCRIPCIONES CERRADAS"
                href="#"
                content={Data.btn_section}
                href={Data.btn_url}
                target="_blank"
                aling="center"
            />--> ${renderComponent($$result, "ElementBasicButtonDisable", $$ElementBasicButtonDisable, { "content": Data$d.btn_section, "href": Data$d.btn_url, "target": "_blank", "aling": "center" })} </div> </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionEdicion2025.astro", void 0);

const $$Astro$e = createAstro();
const $$ElementBasicTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ElementBasicTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-cover bg-center bg-no-repeat"> <div class="text-center"> <div class="w-15 h-1 bg-nature-600 mb-2 mx-auto"></div> <h2 class="uppercase font-heading font-extrabold text-aqua-950 text-2xl sm:text-3xl lg:text-4xl"> ${text} </h2> <div class="w-24 h-1 bg-nature-600 mt-2 mx-auto"></div> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementBasicTitle.astro", void 0);

const $$Astro$d = createAstro();
const $$ElementBasicSubTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ElementBasicSubTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center md:text-start"> <h2 class="font-heading font-bold tracking-tight text-aqua-950 md:mx-auto text-lg sm:text-xl lg:text-2xl"> <span class="relative inline-block"> ${text} </span> </h2> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementBasicSubTitle.astro", void 0);

const $$Astro$c = createAstro();
const $$ElementBasicText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ElementBasicText;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${text} </p>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementBasicText.astro", void 0);

const Data$c = [
	{
		title_section: "Sobre el congreso",
		subtitle_section: "¡San Juan se transforma y vos podés ser parte del cambio!",
		body_section: "En un mundo donde la sostenibilidad ya no es una opción, sino una necesidad urgente, San Juan se posiciona como un referente en innovación y desarrollo sostenible. El III Congreso Internacional SAN JUAN + SOSTENIBLE es el espacio donde la academia, las empresas, el sector público y la sociedad civil se unen para construir soluciones estratégicas. Este evento reunirá a expertos internacionales, líderes empresariales y académicos para debatir, intercambiar ideas y proponer acciones concretas para un futuro sostenible.",
		id_section: "introduccion",
		img_section: "introduccion.jpg",
		elements: [
		]
	}
];

const $$SectionAcercaDeIntroduccion = createComponent(($$result, $$props, $$slots) => {
  const content = Data$c[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mx-auto md:flex md:items-stretch md:gap-6"> <!-- Columna de texto --> <div class="md:w-1/2"> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> </div> <!-- Columna de imagen --> <div class="py-5 md:w-1/2 md:py-0 border-b-3 border-r-3 border-aqua-800 rounded md:mt-10 lg:mt-15"> <img${addAttribute(`/images/SeccionAcercaDeIntroduccion/${content.img_section}`, "src")} alt="Descripción de la imagen" class="w-full object-cover h-full px-3 py-0 md:py-3 rounded"> </div> </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAcercaDeIntroduccion.astro", void 0);

const $$Astro$b = createAstro();
const $$ElementAcercaDeClave = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ElementAcercaDeClave;
  const { title, body, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-start gap-4 p-3 pb-0 border-l-3 border-nature-950 bg-shake-50 lg:p-5 lg:pb-0"> <div class="h-7 flex items-center justify-center"> ${image} </div> <div> <h3 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl"> ${title} </h3> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${body} </p> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAcercaDeClave.astro", void 0);

const Data$b = [
	{
		title_section: "Claves",
		subtitle_section: "¿Por qué este evento marca la diferencia?",
		body_section: "Este congreso se destaca por su capacidad de unir sectores, generar impacto real y promover soluciones innovadoras para un desarrollo sostenible. Más que un evento, es un punto de encuentro estratégico que impulsa ideas, inspira acción y consolida alianzas clave. Estas son las características que lo convierten en una experiencia única:",
		id_section: "claves",
		elements: [
			{
				image: "🔗",
				title: "Conexión entre sectores",
				body: "Vinculamos la educación, el sector productivo y el gobierno para convertir la sostenibilidad en una oportunidad de crecimiento y competitividad."
			},
			{
				image: "💡",
				title: "Innovación y conocimiento",
				body: "Presentamos las últimas tendencias en tecnología, energías renovables, economía circular, educación y desarrollo sostenible."
			},
			{
				image: "🚀",
				title: "Liderazgo y acción",
				body: "Inspiramos y promovemos estrategias de alto impacto que permitan transformar los desafíos en oportunidades para San Juan y la región."
			},
			{
				image: "🤝",
				title: "Networking estratégico",
				body: "Un espacio ideal para fortalecer redes de contacto, compartir experiencias y generar alianzas estratégicas y sostenibles."
			}
		]
	}
];

const $$SectionAcercaDeClaves = createComponent(($$result, $$props, $$slots) => {
  const content = Data$b[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result, "ElementClave", $$ElementAcercaDeClave, { "title": item.title, "body": item.body, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAcercaDeClaves.astro", void 0);

const $$Astro$a = createAstro();
const $$ElementAcercaDeObjetivo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ElementAcercaDeObjetivo;
  const { image, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sm:mx-auto text-center my-1 px-10"> <div class="flex items-center justify-center w-13 h-13 mb-4 rounded-full bg-nature-950 mx-auto sm:w-20 sm:h-20"> <img${addAttribute(`/images/objetives/${image}`, "src")} alt="" class="h-8 sm:h-12"> </div> <h3 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl mb-1 md:mb-3"> ${title} </h3> <p class="font-body text-shark-800 mb-3 text-sm sm:text-md lg:text-lg"> ${body} </p> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAcercaDeObjetivo.astro", void 0);

const Data$a = [
	{
		title_section: "Objetivos",
		subtitle_section: "Tenemos objetivos claros: ¡Impulsar, conectar, promover, inspirar!",
		body_section: "Este evento está diseñado para líderes y visionarios que buscan transformar el futuro mediante la innovación, la sostenibilidad y la colaboración estratégica. Con un enfoque único en el desarrollo regional, brindamos una plataforma para explorar oportunidades de crecimiento, compartir conocimientos de vanguardia y fortalecer alianzas clave. A continuación, te presentamos los pilares que hacen de este congreso una experiencia transformadora para empresas, gobiernos y organizaciones:",
		id_section: "objetivos",
		elements: [
			{
				title: "Impulsar la transformación sostenible",
				body: "Reunir a los principales actores del ámbito académico, empresarial y gubernamental para diseñar estrategias que consoliden a San Juan como un referente en sostenibilidad y economía verde.",
				image: "conexion.svg"
			},
			{
				title: "Conectar educación y acción",
				body: "Fortalecer el papel de las universidades como laboratorios de ideas y soluciones, promoviendo la investigación y la formación de profesionales que lideren la transición sostenible.",
				image: "educacion.svg"
			},
			{
				title: "Articular sectores estratégicos",
				body: "Crear sinergias entre la academia, el sector productivo y el Estado para fomentar la inversión en tecnologías limpias, energías renovables, economía circular y políticas de desarrollo sostenible.",
				image: "sectores.svg"
			},
			{
				title: "Promover la innovación con impacto",
				body: "Explorar y visibilizar proyectos de vanguardia que transformen desafíos ambientales y sociales en oportunidades de desarrollo para la provincia y la región.",
				image: "innovacion.svg"
			},
			{
				title: "Inspirar y movilizar",
				body: "A través de paneles de expertos, casos de éxito y espacios de networking, buscamos motivar a las empresas y organizaciones a integrar la sostenibilidad en su ADN y generar impacto positivo en la comunidad.",
				image: "inspirar.svg"
			},
			{
				title: "San Juan como modelo de desarrollo",
				body: "San Juan tiene el potencial de ser un modelo de desarrollo equilibrado, inclusivo y responsable. Este congreso es la oportunidad de unir fuerzas para acelerar el cambio.",
				image: "modelo.svg"
			}
		]
	}
];

const $$SectionAcercaDeObjetivos = createComponent(($$result, $$props, $$slots) => {
  const content = Data$a[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result, "ElementObjetivo", $$ElementAcercaDeObjetivo, { "title": item.title, "body": item.body, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAcercaDeObjetivos.astro", void 0);

const $$Astro$9 = createAstro();
const $$ElementBasicButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ElementBasicButtonLink;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="text-xs sm:text-sm inline-flex items-center gap-1 text-shark-800 border border-shark-800 rounded-full px-2 py-0.5 hover:bg-nature-950 hover:text-shark-50 transition-colors cursor-pointer">
Visitar Web
<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </a>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementBasicButtonLink.astro", void 0);

const $$Astro$8 = createAstro();
const $$ElementAcercaDeOrganizador = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ElementAcercaDeOrganizador;
  const { title, body, href, alt, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row bg-shark-50 rounded-lg overflow-hidden m-4 md:m-6 px-10 sm:px-20 md:p-0"> <img${addAttribute(`/images/organizers/${image}`, "src")}${addAttribute(alt, "alt")} class="w-full mb-5 object-contain max-h-15 md:w-2/7 lg:w-1/3 lg:max-h-20"> <div class="flex-1 text-center md:text-left ml-4"> <h3 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl mb-1 md:mb-3"> ${title} </h3> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${body} </p> <div class="mt-2 flex flex-wrap gap-4 text-center items-center justify-center md:justify-start"> ${renderComponent($$result, "ElementBasicButtonLink", $$ElementBasicButtonLink, { "link": href })} </div> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAcercaDeOrganizador.astro", void 0);

const Data$9 = [
	{
		title_section: "Organizadores",
		subtitle_section: "Universidades y organismos públicos que lideran el compromiso con el desarrollo responsable",
		body_section: "Este congreso es posible gracias al compromiso de instituciones académicas y gubernamentales que lideran iniciativas estratégicas en sostenibilidad, innovación y desarrollo regional. Su colaboración garantiza una propuesta sólida, con base científica, visión humanista y enfoque territorial.",
		id_section: "organizadores",
		elements: [
			{
				title: "Instituto de Desarrollo Sostenible | Universidad Católica de Cuyo",
				body: "Centro de investigación y formación académica que impulsa estrategias para la sostenibilidad en universidades, empresas y la sociedad.",
				href: "https://uccuyo.edu.ar/",
				alt: "Logotipo del Instituto de Desarrollo Sostenible (IDS)",
				image: "ids.png"
			},
			{
				title: "Vicerrectorado en Formación | Universidad Católica de Cuyo",
				body: "Promueve la ética y responsabilidad social en el ámbito académico, formando líderes con una visión humanista y sostenible.",
				href: "https://uccuyo.edu.ar/",
				alt: "Logotipo del Vicerrectorado en Formación",
				image: "catolica.png"
			},
			{
				title: "Facultad de Cs. Económicas y Empresariales | Universidad Católica de Cuyo",
				body: "Forma profesionales con sólidos conocimientos económicos y empresariales, comprometidos con el desarrollo sustentable y la innovación.",
				href: "https://uccuyo.edu.ar/",
				alt: "Logotipo de la Facultad de Cs. Económicas y Empresariales",
				image: "economicas.png"
			},
			{
				title: "Ministerio de Minería de San Juan | Gobierno de San Juan",
				body: "Fomenta una minería responsable y sostenible con inversión en energías limpias y reducción del impacto ambiental.",
				href: "https://mineria.sanjuan.gob.ar/",
				alt: "Logotipo del Ministerio de Minería de San Juan",
				image: "mineria.png"
			},
			{
				title: "Secretaría de Ambiente y Desarrollo Sustentable | Gobierno de San Juan",
				body: "Implementa políticas para equilibrar el desarrollo económico con la conservación del medio ambiente en San Juan.",
				href: "https://ambiente.sanjuan.gob.ar/",
				alt: "Logotipo de la Secretaría de Ambiente y Desarrollo Sustentable",
				image: "ambiente.png"
			}
		]
	}
];

const $$SectionAcercaDeOrganizadores = createComponent(($$result, $$props, $$slots) => {
  const content = Data$9[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> <div class="grid gap-10 mt-8"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result, "ElementOrganizador", $$ElementAcercaDeOrganizador, { "title": item.title, "body": item.body, "href": item.href, "alt": item.alt, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAcercaDeOrganizadores.astro", void 0);

const $$Astro$7 = createAstro();
const $$ElementPatrocinioDestacado = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ElementPatrocinioDestacado;
  const { title, body, link, logo, primary_color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-full"> <div class="flex flex-col items-center text-center px-6 py-8 md:px-12 md:py-10 bg-white rounded-2xl shadow-sm hover:shadow-lg transition h-[20rem] md:h-[25rem]"> <!-- Logo --> <div class="h-24 w-40 md:h-28 md:w-48 flex items-center justify-center mb-6"> <img${addAttribute(`/images/SectionPatrociniosDestacados/${logo}`, "src")}${addAttribute(title, "alt")} class="h-full w-full object-contain transition-transform hover:scale-105"> </div> <!-- Content --> <div class="flex flex-col justify-between flex-grow w-full max-w-3xl"> <div class="space-y-3"> <h3 class="font-heading font-bold leading-6 text-md sm:text-lg lg:text-xl"${addAttribute(`color: ${primary_color}`, "style")}> ${title} </h3> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${body} </p> </div> <div class="pt-4 mt-auto"> ${renderComponent($$result, "ElementBasicButtonLink", $$ElementBasicButtonLink, { "link": link })} </div> </div> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementPatrocinioDestacado.astro", void 0);

const Data$8 = [
	{
		title_section: "Patrocinadores",
		subtitle_section: "Empresas líderes que impulsan la sostenibilidad y la innovación en San Juan",
		body_section: "Agradecemos a las empresas que, con visión de futuro y compromiso ambiental, acompañan este congreso como patrocinadores destacados. Su apoyo es clave para promover una economía regional más innovadora, sostenible y competitiva.",
		id_section: "destacados",
		elements: [
			{
				title: "L&G | Logística y Gastronomía SRL",
				body: "Soluciones integrales en logística, gastronomía, hotelería y transporte para operaciones en sitios remotos, con más de 35 años de experiencia.",
				link: "https://lygsrl.com/",
				primary_color: "#AF261C",
				logo: "lg.png"
			},
			{
				title: "Minas Argentinas S.A. | Gualcamayo",
				body: "Operadora de la mina Gualcamayo en San Juan, especializada en oro y plata, con foco en innovación y desarrollo sostenible.",
				link: "https://minasargentinas.com/",
				primary_color: "#416658",
				logo: "minas_argentinas.png"
			},
			{
				title: "McEwen Mining | Los Azules",
				body: "Desarrollo de un proyecto cuprífero a gran escala en San Juan, con enfoque en producción responsable y exportación internacional.",
				link: "https://www.mcewenmining.com/operations/los-azules/default.aspx",
				primary_color: "#104153",
				logo: "los_azules.png"
			},
			{
				title: "HUARPE | Seguridad Integral",
				body: "Servicios de seguridad integral para minería, industrias, hospitales y más, con tecnología avanzada y enfoque en calidad y confianza.",
				link: "https://huarpeseguridad.com/oficial/",
				primary_color: "#02AD5E",
				logo: "huarpe_seguridad_integral.png"
			},
			{
				title: "VICUÑA",
				body: "Promotores de un distrito cuprífero binacional con visión sostenible, impulsando el cobre como motor de la transición energética.",
				link: "https://vicuna.com/",
				primary_color: "#323B82",
				logo: "vicunia.png"
			},
			{
				title: "Clínica el Castaño",
				body: "Atención médica integral con tecnología avanzada y equipos profesionales, enfocada en calidad y compromiso con la comunidad.",
				link: "https://clinicaelcastano.ar/",
				primary_color: "#CB2C36",
				logo: "clinica_el_castanio.png"
			}
		]
	}
];

const $$SectionPatrociniosDestacados = createComponent(($$result, $$props, $$slots) => {
  const content = Data$8[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> ${Data$8.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 lg:gap-10 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result2, "ElementDestacado", $$ElementPatrocinioDestacado, { "title": item.title, "body": item.body, "link": item.link, "logo": item.logo, "primary_color": item.primary_color })}`)} </div> ` })}`} </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionPatrociniosDestacados.astro", void 0);

const $$Astro$6 = createAstro();
const $$ElementPatrocinioOficial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ElementPatrocinioOficial;
  const { title, link, logo, primary_color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition px-4 py-4 md:px-5 md:py-5 h-[6rem] md:h-[8rem] w-full text-center"> <img${addAttribute(`/images/SectionPatrociniosOficiales/${logo}`, "src")}${addAttribute(title, "alt")} class="h-full mx-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"> </a>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementPatrocinioOficial.astro", void 0);

const Data$7 = [
	{
		title_section: "Patrocinadores Oficiales",
		subtitle_section: "Actores estratégicos que respaldan el desarrollo sustentable del evento",
		body_section: "Empresas y organizaciones comprometidas con la sostenibilidad hacen posible este encuentro a través de su apoyo como patrocinadores oficiales. Cada una aporta valor desde su sector, fortaleciendo las redes que construyen un futuro mejor para San Juan.",
		id_section: "oficiales",
		elements: [
			{
				title: "DREAM SRL | Transporte de pasajeros y carga para minería",
				body: "Transporte logístico para minería con flota de nivel internacional y compromiso con el desarrollo de comunidades locales.",
				link: "https://dreammin.com.ar/",
				primary_color: "#FEE227",
				logo: "dream_srl.png"
			},
			{
				title: "Bolsa de Comercio San Juan S.A",
				body: "Institución clave para el desarrollo económico regional, promoviendo inversión, asesoramiento financiero y formación.",
				link: "https://www.bolsasanjuan.com.ar/",
				primary_color: "#166DF3",
				logo: "bolsa_comercio_san_juan.png"
			},
			{
				title: "20 de Junio S.A. | Transportes Automotores",
				body: "Empresa con más de 75 años de trayectoria en transporte de pasajeros, con enfoque en calidad, innovación y servicio.",
				link: "https://la20.com.ar/",
				primary_color: "#80BC22",
				logo: "20_de_junio.png"
			},
			{
				title: "Finca Sierras Azules",
				body: "Bodega boutique al pie de las Sierras Azules, especializada en varietales de alta calidad y experiencias enoturísticas.",
				link: "https://www.fincasierrasazules.com.ar/",
				primary_color: "#122744",
				logo: "finca_sierras_azules.png"
			},
			{
				title: "SJB | Finanzas Expertas",
				body: "Agente líder en el mercado de capitales, con más de 20 años asesorando y gestionando inversiones con visión profesional.",
				link: "https://www.sjb.com.ar/",
				primary_color: "#166DF3",
				logo: "sjb_finanzas_expertas.png"
			},
			{
				title: "Bodega Merced Del Estero",
				body: "Bodega familiar que elabora vinos finos de alta calidad, con identidad propia y foco en la satisfacción de sus clientes.",
				link: "https://www.merceddelestero.com.ar/",
				primary_color: "#886C51",
				logo: "merced_del_estero.png"
			}
		]
	}
];

const $$SectionPatrociniosOficiales = createComponent(($$result, $$props, $$slots) => {
  const content = Data$7[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <!-- 
    <div class="mt-15">
        <ElementBasicTitle text={content.title_section} />
    </div>
    --> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> ${Data$7.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-3 lg:gap-10 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result2, "ElementOficial", $$ElementPatrocinioOficial, { "title": item.title, "body": item.body, "link": item.link, "logo": item.logo, "primary_color": item.primary_color })}`)} </div> ` })}`} </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionPatrociniosOficiales.astro", void 0);

const $$Astro$5 = createAstro();
const $$ElementPatrocinioInstitucion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ElementPatrocinioInstitucion;
  const { title, body, link, logo, primary_color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-full"> <div class="flex flex-col items-center text-center px-6 py-8 md:px-12 md:py-10 bg-white rounded-2xl shadow-sm hover:shadow-lg transition h-[20rem] md:h-[27rem]"> <div class="h-24 w-40 md:h-28 md:w-48 flex items-center justify-center mb-6"> <img${addAttribute(`/images/SectionPatrociniosInstitucionales/${logo}`, "src")}${addAttribute(title, "alt")} class="h-full w-full object-contain transition-transform hover:scale-105"> </div> <div class="flex flex-col justify-between flex-grow w-full max-w-3xl"> <div class="space-y-3"> <h3 class="font-heading font-bold leading-6 text-md sm:text-lg lg:text-xl"${addAttribute(`color: ${primary_color}`, "style")}> ${title} </h3> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${body} </p> </div> <div class="pt-4 mt-auto"> ${renderComponent($$result, "ElementBasicButtonLink", $$ElementBasicButtonLink, { "link": link })} </div> </div> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementPatrocinioInstitucion.astro", void 0);

const Data$6 = [
	{
		title_section: "Patrocinadores Institucionales",
		subtitle_section: "Instituciones educativas y productivas que respaldan el cambio",
		body_section: "El congreso cuenta con el respaldo de instituciones académicas y productivas que impulsan el desarrollo del conocimiento, la innovación y la articulación territorial. Su compromiso es fundamental para fomentar una cultura sostenible desde la educación y la industria.",
		id_section: "institucionales",
		elements: [
			{
				title: "Facultad de Arquitectura Urbanismo y Diseño",
				body: "Formadora de arquitectos y diseñadores desde la reconstrucción de San Juan, con fuerte compromiso con el desarrollo urbano y social.",
				link: "https://faud.unsj.edu.ar/",
				primary_color: "#F7C31F",
				logo: "faud.png"
			},
			{
				title: "Fundación H.A. Barceló | Facultad de Medicina",
				body: "Institución universitaria líder en Ciencias de la Salud, con sedes en todo el país y enfoque en formación, investigación y salud comunitaria.",
				link: "https://www.barcelo.edu.ar/",
				primary_color: "#1C3858",
				logo: "fundacion_h_a_barcelo.png"
			},
			{
				title: "Unión Industrial de San Juan",
				body: "Organización que impulsa el desarrollo industrial sostenible en San Juan, articulando sectores productivos y promoviendo políticas públicas y proyectos estratégicos.",
				link: "https://uisj.online/",
				primary_color: "#5A330F",
				logo: "union_industrial.png"
			},
			{
				title: "Federación Económica de San Juan",
				body: "Institución que representa a cámaras empresarias de todos los sectores económicos de la provincia. Promueve el desarrollo empresarial y forma parte de CAME.",
				link: "https://www.fesj.com.ar/",
				primary_color: "#002784",
				logo: "federacion_economica_sanjuan.png"
			}
		]
	}
];

const $$SectionPatrociniosInstitucionales = createComponent(($$result, $$props, $$slots) => {
  const content = Data$6[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> ${Data$6.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 lg:gap-10 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result2, "ElementInstitucion", $$ElementPatrocinioInstitucion, { "title": item.title, "body": item.body, "link": item.link, "logo": item.logo, "primary_color": item.primary_color })}`)} </div> ` })}`} </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionPatrociniosInstitucionales.astro", void 0);

const image = new Proxy({"src":"/_astro/anchipurac.C0PbkbAt.png","width":239,"height":120,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/images/anchipurac.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { content, href, target, aling } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mt-15 gap-4 md:text-${aling} mb-10`, "class")}> <a${addAttribute(href, "href")}${addAttribute(target, "target")} class="font-heading uppercase rounded-full bg-nature-600 px-5 py-4 text-sm sm:text-md font-semibold text-aqua-50 shadow-sm hover:bg-nature-700 focus:ring-3 focus:outline-hidden w-auto"> ${content} </a> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Button.astro", void 0);

const Data$5 = [
	{
		title_section: "Ubicacion",
		subtitle_section: "Conoce la sede, conoce el Centro Ambiental Anchipurac",
		body_section: "Ubicado en la provincia de San Juan, Argentina, el Centro Ambiental Anchipurac es un referente en educación ambiental y sostenibilidad. Su innovadora arquitectura y enfoque ecológico lo convierten en un espacio único para aprender sobre el cuidado del planeta.",
		id_section: "ubicacion",
		btn_section: "¡Quiero conocerlo!",
		btn_url: "https://anchipurac.sanjuan.gob.ar/",
		elements: [
		]
	}
];

const $$SectionAgendaUbicacion = createComponent(($$result, $$props, $$slots) => {
  const content = Data$5[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15"${addAttribute(content.id_section, "id")}> <div class="w-full bg-gradient-to-r from-nature-200 to-sun-200 py-10" id="place"> <div class="mx-auto px-5"> <div class="mx-auto max-w-6xl flex flex-col md:flex-row lg:items-center md:gap-6 py-6 text-center md:text-left"> <!-- Imagen del lugar --> <img${addAttribute(image.src, "src")} alt="Centro Ambiental Anchipurac" class="w-2/3 md:w-1/3 lg:w-1/4 mx-auto md:mx-0 md:mr-4 my-4"> <!-- Contenedor de texto --> <div class="md:w-2/3 lg:w-3/4"> <h2 class="font-heading font-bold tracking-tight text-aqua-950 md:mx-auto text-xl sm:text-2xl lg:text-3xl"> ${content.subtitle_section} </h2> <p class="font-body text-shark-800 text-md sm:text-lg lg:text-xl mt-4"> ${content.body_section} </p> ${renderComponent($$result, "Button", $$Button, { "content": content.btn_section, "href": content.btn_url, "target": "_blank", "aling": "start" })} </div> </div> </div> </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAgendaUbicacion.astro", void 0);

const $$Astro$3 = createAstro();
const $$ElementAgendaTematica = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ElementAgendaTematica;
  const { title, body, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center bg-shark-50 rounded-lg p-3"> <img${addAttribute(`/images/topics/${image}`, "src")} alt="Gestión" class="w-16 h-16 rounded-full border-4 border-nature-950 bg-nature-50 p-2"> <div class="ml-4"> <h3 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl"> ${title} </h3> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${body} </p> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAgendaTematica.astro", void 0);

const Data$4 = [
	{
		title_section: "Temática",
		subtitle_section: "Ejes estratégicos para avanzar hacia un futuro sostenible",
		body_section: "El Congreso aborda la sostenibilidad desde una mirada integral, explorando su aplicación en la gestión pública y privada, la educación, los sectores productivos y la política pública. A través de estas temáticas clave, buscamos generar un espacio de reflexión, aprendizaje y acción en torno a los desafíos y oportunidades que plantea el desarrollo sostenible.",
		id_section: "tematicas",
		elements: [
			{
				title: "Sostenibilidad modelo de gestión",
				body: "Estrategias y modelos para integrar la sostenibilidad en la gestión empresarial y organizacional.",
				image: "gestion.png"
			},
			{
				title: "Políticas sostenibles",
				body: "Normativas y estrategias gubernamentales para impulsar la sostenibilidad en distintos sectores.",
				image: "politicas.png"
			},
			{
				title: "Sostenibilidad en sectores productivos",
				body: "Adaptación de industrias y procesos productivos a modelos más sostenibles y responsables.",
				image: "sectores.png"
			},
			{
				title: "Sostenibilidad en empresas",
				body: "Implementación de prácticas sostenibles en el sector empresarial para minimizar impactos ambientales.",
				image: "empresas.png"
			},
			{
				title: "Sostenibilidad en la educación",
				body: "Formación y concienciación sobre sostenibilidad en instituciones educativas y programas académicos.",
				image: "educacion.png"
			},
			{
				title: "Medición de la sostenibilidad",
				body: "Métodos y herramientas para evaluar el impacto ambiental, social y económico de proyectos sostenibles.",
				image: "medicion.png"
			}
		]
	}
];

const $$SectionAgendaTematicas = createComponent(($$result, $$props, $$slots) => {
  const content = Data$4[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mt-10 lg:mt-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result, "ElementTematica", $$ElementAgendaTematica, { "title": item.title, "body": item.body, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAgendaTematicas.astro", void 0);

const $$Astro$2 = createAstro();
const $$ElementAgendaExpositor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ElementAgendaExpositor;
  const { title, subtitle, body, country, altc, image, alti } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-shark-50 rounded-lg p-3 text-center"> <img${addAttribute(`/images/countries/${country}`, "src")}${addAttribute(altc, "alt")} class="w-20 h-20 mx-auto mb-1 rounded-full object-cover"> <h3 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl"> ${title} </h3> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${subtitle} </p> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAgendaExpositor.astro", void 0);

const Data$3 = [
	{
		title_section: "Expositores Internacionales",
		subtitle_section: "Referentes globales en sostenibilidad, innovación y desarrollo estratégico",
		body_section: "El Congreso contará con la participación de destacados referentes académicos y profesionales de América Latina, Europa y Asia, que compartirán sus conocimientos, experiencias y visiones sobre sostenibilidad, innovación, economía circular, educación y gestión ambiental. Cada expositor aporta una mirada única que enriquecerá el diálogo y ofrecerá herramientas valiosas para enfrentar los desafíos actuales y futuros del desarrollo sostenible.",
		id_section: "expositores",
		elements: [
			{
				title: "PhD Frederic Marimon",
				subtitle: "Universidad Internacional de Cataluña",
				body: "Especialista en gestión de calidad y rendimiento organizacional.",
				country: "es.svg",
				altc: "España",
				image: "images/speakers/frederic_marimon.jpg",
				alti: "Foto de PhD Frederic Marimon"
			},
			{
				title: "MBA Laura Accifonte",
				subtitle: "Coordinadora de la Comisión Permanente de Sostenibilidad Latinoamericana de Emisores de Información Financiera",
				body: "Experta en sostenibilidad y reportes financieros en Latinoamérica.",
				country: "lx.svg",
				altc: "Latinoamérica",
				image: "images/speakers/laura_accifonte.jpg",
				alti: "Foto de MBA Laura Accifonte"
			},
			{
				title: "PhD Abraham Apaza",
				subtitle: "Universidad Nacional Jorge Basadre Grohmann",
				body: "Investigador en sostenibilidad y desarrollo económico en Perú.",
				country: "pe.svg",
				altc: "Perú",
				image: "images/speakers/abraham_apaza.jpg",
				alti: "Foto de PhD Abraham Apaza"
			},
			{
				title: "PhD Jasmina Berbegal",
				subtitle: "Universidad Politécnica de Cataluña",
				body: "Especialista en innovación y estrategias empresariales.",
				country: "es.svg",
				altc: "España",
				image: "images/speakers/jasmina_berbegal.jpg",
				alti: "Foto de PhD Jasmina Berbegal"
			},
			{
				title: "MBA NaLyan",
				subtitle: "Universidad Politécnica de Cataluña",
				body: "Experta en negocios internacionales y emprendimiento.",
				country: "cn.svg",
				altc: "China",
				image: "images/speakers/nalyan.jpg",
				alti: "Foto de MBA NaLyan"
			},
			{
				title: "PhD Didier Grimalt",
				subtitle: "Universidad Politécnica de Cataluña",
				body: "Investigador en estrategias de sostenibilidad y gestión ambiental.",
				country: "fr.svg",
				altc: "Francia",
				image: "images/speakers/didier_grimalt.jpg",
				alti: "Foto de PhD Didier Grimalt"
			},
			{
				title: "PhD Jordi Segalas",
				subtitle: "Universidad Politécnica de Cataluña",
				body: "Especialista en educación para la sostenibilidad y diseño ecológico.",
				country: "es.svg",
				altc: "España",
				image: "images/speakers/jordi_segalas.jpg",
				alti: "Foto de PhD Jordi Segalas"
			},
			{
				title: "PhD Valmir Martins",
				subtitle: "Universidad Autónoma de Chile",
				body: "Investigador en economía circular y desarrollo sustentable.",
				country: "cl.svg",
				altc: "Chile",
				image: "images/speakers/valmir_martins.jpg",
				alti: "Foto de PhD Valmir Martins"
			},
			{
				title: "PhD José Luis Soriano",
				subtitle: "Universidad de Guadalajara",
				body: "Experto en desarrollo empresarial y economía sustentable.",
				country: "mx.svg",
				altc: "México",
				image: "images/speakers/jose_luis_soriano.jpg",
				alti: "Foto de PhD José Luis Soriano"
			},
			{
				title: "MBA Marcela Vergara",
				subtitle: "Universidad Internacional de Cataluña",
				body: "Especialista en innovación y gestión estratégica de empresas.",
				country: "cl.svg",
				altc: "Chile",
				image: "images/speakers/marcela_vergara.jpg",
				alti: "Foto de MBA Marcela Vergara"
			},
			{
				title: "Ricardo Faria",
				subtitle: "Representante de ZeoGroup",
				body: "Especialista en soluciones tecnológicas con zeolitas naturales.",
				country: "br.svg",
				altc: "Brasil",
				image: "images/speakers/ricardo_faria.jpg",
				alti: "Foto de Ricardo Faria"
			},
			{
				title: "Martin Lázzaro",
				subtitle: "Representante INZA",
				body: "Especialista en International Natural Zeolite Association.",
				country: "ar.svg",
				altc: "Argentina",
				image: "images/speakers/martin_lazzaro.jpg",
				alti: "Foto de Martin Lázzaro"
			}
		]
	}
];

const $$SectionAgendaExpositores = createComponent(($$result, $$props, $$slots) => {
  const content = Data$3[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> <div class="mt-18"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": content.subtitle_section })} </div> <div class="mt-5"> ${renderComponent($$result, "ElementBasicText", $$ElementBasicText, { "text": content.body_section })} </div> <div class="grid gap-10 grid-cols-2 lg:grid-cols-3 mt-10"> ${content.elements.map((item) => renderTemplate`${renderComponent($$result, "ElementExpositor", $$ElementAgendaExpositor, { "title": item.title, "subtitle": item.subtitle, "body": item.body, "country": item.country, "altc": item.altc, "image": item.image, "alti": item.alti })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAgendaExpositores.astro", void 0);

const $$Astro$1 = createAstro();
const $$ElementAgendaPrograma = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ElementAgendaPrograma;
  const { title, body, date, position, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container-timeline ${position}`, "class")}> <div class="date">${date}</div> <i${addAttribute(`icon fa ${icon}`, "class")}></i> <!-- Ícono dinámico --> <div class="content-timeline"> <h2 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl"> ${title} </h2> <p class="font-body text-shark-800 text-sm sm:text-md lg:text-lg"> ${body} </p> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAgendaPrograma.astro", void 0);

const Data$2 = [
	{
		title_section: "Programa",
		subtitle_section: "",
		body_section: "",
		id_section: "programa",
		elements: [
			{
				day: "Jueves 15 de Mayo 2025",
				events: [
					{
						title: "Acreditación",
						body: "Recepción de asistentes y entrega de materiales.",
						date: "09:00",
						icon: "fa-user-check"
					},
					{
						title: "Acto de Apertura",
						body: "Palabras de bienvenida de la Rectora UCCuyo, Vicerrector",
						date: "09:45",
						icon: "fa-microphone"
					},
					{
						title: "Panel 1: Sostenibilidad, modelo de gestión",
						body: "Discusión sobre estrategias para la sostenibilidad organizacional.",
						date: "10:30",
						icon: "fa-users"
					},
					{
						title: "Coffe Break",
						body: "Espacio para networking y descanso.",
						date: "11:15",
						icon: "fa-coffee"
					},
					{
						title: "Exposiciones de Trabajos",
						body: "Investigadores presentarán sus estudios sobre sostenibilidad y gestión.",
						date: "11:30",
						icon: "fa-file-alt"
					},
					{
						title: "Conferencia Magistral",
						body: "PhD. Frederic Marimon hablará sobre estrategias de calidad y sostenibilidad.",
						date: "12:10",
						icon: "fa-chalkboard-teacher"
					},
					{
						title: "Exposiciones de Trabajos",
						body: "Debate y presentaciones de proyectos de sostenibilidad.",
						date: "15:00",
						icon: "fa-file-alt"
					},
					{
						title: "Panel 2: La sostenibilidad en el sector empresarial",
						body: "Enfoque en prácticas sostenibles en empresas y su impacto.",
						date: "16:00",
						icon: "fa-users"
					},
					{
						title: "Coffe Break",
						body: "Espacio para networking y descanso.",
						date: "17:00",
						icon: "fa-coffee"
					},
					{
						title: "Panel 3: La sostenibilidad en los sectores productivos",
						body: "Cómo la sostenibilidad transforma industrias clave.",
						date: "17:30",
						icon: "fa-users"
					}
				]
			},
			{
				day: "Viernes 16 de Mayo 2025",
				events: [
					{
						title: "Exposiciones de Trabajos",
						body: "Nuevas investigaciones en el campo de la sostenibilidad.",
						date: "09:30",
						icon: "fa-file-alt"
					},
					{
						title: "Panel 4: Políticas de Sostenibilidad",
						body: "Discusión sobre regulaciones y políticas ambientales.",
						date: "10:30",
						icon: "fa-users"
					},
					{
						title: "Coffe Break",
						body: "Espacio para networking y descanso.",
						date: "11:30",
						icon: "fa-coffee"
					},
					{
						title: "Panel 5: Sostenibilidad en la Educación",
						body: "Estrategias educativas para fomentar la sostenibilidad.",
						date: "12:00",
						icon: "fa-users"
					},
					{
						title: "Exposiciones de Trabajos",
						body: "Investigaciones sobre sostenibilidad y su impacto.",
						date: "15:00",
						icon: "fa-file-alt"
					},
					{
						title: "Panel 6: Medición y comunicación de la sostenibilidad",
						body: "Métodos para evaluar el impacto sostenible en organizaciones.",
						date: "16:00",
						icon: "fa-users"
					},
					{
						title: "Cierre del Congreso",
						body: "Palabras finales de la Rectora y despedida del evento.",
						date: "17:00",
						icon: "fa-door-closed"
					}
				]
			}
		]
	}
];

const $$SectionAgendaPrograma = createComponent(($$result, $$props, $$slots) => {
  const content = Data$2[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-0
        sm:px-10
        md:px-20
        lg:max-w-6xl"${addAttribute(content.id_section, "id")}> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": content.title_section })} </div> ${content.elements.map((item) => renderTemplate`<div> <!-- Subtítulo con el día --> <div class="mt-15"> <div class="mt-18"> <div class="pl-5 text-left md:text-center md:pl-0"> <h2 class="font-heading font-bold tracking-tight text-aqua-950 md:mx-auto text-lg sm:text-xl lg:text-2xl"> <span class="relative inline-block"> ${item.day} </span> </h2> </div> </div> </div> <!-- Timeline --> <div class="timeline"> ${item.events.map((event, index) => renderTemplate`${renderComponent($$result, "ElementPrograma", $$ElementAgendaPrograma, { "title": event.title, "body": event.body, "date": event.date, "position": index % 2 === 0 ? "left" : "right", "icon": event.icon })}`)} </div> </div>`)} </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAgendaPrograma.astro", void 0);

const $$Astro = createAstro();
const $$ElementAgendaCronograma = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ElementAgendaCronograma;
  const { time, panel, participants } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-2xl shadow-md p-6"> <div class="font-heading font-bold text-shark-950 leading-6 text-lg sm:text-xl lg:text-2xl mb-3"> ${time} </div> <h4 class="font-heading font-bold text-nature-950 leading-6 text-md sm:text-lg lg:text-xl mb-10"> ${panel} </h4> ${participants.length > 0 ? renderTemplate`<ul class="space-y-8"> ${participants.map((p) => renderTemplate`<li class="flex items-start gap-4"> <img${addAttribute(`/images/countries/${p.flag}`, "src")}${addAttribute(p.country, "alt")} class="w-10 h-10 mt-1 flex-shrink-0 rounded-full object-cover"> <div> <p class="font-heading font-bold text-shark-950 leading-6 text-sm sm:text-md lg:text-lg"> ${p.name} </p> <p class="font-body text-sm text-gray-600"> ${p.institution} </p> <p class="font-body text-sm text-gray-600"> ${p.country} </p> </div> </li>`)} </ul>` : renderTemplate`<p class="text-gray-500 italic">
Espacio para networking y descanso.
</p>`} </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementAgendaCronograma.astro", void 0);

const Data$1 = /* #__PURE__ */ JSON.parse("[{\"date\":\"15 de mayo 2025\",\"schedule\":[{\"time\":\"09:00\",\"panel\":\"Charla Magistral\",\"participants\":[{\"name\":\"PhD. Frederic Marimon\",\"institution\":\"Universidad Internacional de Cataluña\",\"country\":\"España\",\"flag\":\"es.svg\",\"photo\":\"frederic_marimon.jpg\"}]},{\"time\":\"10:30-12:00\",\"panel\":\"Educación para la Sostenibilidad\",\"participants\":[{\"name\":\"PhD. Jordi Segalas\",\"institution\":\"Universidad Politécnica de Cataluña\",\"country\":\"España\",\"flag\":\"es.svg\",\"photo\":\"jordi_segalas.jpg\"},{\"name\":\"MBA. Na Liang\",\"institution\":\"Universidad Politécnica de Cataluña\",\"country\":\"China\",\"flag\":\"cn.svg\",\"photo\":\"na_liang.jpg\"},{\"name\":\"Lic. Daniela Gamez\",\"institution\":\"Universidad Nacional de San Juan\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"daniela_gamez.jpg\"},{\"name\":\"MBA Florencia López\",\"institution\":\"Red Académica Argentina por los Objetivos del Desarrollo Sostenible\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"florencia_lopez.jpg\"},{\"name\":\"MBA Noelia Wayar\",\"institution\":\"Universidad Nacional de Córdoba\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"noelia_wayar.jpg\"},{\"name\":\"PhD. Abrahan Apaza\",\"institution\":\"Universidad Nacional Jorge Basadre Grohmann\",\"country\":\"Perú\",\"flag\":\"pe.svg\",\"photo\":\"abrahan_apaza.jpg\"},{\"name\":\"MBA Marcela Vergara\",\"institution\":\"Universidad de los Andes\",\"country\":\"Chile\",\"flag\":\"cl.svg\",\"photo\":\"marcela_vergara.jpg\"},{\"name\":\"Dr. Gustavo Giboin\",\"institution\":\"Universidad Católica de Cuyo - San Luis\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"gustavo_giboin.jpg\"},{\"name\":\"MBA. César Javier Coria Augusto\",\"institution\":\"Instituto de Desarrollo Sostenible\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"cesar_javier_coria_augusto.jpg\"},{\"name\":\"Lic. Natalia Suarez\",\"institution\":\"Universidad de Congreso\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"natalia_suarez.jpg\"}]},{\"time\":\"12:30-13:30\",\"panel\":\"Charla Magistral\",\"participants\":[{\"name\":\"PhD. Frederic Marimon\",\"institution\":\"Universidad Internacional de Cataluña\",\"country\":\"España\",\"flag\":\"es.svg\",\"photo\":\"frederic_marimon.jpg\"}]},{\"time\":\"13:00-15:00\",\"panel\":\"Brunch-Posters\",\"participants\":[]},{\"time\":\"15:00-16:30\",\"panel\":\"Medición y Comunicación de la Sostenibilidad\",\"participants\":[{\"name\":\"MBA Laura Accifonte\",\"institution\":\"Coordinadora de la Comisión Permanente de Sostenibilidad Latinoamericana de Emisores de Información Financiera\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"laura_accifonte.jpg\"},{\"name\":\"PhD. José Luis Soriano\",\"institution\":\"Universidad de Guadalajara\",\"country\":\"México\",\"flag\":\"mx.svg\",\"photo\":\"jose_luis_soriano.jpg\"},{\"name\":\"MBA Celeste Olivares\",\"institution\":\"Instituto de Desarrollo Sostenible\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"celeste_olivares.jpg\"},{\"name\":\"MBA Ada Rodrigues\",\"institution\":\"Bolsa de Comercio\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"ada_rodrigues.jpg\"},{\"name\":\"Lic. Alfredo Fonzar\",\"institution\":\"COVIAR\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"alfredo_fonzar.jpg\"},{\"name\":\"PhD Martín Lazzaro\",\"institution\":\"Universidad Nacional de La Plata - CONICET\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"martin_lazzaro.jpg\"}]},{\"time\":\"16:30-17:30\",\"panel\":\"Coffee-Posters\",\"participants\":[]},{\"time\":\"17:30-19:00\",\"panel\":\"Minería Sostenible\",\"participants\":[{\"name\":\"Dr. Juan Pablo Perea\",\"institution\":\"Ministerio de Minería\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"juan_pablo_perea.jpg\"},{\"name\":\"Lic. Iván Grgic\",\"institution\":\"Vicuña\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"ivan_grgic.jpg\"},{\"name\":\"Ing. Mario Hernández\",\"institution\":\"Los Azules\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"mario_hernandez.jpg\"},{\"name\":\"Lic. Marcelo Agulles\",\"institution\":\"Gualcamayo\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"marcelo_agulles.jpg\"}]}]},{\"date\":\"16 de mayo 2025\",\"schedule\":[{\"time\":\"09:00-10:45\",\"panel\":\"Políticas de Sostenibilidad\",\"participants\":[{\"name\":\"MBA Cinthia Garrido\",\"institution\":\"Dirección de Economía Social -Ministerio Familia y Desarrollo Humano\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"cinthia_garrido.jpg\"},{\"name\":\"Dr. Federico Rios\",\"institution\":\"Secretario de Medioambiente y desarrollo sustentable\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"federico_rios.jpg\"},{\"name\":\"PHD. Didier Grimaldi\",\"institution\":\"Universidad Politécnica de Cataluña\",\"country\":\"Francia\",\"flag\":\"fr.svg\",\"photo\":\"didier_grimaldi.jpg\"},{\"name\":\"Faría Ricardo\",\"institution\":\"Zeo Group\",\"country\":\"Brasil\",\"flag\":\"br.svg\",\"photo\":\"faría_ricardo.jpg\"},{\"name\":\"PhD. Javier Díaz Baez\",\"institution\":\"Instituto de Investigaciones Contables Económicas y Socio-Territoriales\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"javier_diaz_baez.jpg\"},{\"name\":\"Lic. Juan Manuel Sanchez\",\"institution\":\"Instituto de Desarrollo Sostenible\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"juan_manuel_sanchez.jpg\"},{\"name\":\"Ing. Luis Gimenez\",\"institution\":\"Instituto del Agua\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"luis_gimenez.jpg\"}]},{\"time\":\"10:45-11:30\",\"panel\":\"Coffee-Posters\",\"participants\":[]},{\"time\":\"11:30-13:30\",\"panel\":\"Sostenibilidad en el Sector Empresarial\",\"participants\":[{\"name\":\"Manuela Campillay\",\"institution\":\"Empresa L&G\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"manuela_campillay.jpg\"},{\"name\":\"MBA Eduardo Ara\",\"institution\":\"Empresa Huarpes Seguridad\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"eduardo_ara.jpg\"},{\"name\":\"MBA Emilce Valdivieso\",\"institution\":\"Construcciones Valdivieso\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"emilce_valdivieso.jpg\"},{\"name\":\"Dr. Walter Rstoermann\",\"institution\":\"El Castaño Minero\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"walter_rstoermann.jpg\"},{\"name\":\"PhD Jasmina Berbegal\",\"institution\":\"Universidad Politécnica de Cataluña\",\"country\":\"España\",\"flag\":\"es.svg\",\"photo\":\"jasmina_berbegal.jpg\"},{\"name\":\"MBA Elvira Alé\",\"institution\":\"Dream-20 de Junio\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"elvira_ale.jpg\"},{\"name\":\"MBA Paula Pérez\",\"institution\":\"Instituto de Desarrollo Sostenible\",\"country\":\"Argentina\",\"flag\":\"ar.svg\",\"photo\":\"paula_perez.jpg\"},{\"name\":\"PhD. Valmir Martins\",\"institution\":\"Universidad Autónoma de Chile\",\"country\":\"Chile\",\"flag\":\"cl.svg\",\"photo\":\"valmir_martins.jpg\"}]}]}]");

const $$SectionAgendaCronograma = createComponent(($$result, $$props, $$slots) => {
  const content = Data$1;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto mb-10 scroll-mt-15
        max-w-full px-5
        sm:px-10
        md:px-20
        lg:max-w-6xl
        pb-5 md:pb-10" id="cronograma"> <div class="mt-15"> ${renderComponent($$result, "ElementBasicTitle", $$ElementBasicTitle, { "text": "Cronograma Completo" })} </div> ${content.map((day) => renderTemplate`<div class="mt-10"> <div class="m-10 lg:m-15"> ${renderComponent($$result, "ElementBasicSubTitle", $$ElementBasicSubTitle, { "text": day.date })} </div> <div class="space-y-8"> ${day.schedule.map((item) => renderTemplate`${renderComponent($$result, "ElementAgendaCronograma", $$ElementAgendaCronograma, { "time": item.time, "panel": item.panel, "participants": item.participants })}`)} </div> </div>`)} </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAgendaCronograma.astro", void 0);

const Data = [
	{
		title_section: "Contactanos",
		subtitle_section: "¿Tienes una consulta o propuesta?",
		body_section: "Si querés comunicarte con la organización del congreso, estamos disponibles para escucharte. Podés enviarnos tus dudas, sugerencias o ideas.",
		id_section: "contacto",
		btn_section: "Enviar correo",
		btn_url: "mailto:congreso.sostenibilidad@uccuyo.edu.ar",
		elements: [
		]
	}
];

const $$SectionContacto = createComponent(($$result, $$props, $$slots) => {
  const content = Data[0];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto scroll-mt-15" id="contacto"> <div class="w-full bg-gradient-to-r from-nature-200 to-sun-200"> <div id="contact" class="py-16 px-6 md:px-20 lg:px-32"> <div class="max-w-3xl mx-auto text-center"> <h2 class="font-heading font-bold tracking-tight text-aqua-950 md:mx-auto text-xl sm:text-2xl lg:text-3xl"> ${content.subtitle_section} </h2> <p class="font-body text-shark-800 text-md sm:text-lg lg:text-xl mt-4"> ${content.body_section} </p> ${renderComponent($$result, "Button", $$Button, { "content": content.btn_section, "href": content.btn_url, "target": "_blank", "aling": "center" })} </div> </div> </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionContacto.astro", void 0);

const $$SectionFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 bg-shark-50 text-shark-950"> <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-300 md:space-y-12"> <div class="grid grid-cols-12 min-h-50"> <div class="pb-6 col-span-full md:pb-0 md:col-span-6"> <a href="#" class="flex justify-center space-x-3 md:justify-start"> <div class="flex items-center justify-center w-35 h-35"> <img${addAttribute(Logo.src, "src")} alt=""> </div> </a> </div> <div class="col-span-6 text-center md:text-left md:col-span-3 p-5"> <p class="font-heading pb-6 text-md font-semibold text-aqua-950 md:text-lg">
Entidades académicas
</p> <ul class="font-body text-md"> <li class="mb-3"> <a href="https://fcee.uccuyosj.edu.ar/la-facultad/instituto-de-desarrollo-sostenible" class="text-shark-700 hover:text-nature-700">Instituto de Desarrollo Sostenible</a> </li> <li class="mb-3"> <a href="https://uccuyo.edu.ar/" class="text-shark-700 hover:text-nature-700">Universidad Católica De Cuyo</a> </li> <li class="mb-3"> <a href="https://mineria.sanjuan.gob.ar/" class="text-shark-700 hover:text-nature-700">Facultad de Ciencias Economicas y Empresariales</a> </li> </ul> </div> <div class="col-span-6 text-center md:text-left md:col-span-3 p-5"> <p class="font-heading pb-6 text-md font-semibold text-aqua-950 md:text-lg">
Entidades Gubernamentales
</p> <ul class="font-body"> <li class="mb-3"> <a href="https://ambiente.sanjuan.gob.ar/&quot;" class="text-shark-700 hover:text-nature-700">Secretaría de Estado de Ambiente y Desarrollo
                            Sustentable</a> </li> <li class="mb-3"> <a href="https://mineria.sanjuan.gob.ar/" class="text-shark-700 hover:text-nature-700">Ministerio de Minería</a> </li> <li class="mb-3"> <a href="https://anchipurac.sanjuan.gob.ar/" class="text-shark-700 hover:text-nature-700">Centro Ambiental Anchipurac</a> </li> </ul> </div> </div> <div class="grid justify-center pt-6 lg:justify-between"> <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6"> <span>©2025 Todos los derechos reservados</span> <a href="#" class="text-nature-800 hover:text-nature-700">Política de privacidad</a> <a href="#" class="text-nature-800 hover:text-nature-700">Términos de servicio</a> </div> <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13"> <a href="mailto:congreso.sostenibilidad@uccuyo.edu.ar" title="Email" class="flex items-center justify-center w-10 h-10 rounded-full bg-nature-600 text-gray-50"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> </a> <!--  <a
                    href="#"
                    title="Twitter"
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-nature-600 text-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        class="w-5 h-5"
                    >
                        <path
                            d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
                        ></path>
                    </svg>
                </a>--> </div> </div> </div> </footer>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ElementBasicButtonToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button id="scrollToTopBtn" class="fixed bottom-6 right-6 z-50 hidden py-3 px-7 rounded-full bg-nature-600 text-white hover:bg-nature-700 shadow-lg transition-opacity duration-300" aria-label="Subir arriba">\n\u25B2\n</button> <script>\n    document.addEventListener("DOMContentLoaded", () => {\n        const scrollBtn = document.getElementById("scrollToTopBtn");\n\n        if (!scrollBtn) return; // \u2705 Previene error si el bot\xF3n no existe\n\n        window.addEventListener("scroll", () => {\n            if (window.scrollY > 300) {\n                scrollBtn.classList.remove("hidden");\n            } else {\n                scrollBtn.classList.add("hidden");\n            }\n        });\n\n        scrollBtn.addEventListener("click", () => {\n            window.scrollTo({\n                top: 0,\n                behavior: "smooth",\n            });\n        });\n    });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/ElementBasicButtonToTop.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ElementBasicButtonToTop", $$ElementBasicButtonToTop, {})} ${renderComponent($$result2, "SectionNavegacionEscritorio", $$SectionNavegacionEscritorio, {})} ${renderComponent($$result2, "SectionInicio", SectionInicio, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionInicio", "client:component-export": "default" })} ${renderComponent($$result2, "SectionAcercaDeIntroduccion", $$SectionAcercaDeIntroduccion, {})} ${renderComponent($$result2, "SectionAcercaDeClaves", $$SectionAcercaDeClaves, {})} ${renderComponent($$result2, "SectionAcercaDeObjetivos", $$SectionAcercaDeObjetivos, {})} ${renderComponent($$result2, "SectionAcercaDeOrganizadores", $$SectionAcercaDeOrganizadores, {})} ${renderComponent($$result2, "SectionEdicion2025", $$SectionEdicion2025, {})} ${renderComponent($$result2, "SectionPatrociniosDestacados", $$SectionPatrociniosDestacados, {})} ${renderComponent($$result2, "SectionPatrociniosOficiales", $$SectionPatrociniosOficiales, {})} ${renderComponent($$result2, "SectionPatrociniosInstitucionales", $$SectionPatrociniosInstitucionales, {})} ${renderComponent($$result2, "SectionAgendaUbicacion", $$SectionAgendaUbicacion, {})} ${renderComponent($$result2, "SectionAgendaTematicas", $$SectionAgendaTematicas, {})} ${renderComponent($$result2, "SectionAgendaExpositores", $$SectionAgendaExpositores, {})} ${renderComponent($$result2, "SectionAgendaPrograma", $$SectionAgendaPrograma, {})} ${renderComponent($$result2, "SectionAgendaCronograma", $$SectionAgendaCronograma, {})} ${renderComponent($$result2, "SectionContacto", $$SectionContacto, {})} ${renderComponent($$result2, "SectionFooter", $$SectionFooter, {})}  ` })}`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
