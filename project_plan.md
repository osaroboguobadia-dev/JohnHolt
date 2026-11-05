# John Holt PLC — Corporate Website

## 1. Project Description
A premium, modern corporate website for **John Holt PLC**, a long-established Nigerian business group. The site must communicate heritage, trust, technical credibility and innovation, and showcase business divisions (Power Generation/Generators, Fire Safety & Firefighting Solutions, Engineering/Technical Services and other divisions), while driving enquiries and quote requests.

Target users: corporate/institutional buyers, facility & procurement managers, industrial clients, and general business visitors researching John Holt PLC's services.

No real company facts (stats, leadership names, certifications, client logos, exact addresses) were supplied — these will be implemented as clearly structured, easily editable placeholder content so verified information can be swapped in later without restructuring the site.

## 2. Page Structure
- `/` - Home
- `/about` - About Us (history, mission, values, leadership, milestones)
- `/services` - Services / Business Solutions (overview of all divisions)
- `/services/:slug` - Service detail page (e.g. power-generation, fire-safety, engineering-services)
- `/projects` - Projects / Case Studies
- `/news` - News / Insights
- `/news/:slug` - News article detail
- `/careers` - Careers
- `/partners` - Partners / Brands
- `/faqs` - FAQs
- `/contact` - Contact (enquiry form, offices, map)
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms & Conditions
- `/cookie-policy` - Cookie Policy

## 3. Core Features
- [ ] Sticky responsive header with mega-menu for Services, mobile hamburger menu, "Request a Quote" CTA
- [ ] Home page: hero, animated stats, intro, divisions, featured projects, why-choose-us, testimonials, news preview, CTA
- [ ] About page: heritage/timeline, mission/vision/values, leadership
- [ ] Services page with filterable categories + individual detail pages, FAQs, enquiry CTA
- [x] Projects/Case Studies gallery
- [x] News/Insights list + detail
- [x] Careers page
- [x] Partners/Brands page
- [x] FAQs page (expandable accordions)
- [x] Contact page with enquiry form (via Form feature), office info, map embed, social links
- [x] Legal pages: Privacy, Terms, Cookie Policy
- [ ] Multi-column footer (navigation, services, contact, social, legal, newsletter)
- [ ] Scroll reveal / counter animations respecting prefers-reduced-motion
- [x] SEO: titles, meta descriptions, canonical, OG tags, structured data where applicable

## 4. Data Model Design
No database required — this is a content/marketing site. All content (services, projects, news, testimonials, FAQs) will live in typed mock data files under `src/mocks/`, ready to be swapped for a CMS/API later. Contact and newsletter forms use the built-in Form feature (no backend needed).

## 5. Backend / Third-party Integration Plan
- Database: not needed for now (static content site)
- Forms: Contact/enquiry form and Newsletter signup via built-in Form feature (get_form_url)
- Booking/Payments/Shopify: not needed
- Map: Google Maps embed iframe on Contact page

## 6. Development Phase Plan

### Phase 1: Foundation + Home Page
- Goal: Establish design system (brand colors/typography via StyleSystem tokens), global Navbar + Footer, and a complete, polished Home page
- Deliverable: Working Home page with hero, stats, divisions, projects teaser, why-us, testimonials, news teaser, CTA; functioning nav + footer

### Phase 2: About + Services (overview + detail pages)
- Goal: Company story and full services/business solutions content
- Deliverable: About page; Services hub with filtering; 3 service detail pages (Power Generation, Fire Safety, Engineering Services)
- Progress: [x] /about (About Us) page built — hero, story, mission/vision/values, heritage timeline, leadership, closing CTA. Nav label updated to "About Us".
- Progress: [x] /services hub built — hero, 4-service catalog grid, delivery process, industries served, FAQ accordion, closing CTA.
- Progress: [x] Service detail pages built for all six catalog entries (/services/power-generation, /services/fire-safety, /services/engineering-services, /services/warehousing-logistics (Warehousing & Inventory Management), /services/renewable-energy, /services/marine-boat-building) — each with detail hero + breadcrumb, overview + strengths, capabilities grid, service-specific FAQ accordion, related services and closing CTA. Nav dropdown + hub "Learn more" links now resolve.

### Phase 3: Projects, News, Careers, Partners, FAQs
- Goal: Supporting content pages
- Deliverable: Projects gallery, News list/detail, Careers, Partners, FAQs pages
- Progress: [x] /projects (Projects & Case Studies) built — hero, animated stats strip, featured case study spotlight, filterable project gallery (category tabs + counts), delivery standards band, closing CTA.
- Progress: [x] /news (News & Insights) + /news/:slug (article detail) built — hub with hero, featured story spotlight, category-filterable + searchable article archive grid, newsletter subscribe CTA. Article detail pages have a full-bleed hero with author/date/read-time meta, structured body (headings, paragraphs, quotes, checklists), sticky sidebar (share, tags, quote CTA, back-link), related articles and closing CTA.
- Progress: [x] /careers (Careers) built — hero, why-work-with-us benefits grid + culture panel, department-filterable open roles list with expandable role details, 4-step hiring process, and an application section with a working application form (built-in Form) where "Apply for this role" pre-selects the position.
- Progress: [x] /partners (Partners & Brands) built — hero, animated partner stats, category-filterable partner logo grid (monogram logo tiles + counts), four partnership categories, why-partner benefits section, and a "Become a Partner" section with a working partner application form (built-in Form).
- Progress: [x] /faqs (FAQs) built — hero with live search, sticky category navigation, category-grouped accordions with per-group expand/collapse, search filtering with match counts and a reset empty state, and a support-channels band. Phase 3 complete.

### Phase 4: Contact + Legal pages
- Goal: Lead capture and compliance
- Deliverable: Contact page with working form + map; Privacy, Terms, Cookie Policy pages
- Progress: [x] /contact (Contact) page built — hero with breadcrumb, quick-contact channel cards (call/email/sales/support), enquiry section with a working enquiry form (built-in Form) plus an assurance sidebar, office locations with an interactive office switcher driving a Google Maps embed, and the shared closing CTA. "Request a Quote" targets across the site now resolve.
- Progress: [x] Legal pages built — /privacy-policy, /terms-conditions and /cookie-policy share a reusable legal layout (compact hero with breadcrumb + last-updated, sticky table of contents with scroll-spy, richly written sectioned content, related-policy links, contact card and closing CTA). Footer legal links now resolve. Phase 4 complete.
- [x] Legal pages: Privacy, Terms, Cookie Policy
- [x] Contact page with enquiry form (via Form feature), office info, map embed, social links

### Phase 5: Polish pass
- Goal: Cross-page QA
- Deliverable: Animation polish, accessibility pass, SEO metadata across all pages, responsive QA
- Progress: [x] Per-page SEO metadata system added — reusable `usePageMeta` hook sets document title, meta description, canonical URL and Open Graph/Twitter tags; applied to Home, About, Services (hub + all detail pages), Projects, News (hub + article detail), Careers, Partners, FAQs, Contact and all three legal pages. Detail pages pull title/description dynamically from service and article data.
- Progress: [x] Accessibility pass — added a skip-to-content link and a focusable `main` landmark at the app shell; gave the desktop Services mega-menu and the mobile Services toggle proper `aria-haspopup` / `aria-expanded` states; decorative chevron icons marked `aria-hidden`.
- Progress: [x] Animation audit — verified the shared `fade-up` scroll reveal is applied consistently across all 50+ sections, respects `prefers-reduced-motion` via the global motion override, and added an `IntersectionObserver` fallback so reveal content can never remain hidden. Phase 5 complete.
- Progress: [x] JSON-LD structured data added — a reusable `JsonLd` component plus a `src/lib/schema.ts` builder module emit schema that mirrors visible content: `Organization` (site-wide, from the app shell), `LocalBusiness` for each office in Lagos/Abuja/Port Harcourt including opening hours (Contact page), and `FAQPage` generated from every FAQ question/answer (FAQs page).