// types/next-intl.d.ts
import { Locale } from '../i18n';

declare module 'next-intl' {
  interface AppConfig {
    locales: Locale[];
    defaultLocale: Locale;
    localePrefix: 'always' | 'as-needed' | 'never';
  }
}

declare module 'next-intl/server' {
  export interface RequestConfig extends AppConfig {}
}