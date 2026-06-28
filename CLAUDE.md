# ArcIntelligence Landing — Marketing Site

## Project Overview
Public-facing landing page for ArcIntelligence, an 
AI-powered welding configuration tool for robotic 
welding cells. This site exists to generate leads 
from welding workshops and present credibility to 
potential investors/pilot customers.

This is a SEPARATE project from the ArcIntelligence 
desktop app. No Python, no RoboDK, no backend logic.
Pure static marketing site.

## Product Being Marketed
ArcIntelligence is NOT a simulation suite. It's a 
surgical complement to existing robot programming 
environments (RoboDK, RobotStudio).

Core value proposition:
"What your robot programmer takes 4 hours to do,
ArcIntelligence does in under 2 minutes."

Target workflow:
STEP file → automatic joint detection → 
ISO 2553 parameters → robot program exported → 
ready to load on real controller

Target customer: workshop manager who currently 
pays an engineer 4h to program each new piece.

## Tech Stack
- **Framework:** Astro 5
- **Language:** TypeScript
- **Styling:** Pure CSS (no Tailwind, no UI libraries)
- **i18n:** Custom ES/EN toggle (no astro-i18n package — 
  follow the same pattern as imjuank.dev portfolio: 
  language switcher in nav, content duplicated per 
  language in frontmatter or separate content files)
- **Deployment:** GitHub Pages initially, migrate to 
  Cloudflare DNS later (same pattern as portfolio)
- **Images:** Astro's built-in Image component for 
  optimization
- **Icons:** Inline SVG or lucide icons (no icon font)

## Brand Identity — MUST MATCH ArcIntelligence app exactly
- BG_PRINCIPAL:  #faf9f7 (cream white)
- BG_PANEL:      #f0ede8 (cream panel)
- ACENTO:        #e07b39 (Claude orange — primary CTA color)
- ACENTO_HOVER:  #c96a2a (dark orange)
- TEXTO:         #1a1a1a (near black)
- TEXTO_SEC:     #6b6b6b (gray)
- EXITO:         #4a9e6b (green — use sparingly, success states)
- ERROR:         #d04a4a (red — avoid unless necessary)
- BORDE:         #e8e3dc

Typography: same monospace-influenced, technical-but-warm 
aesthetic as the app itself. Headlines can be slightly 
bolder/larger than body — this is an industrial tool, 
not a consumer app, so avoid overly playful design.

Logo: reuse the existing ArcIntelligence robot-arm logo 
(orange/cream isometric robot icon). Asset will be 
provided by the user — place in /public/logo.png and 
generate favicon variants.

## Site Structure (single page, scroll sections)
1. **Hero** — tagline + CTA + product screenshot/mockup
2. **Problem** — pain points of manual robot programming
3. **Solution** — the 4-step value chain visualized
4. **Features** — grid of key capabilities with icons
5. **Tech Stack** — badges of technologies used (builds trust)
6. **How It Works** — step-by-step with screenshots
7. **Comparison** — "Manual programming vs ArcIntelligence" table
8. **Market Fit** — who this is for (workshop profile)
9. **Contact / Pricing CTA** — form or mailto for pricing inquiry
10. **Footer** — links, copyright

## Content Language Rules
- Spanish version: tone for Spanish workshop owners — 
  direct, practical, ROI-focused
- English version: tone for international/investor 
  audience — slightly more technical, scalability-focused
- Both versions: SAME structure, SAME claims, just 
  localized tone. Never invent claims that don't exist 
  in the actual product.
- All numeric/technical claims (2 minutes, ISO 2553, 
  4 hours saved) must come directly from what the user 
  confirms — do not invent extra statistics.

## Coding Standards
- Components in `/src/components/*.astro`
- Each major section = one component
- Shared content (translations) in 
  `/src/content/i18n/{es,en}.json` or similar structured 
  format — NOT hardcoded strings scattered in components
- Mobile-first responsive design — workshop owners 
  often browse on phones
- Lighthouse score target: 90+ on all metrics 
  (performance matters for SEO/credibility)
- No client-side JS frameworks (React/Vue) — Astro 
  islands only if absolutely needed (e.g. language toggle 
  state, contact form validation)
- SEO: proper meta tags, OG image, sitemap.xml, 
  robots.txt — this site needs to be discoverable

## What This Site Is NOT
- NOT a demo of the actual software (no embedded app, 
  no live STEP file upload)
- NOT a blog or documentation site
- NOT meant to handle payments — contact form/email 
  only for pricing inquiries
- NOT multi-page unless explicitly requested later 
  (start as single-page scroll site)

## Assets Needed From User (not yet provided)
- App screenshots (will be added incrementally)
- Real contact email/LinkedIn for the CTA section
- Company name for footer/legal (if applicable)

## Deployment
- Build with `npm run build`
- Output static files compatible with GitHub Pages
- Domain: TBD (likely subdomain of imjuank.dev or 
  separate domain — confirm with user before final deploy)