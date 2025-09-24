import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My E-commerce Store - Best Products Online",
    template: "%s | My E-commerce Store",
  },
  description:
    "Discover amazing products at great prices. Free shipping on orders over $50. Shop now for the best deals!",
  keywords: "ecommerce, online shopping, products, buy online, best prices",
  authors: [{ name: "My E-commerce Store" }],
  publisher: "My E-commerce Store",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "My E-commerce Store",
    title: "My E-commerce Store - Best Products Online",
    description:
      "Discover amazing products at great prices. Free shipping on orders over $50.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My E-commerce Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My E-commerce Store - Best Products Online",
    description:
      "Discover amazing products at great prices. Free shipping on orders over $50.",
    images: ["/og-image.jpg"],
    creator: "@mystore",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "My E-commerce Store",
  url: "https://yourdomain.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yourdomain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  description:
    "Discover amazing products at great prices. Free shipping on orders over $50.",
};
