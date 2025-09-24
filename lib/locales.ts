// lib/locales.ts
export const VALID_LOCALES = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'zh', 'ar'] as const;
export type Locale = typeof VALID_LOCALES[number];

interface LanguageInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

// Custom names for better control
const LANGUAGE_NAMES: Record<Locale, { english: string; native: string }> = {
  en: { english: 'English', native: 'English' },
  es: { english: 'Spanish', native: 'Español' },
  fr: { english: 'French', native: 'Français' },
  de: { english: 'German', native: 'Deutsch' },
  it: { english: 'Italian', native: 'Italiano' },
  pt: { english: 'Portuguese', native: 'Português' },
  ja: { english: 'Japanese', native: '日本語' },
  zh: { english: 'Chinese', native: '中文' },
  ar: { english: 'Arabic', native: 'العربية' },
};

const FLAG_MAPPING: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  it: '🇮🇹',
  pt: '🇵🇹',
  ja: '🇯🇵',
  zh: '🇨🇳',
  ar: '🇦🇪',
};

export const LANGUAGES: LanguageInfo[] = VALID_LOCALES.map(code => ({
  code,
  name: LANGUAGE_NAMES[code].english,
  nativeName: LANGUAGE_NAMES[code].native,
  flag: FLAG_MAPPING[code],
}));

// Helper function to get language by code
export const getLanguageByCode = (code: string): LanguageInfo | undefined => {
  return LANGUAGES.find(lang => lang.code === code);
};

// Default locale
export const DEFAULT_LOCALE: Locale = 'en';