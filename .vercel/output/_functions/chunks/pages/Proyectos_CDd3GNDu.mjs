/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, g as addAttribute, f as renderComponent } from '../astro_B94S26iy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Strong } from './About_BMtgqfJv.mjs';

const $$Astro$2 = createAstro();
const $$SecctionConteiner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SecctionConteiner;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col m-auto scroll-m-20 w-full p-5
            container text-wrap text-left text-lg
            bg-white dark:bg-gray-900 mt-20 rounded-lg
                lg:max-w-4xl md:max-w-2xl"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "E:/Portafolio/src/components/SecctionConteiner.astro", void 0);

const skills = [
	{
		name: "Python",
		experience: "Avanzado",
		svg: "../icons/python.png"
	},
	{
		name: "PHP",
		experience: "Intermedio",
		svg: "../icons/php.png"
	},
	{
		name: "JavaScript",
		experience: "Avanzado",
		svg: "/icons/javascript.png"
	},
	{
		name: "HTML",
		experience: "Avanzado",
		svg: "/icons/html.png"
	},
	{
		name: "CSS",
		experience: "Avanzado",
		svg: "/icons/css.png"
	},
	{
		name: "ASTRO",
		experience: "Avanzado",
		svg: "/icons/Astro.png"
	},
	{
		name: "TAILWIND",
		experience: "Avanzado",
		svg: "/icons/tailwind.png"
	},
	{
		name: "GIT",
		experience: "Avanzado",
		svg: "/icons/gitbash.png"
	},
	{
		name: "GIT",
		experience: "Avanzado",
		svg: "/icons/github.png"
	}
];
const projects = [
	{
		name: "Aluravidio",
		startDate: "01/04/2024",
		endDate: "10/04/2024",
		description: "Challenge Oracle",
		highlights: [
			""
		],
		url: "https://github.com/jpgcano/Flex-box-aluravidio",
		demo: "https://jpgcano.github.io/Flex-box-aluravidio/"
	},
	{
		name: "DesafioEncriptar",
		startDate: "20/02/2024",
		endDate: "05/03/2024",
		description: "Challenge Oracle",
		highlights: [
			""
		],
		url: "https://github.com/jpgcano/DesafioEncriptar",
		demo: "https://jpgcano.github.io/DesafioEncriptar/"
	},
	{
		name: "Barberia-alura",
		startDate: "10/02/2024",
		endDate: "20/02/2024",
		description: "Challenge Oracle",
		highlights: [
			""
		],
		url: "https://github.com/jpgcano/Barberia-alura",
		demo: "https://jpgcano.github.io/Barberia-alura/"
	}
];

const $$Astro$1 = createAstro();
const $$CardProyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardProyectos;
  const { name, url, demo, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700 size-60    "> <a href="#"> <img class="rounded-t-lg" src="/public/img/carta-2.png" alt=""> </a> <div class="p-5"> <a href="#"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-violet-900 dark:text-white"> ${name} </h5> </a> <p class="mb-3 font-normal text-blue-700 dark:text-violet-400"> ${description} </p> <a${addAttribute(demo, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
demo
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> <a${addAttribute(url, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Github
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div>`;
}, "E:/Portafolio/src/components/Card-Proyectos.astro", void 0);

const $$Astro = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`${renderComponent($$result, "SecctionConteiner", $$SecctionConteiner, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="UPPERCASE text-4xl m-12"> ${renderComponent($$result2, "Strong", $$Strong, {}, { "default": ($$result3) => renderTemplate` Proyectos ` })} </h2> <ul class="flex gap-5 flex-wrap justify-center text-center"> ${projects.map(({ name, demo, url, description }) => renderTemplate`${renderComponent($$result2, "Card", $$CardProyectos, { "name": name, "url": url, "demo": demo, "description": description })}`)} </ul> ` })}`;
}, "E:/Portafolio/src/pages/Proyectos.astro", void 0);

const $$file = "E:/Portafolio/src/pages/Proyectos.astro";
const $$url = "/Proyectos";

const Proyectos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Proyectos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SecctionConteiner as $, Proyectos as P, $$Proyectos as a, skills as s };
