# Sankalp Public School — complete frontend build prompts

Nine sequential prompts for a Gemini coding agent: eight implementation prompts and one final verification prompt.

The goal is to reproduce the supplied school homepage as closely as possible, including its compact desktop layout, imagery, typography, colours and proportions, then add restrained motion and responsive behaviour. Build the UI only.

## Before you start

1. Open your project folder in the coding editor that will run Gemini. Use a mode with image input, file editing and terminal access. A chat-only model can provide code, but cannot directly build and inspect your workspace.
2. Save the supplied screenshot in the project as **reference/sankalp-homepage.png** and attach it to the coding conversation. The attached original is **1586 × 992 pixels**, approximately **8:5**. Keep its original dimensions.
3. Save this prompt pack as **Sankalp-Website-Build-Prompts.md** in that project. This lets later prompts refer to the shared specification without depending only on conversation memory.
4. Add any original crest, photographs and font files you have. The asset checklist below tells you what is needed.
5. Send **Prompt 1**, let the agent finish editing the files, then send **Prompt 2**, and continue through **Prompt 9**. Do not send all nine at once. Keep the same project and conversation; if you start a new conversation, attach the screenshot and this pack again.

Use the Gemini model actually available in your editor. These prompts do not depend on a particular model version or on the version label “Gemini 3.8.” They do not require a Gemini API key in the website.

**Accuracy limit:** a flattened screenshot does not contain the original component layers, font files or image areas hidden beneath overlays. Matching the original photographs, crest and fonts matters more than adding more libraries. Matching those assets and comparing a browser rendering at the same size can produce a very close result; a prompt cannot guarantee literal pixel identity. Any replacement image, reconstructed crest or substitute font must be recorded as an approximation.

**Desktop and mobile:** the screenshot is the authority for the desktop homepage after animations have settled. A mobile design is not supplied, so mobile behaviour below is an explicit adaptation that preserves the same content and visual identity.

## Chosen technologies

These are implementation choices for this UI, not requirements implied by the screenshot.

| Technology | Use in this project |
| --- | --- |
| React + TypeScript | Reusable page components, typed local content and browser-only interaction state. |
| Vite | Development server and static production build. Start with the React TypeScript template; use a supported Node.js release compatible with the installed Vite version. See the [Vite guide](https://vite.dev/guide/). |
| Tailwind CSS v4 + custom CSS | Responsive layout utilities plus precise CSS for the reference geometry. Use the documented Vite plugin and CSS import. See [Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite). |
| Motion for React | Entrance, hover and dialog transitions. Install the package named motion and import from motion/react. See [Motion installation](https://motion.dev/docs/react-installation). |
| CSS and inline SVG | Hero clipping, curved colour bands, image fades and small custom symbols. |
| Lucide React + selected custom SVGs | Interface icons. Lucide icons are SVG React components; use custom filled shapes where the screenshot differs. See [Lucide React](https://lucide.dev/guide/react). |
| Native HTML dialog, inputs and buttons | Styled local forms and accessible modal interactions without another large UI framework. |
| Local image/font assets | Stable image crops and typography. Prefer supplied originals; identify substitutes honestly. |
| Browser tools or Playwright, at the end | One short screenshot and interaction pass. [Playwright supports screenshot comparisons](https://playwright.dev/docs/test-snapshots). |

Node.js is needed for development/build tooling. The deployed output can be static files; this scope has no application server, database, authentication service or payment integration. React state is sufficient for the demonstration interactions. Next.js, Redux, GSAP, Three.js, a CMS and an API layer are not needed for the requested page.

UI UX Pro Max was not available in the environment used to prepare this pack. Prompt 1 tells your coding agent to read it if it is available in your editor. The screenshot remains the visual authority; the skill should support implementation and accessibility without choosing a new design.

## Shared reference specification

Every prompt below inherits this specification. Numbers are starting measurements from the uploaded raster, not recovered source CSS. Inspect the screenshot and refine them during the final comparison.

### A. Desktop geometry

Measure in **CSS pixels at a browser viewport of 1586 × 992**, with device scale factor 1 and browser zoom 100%. The source image has no browser chrome.

| Region | Approximate vertical position | Approximate height | Composition |
| --- | --- | --- | --- |
| Announcement strip | y = 0–30 | 30 px | Navy, small announcement on the left, utilities and social symbols on the right. |
| Main header | y = 30–98 | 68 px | Crest and school name; navigation; search; teal Parent Login button. |
| Hero | y = 98–446 | 348 px | Cream copy area, curved photo boundary, four statistics, admission badge and coloured corner bands. |
| Shortcut cards | y = 462–546 | 84 px | Four pastel cards, with 16 px of space above and below. |
| Feature cards | y = 562–730 | 168 px | Academic Excellence, Beyond the Classroom, A Nurturing Campus. |
| Community panels | y = 744–899 | 155 px | Events, parent testimonial, latest news. |
| Footer | y = 912–992 | 80 px | Navy horizontal footer with identity, contact, links and leaf slogan. |

Horizontal starting measurements:

- Header and top-strip content run approximately from x = 96 to x = 1490. Their inner wrapper is narrower than the card rows.
- The hero copy starts near x = 67. Its text measure is roughly 550–590 px; tune it to preserve the reference line breaks.
- The photo appears from approximately x = 675 at the top to x = 807 at the bottom along a curved left edge. It reaches the right edge of the image. Its frame occupies more than half the hero.
- The admission badge is approximately 264 × 100 px, 42 px from the right and 24 px from the bottom of the hero.
- Card rows start near x = 21 and end near x = 1565. Use roughly 16 px gaps for shortcuts and 20 px gaps for the three-column rows.
- Shortcut widths are close to equal. The outer feature/community columns are slightly wider than the middle one; start near a 1.06 : 1 : 1.06 ratio and tune each row from the image.
- Footer content begins near x = 49. It does not use the hero text inset or the card-row inset.

Preserve this unusually compact composition at the reference size. Do not replace it with a tall landing page with large section gaps. Heights may grow on smaller screens or under text zoom; do not force the entire page into a fixed-height canvas.

### B. Colours, type and surfaces

| Token | Starting value | Use |
| --- | --- | --- |
| Announcement navy | #143C65 | Top strip; sampled approximate colour. |
| Footer navy | #0C3055 | Footer; sampled approximate colour. |
| Heading navy | #082959 | Headings, navigation and key labels. |
| Teal | #008697 | Second hero headline, parent login and accents. |
| Golden orange | #FFAF24 | Primary admission button, awards and accents. |
| Cream | #FEF9F1 | Hero copy background; sampled approximate colour. |
| Body text | #485469 | Descriptive text. |
| Light border | #E5EBF0 | Feature and community cards. |
| Admission tint | #EDF9F7 | First shortcut background. |
| Portal tint | #EDF7FE | Second shortcut background. |
| Payment tint | #FEF5F0 | Third shortcut background. |
| Bus tint | #EAF9F0 | Fourth shortcut background. |

- Hero title: a bold traditional serif, approximately 48 px with a tight line height around 1.05–1.08. Two lines at the reference width; first navy, second teal.
- School wordmark: bold uppercase serif, approximately 21–22 px.
- General UI: a compact sans serif. Hero paragraph about 16 px; navigation about 13 px; card titles about 16–18 px; supporting copy about 12–13 px. Some reference metadata is smaller, around 10–11 px.
- The original fonts cannot be identified reliably from this image alone. Use supplied fonts if available. Georgia for serif headings and Arial for UI are starting substitutes, not verified identities. Record the actual fonts used in browser captures; do not assume a named system font is installed on every machine.
- Main cards have small corners, around 6–8 px, and thin pale borders. CTA buttons have somewhat larger corners, around 12 px. The admission badge is pill-shaped.
- Shadows are subtle. Preserve the image’s white, cream and lightly tinted surfaces.

### C. Asset checklist

Use these names as the agreed interface between asset preparation and components. File extensions can change if the real files use another supported format; update the manifest accordingly.

| Intended asset path | What it needs to show |
| --- | --- |
| public/images/school-crest.png | The supplied navy/gold crest, ideally with transparent background. |
| public/images/hero-students.webp | Four Indian school students in light-blue shirts, navy striped ties and backpacks, standing in front of the modern school campus; a girl holds a book. Match the source composition. |
| public/images/academic-lab.webp | Two uniformed students working with a microscope; people concentrated toward the right side. |
| public/images/student-basketball.webp | A student in a dark SPS basketball jersey on an outdoor court, composed toward the right. |
| public/images/campus.webp | Green landscaped campus and school building with a stone sign on the right. |
| public/images/parent-priya.webp | The parent portrait used in the circular testimonial avatar. |
| public/images/news-science.webp | Small student science-exhibition group photograph. |
| public/images/news-green-campus.webp | Small campus/environment initiative photograph. |
| public/images/news-toppers.webp | Small student achievement group photograph. |
| public/fonts/ | Original licensed font files, if supplied. |

Asset handling order:

1. Reuse supplied standalone originals.
2. Use an isolated photographic crop from the reference only where it is clean and useful at its displayed size. A parent portrait or news thumbnail may be recoverable. Keep photographic pixels separate from UI labels, buttons and borders.
3. A hero or feature image obscured by text, masks or the admission badge cannot be recovered completely by cropping. Request the original or mark a substitute as approximate. If the coding environment has image generation, it may create an individual replacement photo using the visual descriptions above; that is a replacement, not an exact recovery.
4. Continue implementing geometry when assets are missing. Use stable, correctly sized local placeholders temporarily and record unresolved items in ASSETS.md. Never claim final visual fidelity while those placeholders remain.

Do not render the whole screenshot as the homepage, divide it into background strips, or place transparent buttons over a picture of the interface. Text, layout, links, badges, forms and interactions must be real HTML/CSS/React. Small image crops used as actual photographic assets are different from rasterizing the UI.

### D. Exact visible copy

Treat the following as reference/demo content, not verified claims about a real institution. Preserve the years and dates shown in the supplied design; do not automatically modernise them.

**Announcement**

Empowering young minds for a brighter tomorrow | Admissions Open for 2027–28 | Schedule a campus visit today!

**Utilities**

Quick Links · Career · Alumni · FAQ · Contact

Facebook, Instagram, YouTube and LinkedIn symbols appear at the right.

**Identity**

SANKALP PUBLIC SCHOOL

Learn with Purpose. Lead with Confidence.

**Navigation**

Home · About Us · Academics · Life at SPS · Admissions · News & Events · Contact

Search icon; Parent Login button.

**Hero**

A CBSE AFFILIATED SENIOR SECONDARY SCHOOL

Learn with Purpose.

Lead with Confidence.

At Sankalp Public School, we nurture curious minds, compassionate hearts and confident leaders for a brighter, kinder tomorrow.

Apply for Admission →

Book a Campus Visit

| Value | Label |
| --- | --- |
| 25+ | Years of Excellence |
| 2000+ | Happy Students |
| 120+ | Dedicated Faculty |
| 100+ | Awards & Recognitions |

Badge: Admissions Open / 2027–28 / New Dreams. Brighter Futures.

**Shortcut cards**

| Title | Description |
| --- | --- |
| Online Admission | Start your child’s journey with SPS today. |
| Parent Portal | Stay connected. Track progress. Be involved. |
| Fee Payment | Simple, secure and convenient online payment. |
| Bus Tracking | Live tracking for your child’s safety and peace of mind. |

**Feature cards**

| Title | Description | Action |
| --- | --- | --- |
| Academic Excellence | A strong CBSE-based curriculum with a focus on conceptual learning, critical thinking and real-world skills. | Know More → |
| Beyond the Classroom | Sports, arts, leadership, community service and more — because every child’s potential deserves a platform. | Explore Life at SPS → |
| A Nurturing Campus | Modern infrastructure, safe & green campus, smart classrooms and spaces to grow, explore and belong. | Take a Virtual Tour → |

**Upcoming Events** — View All →

| Date | Title | Supporting line |
| --- | --- | --- |
| 15 Nov | Children’s Day Celebration | Fun \| Talent \| Togetherness |
| 28 Nov | Annual Sports Day | Stronger Minds, Healthier Futures |
| 10 Dec | Inter-School Science Fest | Ideas for a Better Tomorrow |

**What Parents Say** — View All →

“Sankalp Public School has given my child not just academic knowledge, but a world of values, confidence and a sense of responsibility. We are truly grateful for the caring teachers and the positive environment.”

Mrs. Priya Sharma

Parent of Class VIII Student

Five orange stars.

**Latest News** — View All →

| Title | Supporting line | Date |
| --- | --- | --- |
| SPS students excel in Zonal Science Exhibition | Our young innovators bring home top honours. | 12 Oct 2024 |
| Green Campus Initiative Launched | Students pledge for a cleaner, greener tomorrow. | 02 Oct 2024 |
| SPS Felicitates Board Toppers | Hard work. Humility. Higher Goals. | 15 Sep 2024 |

**Footer**

SANKALP PUBLIC SCHOOL

Learn with Purpose. Lead with Confidence.

Near Civil Lines, Raipur, Chhattisgarh – 492001

+91 771 234 5678

info@sankalppublicschool.in

Home | About | Admissions | News & Events | Privacy Policy | Terms

© 2024 Sankalp Public School. All rights reserved.

A Kinder / Brighter Tomorrow / Together — with a green leaf symbol.

## Prompt 1 — establish the reference, assets and runnable foundation

Attach the screenshot when sending this prompt.

~~~text
Implement a React frontend that reproduces the attached Sankalp Public School homepage. Read Sankalp-Website-Build-Prompts.md and inspect reference/sankalp-homepage.png before editing. The reference is 1586 × 992 pixels. Carry out the work in the workspace; do not stop after an implementation plan.

PROJECT CONTRACT — applies to this and every later prompt:
- Build only the screenshot’s homepage plus its local interactive UI states. No backend, database, server actions, API calls, authentication provider, payment gateway, email delivery or external tracking integrations.
- The screenshot governs the visual design. Preserve composition, density, text, colours, image subjects, crop positions, borders and relative scale. Build the supplied design without introducing a different theme or extra homepage sections.
- Use real semantic React components and selectable text. Never use the entire screenshot, screenshot strips or rasterized UI panels as the page.
- At rest, after entrance animations settle, the desktop page should match the reference. Mobile is a responsive adaptation; desktop stays faithful.
- Prioritise implementation. During Prompts 1–8, fix visible build/runtime blockers as needed, but do not write test suites, coverage configuration or large test plans. Prompt 9 is the focused final verification pass.
- Continue making reasonable reversible implementation choices. At the end of each prompt, give a short summary of what changed, any real blocker and the relevant preview command. Do not ask whether to proceed with already requested work.

First inspect the existing project and applicable project instructions. Preserve useful existing files. If this is a new project, scaffold Vite with the React TypeScript template; if it already uses a compatible stack, extend it without re-scaffolding.

Use React, TypeScript, Vite, Tailwind CSS v4, custom CSS, Motion for React, Lucide React, inline SVG and native HTML controls. Use a Node.js release supported by the installed tooling. Reuse the existing package manager if a lockfile exists; otherwise use npm. Resolve compatible stable versions and preserve the resulting lockfile.

For a new empty project, the expected setup is the equivalent of:
npm create vite@latest . -- --template react-ts
npm install
npm install motion lucide-react
npm install -D tailwindcss @tailwindcss/vite

Do not overwrite a nonempty project to run the scaffold. If reference files already make the directory nonempty, scaffold into a temporary sibling and merge only the required starter files, preserving the reference and all user files.

Configure both the React and Tailwind Vite plugins and import Tailwind using @import "tailwindcss" in the main CSS. Use the v4 setup, not old v3 directives. Import Motion from motion/react; do not install a second animation library.

If UI UX Pro Max is available in this environment, read its actual instructions and apply useful implementation/accessibility guidance. Its design suggestions must not replace the screenshot’s palette, typography, proportions or layout. If unavailable, record that briefly and continue without installing or pretending to have used it.

Create a small maintainable foundation:
- src/App.tsx and the normal Vite entry files.
- src/components/ for the page regions and reusable UI primitives.
- src/data/school.ts for the exact copy, navigation, stats, events, news and mock records from the pack.
- src/data/assets.ts for asset paths, dimensions, focal positions and status.
- src/styles/tokens.css, global.css and page styles for measured design tokens and geometry.
- src/lib/ for small interaction and motion helpers as needed.
- public/images/ and public/fonts/ for local assets.
- DESIGN_REFERENCE.md recording the reference dimensions, section geometry, font substitutes and fixed design decisions.
- ASSETS.md recording each asset as original, clean reference crop, approximate replacement or missing.

Load and inspect existing assets. Follow the pack’s asset-handling order. Preserve the reference image unchanged. Use originals where available; use only clean photographic crops, never a crop containing interface text or an admission badge as a final hero asset. Do not silently use unrelated stock photos. Missing photos must not prevent the layout from being implemented: use stable local placeholders at the correct dimensions and list exactly which originals would improve fidelity.

Set CSS variables from the shared specification. Remove starter-template margins, logos, centred-demo styles and default dark-mode styling. Build a runnable App shell with semantic header/main/footer landmarks and named region components ready for the following prompts. The initial page can show the correct coloured regions and supplied local imagery; it must already load successfully.

Do not implement a testing framework now. End with the concrete files created, asset availability, and how to run the local preview.
~~~

## Prompt 2 — reproduce the announcement strip and header

~~~text
Continue the same project under the contract in Prompt 1. Read DESIGN_REFERENCE.md and the shared specification in Sankalp-Website-Build-Prompts.md, then inspect the reference’s top 98 pixels. Implement the announcement strip and main header now.

At the 1586 px reference width:
- Announcement strip: approximately 30 px tall, navy #143C65, with the gold megaphone, exact announcement text and white separators on the left.
- Utilities on the right: Quick Links with a chevron, Career, Alumni, FAQ, Contact, then Facebook, Instagram, YouTube and LinkedIn symbols. Match small text and spacing. Use supplied/appropriate SVG brand symbols rather than emoji or invented Lucide brand exports.
- Main header: approximately 68 px tall on white. Inner content approximately x=96 through x=1490.
- School crest around 56–60 px high. School name is uppercase bold serif with the small tagline directly beneath it.
- Navigation order: Home, About Us, Academics, Life at SPS, Admissions, News & Events, Contact. Preserve the reference’s Home underline.
- Search icon precedes the teal Parent Login button. At the reference width that button is about 138 × 39 px, with a white person icon and compact rounded corners.

Keep the desktop header in the document flow, matching its reference height. Do not add another banner or make the header taller for dramatic spacing. Do not turn the reference header into a floating pill.

Implement proper buttons/anchors, visible keyboard focus, accessible icon labels and a Quick Links disclosure that closes on Escape and outside interaction. Use a disclosure/list pattern unless implementing full menu keyboard semantics.

Wire navigation targets and action callbacks now so later prompts can supply the local dialogs. Home targets the hero; Academics and Life at SPS target the relevant feature cards; News & Events targets the community row; Contact targets the footer. About Us can open a concise local information dialog using supplied school copy. Admissions and Parent Login will open local UI dialogs. Avoid href="#" placeholders that only jump to the top.

For narrower widths, show a compact brand and menu button before the desktop links collide. Prepare the mobile navigation structure without removing any navigation destination. Final responsive refinement comes in Prompt 7.

Preserve natural flow, semantic landmarks and all other project work. Implement the files now. Do not add tests in this step.
~~~

## Prompt 3 — reproduce the hero, curved imagery and statistics

~~~text
Continue the existing project. Implement the hero to match reference/sankalp-homepage.png using the shared specification and existing assets. This is the most visually distinctive part of the page; inspect it carefully.

REFERENCE GEOMETRY:
- At viewport width 1586 px, the hero begins at y≈98 and is about 348 px high.
- Use the warm cream background on the copy side. Hero copy starts around x=67, with the eyebrow about 29 px below the hero’s top.
- Render one semantic h1 with two styled lines: “Learn with Purpose.” in navy and “Lead with Confidence.” in teal. Start around 48 px bold serif with a tight line height. Match the reference’s two lines at desktop; permit natural additional wrapping on phones.
- Add the exact paragraph from the pack with the same narrow two-line desktop measure and approximately 16 px sans-serif type.
- Align the orange Apply for Admission button and outlined Book a Campus Visit button in a row. Their reference height is about 46 px; the first is roughly 223 px wide and the second 215 px, separated by about 14 px. Use an arrow and calendar icon respectively.
- Render the four statistics in one compact row beneath the buttons. Match circular tinted icons, navy values, smaller labels and spacing: 25+, 2000+, 120+, 100+. Keep the literal final formatting without adding thousands separators.

PHOTO AND CURVE:
- Use the local hero photograph with a carefully tuned focal position. Keep all four main students visible as in the source; do not stretch the image or arbitrarily crop faces.
- The photograph fills the right side and ends at the viewport edge. Its left visible boundary is curved, near x≈675 at the top and x≈807 at the bottom at the reference width.
- Recreate the cream/teal curved boundary with an SVG clip/mask or carefully controlled elliptical CSS geometry. Use a proportional viewBox/clip-path that scales with its container. A straight diagonal polygon is insufficient.
- Add the orange and teal sweeping bands at the bottom-right. Match their thickness and sweep; keep them separate from the image so they scale cleanly.
- Decorative layers must be aria-hidden, ignore pointer events and stay clipped within the hero only. Use ordinary document flow for copy; absolute positioning is appropriate for the photo treatment and badge, not for the whole website.

BADGE:
- Place the white rounded admission badge over the lower-right photograph, approximately 264 × 100 px, right 42 px and bottom 24 px at the reference width.
- Include the pale green leaf circle and the exact three lines: Admissions Open / 2027–28 / New Dreams. Brighter Futures.
- Recreate its border radius, soft shadow, navy heading and teal year in HTML/CSS. Do not use a photo crop with a second baked-in copy of this badge.

Keep the hero compact and readable. Use meaningful image alternative text without repeating surrounding marketing copy. Give the hero image explicit dimensions/aspect handling and eager loading; it must not be deferred as a below-the-fold image. Use stable local asset paths.

Connect the two CTA callbacks to the local dialog state prepared for Prompt 6. Leave animation implementation to Prompt 8 so the base geometry is settled first. Implement now; no test suite in this step.
~~~

## Prompt 4 — reproduce the shortcut and feature cards

~~~text
Continue the current implementation and preserve the completed header and hero. Build the two card rows from the reference using the exact copy in Sankalp-Website-Build-Prompts.md.

SHORTCUT ROW:
- At 1586 px width, begin near x=21, y=462 and end near x=1565. The row is about 84 px high, with four close-to-equal columns and roughly 16 px gaps.
- Order: Online Admission, Parent Portal, Fee Payment, Bus Tracking.
- Match the mint, light-blue, pale-coral and light-green backgrounds respectively.
- Each card has a large circular tinted icon on the left, a bold navy heading, compact description and a circular arrow button on the right.
- Icons depict an application form, people, a payment card and a bus. Where the screenshot uses filled shapes, use a small matching custom SVG instead of forcing a thin outline icon into the wrong appearance.
- Make the whole shortcut one accessible button or link, with the arrow as decorative content. Do not nest a button inside another button or anchor.

FEATURE ROW:
- Begin near y=562; desktop height is about 168 px. Use three columns with around 20 px gaps and slightly wider outer columns as measured in the shared specification.
- Academic Excellence: navy title, short orange underline, exact curriculum copy, Know More link and a microscope photo on the right.
- Beyond the Classroom: navy title, green underline, exact extracurricular copy, Explore Life at SPS link and basketball photo on the right.
- A Nurturing Campus: navy title, blue underline, exact campus copy, Take a Virtual Tour link and campus image on the right.
- Recreate the soft white-to-transparent overlay across each photograph so the left-hand text is readable and the right-hand subject stays visible. It is an image-backed horizontal card, not a vertical photo tile with text below it.
- Match thin pale borders, small corner radii and compact text measures. Tune each photograph’s object-position separately.

Use reusable components backed by the data file, but allow per-card focal positions, accent colours and measured widths. Put each feature anchor ID on the actual corresponding region. Keep meaningful copy visible without line-clamping it away.

Expose callbacks for admission, parent portal, fee preview, bus preview, academic information, life-at-school information and campus gallery. Prompt 6 will finish these interactive states. Do not add new homepage content, fixed chat widgets, counters or a new floating admission bar.

Implement both rows now. Responsive fine-tuning and motion come later; no tests in this step.
~~~

## Prompt 5 — reproduce events, testimonial, news and footer

~~~text
Continue the same project. Build the three community panels and footer so the full desktop composition matches the reference. Use the exact content in the shared specification.

At 1586 px width, the community row starts near y=744 and ends near y=899. Use three aligned panels with thin borders, small corner radii, compact padding and approximately 20 px gaps. The middle panel is slightly narrower.

UPCOMING EVENTS:
- Calendar icon and navy title, with a small View All arrow link aligned right.
- Three compact event cards in one desktop row.
- Coloured date badges: blue 15 Nov, teal 28 Nov, coral 10 Dec.
- Exact titles and supporting lines: Children’s Day Celebration; Annual Sports Day; Inter-School Science Fest.
- Preserve the reference’s date hierarchy, small typography and white surfaces. Do not replace this with a full calendar widget.

WHAT PARENTS SAY:
- Blue quotation symbol and navy panel title; View All at the right.
- Circular parent portrait on the left, exact quote to its right, Mrs. Priya Sharma and Parent of Class VIII Student below the quote.
- Five orange stars near the lower-right. Expose an accessible “5 out of 5” label and hide decorative repeated star shapes from screen readers.
- Keep the original testimonial stable on the homepage. Do not add an autoplay carousel or dots that are absent from the reference.

LATEST NEWS:
- Document/news icon, navy title and View All link.
- Three compact horizontal rows: thumbnail, title and supporting line, then a small right-aligned date.
- Preserve all exact titles, descriptions and 2024 dates in the pack.

FOOTER:
- At the reference size, start near y=912 and use approximately 80 px height on a full-width navy background.
- Keep the horizontal arrangement: school crest/name/tagline; location and email; phone; footer navigation/copyright; leaf slogan at the far right.
- Match the supplied contact text and © 2024 copy exactly. Do not automatically replace the copyright year.
- Include Home, About, Admissions, News & Events, Privacy Policy and Terms as styled navigation/actions. Wire content panels in Prompt 6 where appropriate.
- Treat contact details as reference text. Do not invent operational social-profile URLs or use unverified external destinations. Any unavailable destination can open a concise local information state after a user clicks.

Use a single source of truth for reused school identity and contact data. Keep the footer in document flow. Do not fix it to the viewport bottom or use a page-level fixed height/overflow rule to hide excess content.

The result of this step must be the complete static homepage, with all visible regions and reference copy. Implement now and identify any unresolved image/font substitutions. Do not write tests yet.
~~~

## Prompt 6 — make the visible controls work using local UI state

~~~text
Continue the existing project. Implement the homepage’s interaction states using React and native HTML controls. Keep the default homepage appearance unchanged from the reference: all dialogs and drawers start closed, and no extra preview notice appears across the homepage.

Everything here is a UI demonstration with in-memory sample data. Do not introduce a server, fetch calls for business data, accounts, payment processing, email delivery, location tracking or persistent personal-data storage. Label the opened demonstration states clearly so users understand that submissions and transactions are not real.

Create a reusable styled native <dialog> primitive opened with showModal(), with a visible heading, labelled fields where applicable, close control, Escape handling and sensible initial/return focus. Keep modal background content inert through native modal behaviour. Avoid stacking dialogs; switch the active content within one modal when appropriate. On small screens, use the same modal semantics for the navigation sheet and full-width content panels.

Implement these bounded interactions:

1. Admission: both Apply for Admission and Online Admission open the same form. Include student name, class selection, parent/guardian name, phone and email. Required fields and native browser validation are sufficient. Submit displays a local preview confirmation explicitly saying no application was sent. Preserve state only during the open session; provide a clear reset/close path.

2. Campus visit: Book a Campus Visit opens a simple name/contact/date/available-time UI. Times are fixed sample slots. Validate required selections. The final state says this is a visit preview and no booking was made.

3. Parent Login and Parent Portal: open the same parent-access UI with labelled ID/password fields and a password visibility toggle. A “View demo portal” action shows a compact panel with fictional attendance, notices and a timetable. Do not authenticate the entered credentials, save passwords or build a separate school management application.

4. Fee Payment: show a small sample fee summary and selection interface. A “Preview payment” action opens a clearly labelled local confirmation. Do not request card numbers or initiate transactions.

5. Bus Tracking: show an explicitly labelled sample route with stops, a bus marker and a fixed sample ETA. A simple SVG route is sufficient; no map service, API key, geolocation permission or live-location claim.

6. Search: the header search button opens a search dialog filtering a small in-memory index of the homepage sections, events and news. Include an empty state. Selecting a result closes the dialog and scrolls/focuses the corresponding section, or opens the relevant item detail using the shared modal.

7. Feature actions: academic and extracurricular links open concise information panels derived from the existing copy. The campus tour opens a local image gallery with next/previous controls and descriptive captions. If only one campus photo is available, show that photo and state that it is a campus preview; do not imply a real 360-degree tour.

8. Events/news/testimonial: cards and View All controls open compact list/detail views using the supplied data. Do not invent factual achievements or additional attributed parent quotes to fill space.

9. Other links: About uses supplied school copy. FAQ can answer only what this UI actually shows and describe the demo actions. Career, Alumni, legal and social controls without supplied destinations can display concise availability information. Do not fabricate policies, vacancies or external links.

Finish the mobile navigation disclosure, anchor scrolling and focus handling. All visually interactive controls must have a meaningful local response. Use one small shared modal/action state rather than a collection of unrelated booleans or a large routing/state library.

Keep the browser’s native validation plus small local checks; no form-schema or testing framework is needed. Implement these UI flows now. Animation is the next dedicated implementation step after responsive layout.
~~~

## Prompt 7 — complete responsive behaviour without changing desktop

~~~text
Continue the same project. Make the complete homepage and local dialogs responsive while preserving the measured desktop design at 1586 × 992.

The source gives one desktop state. Derive a practical mobile adaptation with the same identity, content order, colours, visual treatments and actions. Do not scale the desktop screenshot or the entire DOM down with transform: scale().

LAYOUT RULES:
- Keep normal document flow. Use grid/flex, minmax(0, 1fr), min-width:0 and content-aware breakpoints.
- At the reference desktop width retain the section heights, text wraps, insets and compact gaps already defined. At smaller widths allow natural height growth.
- On wider monitors, centre an appropriately capped content canvas near the reference width while extending full-width background colours. Do not arbitrarily constrain the desktop card rows to a generic 1200 px container.
- Replace the full desktop nav with the compact menu before links collide. Keep Parent Login accessible from the menu if it cannot fit in the narrow header.
- Reflow the top announcement; shorten only the visible small-screen announcement presentation if needed, with the full admissions/visit actions still accessible. Move secondary utilities into the menu instead of a tiny scrolling ticker.

Suggested responsive behaviour, to be refined based on actual content:
- Wide desktop: four shortcut columns, three feature columns, three community columns, horizontal footer.
- Tablet: two shortcut columns; feature cards in one or two columns with an intentional final-card span; community panels may stack or use a two-column arrangement. Do not leave awkward empty cells.
- Phone: hero copy first, image below, statistics in a 2×2 grid, shortcuts in one column unless two are demonstrably readable, feature/community panels stacked, footer grouped into readable blocks.
- On phones, move or resize the hero badge within the image frame so it remains legible and does not cover every student’s face. Preserve a simplified cream/teal curve and coloured corner accent.
- At small sizes, reduce the headline with clamp() to around 32–36 px as space requires. Do not shrink body copy to squeeze in the desktop density. Let CTAs stack and use comfortable touch targets.
- Dialogs fit inside the viewport, allow internal scrolling when needed and keep close/submit controls accessible above the software keyboard. A phone nav sheet must be dismissible and return focus to the menu button.

ACCESSIBILITY IN IMPLEMENTATION:
- One h1; coherent headings and landmarks; a keyboard-accessible skip link.
- Visible focus, clear input labels and sensible image alternative text.
- Preserve all meaningful copy and control names under zoom/wrapping.
- Do not use global overflow-x:hidden to conceal layout errors. Clip decorative hero elements within their own container and fix the actual cause of page overflow.
- Keep static content readable without relying on a hover interaction.

Implement the responsive CSS and component adjustments now. Save formal browser-size checks for Prompt 9; fix only immediate implementation blockers in this step.
~~~

## Prompt 8 — add restrained animation and finish the UI

~~~text
Continue the project. Add polished motion using Motion for React and small CSS transitions. The page must settle into the exact existing reference geometry. Preserve all content, component dimensions and photo focal points.

Use only the existing motion package with imports from motion/react. Share motion settings centrally rather than repeating unrelated animations everywhere. For reduced motion, use MotionConfig reducedMotion="user" and useReducedMotion as appropriate, plus a CSS prefers-reduced-motion rule. Explicitly disable any custom counter/scroll/JS-driven movement too; the MotionConfig option alone does not cover every custom effect.

ANIMATION SPECIFICATION — these are design choices, not motion inferred from the still image:

- Hero copy: a short opacity entrance with y=10–12 px to 0, about 350–450 ms. Stagger the eyebrow, headline, paragraph and actions by roughly 50–70 ms. Finish the main entrance within about 900 ms.
- Hero photograph: a subtle one-time reveal, optionally scale 1.015 to 1 over about 550 ms within its clipped frame. The final crop must be the reference crop. No perpetual zoom.
- Admission badge: a small one-time fade/translate entrance, around 350–450 ms, returning exactly to its reference location.
- Statistics: optional one-time count-up to 25+, 2000+, 120+, 100+ within about 800 ms. Reserve the final text width, expose the final value to assistive technology and immediately show final values when motion is reduced. Do not animate the entire layout as the digits change.
- Shortcut cards: one-time fade/translate entrance when visible, then hover lift of only 2–3 px and a small arrow movement. Press feedback can scale to about 0.99. Limit hover-only transforms to devices that support hover.
- Feature cards: small hover image zoom, at most about 1.03, clipped inside each card, with a restrained link-arrow transition. Do not move text blocks around.
- Community panels: short one-time opacity/translate reveal if entering the viewport. Keep the testimonial stable; no autoplay rotation.
- Navigation: subtle underline/colour transitions, about 150–200 ms, retaining the reference Home underline.
- Buttons: restrained colour/shadow/press transitions, about 150–200 ms. Keep their geometry stable.
- Dialogs and navigation sheets: about 180–250 ms opacity plus small translate/scale. Keep native dialog focus and inertness correct during entry/exit. On close, finish any exit animation before closing the native dialog without trapping focus after it is closed.
- Anchor navigation: smooth scrolling where appropriate; use immediate scrolling for reduced-motion users.

Use opacity and transforms for movement. Avoid spring overshoot that changes the reference silhouette, perpetual badge bobbing, bouncing icons, parallax, animated background blobs, cursor effects, confetti, scroll hijacking or additional floating controls.

Add a nonvisual capture option such as ?motion=off. It must disable Motion entrances, CSS transitions, counters and smooth scrolling while rendering all content in its final visible state. This option changes timing only; it must use the same DOM, layout, copy and assets as the ordinary page. It must also work in the production preview, not just the development server.

When reduced motion or capture mode is active, do not leave initial opacity:0 or offscreen transforms on any component. Under ordinary settings, the full homepage should become visible promptly and remain usable while animations run.

Finish implementation housekeeping: remove unused starter code and unused dependencies; keep data/config separate from components; use explicit image sizes and local assets; retain eager loading for visible hero imagery and only defer images that are actually below the current viewport. Do not add complex optimisation machinery.

Update README.md with install/dev/build/preview commands, where to change text and assets, how local demo interactions work, how to disable motion for comparison and which assets/fonts remain approximate. Do not claim completion of visual testing yet. Implement now; Prompt 9 is the final verification step.
~~~

## Prompt 9 — one focused visual and interaction verification pass

Reattach the original screenshot if the coding agent can no longer inspect it from the project.

~~~text
The implementation stages are complete. Perform one focused final verification and correction pass. The primary goal is visual fidelity to reference/sankalp-homepage.png, followed by usable responsive layouts and the local interactions. Keep testing small; do not create a broad unit-test suite, coverage target, CI pipeline or extensive test documentation.

1. BUILD CHECK
Run the production build and existing lint check, if present. Ensure TypeScript is checked by the build; run a separate type check only if the build does not already do it. Fix concrete failures. Use the preview server for the final browser inspection.

2. REFERENCE COMPARISON
Use the existing browser inspection/screenshot tools. If unavailable, use one short Playwright script in Chromium; do not install a second runner or a cross-browser test matrix.

- Set viewport to exactly 1586 × 992 CSS pixels, device scale factor 1 and zoom 100%.
- Open the homepage with motion disabled through the capture option, at scroll position zero and with all dialogs closed. Move the pointer away from hoverable controls.
- Wait for fonts to finish loading and for all visible images to decode. Do not compare partially loaded screenshots.
- Capture the viewport at its original dimensions and compare against the supplied reference without resizing either image. If the page extends beyond the viewport, also inspect the full page to find excess height; do not hide the excess.
- Inspect side by side and, if useful, create a 50%-opacity overlay/difference diagnostic. Judge major region positions, headline line breaks, image composition, curve geometry, card density, lower-row alignment and footer position.
- Use the original reference as the target. A snapshot generated from the implementation itself does not prove that the implementation matches the supplied image. Do not automatically update a baseline to hide a mismatch.

Correct mismatches in this order:
a. Missing/wrong assets and incorrect photograph crop/focal position.
b. Global section heights, horizontal insets and column proportions.
c. Hero curve, headline font/size/wrapping, CTA and badge positioning.
d. Shortcut/feature card dimensions, image fades and icon treatment.
e. Community/footer alignment, colours, borders and fine typography.

Treat pixel differences as a diagnostic, not an arbitrary “99% identical” score. Font rendering and the raster source can introduce small differences; missing original assets can introduce large ones. Record actual remaining limitations without inventing a fidelity percentage.

3. SMALL RESPONSIVE AND INTERACTION CHECK
Use the same browser session/script for a brief check at 768 × 1024 and 390 × 844. Confirm no horizontal page overflow, readable hero/badge, sensible card stacking and reachable menu/dialog controls. Quickly inspect 360 px width if an element is already near its minimum usable width.

Exercise a short representative flow: open admission, trigger required-field validation, enter fictional values, reach the local preview confirmation, close and confirm focus returns. Open/close the mobile menu, use a navigation target, and check search’s empty/result states. Briefly open the remaining demo panels to catch missing handlers or crashes rather than writing a separate elaborate test for each.

Check reduced-motion mode once: all content visible immediately, final stat values shown, no large movement or smooth scrolling. Also view ordinary motion once to ensure entrances settle and interactions stay responsive. Verify the browser console has no uncaught errors or missing local assets and the demo submits no business data to a server.

4. CORRECT AND HAND OFF
Fix observed defects and repeat only the affected check. Do not broaden testing after the stated risks are resolved. If original assets are missing, do not replace the page with screenshot fragments to force a match: finish the actual UI and identify the missing files explicitly.

Save a final desktop screenshot, a mobile screenshot and a concise FINAL_REVIEW.md. If the environment cannot run a browser or screenshots, report that specific limitation and provide the exact local command/workflow the user can run; never claim those checks passed.

Final handoff should include:
- What was implemented and the local preview/build commands.
- The exact checks performed and their results.
- Final screenshots where available.
- Remaining image/font differences and where to replace those assets.
- Confirmation that this is a static frontend with local demo interactions.

Stop after this focused pass. Do not deploy, add backend functionality or redesign the reference.
~~~

## What you should have after Prompt 9

A responsive, animated React homepage reproducing the provided desktop design, with local admission/visit/parent/fee/bus/search/gallery interaction states, a static production build, and a short final visual review. Original photographs and fonts remain the main dependency for the closest possible match.
