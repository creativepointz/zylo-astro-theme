import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { enabledLanguages, defaultLanguage, showDefaultLangInUrl } from './src/lib/utils/i18nUtils.ts';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Set this to your production URL — required for correct canonical URLs,
  // Open Graph tags, and (if you add @astrojs/sitemap) sitemap generation.
  // site: 'https://example.com',
  i18n: {
    locales: enabledLanguages,
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: showDefaultLangInUrl,
    },
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
