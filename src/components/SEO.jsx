import React, { useEffect } from 'react';
import { SITE_URL } from '../config/seo';

/**
 * Reusable SEO component for dynamic client-side head updates.
 * Complemented by build-time prerendering so crawlers receive full static metadata.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  schema,
  keywords,
}) {
  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // Helper for meta tags
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'DM Creation');
    setMeta('property', 'og:locale', 'en_US');
    if (ogImage) setMeta('property', 'og:image', ogImage);

    // 4. Twitter Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // 6. JSON-LD Structured Data
    if (schema) {
      const scriptId = 'page-json-ld';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonical, ogImage, ogType, schema, keywords]);

  return null;
}
