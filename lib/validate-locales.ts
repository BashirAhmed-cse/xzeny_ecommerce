// lib/validate-locales.ts
import { TranslationKeys } from '../types/locales';
import en from '../locales/en.json';
import bn from '../locales/bn.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';

// টাইপ ভ্যালিডেশন
const validateTranslation = (translation: unknown): translation is TranslationKeys => {
  // এখানে আপনি আপনার translation object এর ভ্যালিডেশন লজিক যোগ করতে পারেন
  return typeof translation === 'object' && translation !== null;
};

// সব locales ভ্যালিডেট করুন
if (!validateTranslation(en)) throw new Error('Invalid English translation');
if (!validateTranslation(bn)) throw new Error('Invalid Bengali translation');
if (!validateTranslation(es)) throw new Error('Invalid Spanish translation');
if (!validateTranslation(fr)) throw new Error('Invalid French translation');
if (!validateTranslation(ar)) throw new Error('Invalid Arabic translation');

export { en, bn, es, fr, ar };