"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

const Bestsellers = () => {
  const t = useTranslations("bestsellers");
  const locale = useLocale();

  // Product data with translations
  const products = [
    {
      key: "product1",
      rating: 4.9,
      reviews: 1012,
      price: 27.95,
      originalPrice: 42.0,
      image: "orange massage insoles",

    },
    {
      key: "product2",
      rating: 4.8,
      reviews: 2089,
      price: 46.95,
      originalPrice: 70.0,
      image: "beige arch support flip flops",

    },
    {
      key: "product3",
      rating: 4.9,
      reviews: 751,
      price: 159.95,
      originalPrice: 229.0,
      image: "black foot massager device",
    
    },
    {
      key: "product4",
      rating: 4.8,
      reviews: 1203,
      price: 27.95,
      originalPrice: 42.0,
      image: "blue massage roller",
     
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("titlePrefix")} <span className="text-orange-500">{t("titleHighlight")}</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow p-0">
              <Link href={`/${locale}/products`}>
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.image}`}
                    alt={t(product.key)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{t(product.key)}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-orange-500">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bestsellers;