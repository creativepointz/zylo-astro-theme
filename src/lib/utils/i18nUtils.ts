import languagesJSON from '../../config/language.json';

/**
 * Lightweight i18n scaffold, structured the same way as techlo-lite's
 * `i18nUtils.ts` so the two codebases share the same [...lang] routing
 * pattern. Zylo currently ships English only, so `showDefaultLangInUrl`
 * is `false` and every generated path keeps today's URLs unchanged
 * (e.g. "/" and "/pricing" rather than "/en/" and "/en/pricing").
 *
 * To add a language later: add an entry to `src/config/language.json` and
 * this file will start emitting the extra locale paths automatically.
 */

export const defaultLanguage = 'en';
export const showDefaultLangInUrl = false;

export const supportedLanguages = languagesJSON;

export const enabledLanguages: string[] = supportedLanguages.map(
  (lang) => lang.languageCode,
);

/**
 * Generates `{ params: { lang } }` entries for every supported language,
 * for use in a page's `getStaticPaths()`. The default language's `lang`
 * param is `undefined` so it renders at the un-prefixed URL.
 */
export function generatePaths(): Array<{ params: { lang: string | undefined } }> {
  return supportedLanguages.map((lang) => ({
    params: {
      lang:
        lang.languageCode === defaultLanguage && !showDefaultLangInUrl
          ? undefined
          : lang.languageCode,
    },
  }));
}

/**
 * Cross-joins `generatePaths()` with a list of per-language entries
 * (e.g. docs categories, changelog posts), used by `[single].astro` pages.
 */
export function generateEntryPaths<T>(
  entries: T[],
  toParams: (entry: T) => Record<string, string>,
  toProps?: (entry: T, index: number, all: T[]) => Record<string, unknown>,
): Array<{ params: Record<string, string | undefined>; props?: Record<string, unknown> }> {
  return generatePaths().flatMap(({ params }) =>
    entries.map((entry, index) => ({
      params: { ...params, ...toParams(entry) },
      props: toProps ? toProps(entry, index, entries) : undefined,
    })),
  );
}
