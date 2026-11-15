/**
 * DM Creation — Centralized SEO & Business Identity Configuration
 * Official Domain: https://dmcreationstudio.com
 */

export const SITE_URL = 'https://dmcreationstudio.com';

export const BUSINESS_INFO = {
  name: 'DM Creation',
  legalName: 'DM Creation',
  telephone: '+971 52 835 1320',
  whatsapp: '+971528351320',
  email: 'dmcreation121@gmail.com',
  addressLocality: 'Dubai',
  addressRegion: 'Business Bay, Dubai',
  addressCountry: 'AE',
  areaServed: [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Ras Al Khaimah',
    'Ajman',
    'Fujairah',
    'Umm Al Quwain',
    'United Arab Emirates',
  ],
  logo: `${SITE_URL}/dm-logo-black.png`,
  defaultImage: `${SITE_URL}/home/hero.PNG`,
};

export const SEO_DATA = {
  home: {
    path: '/',
    canonical: `${SITE_URL}/`,
    title: 'DM Creation | Photography & Videography in Dubai',
    description:
      'DM Creation provides professional photography, videography, live streaming and 360° photo booth experiences for events and brands in Dubai and the UAE.',
    keywords:
      'Photography services Dubai, Videography services Dubai, Photography and videography UAE, Event photography Dubai, 360 photo booth Dubai, live streaming Dubai',
    ogImage: `${SITE_URL}/home/hero.PNG`,
    ogType: 'website',
  },
  about: {
    path: '/about',
    canonical: `${SITE_URL}/about`,
    title: 'About DM Creation | Creative Production Studio Dubai',
    description:
      'Discover DM Creation, a creative visual production studio in Dubai delivering photography, filmmaking, live streaming and interactive event experiences.',
    keywords:
      'Creative production studio Dubai, Photography studio Dubai, Videography company Dubai, Visual storytellers UAE, Commercial production crew Dubai',
    ogImage: 'https://res.cloudinary.com/aubynz6r/image/upload/heroo',
    ogType: 'website',
  },
  services: {
    path: '/services',
    canonical: `${SITE_URL}/services`,
    title: 'Photography, Videography & Live Streaming Dubai | DM Creation',
    description:
      "Explore DM Creation's photography, videography, multi-camera live streaming and 360° video booth services for events and corporate productions across the UAE.",
    keywords:
      'Event photography Dubai, Corporate videography Dubai, Live streaming services Dubai, 360 photo booth rental Dubai, Event video production UAE',
    ogImage: `${SITE_URL}/images/hero-cinematic.jpg`,
    ogType: 'website',
  },
  portfolio: {
    path: '/portfolio',
    canonical: `${SITE_URL}/portfolio`,
    title: 'Photography & Videography Portfolio Dubai | DM Creation',
    description:
      "Explore DM Creation's photography, videography and event production portfolio, showcasing creative visual storytelling across Dubai and the UAE.",
    keywords:
      'Photography portfolio Dubai, Videography portfolio Dubai, Event photography projects UAE, Wedding photography portfolio Dubai, Corporate event visual archive',
    ogImage: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_112501',
    ogType: 'website',
  },
  contact: {
    path: '/contact',
    canonical: `${SITE_URL}/contact`,
    title: 'Contact DM Creation | Book Photography & Video Dubai',
    description:
      'Contact DM Creation to discuss photography, videography, live streaming or 360° booth services for your next event or production in Dubai and the UAE.',
    keywords:
      'Book photographer Dubai, Videography booking Dubai, Live streaming enquiry Dubai, Event media production booking UAE, Contact visual studio Dubai',
    ogImage: `${SITE_URL}/home/hero.PNG`,
    ogType: 'website',
  },
};
