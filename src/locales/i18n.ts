// lib/i18n.ts
import commonEn from '../locales/en/common.json';
import headerEn from '../locales/en/header.json';
import footerEn from '../locales/en/footer.json';
import commonVi from '../locales/vi/common.json';
import headerVi from '../locales/vi/header.json';
import footerVi from '../locales/vi/footer.json';

interface Translations {
  common: { [key: string]: string };
  header: { [key: string]: string };
  footer: { [key: string]: string };
}

export function loadTranslation(locale: string): Translations {
  const translations: { [key: string]: Translations } = {
    en: {
      common: commonEn || {},
      header: headerEn || {},
      footer: footerEn || {},
    },
    vi: {
      common: commonVi || {},
      header: headerVi || {},
      footer: footerVi || {},
    },
  };

  return translations[locale] || translations['vi']; // Fallback to English
}
