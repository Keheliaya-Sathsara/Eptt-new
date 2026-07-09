// One-off generator for placeholder brand-toned SVGs used until real
// brochure photography / client logos are supplied. Safe to delete once
// real assets land in src/assets/images — see README "Swapping in real assets".
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'src', 'assets', 'images');
fs.mkdirSync(OUT, { recursive: true });

const GOLD = '#E8B93B';
const BLACK = '#0D0D0D';
const CHARCOAL = '#1C1C1C';
const GREY = '#C9C9C9';
const WHITE = '#FFFFFF';

// SVG is XML — raw `&`/`<`/`>` in text content produces a document that
// fails to parse as an image (fetches fine, renders as 0x0).
function xmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function photoPlaceholder({ label, sub = '', w = 1200, h = 900 }) {
  const safeLabel = xmlEscape(label);
  const safeSub = xmlEscape(sub.toUpperCase());
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${safeLabel}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${CHARCOAL}"/>
      <stop offset="100%" stop-color="${BLACK}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${w}" height="${h}" fill="none" stroke="${GOLD}" stroke-width="6"/>
  <circle cx="${w / 2}" cy="${h / 2 - 40}" r="70" fill="none" stroke="${GOLD}" stroke-width="4" opacity="0.6"/>
  <text x="50%" y="${h / 2 - 30}" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="34" font-weight="700" fill="${GOLD}">${safeLabel}</text>
  ${sub ? `<text x="50%" y="${h / 2 + 20}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="18" letter-spacing="2" fill="${GREY}">${safeSub}</text>` : ''}
</svg>`;
}

function logoPlaceholder(label) {
  const w = 320, h = 180;
  const safeLabel = xmlEscape(label);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${safeLabel} logo">
  <rect width="${w}" height="${h}" fill="${WHITE}"/>
  <rect x="4" y="4" width="${w - 8}" height="${h - 8}" fill="none" stroke="${GREY}" stroke-width="2" rx="10"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Poppins, Arial, sans-serif" font-size="20" font-weight="700" fill="${BLACK}">${safeLabel}</text>
</svg>`;
}

const photos = [
  { file: 'hero-chauffeur.svg', label: 'Chauffeur & Mercedes', sub: 'Hero', w: 1400, h: 1600 },
  { file: 'story-mercedes-1.svg', label: 'Mercedes S-Class', sub: 'Our Story', w: 900, h: 700 },
  { file: 'story-mercedes-2.svg', label: 'Mercedes E-Class', sub: 'Our Story', w: 900, h: 700 },
  { file: 'fleet-s-class.svg', label: 'Mercedes S-Class Coupé', w: 800, h: 600 },
  { file: 'fleet-c-class.svg', label: 'Mercedes C-Class', w: 800, h: 600 },
  { file: 'fleet-e-class.svg', label: 'Mercedes E-Class', w: 800, h: 600 },
  { file: 'fleet-v-class.svg', label: 'Mercedes V-Class', w: 800, h: 600 },
  { file: 'fleet-corolla-axio.svg', label: 'Toyota Corolla Axio', w: 800, h: 600 },
  { file: 'fleet-hiace.svg', label: 'Toyota HiAce', w: 800, h: 600 },
  { file: 'transfers-airport.svg', label: 'Airport Transfer', sub: 'Expressway both ways', w: 1200, h: 800 },
  { file: 'tour-colombo.svg', label: 'In & Around Colombo', w: 700, h: 500 },
  { file: 'tour-city.svg', label: 'City Tours', w: 700, h: 500 },
  { file: 'tour-heritage.svg', label: 'Cultural & Heritage', w: 700, h: 500 },
  { file: 'tour-outstation.svg', label: 'Outstation Tours', w: 700, h: 500 },
];

const logos = [
  'Central Bank of Sri Lanka',
  'Galle Face Hotel',
  'Taj Samudra Colombo',
  'Oman Air',
  'LOT Polish Airlines',
  'Caltex',
  'Chevron',
  "Bally's Casino",
  'Bellagio Casino',
  'Casino Marina',
];

for (const p of photos) {
  fs.writeFileSync(path.join(OUT, p.file), photoPlaceholder(p), 'utf8');
}

for (const name of logos) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  fs.writeFileSync(path.join(OUT, `client-${slug}.svg`), logoPlaceholder(name), 'utf8');
}

console.log(`Generated ${photos.length + logos.length} placeholder SVGs in ${OUT}`);
