# Design system

All tokens live in `src/app/globals.css` under `@theme`, so Tailwind exposes them as utilities
(`bg-navy`, `text-brand`, `border-line`, `text-h2` …).

## Colour

The blue family comes from the supplied design; red is the sharp detail colour.

| Token | Value | Use |
| --- | --- | --- |
| `brand` | `#1C44B0` | Primary: links, buttons, card titles, icons |
| `brand-2` | `#6791FF` | Secondary blue: hero tint, gradients, focus ring |
| `brand-200` | `#A7BFFF` | Soft blue: hover borders, glows, gradient ends |
| `brand-100` | `#D6E1FF` | Rails, faded step numbers |
| `brand-50` | `#EBF0FF` | Tinted surfaces |
| `canvas` | `#F4F7FF` | Page and header background |
| `surface` | `#FFFFFF` | Cards |
| `navy` / `navy-900` | `#0F2668` / `#0A1A4A` | Headings, statistics, footer, dark overlays |
| `ink` / `ink-2` / `muted` | `#121C3D` / `#39466B` / `#5A6687` | Text |
| `line` / `line-strong` | `#E3E9F7` / `#C9D4EE` | Borders |
| `accent` | `#E5383B` | Red details: heading rule, calendar wave, active-menu dot, card arrow on hover |
| `accent-ink` | `#C8232A` | Red text and filled red buttons (AA contrast; `#E5383B` is only 4.2:1 on white) |
| `success` / `warning` | `#12805C` / `#8A5A12` | Status, sample-content notices |

Urgent notices get a red start border, an icon **and** the word "Urgent", so colour is never the
only signal.

## Motion

- **Scroll reveal**: any element with `data-reveal` fades and rises into view once
  (`components/motion/RevealObserver.tsx` + `globals.css`). Stagger with
  `style={{ '--reveal-delay': '90ms' }}`. Content is only hidden when JavaScript runs.
- **Count-up**: homepage statistics count from 0 to their value in about 1.3s when first on
  screen (`components/home/CountUp.tsx`).
- **Hovers**: cards lift 3px with a soft blue shadow; buttons and icons shift a few pixels.
  Durations use `--ease-soft`.
- Everything is disabled for `prefers-reduced-motion`; the hero carousel then starts paused.

## Homepage hero

The first slide is the supplied banner (`public/images/hero-banner.jpg`, slide `banner` in
`src/content/home.ts`). It is marked `artwork: true`: finished artwork with its own text, shown
as-is with no tint, overlaid title or link, and anchored on its text side (`object-[84%_50%]`) so
phones keep the title in view. Its alt text repeats the words in the image. To replace it, swap
the file (about 1800 × 800, text on the right half) and update the alt text.

For the other slides, put the official campus photo at `public/images/hero-campus.jpg`
(landscape, at least 1920px wide) and rebuild: those slides and the admissions banner switch to it
automatically, and the "illustrative image" label disappears.

## Typography

- Persian: **Vazirmatn** (variable), self-hosted from `@fontsource-variable/vazirmatn`.
- English: **Inter** (variable), self-hosted from `@fontsource-variable/inter`.
- The active family switches on `html[lang]`, so components never branch on language.
- Scale: `text-display`, `text-h1`, `text-h2` (fluid with `clamp`), `text-h3`, `text-body`, `text-caption`.
- Persian body line height is 1.85, English 1.7.

## Layout and spacing

- `.container-site`: max width 1360px, 16/24/32px side gutters.
- `.section`: 56px vertical padding, 80px from `lg`.
- Spacing follows Tailwind's 4px scale.
- Radii: `sm` 6px, `md` 10px, `lg` 18px, `xl` 28px (homepage cards), `hero` 44px (hero and banner).
- Shadows: `shadow-card` (resting), `shadow-raised` (hover, menus, dialogs).

## Direction

Layout uses logical properties only (`ms-`, `pe-`, `start-`, `end-`, `border-s`), so one component
serves RTL and LTR. Icons that point "forward" are drawn for LTR and mirrored in RTL with the
`flip-rtl` class. Carousel and lightbox arrow keys swap meaning by direction.

## Components

| Area | Components |
| --- | --- |
| UI primitives | `Button`/`ButtonLink`, `Badge`, `ProvenanceBadge`, `SampleNotice`, `EmptyState`, `Skeleton`, `SectionHeading`, `Dialog`, `Icon` |
| Layout | `Header` (hamburger, emblem, search, `LanguageMenu`), `MenuDrawer` (all navigation; slides in from the reading-start edge, collapsible sections), `SearchOverlay`, `LanguageSwitcher`, `Breadcrumbs`, `Footer`, `BackToTop` |
| Content | `PageHeader`, `NewsCard`, `AnnouncementItem`, `FacultyCard`, `ProgramCard`, `CalendarItem`, `CalendarTimeline` (red wave with hexagon nodes; vertical on small screens), `DocumentRow`, `PersonCard`, `LinkCard`, `ImageFrame`, `Attachments`, `FaqList`, `SideNav`, `UnitPage`, `UnitGrid`, `AboutShell` |
| Listings | `NewsArchive`, `AnnouncementArchive`, `ProgramDirectory`, `DocumentLibrary`, `PeopleDirectory`, `PublicationArchive`, `SearchPageClient`, shared `controls` (search field, selects, chips, pagination, URL state) |
| Home | `Hero` (date notch, artwork and photo slides), `StatsBand` + `CountUp`, `QuickAccess`, `AdmissionsBanner`, `CtaBand` |
| Media | `GalleryGrid` (with lightbox) |
