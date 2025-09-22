// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Better for SEO and performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Default metadata for the entire site
export const metadata: Metadata = {
  title: {
    default: "My E-commerce Store - Best Products Online",
    template: "%s | My E-commerce Store"
  },
  description: "Discover amazing products at great prices. Free shipping on orders over $50. Shop now for the best deals!",
  keywords: "ecommerce, online shopping, products, buy online, best prices",
  authors: [{ name: "My E-commerce Store" }],
  creator: "My E-commerce Store",
  publisher: "My E-commerce Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'), // আপনার ডোমেইন এখানে বসান
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://yourdomain.com/en',
      'bn': 'https://yourdomain.com/bn',
      'es': 'https://yourdomain.com/es',
      'fr': 'https://yourdomain.com/fr',
      'ar': 'https://yourdomain.com/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'My E-commerce Store',
    title: 'My E-commerce Store - Best Products Online',
    description: 'Discover amazing products at great prices. Free shipping on orders over $50.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My E-commerce Store',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My E-commerce Store - Best Products Online',
    description: 'Discover amazing products at great prices. Free shipping on orders over $50.',
    images: ['/og-image.jpg'],
    creator: '@mystore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console verification
    yandex: 'your-yandex-verification-code', // Yandex Webmaster verification
  },
  category: 'ecommerce',
};

// Structured data for the entire website
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My E-commerce Store',
  url: 'https://yourdomain.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://yourdomain.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  description: 'Discover amazing products at great prices. Free shipping on orders over $50.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional meta tags for SEO */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-blue-600 focus:rounded"
        >
          Skip to main content
        </a>
        <TopBanner/>
        <Header/>
        <div id="main-content" className="flex-1 bg-gradient-to-br from-white-50 to-amber-50">
          {children}
        </div>
        <Footer/>
        {/* Performance monitoring script (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Basic performance monitoring
                window.addEventListener('load', function() {
                  if ('performance' in window) {
                    const navTiming = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', navTiming.loadEventEnd - navTiming.loadEventStart);
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}