/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as addAttribute, k as renderHead, e as renderSlot } from '../astro_B94S26iy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$SecctionConteiner, a as $$Proyectos } from './Proyectos_CDd3GNDu.mjs';
/* empty css                          */
import { a as $$About } from './About_BMtgqfJv.mjs';
import { $ as $$BadgeButton, a as $$HeroMe } from './HeroMe_OEMb2Sdx.mjs';
import $$Skill from './skill_c31CqfqW.mjs';

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- Sección del Menú  -->${maybeRenderHead()}<header class="flex justify-between"> <div class="flex my-auto"> <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-separator-vertical"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 4l0 16"></path> <path d="M8 8l-4 4l4 4"></path> <path d="M16 16l4 -4l-4 -4"></path> </svg> <h3 class="text-2xl self-center">Juan Pablo Cano Gallo</h3> </div> <nav> <ul class="flex text-lg gap-3"> <li class="hidden lg:block"> <a href="../pages/About.astro" class="text-gray-600 dark:text-gray-200 hover:underline">Sobre mi</a> </li> <li class="hidden lg:block"> <a href="../pages/skill" class="text-gray-600 dark:text-gray-200 hover:underline">Skills</a> </li> <li class="hidden lg:block"> <a href="../pages/Hobbies" class="text-gray-600 dark:text-gray-200 hover:underline">Hobbies</a> </li> <li class="hidden lg:block"> <a href="../pages/formacion" class="text-gray-600 dark:text-gray-200 hover:underline">Formación</a> </li> <li class="hidden lg:block"> <a href="../pages/Proyectos" class="text-gray-600 dark:text-gray-200 hover:underline">Proyectos</a> </li> <li class=""> <a href="../components/Contac" class="text-gray-600 dark:text-gray-200 hover:underline">Contact</a> </li> </ul> </nav> </header>`;
}, "E:/Portafolio/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${renderComponent($$result, "SecctionConteiner", $$SecctionConteiner, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img src="/public/img/carta-2.png" class="h-8" alt="Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">jpgcano</span> </a> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> <li> <a href="../pages/About" class="hover:underline me-4 md:me-6">Sobre mi</a> </li> <li> <a href="../pages/skill" class="hover:underline me-4 md:me-6">Skill</a> </li> <li> <a href="../pages/Proyectos" class="hover:underline me-4 md:me-6">Proyectos</a> </li> <li> <a href="../components/Contac" class="hover:underline">Contact</a> </li> </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
© 2024
<a href="/" class="hover:underline">
Desarrollado por</a>
.Jpgcano
</span> </div> </footer> ` })}`;
}, "E:/Portafolio/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "SecctionConteiner", $$SecctionConteiner, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} </body></html>`;
}, "E:/Portafolio/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contac = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contac;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900 mt-20"> <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
Contáctanos
</h2> <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
¿Quieres contactarme? Complete el siguiente formulario y me pondré
            en contacto con usted lo antes posible.
</p> <form action="#" class="space-y-8"> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">correo electrónico</label> <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nombre@gmail.com" required> </div> <div> <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label> <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Háznos saber cómo podemos ayudarte" required> </div> <div class="sm:col-span-2"> <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu mensaje</label> <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja un comentario..."></textarea> </div> ${renderComponent($$result, "BadgeButton", $$BadgeButton, {}, { "default": ($$result2) => renderTemplate` <button type="submit" class="py-3 px-5 text-sm font-medium text-center
                text-white rounded-lg bg-primary-700 sm:w-fit
                hover:bg-primary-800 focus:ring-4 focus:outline-none
                focus:ring-primary-300 dark:bg-primary-600
                dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar
                mensaje
</button> ` })} </form> </div> </section>`;
}, "E:/Portafolio/src/components/Contac.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroMe", $$HeroMe, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skill", $$Skill, {})} ${renderComponent($$result2, "Proyectos", $$Proyectos, {})} ${renderComponent($$result2, "Contac", $$Contac, {})} </main> ` })}`;
}, "E:/Portafolio/src/pages/index.astro", void 0);

const $$file = "E:/Portafolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
