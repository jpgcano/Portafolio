/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as renderComponent } from '../astro_B94S26iy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Span = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Span;
  return renderTemplate`${maybeRenderHead()}<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-violet-900 text-2xl"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "E:/Portafolio/src/components/Span.astro", void 0);

const $$Astro$1 = createAstro();
const $$Strong = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Strong;
  return renderTemplate`${maybeRenderHead()}<strong class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"> ${renderSlot($$result, $$slots["default"])} </strong>`;
}, "E:/Portafolio/src/components/Strong.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class=""> <h2 class="UPPERCASE text-4xl mb-12"> ${renderComponent($$result, "Strong", $$Strong, {}, { "default": ($$result2) => renderTemplate`
Sobre mí
` })} </h2> <p class="text-xl  "> ${renderComponent($$result, "Span", $$Span, {}, { "default": ($$result2) => renderTemplate`
Análisis y Desarrollo de Sistemas de Información:
` })}
Soy autodidacta y me gusta aprender sobre temas de programación,
            mantenimiento de computadoras y ciberseguridad. 
            Adoro viajar y salir a comer con mis amigos. 
            Tengo experiencia en el área de sistemas,
            en el sector hospitalario y en atención al cliente.
</p> </div>`;
}, "E:/Portafolio/src/pages/About.astro", void 0);

const $$file = "E:/Portafolio/src/pages/About.astro";
const $$url = "/About";

const About = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Strong as $, About as A, $$About as a };
