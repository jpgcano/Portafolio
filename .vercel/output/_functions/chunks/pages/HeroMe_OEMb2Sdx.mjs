/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as renderComponent } from '../astro_B94S26iy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$BadgeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BadgeButton;
  return renderTemplate`${maybeRenderHead()}<span class="inline-flex items-center gap-1.5 py-1.5 px-3 
    rounded-full text-xs font-medium border-2
    border-violet-500 text-violet-500"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "E:/Portafolio/src/components/BadgeButton.astro", void 0);

const $$Astro = createAstro();
const $$HeroMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroMe;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row mt-20 gap-5"> <img src="/public/img/foto.png" alt="Foto de perfil de juan pablo" class="rounded-full order-2 size-60 hidden sm:block"> <div class="justify-center flex flex-col"> <h1 class="text-3xl"> <strong class="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-violet-900">Analista y desarrollador</strong> apasionado por la tecnologia
</h1> <div class="flex row-auto mt-10"> <a href="https://github.com/jpgcano">${renderComponent($$result, "BadgeButton", $$BadgeButton, {}, { "default": ($$result2) => renderTemplate`Github` })}</a> <a href="https://www.linkedin.com/in/juancanogallo/"> ${renderComponent($$result, "BadgeButton", $$BadgeButton, {}, { "default": ($$result2) => renderTemplate`Linkedin` })}</a> <a href="">${renderComponent($$result, "BadgeButton", $$BadgeButton, {}, { "default": ($$result2) => renderTemplate`Currículo` })}</a> </div> </div> </div>`;
}, "E:/Portafolio/src/pages/HeroMe.astro", void 0);

const $$file = "E:/Portafolio/src/pages/HeroMe.astro";
const $$url = "/HeroMe";

const HeroMe = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$HeroMe,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BadgeButton as $, HeroMe as H, $$HeroMe as a };
