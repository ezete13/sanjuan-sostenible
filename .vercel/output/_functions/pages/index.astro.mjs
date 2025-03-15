import { c as createComponent, a as createAstro, e as renderHead, f as renderSlot, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderScript, i as renderComponent } from '../chunks/astro/server_BscW1DuT.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                 */
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export { renderers } from '../renderers.mjs';

const $$Astro$9 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Meta Información SEO --><meta name="generator" content="{Astro.generator}"><meta name="description" content="Congreso internacional de desarrollo sostenible para académicos y empresarios enfocado a la innovación y sostenibilidad global."><meta name="keywords" content="congreso desarrollo sostenible, innovación, sostenibilidad, académicos, empresarios, conferencia internacional, tecnologías verdes, cambio climático"><meta name="robots" content="index, follow"><!-- Meta Open Graph para redes sociales --><meta property="og:title" content="Congreso Internacional de Desarrollo Sostenible"><meta property="og:description" content="Únete al Congreso Internacional de Desarrollo Sostenible: un evento que reúne a académicos, empresarios y expertos para discutir soluciones innovadoras en sostenibilidad."><meta property="og:image" content="/images/social-image.jpg"><!-- Cambia la ruta por la imagen adecuada --><meta property="og:url" content="https://tusitio.com"><meta property="og:type" content="website"><!-- Twitter Cards --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Congreso Internacional de Desarrollo Sostenible"><meta name="twitter:description" content="Acompáñanos en el Congreso Internacional de Desarrollo Sostenible para explorar las mejores prácticas y soluciones para un futuro más verde."><meta name="twitter:image" content="/images/social-image.jpg"><!-- Cambia la ruta por la imagen adecuada --><!-- Título de la página --><title>"Congreso Internacional de Desarrollo Sostenible"</title><!-- Pre-conexión a fuentes externas --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Fuentes Google --><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"><!-- FontAwesome para iconos --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"><!-- Enlaces canónicos para evitar duplicados --><link rel="canonical" href="https://tusitio.com"><!-- Otras etiquetas SEO recomendadas --><meta name="author" content="Comité Organizador del Congreso Internacional de Desarrollo Sostenible"><meta name="language" content="es, en"><!-- Idiomas disponibles en la web -->${renderHead()}</head> <body class="bg-shark-50"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/layouts/Layout.astro", void 0);

const Logo = new Proxy({"src":"/_astro/logo.CD8QnA64.png","width":1090,"height":627,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/images/logo.png";
							}
							
							return target[name];
						}
					});

const $$SectionNavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-i5q7mc5m> <!--Navbar Desktop --> <nav class="font-heading relative px-6 py-2 flex justify-between items-center bg-shark-50 lg:px-30 xl:px-50 2xl:px-60" data-astro-cid-i5q7mc5m> <div data-astro-cid-i5q7mc5m> <a href="#" data-astro-cid-i5q7mc5m> <img${addAttribute(Logo.src, "src")} alt="" class="h-10 md:h-11" data-astro-cid-i5q7mc5m> </a> </div> <div class="lg:hidden" data-astro-cid-i5q7mc5m> <button class="navbar-burger flex items-center text-shark-950 p-3" data-astro-cid-i5q7mc5m> <svg class="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-i5q7mc5m> <title>Mobile menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" data-astro-cid-i5q7mc5m></path> </svg> </button> </div> <ul class="hidden absolute text-xs font-heading font-semibold uppercase top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6" data-astro-cid-i5q7mc5m> <li data-astro-cid-i5q7mc5m> <a class="text-nature-600 font-bold" href="#hero" data-astro-cid-i5q7mc5m>Inicio</a> </li> <li data-astro-cid-i5q7mc5m> <a class="text-shark-800 hover:text-nature-700" href="#about" data-astro-cid-i5q7mc5m>Sobre el Congreso</a> </li> <li data-astro-cid-i5q7mc5m> <a class="text-shark-800 hover:text-nature-700" href="#organizers" data-astro-cid-i5q7mc5m>Organización</a> </li> <li data-astro-cid-i5q7mc5m> <a class="text-shark-800 hover:text-nature-700" href="#place" data-astro-cid-i5q7mc5m>Ubicación</a> </li> <li data-astro-cid-i5q7mc5m> <a class="text-shark-800 hover:text-nature-700" href="#speakers" data-astro-cid-i5q7mc5m>Expositores</a> </li> <li data-astro-cid-i5q7mc5m> <a class="text-shark-800 hover:text-nature-700" href="#topics" data-astro-cid-i5q7mc5m>Ejes Temáticos</a> </li> <li data-astro-cid-i5q7mc5m> <a class="text-shark-800 hover:text-nature-700" href="#timeline" data-astro-cid-i5q7mc5m>Programa</a> </li> </ul> </nav> <!--Fin Navbar Desktop --> <!-- Navbar Mobile --> <div class="navbar-menu relative z-50 hidden" data-astro-cid-i5q7mc5m> <div class="navbar-backdrop fixed inset-0 bg-aqua-950 opacity-60" data-astro-cid-i5q7mc5m></div> <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-6/12 max-w-sm py-6 px-6 bg-shark-50 border-r overflow-y-auto font-heading md:w-3/12" data-astro-cid-i5q7mc5m> <div class="flex items-center mb-8" data-astro-cid-i5q7mc5m> <a class="mr-auto text-3xl font-bold leading-none" href="#" data-astro-cid-i5q7mc5m> <img${addAttribute(Logo.src, "src")} alt="" class="h-11 md:h-10" data-astro-cid-i5q7mc5m> </a> <button class="navbar-close" data-astro-cid-i5q7mc5m> <svg class="h-6 w-6 text-shark-950 cursor-pointer hover:text-shark-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-i5q7mc5m> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-i5q7mc5m></path> </svg> </button> </div> <div data-astro-cid-i5q7mc5m> <ul class="uppercase" data-astro-cid-i5q7mc5m> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#hero" data-astro-cid-i5q7mc5m>Inicio</a> </li> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#about" data-astro-cid-i5q7mc5m>Sobre el Congreso</a> </li> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#organizers" data-astro-cid-i5q7mc5m>Organización</a> </li> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#place" data-astro-cid-i5q7mc5m>Ubicación</a> </li> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#speakers" data-astro-cid-i5q7mc5m>Expositores</a> </li> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#topics" data-astro-cid-i5q7mc5m>Ejes Temáticos</a> </li> <li class="mb-1" data-astro-cid-i5q7mc5m> <a class="block p-4 text-sm font-semibold text-shark-950 hover:bg-shark-50 hover:text-nature-700 rounded" href="#timeline" data-astro-cid-i5q7mc5m>Programa</a> </li> </ul> </div> </nav> ${renderScript($$result, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavBar.astro?astro&type=script&index=0&lang.ts")} </div> <!-- Estilo CSS para scroll suave -->  </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionNavBar.astro", void 0);

const Hero = ({
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
      className: "relative bg-cover bg-center bg-no-repeat",
      style: { backgroundImage: `url(images/${heroImg})` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-shark-950/80 sm:bg-transparent sm:from-shark-950/90 sm:to-aqua-950/30 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" }),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-screen-xl px-7 sm:px-32 lg:flex min-h-[70vh] lg:px-32 flex items-center justify-left xl:px-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl text-center ltr:sm:text-left rtl:sm:text-right", children: [
          /* @__PURE__ */ jsxs("h1", { className: " font-heading uppercase text-xl font-extrabold text-shark-50 sm:text-2xl md:text-3xl lg:text-5xl", children: [
            heroHead,
            /* @__PURE__ */ jsx("strong", { className: "block text-nature-600", children: heroTitle })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body mt-4 text-shark-50 text-md sm:text-lg md:text-xl lg:text-2xl", children: heroBody }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-4 text-center", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: heroBtn.link,
              className: "uppercase block w-full rounded-sm bg-nature-600 px-12 py-3 text-sm font-medium text-shark-50 shadow-sm hover:bg-nature-800 focus:ring-3 focus:outline-hidden sm:w-auto",
              target: "_blank",
              children: heroBtn.text
            }
          ) })
        ] }) })
      ]
    }
  );
};

const HeroData = [
	{
		heroId: "hero-1",
		heroImg: "hero-image-1.webp",
		heroHead: "III Congreso Internacional San Juan + Sostenible",
		heroTitle: "San Juan | 2025",
		heroBody: "San Juan se convierte en el epicentro de la sostenibilidad. Únete a este evento transformador donde se reunirán líderes, expertos y visionarios para abordar los desafíos del futuro. ¡Sé parte del cambio hacia un mundo más sostenible!",
		heroBtn: {
			text: "Preisncribirme",
			link: "https://forms.gle/MsBpcmmrxRXbpp1V7"
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
			text: "Preisncribirme",
			link: "https://forms.gle/MsBpcmmrxRXbpp1V7"
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
			text: "Preisncribirme",
			link: "https://forms.gle/MsBpcmmrxRXbpp1V7"
		},
		heroAlt: "Imagen sobre energía renovable y sostenibilidad"
	}
];

const SectionHero = () => {
  return /* @__PURE__ */ jsx("section", { id: "hero", children: /* @__PURE__ */ jsx(
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
        // Tiempo en milisegundos entre cada transición
        disableOnInteraction: false
        // El autoplay sigue funcionando incluso si el usuario interactúa
      },
      children: HeroData.map((hero) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
        Hero,
        {
          heroId: hero.heroId,
          heroImg: hero.heroImg,
          heroHead: hero.heroHead,
          heroTitle: hero.heroTitle,
          heroBody: hero.heroBody,
          heroBtn: {
            text: hero.heroBtn.text,
            link: hero.heroBtn.link
          },
          heroAlt: hero.heroAlt
        }
      ) }, hero.heroId))
    }
  ) });
};

const $$Astro$8 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Title;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="font-heading font-semibold text-aqua-950 text-4xl md:text-5xl mt-15 mb-15 text-center"> <h1>${text}</h1> <div class="w-24 h-1 bg-nature-600 mt-2 mx-auto"></div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Title.astro", void 0);

const $$Astro$7 = createAstro();
const $$SubTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SubTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="font-heading text-2xl font-bold tracking-tight text-aqua-950 md:text-3xl md:mx-auto"> <span class="relative inline-block"> ${text} </span> </h2>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/SubTitle.astro", void 0);

const ImgPlaneta = new Proxy({"src":"/_astro/san-juan-sostenible.D5x_J5c4.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/public/images/san-juan-sostenible.jpg";
							}
							
							return target[name];
						}
					});

const $$SectionAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-10 max-w-7xl" id="about"> ${renderComponent($$result, "Title", $$Title, { "text": "Sobre el Congreso" })} <div class="mx-auto md:flex md:items-stretch md:gap-6"> <div class="md:w-1/2"> ${renderComponent($$result, "SubTitle", $$SubTitle, { "text": "\xA1San Juan se transforma y t\xFA puedes ser parte del cambio!" })} <p class="text-body text-md text-shark-800 mt-8">
En un mundo donde la sostenibilidad ya no es una opción, sino
                una necesidad urgente, San Juan se posiciona como un referente
                en innovación y desarrollo sostenible. El <span class="text-aqua-800 font-bold">III Congreso Internacional "SAN JUAN + SOSTENIBLE"</span> es el espacio donde la academia, las empresas, el sector público
                y la sociedad civil se unen para construir soluciones estratégicas.
</p> <p class="text-body text-md text-shark-800 mt-8">
Este evento reunirá a expertos internacionales, líderes
                empresariales y académicos para debatir, intercambiar ideas y
                proponer acciones concretas para un futuro sostenible.
</p> </div> <div class="py-5 md:w-1/2 md:py-0 border-b-3 border-r-3 border-aqua-800 rounded"> <img${addAttribute(ImgPlaneta.src, "src")} alt="Descripción de la imagen" class="w-full object-cover h-full px-3 py-0 md:py-3 rounded"> </div> </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAbout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, body, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center bg-shark-50 rounded-lg p-6"> <img${addAttribute(`/images/topics/${image}`, "src")} alt="Gestión" class="w-16 h-16 rounded-full border-4 border-nature-950 bg-nature-50 p-2"> <div class="ml-4"> <h3 class="text-2xl font-bold text-aqua-950"> ${title} </h3> <p class="text-md text-shark-800"> ${body} </p> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Topic.astro", void 0);

const Data$6 = [
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
];

const $$SectionTopics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-10 max-w-7xl mt-20" id="topics"> ${renderComponent($$result, "Title", $$Title, { "text": "Tem\xE1ticas" })} <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10"> ${Data$6.map((item) => renderTemplate`${renderComponent($$result, "Topic", $$Topic, { "title": item.title, "body": item.body, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionTopics.astro", void 0);

const $$SectionFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 bg-shark-50 text-shark-950"> <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-300 md:space-y-12"> <div class="grid grid-cols-12 min-h-50"> <div class="pb-6 col-span-full md:pb-0 md:col-span-6"> <a href="#" class="flex justify-center space-x-3 md:justify-start"> <div class="flex items-center justify-center w-35 h-35"> <img${addAttribute(Logo.src, "src")} alt=""> </div> </a> </div> <div class="col-span-6 text-center md:text-left md:col-span-3 p-5"> <p class="font-heading pb-6 text-md font-semibold text-aqua-950 md:text-lg">
Entidades académicas
</p> <ul class="font-body text-md"> <li class="mb-3"> <a href="https://fcee.uccuyosj.edu.ar/la-facultad/instituto-de-desarrollo-sostenible" class="text-shark-700 hover:text-nature-700">Instituto de Desarrollo Sostenible</a> </li> <li class="mb-3"> <a href="https://uccuyo.edu.ar/" class="text-shark-700 hover:text-nature-700">Universidad Católica De Cuyo</a> </li> <li class="mb-3"> <a href="https://mineria.sanjuan.gob.ar/" class="text-shark-700 hover:text-nature-700">Facultad de Ciencias Economicas y Empresariales</a> </li> </ul> </div> <div class="col-span-6 text-center md:text-left md:col-span-3 p-5"> <p class="font-heading pb-6 text-md font-semibold text-aqua-950 md:text-lg">
Entidades Gubernamentales
</p> <ul class="font-body"> <li class="mb-3"> <a href="https://ambiente.sanjuan.gob.ar/&quot;" class="text-shark-700 hover:text-nature-700">Secretaría de Estado de Ambiente y Desarrollo
                            Sustentable</a> </li> <li class="mb-3"> <a href="https://mineria.sanjuan.gob.ar/" class="text-shark-700 hover:text-nature-700">Ministerio de Minería</a> </li> <li class="mb-3"> <a href="https://anchipurac.sanjuan.gob.ar/" class="text-shark-700 hover:text-nature-700">Centro Ambiental Anchipurac</a> </li> </ul> </div> </div> <div class="grid justify-center pt-6 lg:justify-between"> <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6"> <span>©2025 Todos los derechos reservados</span> <a href="#" class="text-nature-800 hover:text-nature-700">Política de privacidad</a> <a href="#" class="text-nature-800 hover:text-nature-700">Términos de servicio</a> </div> <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13"> <a href="mailto:ids@uccuyo.edu.ar" title="Email" class="flex items-center justify-center w-10 h-10 rounded-full bg-nature-600 text-gray-50"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> </a> <!--  <a
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

const $$Astro$5 = createAstro();
const $$EventTimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$EventTimeLine;
  const { title, body, date, position, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container-timeline ${position}`, "class")}> <div class="date">${date}</div> <i${addAttribute(`icon fa ${icon}`, "class")}></i> <!-- Ícono dinámico --> <div class="content-timeline"> <h2>${title}</h2> <p>${body}</p> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/EventTimeLine.astro", void 0);

const Data$5 = [
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
				body: "Palabras de bienvenida de la Rectora UCCuyo, Vicerrector y Ministro de la Producción.",
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
];

const $$SectionTimeLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-0 max-w-7xl xs:px-10 mb-10" id="timeline"> ${renderComponent($$result, "Title", $$Title, { "text": "Programa" })} ${Data$5.map((dayItem) => renderTemplate`<div> <!-- Subtítulo con el día --> <div class="mt-15"> <div class="text-center"> ${renderComponent($$result, "SubTitle", $$SubTitle, { "text": dayItem.day })} </div> </div> <!-- Timeline --> <div class="timeline"> ${dayItem.events.map((event, index) => renderTemplate`${renderComponent($$result, "EventTimeLine", $$EventTimeLine, { "title": event.title, "body": event.body, "date": event.date, "position": index % 2 === 0 ? "left" : "right", "icon": event.icon })}`)} </div> </div>`)} </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionTimeLine.astro", void 0);

const $$Astro$4 = createAstro();
const $$Organizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Organizer;
  const { title, body, href, alt, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row bg-shark-50 rounded-lg overflow-hidden mt-5"> <img${addAttribute(`/images/organizers/${image}`, "src")}${addAttribute(alt, "alt")} class="w-full md:w-1/3 object-contain max-h-25 mb-3"> <div class="p-6 flex-1 text-center md:text-left"> <h3 class="text-xl font-heading font-bold text-nature-950"> ${title} </h3> <p class="font-body text-md text-shark-800 mt-2"> ${body} </p> <div class="mt-4 flex flex-wrap gap-4 text-center items-center justify-center md:justify-start"> <a${addAttribute(href, "href")} class="font-heading text-lg font-semibold text-nature-700 hover:text-nature-600 focus:outline-hidden flex items-center gap-1">
Visitar Web
<svg width="12px" height="12px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>arrow_right [#333]</title> <desc>Created with Sketch.</desc> <g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#068f57"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"></path> </g> </g> </g> </svg> </a> </div> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Organizer.astro", void 0);

const Data$4 = [
	{
		title: "Instituto de Desarrollo Sostenible (IDS)",
		body: "Centro de investigación y formación académica que impulsa estrategias para la sostenibilidad en universidades, empresas y la sociedad.",
		href: "https://fcee.uccuyosj.edu.ar/la-facultad/instituto-de-desarrollo-sostenible",
		alt: "Logotipo del Instituto de Desarrollo Sostenible (IDS)",
		image: "ids.png"
	},
	{
		title: "Vicerrectorado en Formación",
		body: "Promueve la ética y responsabilidad social en el ámbito académico, formando líderes con una visión humanista y sostenible.",
		href: "https://uccuyo.edu.ar/",
		alt: "Logotipo del Vicerrectorado en Formación",
		image: "vicerrectorado.png"
	},
	{
		title: "Ministerio de Minería de San Juan",
		body: "Fomenta una minería responsable y sostenible con inversión en energías limpias y reducción del impacto ambiental.",
		href: "https://mineria.sanjuan.gob.ar/",
		alt: "Logotipo del Ministerio de Minería de San Juan",
		image: "mineria.png"
	},
	{
		title: "Secretaría de Ambiente y Desarrollo Sustentable",
		body: "Implementa políticas para equilibrar el desarrollo económico con la conservación del medio ambiente en San Juan.",
		href: "https://ambiente.sanjuan.gob.ar/",
		alt: "Logotipo de la Secretaría de Ambiente y Desarrollo Sustentable",
		image: "ambiente.png"
	}
];

const $$SectionOrganizers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-10 max-w-7xl mb-20" id="organizers"> ${renderComponent($$result, "Title", $$Title, { "text": "Organizadores" })} <div class="mt-15"> <div class="md:w-1/2"> ${renderComponent($$result, "SubTitle", $$SubTitle, { "text": "Instituciones provinciales que acompa\xF1an al congreso" })} </div> </div> <div class="grid gap-10 xl:grid-cols-2 mt-5"> ${Data$4.map((item) => renderTemplate`${renderComponent($$result, "Organizer", $$Organizer, { "title": item.title, "body": item.body, "href": item.href, "alt": item.alt, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionOrganizers.astro", void 0);

const $$Astro$3 = createAstro();
const $$Speaker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Speaker;
  const { title, subtitle, body, country, altc, image, alti } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-shark-50 rounded-lg p-3 text-center"> <img${addAttribute(`/images/countries/${country}`, "src")}${addAttribute(altc, "alt")} class="w-20 h-20 mx-auto mb-1 rounded-full object-cover"> <h3 class="text-xl font-heading font-bold text-aqua-950"> ${title} </h3> <p class="text-body text-md text-shark-800 font-semibold"> ${subtitle} </p> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Speaker.astro", void 0);

const Data$3 = [
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
	}
];

const $$SectionSpeakers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-10 max-w-7xl" id="speakers"> ${renderComponent($$result, "Title", $$Title, { "text": "Expositores" })} <div class="mt-15"> <div class="sm:w-1/2"> ${renderComponent($$result, "SubTitle", $$SubTitle, { "text": "Invitados de lujo, para un evento \xFAnico" })} </div> </div> <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10"> ${Data$3.map((item) => renderTemplate`${renderComponent($$result, "Speaker", $$Speaker, { "title": item.title, "subtitle": item.subtitle, "body": item.body, "country": item.country, "altc": item.altc, "image": item.image, "alti": item.alti })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionSpeakers.astro", void 0);

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

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { content, href, target, aling } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mt-15 gap-4 md:text-${aling} mb-10`, "class")}> <a${addAttribute(href, "href")}${addAttribute(target, "target")} class="font-heading uppercase rounded-sm bg-nature-600 px-8 py-5 text-lg font-semibold text-aqua-50 shadow-sm hover:bg-nature-700 focus:ring-3 focus:outline-hidden w-auto"> ${content} </a> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Button.astro", void 0);

const $$SectionPlace = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-gradient-to-r from-nature-200 to-sun-200 py-10" id="place"> <section class="mx-auto px-10 max-w-7xl"> <div class="mx-auto max-w-6xl flex flex-col md:flex-row lg:items-center md:gap-6 p-6 text-center md:text-left"> <!-- Imagen del lugar --> <img${addAttribute(image.src, "src")} alt="Centro Ambiental Anchipurac" class="w-2/3 md:w-1/3 lg:w-1/4 mx-auto md:mx-0 md:mr-4 my-4"> <!-- Contenedor de texto --> <div class="md:w-2/3 lg:w-3/4"> <h2 class="font-heading text-3xl font-bold text-aqua-950">
Conoce la sede, conoce el Centro Ambiental Anchipurac
</h2> <p class="font-body md:text-md lg:text-lg text-shark-950 mt-4">
Ubicado en la provincia de San Juan, Argentina, el Centro
                    Ambiental Anchipurac es un referente en educación ambiental
                    y sostenibilidad. Su innovadora arquitectura y enfoque
                    ecológico lo convierten en un espacio único para aprender
                    sobre el cuidado del planeta.
</p> ${renderComponent($$result, "Button", $$Button, { "content": "\xA1Quiero conocerlo!", "href": "https://anchipurac.sanjuan.gob.ar/", "target": "_blank", "aling": "start" })} </div> </div> </section> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionPlace.astro", void 0);

const bigtitle1 = "El futuro no se espera, se construye.";
const bigtitle2 = "¡Sé parte de la transformación sostenible!";
const title = "Congreso internacional";
const subtitle = "San Juan + Sostenible";
const date = "15 y 16 | Mayo 2025";
const place = "Anchipurac | San Juan - Argentina";
const Data$2 = {
  bigtitle1,
  bigtitle2,
  title,
  subtitle,
  date,
  place,
};

const $$SectionAcent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-gradient-to-r from-green-200 to-yellow-100 py-0 md:py-8"> <div class="mx-auto max-w-6xl text-center p-6"> <div class="font-heading font-semibold text-aqua-950 text-xl md:text-5xl text-center mt-10 mb-10"> <p class="mb-2"> ${Data$2.bigtitle1} </p> <p> ${Data$2.bigtitle2} </p> </div> <div class="w-24 h-1 bg-nature-600 mt-2 mx-auto"></div> <h3 class="font-heading text-2xl font-semibold text-aqua-950 mt-2 md:text-3xl"> ${Data$2.title} </h3> <h2 class="font-heading text-3xl font-bold text-aqua-950 uppercase md:text-4xl"> ${Data$2.subtitle} </h2> <div class="w-24 h-1 bg-nature-600 mt-2 mx-auto mb-5"></div> <p class="font-body font-semibold text-lg text-shark-950"> ${Data$2.date} </p> <p class="font-body font-semibold text-lg text-shark-950"> ${Data$2.place} </p> ${renderComponent($$result, "Button", $$Button, { "content": "Preisncribirme al Congreso", "href": "https://forms.gle/MsBpcmmrxRXbpp1V7", "target": "_blank", "aling": "center" })} </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionAcent.astro", void 0);

const Data$1 = [
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
];

const $$Astro$1 = createAstro();
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Feature;
  const { title, body, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-start gap-4 p-5 border-l-3 border-nature-950 bg-shake-50"> <div class="w-10 h-10 flex items-center justify-center bg-nature-100 rounded-full"> ${image} </div> <div> <h3 class="text-xl font-heading font-bold text-nature-950"> ${title} </h3> <p class="text-body text-md text-shark-800"> ${body} </p> </div> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Feature.astro", void 0);

const $$SectionFeatures = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-10 max-w-7xl" id="features"> ${renderComponent($$result, "Title", $$Title, { "text": "Claves" })} <div class="mt-15"> <div class="md:w-1/2"> ${renderComponent($$result, "SubTitle", $$SubTitle, { "text": "La clave que lo hace especial, interesante y sustentable" })} </div> </div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-10 md:mt-20"> ${Data$1.map((item) => renderTemplate`${renderComponent($$result, "Feature", $$Feature, { "title": item.title, "body": item.body, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionFeatures.astro", void 0);

const $$Astro = createAstro();
const $$Objetive = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Objetive;
  const { image, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sm:mx-auto text-center my-2"> <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-nature-950 mx-auto sm:w-24 sm:h-24"> <img${addAttribute(`/images/objetives/${image}`, "src")} alt="" class="h-10 sm:h-15"> </div> <h6 class="mb-4 text-xl font-heading font-bold leading-6 md:text-xl text-nature-950"> ${title} </h6> <p class="font-body mb-3 text-md text-shark-800"> ${body} </p> </div>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/elements/Objetive.astro", void 0);

const Data = [
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
];

const $$SectionObjetives = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-10 max-w-7xl" id="objectives"> ${renderComponent($$result, "Title", $$Title, { "text": "Objetivos" })} <div class="mt-15"> <div class="md:w-1/2"> ${renderComponent($$result, "SubTitle", $$SubTitle, { "text": "Tenemos objetivos claros: \xA1Impulsar, conectar, promover, inspirar!" })} </div> </div> <div class="grid gap-8 row-gap-12 md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-20"> ${Data.map((item) => renderTemplate`${renderComponent($$result, "Objetive", $$Objetive, { "title": item.title, "body": item.body, "image": item.image })}`)} </div> </section>`;
}, "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionObjetives.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionNavBar", $$SectionNavBar, {})} ${renderComponent($$result2, "SectionHero", SectionHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ezequiel/Desktop/sanjuan-sostenible/src/components/sections/SectionHero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "SectionAcent", $$SectionAcent, {})} ${renderComponent($$result2, "SectionAbout", $$SectionAbout, {})} ${renderComponent($$result2, "SectionFeatures", $$SectionFeatures, {})} ${renderComponent($$result2, "SectionObjetives", $$SectionObjetives, {})} ${renderComponent($$result2, "SectionOrganizers", $$SectionOrganizers, {})} ${renderComponent($$result2, "SectionPlace", $$SectionPlace, {})} ${renderComponent($$result2, "SectionSpeakers", $$SectionSpeakers, {})} ${renderComponent($$result2, "SectionTopics", $$SectionTopics, {})} ${renderComponent($$result2, "SectionTimeLine", $$SectionTimeLine, {})} ${renderComponent($$result2, "SectionAcent", $$SectionAcent, {})} ${renderComponent($$result2, "SectionFooter", $$SectionFooter, {})} ` })}`;
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
