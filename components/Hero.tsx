'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section className="w-full py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-md text-gray-800 ml-2 font-semibold">{t('ratingText')}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('titleLine1')}<br />
              <span className="text-orange-500">{t('titleLine2')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 font-bold">{t('subtitle')}</p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-bold">{t('features1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-bold">{t('features2')}</span>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              {t('cta')}
            </Button>

            {/* Payment icons */}
            <div className="mt-5">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-md p-2 shadow-sm">
                  <div className="w-12 h-8 bg-blue-800 rounded-sm flex items-center justify-center text-xs text-white font-bold">VISA</div>
                </div>
                <div className="bg-white rounded-md p-2 shadow-sm">
                  <div className="w-12 h-8 bg-red-600 rounded-sm flex items-center justify-center text-xs text-white font-bold">Pay</div>
                </div>
                <div className="bg-white rounded-md p-2 shadow-sm">
                  <div className="w-12 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-xs text-gray-800 font-bold">Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <img
                src="/person-running-on-mountain-at-sunset-with-orange-g.jpg"
                alt={t('imageAlt')}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
