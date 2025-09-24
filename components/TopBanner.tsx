"use client";
import React from "react";
import { useTranslations } from "next-intl";

const TopBanner = () => {
  const t = useTranslations("topBanner");

  // Collect all messages
  const messages: string[] = [
    t("message1"),
    t("message2"),
    t("message3"),
    t("message4"),
    t("message5"),
    t("message6"),
  ];

  return (
    <div className="relative bg-black text-white text-sm md:text-lg py-2 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Marquee */}
      <div className="flex animate-marquee whitespace-nowrap">
        {messages.concat(messages).map((msg, index) => (
          <span key={index} className="mx-6 font-medium">
            {msg}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TopBanner;
