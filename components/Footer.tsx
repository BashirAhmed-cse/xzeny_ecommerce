"use client";

import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  const quickLinks = [
    ["shopAll", "/collections/products"],
    ["newArrivals", "/collections/new"],
    ["bestSellers", "/collections/best-sellers"],
    ["giftCards", "/pages/gift-cards"],
  ];

  const supportLinks = [
    ["aboutUs", "/pages/about-us"],
    ["trackOrder", "/pages/track-order"],
    ["shippingInfo", "/pages/shipping"],
    ["returnsExchanges", "/pages/returns"],
  ];

  const connectLinks = [
    ["contactUs", "/pages/contact"],
    ["faq", "/pages/faq"],
    ["sizeGuide", "/pages/size-guide"],
    ["blog", "/blog"],
  ];

  const policies = [
    ["privacyPolicy", "/policies/privacy-policy"],
    ["termsOfService", "/policies/terms-of-service"],
    ["shippingPolicy", "/policies/shipping-policy"],
    ["refundPolicy", "/policies/refund-policy"],
    ["accessibility", "/policies/accessibility"],
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Email Subscription Section */}
      <div className="py-16 text-center bg-gradient-to-r from-gray-800 to-black">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t("subscribeTitle")}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">{t("subscribeSubtitle")}</p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t("subscribeButton")}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-400 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 border border-orange-500 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-orange-500/50">
                {t("subscribeButton")}
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">{t("subscribeNote")}</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-bold text-xl inline-block mb-4 shadow-lg">
                stepprs.
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{t("brandDescription")}</p>
              <div className="text-gray-400 space-y-1 text-sm">
                <p className="font-medium text-orange-400">{t("supportHours")}</p>
                <p>{t("supportHours")}</p>
                <p className="text-orange-300">{t("contactEmail")}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                {t("quickLinksTitle")}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {quickLinks.map(([key, href]) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                {t("supportTitle")}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {supportLinks.map(([key, href]) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                {t("connectTitle")}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {connectLinks.map(([key, href]) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                      {t(key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-4 text-sm">{t("copyright")}</p>
            <div className="flex flex-wrap justify-center space-x-6 text-xs text-gray-500">
              {policies.map(([key, href]) => (
                <Link
                  key={key}
                  href={href}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
