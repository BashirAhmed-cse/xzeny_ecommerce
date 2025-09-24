'use client';

import { ShoppingCart, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import { VALID_LOCALES } from '@/lib/locales';
import { Suspense } from 'react';

const LanguageSelector = dynamic(() => import('./LanguageSelector'), { ssr: false });
const CartDrawer = dynamic(() => import('./CartDrawer'), { ssr: false });

const LOCALE_COOKIE = 'MY_eCOM_NEXTAPP_LOCALE';

// Reusable loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="w-6 h-6 border-4 border-t-orange-500 border-gray-200 rounded-full animate-spin"></div>
  </div>
);

export default function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    if (!VALID_LOCALES.length) {
      setLocale('en');
      Cookies.set(LOCALE_COOKIE, 'en', { expires: 365 });
      return;
    }
    const cookieLocale = Cookies.get(LOCALE_COOKIE);
    if (cookieLocale && VALID_LOCALES.includes(cookieLocale)) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const validLocale = VALID_LOCALES.includes(browserLocale) ? browserLocale : 'en';
      setLocale(validLocale);
      Cookies.set(LOCALE_COOKIE, validLocale, { expires: 365 });
    }
  }, []);

  const handleLanguageChange = (code: string) => {
    if (!VALID_LOCALES.includes(code)) return;
    Cookies.set(LOCALE_COOKIE, code, { expires: 365 });
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    const newPath = `/${code}${currentPath === '/' ? '' : currentPath}`;
    window.location.href = newPath; // full reload
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-md hover:bg-gray-100"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side={locale === 'ar' ? 'right' : 'left'} className="w-72 p-0">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <Link href={`/${locale}`}>
                    <SheetTitle className="text-lg font-bold text-orange-500">stepprs.</SheetTitle>
                  </Link>
                  <SheetClose asChild>
                    <button
                      className="p-2 rounded-md hover:bg-gray-100"
                      aria-label="Close mobile menu"
                    >
                      <X className="h-5 w-5 text-gray-700" />
                    </button>
                  </SheetClose>
                </div>
                <nav role="navigation" className="flex flex-col space-y-2 mt-4 px-4 text-gray-700 text-base">
                  <Link href={`/${locale}/collections/products`} className="hover:text-orange-500">
                    {t('shopAll')}
                  </Link>
                  <Link href={`/${locale}/pages/about-us`} className="hover:text-orange-500">
                    {t('aboutUs')}
                  </Link>
                  <Link href={`/${locale}/pages/track-order`} className="hover:text-orange-500">
                    {t('trackOrder')}
                  </Link>
                  <Link href={`/${locale}/pages/contact`} className="hover:text-orange-500">
                    {t('help')}
                  </Link>
                  <div className="border-t pt-4 mt-4">
                    <Suspense fallback={<LoadingSpinner />}>
                      <LanguageSelector locale={locale} onChange={handleLanguageChange} />
                    </Suspense>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav role="navigation" className="hidden md:flex space-x-6 text-sm text-gray-600 font-medium items-center">
            <Link href={`/${locale}/collections/products`} className="hover:text-orange-500">
              {t('shopAll')}
            </Link>
            <Link href={`/${locale}/pages/about-us`} className="hover:text-orange-500">
              {t('aboutUs')}
            </Link>
            <Link href={`/${locale}/pages/track-order`} className="hover:text-orange-500">
              {t('trackOrder')}
            </Link>
            <Link href={`/${locale}/pages/contact`} className="hover:text-orange-500">
              {t('help')}
            </Link>
          </nav>
          <div className="flex-1 flex justify-center">
            <Link
              href={`/${locale}`}
              className="bg-orange-500 text-white px-5 py-2 rounded-lg font-bold text-lg shadow-md hover:shadow-lg"
            >
              stepprs.
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Suspense fallback={<LoadingSpinner />}>
                <LanguageSelector locale={locale} onChange={handleLanguageChange} />
              </Suspense>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
              <CartDrawer />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}