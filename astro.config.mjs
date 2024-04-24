import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jpgcano.github.io',
  base: 'https://github.com/jpgcano/Portafolio.git',
});