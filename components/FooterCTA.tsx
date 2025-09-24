"use client";
import React from "react";
import { useTranslations } from "next-intl";

const FooterTop = () => {
  const t = useTranslations("footerTop");

  return (
    <section className="bg-gray-50 py-16 mt-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        />
        <p className="text-lg text-gray-600 mb-8">{t("subtitle")}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 mb-12">
          {t("buttonText")}
        </button>
        {/* Payment Methods */}
        <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
          <img src="/visa-logo-generic.png" alt="Visa" className="h-8" />
          <img src="/mastercard-logo.png" alt="Mastercard" className="h-8" />
          <img src="/american-express-logo.png" alt="American Express" className="h-8" />
          <img src="/maestro-logo.png" alt="Maestro" className="h-8" />
          <img src="/apple-pay-logo.png" alt="Apple Pay" className="h-8" />
          <img src="/google-pay.png" alt="Google Pay" className="h-8" />
          <img src="/paypal-logo.png" alt="PayPal" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default FooterTop;