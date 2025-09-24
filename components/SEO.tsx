"use client";

import { Metadata } from "next";
import { ReactNode } from "react";

interface SEOProps {
  metadata: Metadata;
  jsonLd?: Record<string, any>;
}

export default function SEO({ metadata, jsonLd }: SEOProps) {
  return (
    <>
      <title>{metadata.title?.default}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords?.toString()} />
      <meta name="author" content={metadata.authors?.map(a => a.name).join(",")} />
      <meta name="publisher" content={metadata.publisher} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#3b82f6" />

      {/* OpenGraph */}
      {metadata.openGraph && (
        <>
          <meta property="og:type" content={metadata.openGraph.type} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:site_name" content={metadata.openGraph.siteName} />
          <meta property="og:url" content={metadata.openGraph.url} />
          {metadata.openGraph.images?.map((img, i) => (
            <meta key={i} property="og:image" content={img.url} />
          ))}
        </>
      )}

      {/* Twitter */}
      {metadata.twitter && (
        <>
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          {metadata.twitter.images?.map((img, i) => (
            <meta key={i} name="twitter:image" content={img} />
          ))}
        </>
      )}

      {/* Structured Data JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
