// types/locales.ts
export interface TranslationKeys {
  header: {
    title: string;
    search: string;
    categories: string;
    login: string;
    register: string;
    cart: string;
    wishlist: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  products: {
    title: string;
    viewAll: string;
  };
  footer: {
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

// locales টাইপ সেফটি জন্য
export type LocaleMessages = Record<string, TranslationKeys>;