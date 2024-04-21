/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, f as renderComponent } from '../astro_B94S26iy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as skills, $ as $$SecctionConteiner } from './Proyectos_CDd3GNDu.mjs';
import { $ as $$Strong } from './About_BMtgqfJv.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <img${addAttribute(href, "src")} alt="" data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} </h2> </a> </li> `;
}, "E:/Portafolio/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Skill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skill;
  return renderTemplate`${renderComponent($$result, "SecctionConteiner", $$SecctionConteiner, { "title": "Skills" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="UPPERCASE text-4xl m-12"> ${renderComponent($$result2, "Strong", $$Strong, {}, { "default": ($$result3) => renderTemplate` Skills ` })} </h2> <ul class="flex gap-5 flex-wrap justify-center text-center"> ${skills.map(({ name, svg }) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": svg, "title": name })}`)} </ul> ` })}`;
}, "E:/Portafolio/src/pages/skill.astro", void 0);

const $$file = "E:/Portafolio/src/pages/skill.astro";
const $$url = "/skill";

export { $$Skill as default, $$file as file, $$url as url };
