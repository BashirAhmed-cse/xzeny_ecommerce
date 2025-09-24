import { cookies } from 'next/headers';
import { VALID_LOCALES } from '@/lib/locales';

export const locales = VALID_LOCALES;

export default async function getRequestConfig() {
  const cookieStore = await cookies();
  let locale = cookieStore.get('MY_eCOM_NEXTAPP_LOCALE')?.value || 'en';
  if (!locales.includes(locale)) {
    locale = 'en';
  }
  try {
    const messages = (await import(`./locales/${locale}.json`)).default;
    return { locale, messages };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    const messages = (await import(`./locales/en.json`)).default;
    return { locale: 'en', messages };
  }
}