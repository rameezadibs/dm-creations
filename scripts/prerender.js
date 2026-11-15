import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://dmcreationstudio.com';

const PAGES = [
  {
    route: '/',
    outputPath: path.join(distDir, 'index.html'),
    title: 'DM Creation | Photography &amp; Videography in Dubai',
    rawTitle: 'DM Creation | Photography & Videography in Dubai',
    description:
      'DM Creation provides professional photography, videography, live streaming and 360° photo booth experiences for events and brands in Dubai and the UAE.',
    canonical: `${SITE_URL}/`,
    keywords:
      'Photography services Dubai, Videography services Dubai, Photography and videography UAE, Event photography Dubai',
    ogImage: `${SITE_URL}/home/hero.PNG`,
    h1: 'WE CAPTURE WHAT WORDS CAN&#39;T.',
    h1Sub: 'DM Creation is a premier Dubai-based studio delivering editorial photography, cinematic videography, 4K live streaming, and interactive 360° photo booth experiences.',
  },
  {
    route: '/about',
    outputPath: path.join(distDir, 'about/index.html'),
    title: 'About DM Creation | Creative Production Studio Dubai',
    rawTitle: 'About DM Creation | Creative Production Studio Dubai',
    description:
      'Discover DM Creation, a creative visual production studio in Dubai delivering photography, filmmaking, live streaming and interactive event experiences.',
    canonical: `${SITE_URL}/about`,
    keywords:
      'Creative production studio Dubai, Photography studio Dubai, Videography company Dubai',
    ogImage: 'https://res.cloudinary.com/aubynz6r/image/upload/heroo',
    h1: 'BEHIND THE LENS.',
    h1Sub: 'We&#39;re the people behind the cameras, the edits, the live feeds and the moments you&#39;ll want to experience again. DM Creation crafts high-fashion editorial photography, cinematic films, 4K multi-camera live broadcasts, and interactive 360° photo booths across the UAE and worldwide.',
  },
  {
    route: '/services',
    outputPath: path.join(distDir, 'services/index.html'),
    title: 'Photography, Videography &amp; Live Streaming Dubai | DM Creation',
    rawTitle: 'Photography, Videography & Live Streaming Dubai | DM Creation',
    description:
      "Explore DM Creation's photography, videography, multi-camera live streaming and 360° video booth services for events and corporate productions across the UAE.",
    canonical: `${SITE_URL}/services`,
    keywords:
      'Event photography Dubai, Corporate videography Dubai, Live streaming services Dubai, 360 photo booth rental Dubai, Event video production UAE',
    ogImage: `${SITE_URL}/images/hero-cinematic.jpg`,
    h1: 'LUXURY VISUAL PRODUCTION SERVICES.',
    h1Sub: 'From editorial photography and anamorphic cinema to broadcast-grade multi-cam live streaming and interactive 360° activations across Dubai and the UAE.',
  },
  {
    route: '/portfolio',
    outputPath: path.join(distDir, 'portfolio/index.html'),
    title: 'Photography &amp; Videography Portfolio Dubai | DM Creation',
    rawTitle: 'Photography & Videography Portfolio Dubai | DM Creation',
    description:
      "Explore DM Creation's photography, videography and event production portfolio, showcasing creative visual storytelling across Dubai and the UAE.",
    canonical: `${SITE_URL}/portfolio`,
    keywords:
      'Photography portfolio Dubai, Videography portfolio Dubai, Event photography projects UAE',
    ogImage: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_112501',
    h1: 'A FEW MOMENTS WE&#39;VE KEPT.',
    h1Sub: 'Stories we have had the distinct privilege of capturing across photography, cinema, broadcast, and experiential mediums in Dubai and the UAE.',
  },
  {
    route: '/contact',
    outputPath: path.join(distDir, 'contact/index.html'),
    title: 'Contact DM Creation | Book Photography &amp; Video Dubai',
    rawTitle: 'Contact DM Creation | Book Photography & Video Dubai',
    description:
      'Contact DM Creation to discuss photography, videography, live streaming or 360° booth services for your next event or production in Dubai and the UAE.',
    canonical: `${SITE_URL}/contact`,
    keywords:
      'Book photographer Dubai, Videography booking Dubai, Live streaming enquiry Dubai',
    ogImage: `${SITE_URL}/home/hero.PNG`,
    h1: 'START THE VISUAL DIALOGUE.',
    h1Sub: 'Connect directly with our studio directors for photography, videography, live streaming or 360° booth commissions in Dubai, Business Bay and worldwide.',
  },
];

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  for (const page of PAGES) {
    let html = baseHtml;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);

    // Replace Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
      `<meta name="description" content="${page.description}" />`
    );

    // Replace Keywords
    html = html.replace(
      /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/s,
      `<meta name="keywords" content="${page.keywords}" />`
    );

    // Replace Canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
      `<link rel="canonical" href="${page.canonical}" />`
    );

    // Replace OG Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:title" content="${page.rawTitle}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:url" content="${page.canonical}" />`
    );
    html = html.replace(
      /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/s,
      `<meta property="og:image" content="${page.ogImage}" />`
    );

    // Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s,
      `<meta name="twitter:title" content="${page.rawTitle}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
      `<meta name="twitter:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/s,
      `<meta name="twitter:image" content="${page.ogImage}" />`
    );

    // Inject prerendered semantic fallback in <div id="root">
    // This guarantees bots/crawlers without JS get complete, crawlable HTML containing H1 and description
    const semanticFallback = `
      <div class="sr-only" aria-hidden="true" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">
        <h1>${page.h1}</h1>
        <p>${page.h1Sub}</p>
        <nav aria-label="Site Navigation">
          <a href="/">Home</a>
          <a href="/about">About DM Creation</a>
          <a href="/services">Visual Production Services Dubai</a>
          <a href="/portfolio">Photography &amp; Videography Portfolio</a>
          <a href="/contact">Contact Production Desk Dubai</a>
        </nav>
      </div>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root">${semanticFallback}</div>`);

    // Ensure output directory exists
    const dir = path.dirname(page.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(page.outputPath, html, 'utf8');
    console.log(`Prerendered: ${page.route} -> ${page.outputPath}`);
  }

  // Create 404.html for static hosting fallbacks
  const notFoundHtml = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>404 — Page Not Found | DM Creation</title>`)
    .replace(
      /<meta\s+name="robots"\s+content=".*?"\s*\/?>/s,
      `<meta name="robots" content="noindex, follow" />`
    );
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
  console.log(`Generated: 404.html`);

  console.log('Build-time prerendering complete for all 5 canonical routes.');
}

prerender();
